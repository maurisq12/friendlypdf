import { añadirPDF, consultar} from '../ServiciosIA/chatPDF';
import {crearImagen} from  '../ServiciosIA/crearImagen';
import {crearAudio} from '../ServiciosIA/t2s'

let respuestaChatPDF="";
let respuestaT2V="";
let respuestaImg="";


export async  function ingresarPDF(doc){
  try{
    añadirPDF(doc);
  } catch (error) {
    // Manejar errores aquí, por ejemplo, puedes registrar el error o lanzar una excepción.
    console.error('Error al ingresar el pdf al API:', error);
    throw error;
  }
    
}

export async function pruebaAudio(){
  try {
    // Llamar a la función 'textoAudio' y esperar a que se complete
    respuestaT2V = await crearAudio("why is it not working rn?");
    console.log("El ulr del audio es: ",respuestaT2V);

  } catch (error) {
    // Manejar errores aquí, por ejemplo, puedes registrar el error o lanzar una excepción.
    console.error('Error en procesarPrompt:', error);
    throw error;
  }

}


export async function procesarPrompt(prompt) {
    try {
      // Llamar a la función 'consultar' y esperar a que se complete
      respuestaChatPDF = await consultar(prompt);
  
      // Llamar a la función 'textoAudio' y esperar a que se complete
      respuestaT2V = await crearAudio(respuestaChatPDF);
  
      // Llamar a la función 'crearImagen' y esperar a que se complete
      respuestaImg = await crearImagen(respuestaChatPDF);
  
      let respuesta = {
        text: respuestaChatPDF,
        audioSrc: respuestaT2V,
        imgSrc: respuestaImg,
        type: "bot"
      };
  
      return respuesta;
    } catch (error) {
      // Manejar errores aquí, por ejemplo, puedes registrar el error o lanzar una excepción.
      console.error('Error en procesarPrompt:', error);
      throw error;
    }
  }
  