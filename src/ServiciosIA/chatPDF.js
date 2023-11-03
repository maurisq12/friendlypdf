import axios from 'axios';

const key = "sec_Tf9NpV0WfsJG5Uk0KLEV2BKyYH5vqPyj"

let IDPDF = "";


export async function añadirPDF(documento) {
  const options = {
    headers: {
      "x-api-key": key,
    },
  };

  try {
    const response = await axios.post("https://api.chatpdf.com/v1/sources/add-file", documento, options);
    console.log("Source ID:", response.data.sourceId);
    IDPDF = response.data.sourceId;
    return true;
  } catch (error) {
    console.error("Error al subir el archivo:", error);
    return false;
  }
}

export function consultar(prompt) {
  const config = {
    headers: {
      "x-api-key": key,
      "Content-Type": "application/json",
    },
  };

  const data = {
    sourceId: IDPDF,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  };

  axios
    .post("https://api.chatpdf.com/v1/chats/message", data, config)
    .then((response) => {
      console.log("Result:", response.data.content);
      
    })
    .catch((error) => {
      console.error("Error:", error.message);
      console.log("Response:", error.response.data);
    });
}

export function quitarPDF(){
  const config = {
    headers: {
      "x-api-key": key,
      "Content-Type": "application/json",
    },
  };

  const data = {
    sources: [IDPDF],
  };

  axios
    .post("https://api.chatpdf.com/v1/sources/delete", data, config)
    .then((response) => {
      console.log("Success");
      return true;
    })
    .catch((error) => {
      console.error("Error:", error.message);
      console.log("Response:", error.response.data);
      return false;
    });
}