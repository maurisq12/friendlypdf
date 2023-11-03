import axios from 'axios';

const urlCrear = 'https://api.neural.love/v1/ai-art/generate';
const urlStatus = 'https://api.neural.love/v1/ai-art/orders/';
const token = "v1.2b362f9dff4f83bb43aadce1a8781a5ed920ad622e7cef8d6e577085543a2304";


export async function crearImagen(texto) {
    const data = {
      prompt: texto,
      style: 'painting',
      layout: 'square',
      amount: 1,
      isHd: false,
      isPublic: true,
    };
  
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Accept": 'application.json',
        "Content-Type": 'application/json',
      },
    };
  
    // Realizar la solicitud inicial para crear la imagen
    let idImagen = "";
  
    try {
      const response = await axios.post(urlCrear, data, config);
      idImagen = response.data.orderId;
    } catch (error) {
      console.error('Error al crear la imagen:', error);
      return null;
    }
  
    // Iniciar la verificación del estado
    return checkStatus(idImagen);
  }
  
  export async function checkStatus(idImagen) {

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Accept": 'application/json',
        },
    };


    try {
      const response = await axios.get(urlStatus + idImagen, config);
      const isReady = response.data.status.isReady;
  
      if (isReady) {
        // La orden está lista, retornar la URL de la imagen
        console.log('La imagen está lista:', response.data.output[0].full);
        return response.data.output[0].full;
      } else {
        // La orden aún no está lista, programar una nueva verificación después de 3 segundos
        console.log('La imagen aún no está lista, esperando...');
        return new Promise((resolve) => {
          setTimeout(() => resolve(checkStatus(idImagen, config, urlStatus)), 3000); // Esperar 3 segundos y volver a verificar
        });
      }
    } catch (error) {
      console.error('Error al consultar el estado de la orden:', error);
      return null;
    }
  }
  






