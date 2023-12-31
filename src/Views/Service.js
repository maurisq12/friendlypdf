import React, { useState, useEffect } from "react";
import FormData from "form-data";
import { FileUploader } from "react-drag-drop-files";
import ChatBot from "../Componentes/msj";
import Header from "../Componentes/header";
import { ingresarPDF, procesarPrompt } from '../ServiciosIA/integración'

import './Service.css'

function ChatBotApp() {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleUserMessage(input);
    }
  };

  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Procesando consulta...");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    const element = document.querySelector(".sc-fqkvVR");
    if (element) {
      if (element && element.textContent.includes("another")) {
        element.textContent = "Archivo seleccionado";
      }

      const welcomeMessage =
        "Gracias por usar el servicio FriendlyPDF. Arriba se muestra el PDF que seleccionaste. ¿En qué puedo ayudarte?";
      setMessages([{ text: welcomeMessage, type: "bot" }]);
    }
  }, [file]);

  const handleChange = (file) => {
    setFile(file);
  };

  async function selectPDF() {
    if (file === null) {
      document.getElementById('resultSelectNull').style.display = 'contents';
      return;
    } else {
      try {
        const formData = new FormData();
        formData.append("file", file);
        await ingresarPDF(formData);
        document.getElementById('resultSelectNull').style.display = 'none';
        document.getElementById('resultSelectSuccess').style.display = 'contents';
        document.getElementById('reload').style.display = 'contents';
        document.getElementById('divFileSelect').style.display = 'none';
        document.getElementById('chatPDF').style.display = 'block';
        document.getElementById('selecciona').style.display = 'none';
        document.getElementById('title').style.display = 'none';
        alert("De momento sólo se aceptan consultas a documentos en INGLÉS");

      } catch (error) {
        console.error('Error en procesarPrompt:', error);
        document.getElementById('resultSelectFail').style.display = 'contents';
      }
    }
  }

  async function handleUserMessage(userMessage) {
    // Guardar el mensaje del usuario
    console.log(userMessage)
    let newUserMessage = { text: userMessage, type: "user" };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);

    if (userMessage.trim() !== "") {
      setLoading(true);
      try {
        // Procesar la consulta del usuario y obtener la respuesta del bot
        const response = await procesarPrompt(userMessage);

        // Guardar la respuesta del bot
        setMessages((prevMessages) => [...prevMessages, response]);
      } catch (error) {
        console.error('Error en procesarPrompt:', error);
      } finally {
        setLoading(false);
      }
    }

    setInput("");
  }

  return (
    <div>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <h1 id='title' className="pageTitle">Bienvenido a Friendly PDF AI</h1>
        <p id="selecciona" style={{ marginTop: '1px' }}>
          Realiza consultas a tus archivos PDF, recibe respuestas en texto, audio e imagen.
        </p>
        <div style={{ display: 'inline-block' }}>
          <div>
            <a id="reload" href="javascript:location.reload();" style={{ color: 'red', display: 'none' }} >&laquo; Volver</a>
          </div>
          <p id="resultSelectSuccess" style={{ color: 'green', display: 'none' }}>
            ¡Archivo agregado con éxito! Ahora puedes hacer consultas a documentos EN INGLÉS
          </p>
          <p id="resultSelectFail" style={{ color: 'red', display: 'none' }}>
            Error, inténtalo de nuevo o prueba con otro documento
          </p>
          <p id="resultSelectNull" style={{ color: 'red', display: 'none' }}>
            Debe seleccionar un documento para continuar
          </p>
          <div id='divFileSelect' className="file-upload">
            <FileUploader
              multiple={false}
              handleChange={handleChange}
              name="file"
              types={["PDF"]}
              label="Seleccione o arrastre su archivo aquí"
              hoverTitle="Suelta aquí"
              fileOrFiles={null}
            />
            <p style={{ paddingLeft: '100px', paddingRight: '100px' }}>
              {file ? `Documento: ${file.name}` : "Aún no se ha seleccionado un archivo"}
            </p>
            <button id="btnContinuar" onClick={selectPDF} className="button-select-file">
              Confirmar
            </button>
          </div>
        </div>
        <div id='chatPDF' className="chatbot-container">
          <div className="chatHeader">
            <p>{file ? `Documento: ${file.name}` : "Aún no se ha seleccionado un archivo"}</p>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <ChatBot key={index} message={message} />
            ))}
          </div>
          <div className="loading-message" style={{ display: loading ? "block" : "none" }}>
            {loadingMessage}
          </div>
          <hr size="1px" color="lightgrey" style={{ marginTop: "0px" }} />
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Escribe tu consulta..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className=".button-select-file" onClick={() => handleUserMessage(input)}>Enviar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBotApp;
