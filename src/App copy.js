import React, { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import ChatBot from "./Componentes/msj";

import './ejemplo.css'




function ChatBotApp() {


  useEffect(() => {

    // Find the element with the class "sc-fqkvVR"
    const element = document.querySelector(".sc-fqkvVR");
    
    if (element) {
    const successSpan = element.querySelector("span");
    
    const innerSpans = element.querySelectorAll("span");
    console.log("getElementsByClassName",successSpan?.textContent , element);
    
    if (successSpan && successSpan.textContent.includes("Successfully")) {
      console.log("The word 'Successfully' is present.");
    
      // Update the text content of the found span
      successSpan.textContent = "please !"; // Replace with your desired text
    } else {
      console.log("The word 'Successfully' is not present.");
    }
    if (element && element.textContent.includes("another")) {
      console.log("The word 'another' is present.");
    
      // Update the text content of the found span
      element.textContent = " Añadido con éxito!"; // Replace with your desired text
    } else {
      console.log("The word 'Another' is not present.");
    }
    }
    }, []);



  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  const handleUserMessage = () => {
    if (input) {
      setMessages([...messages, { text: input, type: "user" }]);
      // Aquí llamarías a tu función de procesamiento y obtendrías la respuesta
      const response = "Respuesta del chatbot";
      setMessages([...messages, { text: response, type: "bot" }]);
      setInput("");
    }
  };

  return (

    <div className="chatbot-app">
      <h1>Hello To Drag & Drop Files</h1>
      <div className="chatbot-container">
        <FileUploader
          multiple={false}
          handleChange={handleChange}
          name="file"
          types={["PDF"]}
          label="Seleccione o arrastre su archivo aquí"
          hoverTitle="Suelta aquí"
          fileOrFiles={null}
        />
        <p>{file ? `Documento: ${file.name}` : "Aún no se ha seleccionado un archivo"}</p>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <ChatBot key={index} message={message} />
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Escribe tu mensaje..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleUserMessage}>Enviar</button>
        </div>
      </div>
    </div>
  );
}

export default ChatBotApp;