import axios from 'axios';

let idAudio = null;
let urlAudio = null;

async function iniciarProcesoTextoAudio(texto) {
    const options = {
        method: 'POST',
        url: 'https://large-text-to-speech.p.rapidapi.com/tts',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '67e2bd0dbamsh4f71a3cbf0ae8f6p120a9ejsn1100bc19e9c2',
            'X-RapidAPI-Host': 'large-text-to-speech.p.rapidapi.com'
        },
        data: {
            text: texto
        }
    };

    try {
        const response = await axios.request(options);
        idAudio = response.data.id;
        console.log('Proceso de texto iniciado. ID del proceso:', idAudio);
    } catch (error) {
        console.error('Error al iniciar el proceso de texto:', error);
        throw error;
    }
}

async function esperarAudioListo() {
    while (true) {
        if (idAudio) {
            const options = {
                method: 'GET',
                url: `https://large-text-to-speech.p.rapidapi.com/tts?id=${idAudio}`,
                headers: {
                    'X-RapidAPI-Key': '67e2bd0dbamsh4f71a3cbf0ae8f6p120a9ejsn1100bc19e9c2',
                    'X-RapidAPI-Host': 'large-text-to-speech.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log('Estado del proceso:', response.data.status);

                if (response.data.status === 'success') {
                    urlAudio = response.data.url;
                    console.log('Audio generado:', urlAudio);
                    break; // Salir del bucle si el audio está listo
                }
            } catch (error) {
                console.error('Error al consultar el estado del proceso:', error);
            }
        }

        // Esperar 3 segundos antes de consultar de nuevo
        await esperar(3000);
    }
}

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function crearAudio(texto) {
    await iniciarProcesoTextoAudio(texto);
    await esperarAudioListo();

    return urlAudio;
}
