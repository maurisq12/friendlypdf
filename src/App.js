import React from 'react';
import logo from './Media/logo.png';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          id="arch"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          nada jaja
        </a>
        <form id="miFormulario">
          <input type="file" id="archivoInput" name="archivo" accept="application/pdf" />
          <button type="button">Subir Archivo</button>
        </form>

        <audio controls id="reproductorAudio">
          <source src="https://s3.eu-central-1.amazonaws.com/tts-download/bb4d13c5eb0f394d4e7af3855995a987.wav?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAZ3CYNLHHVKA7D7Z4%2F20231103%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20231103T233452Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=33a33243c09e271b9cee25599aab4a2bbe48cc6f5d614e6afe8b923e1c90b70e" type="audio/wav"/>
            Tu navegador no admite la reproducción de audio.
        </audio>
        <img src="https://neural.love/cdn/ai-photostock/1ee7a79e-a007-6174-bd84-d7d78f7dc42a/0.jpg?Expires=1704067199&Signature=e7rZtJiRE00fq-Ga9FiNQHc0VGZOrY9iUOoCHy2AUuY~lhRqsAnkEYjfCZsPTMEJiRxXv-KyiVtmPbhNx112JOLRVCrDWFNHdFC2KZAa5YUP5FAT8lTHfzeSyBaSs9nAxl-LqJkSxx13r85WFsDFVAsVqXcYd-7EEBCEIEWnafW~Oo4s1c9HVpXvpbK0Qe0M3Aw1~UipsjdP947HuSl68RabpVAVYW84EI8kVJt4UAAnpX38PwCQoyvPwXW~lJWJY0mGjA6-l~GLNH5O1kHfabMA0wmRxOUm2AplrwV0iFq0Cuv3SC-jx1TtOva0Hfcrb1FwEtmwnrflsHHegPhdiA__&Key-Pair-Id=K2RFTOXRBNSROX" alt="Descripción de la imagen"></img>
      </header>
    </div>
  );
}

export default App;
