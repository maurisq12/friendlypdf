import { añadirPDF, consultar, quitarPDF } from '../ServiciosIA/chatPDF';
import {crearImagen,checkStatus} from  '../ServiciosIA/crearImagen';
import {textoAudio, getAudio} from '../ServiciosIA/t2s'

let respuestaChatPDF="";
let respuestaT2V="";
let respuestaImg="";


export function ingresarPDF(doc){
    añadirPDF(doc)
}


export async function procesarPrompt(prompt) {
    try {
      // Llamar a la función 'consultar' y esperar a que se complete
      respuestaChatPDF = await consultar(prompt);
  
      // Llamar a la función 'textoAudio' y esperar a que se complete
      respuestaT2V = await textoAudio(respuestaChatPDF);
  
      // Llamar a la función 'crearImagen' y esperar a que se complete
      respuestaImg = await crearImagen(respuestaChatPDF);
  
      let armarJson = {
        respText: respuestaChatPDF,
        respAudio: respuestaT2V,
        respImg: respuestaImg,
      };
  
      const respuesta = JSON.stringify(armarJson);
  
      return respuesta;
    } catch (error) {
      // Manejar errores aquí, por ejemplo, puedes registrar el error o lanzar una excepción.
      console.error('Error en procesarPrompt:', error);
      throw error;
    }
  }
  