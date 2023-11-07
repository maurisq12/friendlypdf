/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Home.css";
// import bullet from "./Img/bullet.svg";
//import close from "../Media/user.png";
// import dots from "./Img/dots.svg";
import features from "../Media/features.jpg";
import illustration from "../Media/logoNBG.png";
import auditivo from "../Media/auditivo.png";
import visual from "../Media/visual.png";
import kines from "../Media/kines.png";
import video from "../Media/video.png";
import cpdf from "../Media/chatPDF.png";
import t2s from "../Media/t2s.png";
import nl from "../Media/nl.png";
import Header from "../Componentes/header";
import { Link } from "react-router-dom";

function App() {
  return (

    <div className="App">
      <Header />

      {/* <!--SECTION HERO BLOG START--> */}
      <section class="hero">
        <div class="container">
          <div class="left-col">
            <p class="sub-head">Bienvenido a</p>
            <h1>FriendlyPDF</h1>

            <div class="hero-cta">
              <Link to="/service" class="primery-cta">
                Probar Servicio
              </Link>
              <a href="#" class="watch-video-cta">
                <img src={video} alt="Video Clip" />
                Video demostrativo
              </a>
            </div>
          </div>

          <img src={illustration} alt="Illustration" class="hero-img" />
        </div>
      </section>
      {/* <!--SECTION HERO BLOG END--> */}

      {/* <!--SECTION FEATURES BLOG START--> */}
      <section class="features-section" style={{ textAlign: 'initial'}}>
        <div class="container">
          <h1>Puedes: </h1>
          <ul>
            <li>-Subir tu documento</li>
            <li>-Realizar consultas</li>
            <li>-Obtener resultado textual</li>
            <li>-Obtener resultado por audio</li>
            <li>-Obtener una imagen del resultado</li>
            <li>-Descargar la imagen resultado</li>
          </ul>
        </div>
        <img src={features} alt="features" />
      </section>
      {/* <!--SECTION FEATURES BLOG END--> */}

      {/* <!--SECTION TEST  BLOG START--> */}
      <section class="test-monials-section">
        <div class="container">
          <ul>
            {/* <!--PERSON 1--> */}
            <li>
              <img src={auditivo} alt="Person 1" />
              <p><strong>Aprendizaje auditivo: </strong></p>
              <blockquote>
                Al esuchar la información resultante de tu texto, podes recordar con mayor facilidad la información.
                Reproducí cuantas veces querás.
              </blockquote>
            </li>

            {/* <!--PERSON 2--> */}
            <li>
              <img src={visual} alt="Person 2" />
              <p><strong>Aprendizaje visual: </strong></p>
              <blockquote>
                Obtené una imágen por cada respuesta, esto te puede ayudar a recordar la información.
                Imagen generada por inteligencia artificial.
              </blockquote>
            </li>

            {/* <!--PERSON 3--> */}
            <li>
              <img src={kines} alt="Person 3" />
              <p><strong>Aprendizaje kinestésico: </strong></p>
              <blockquote>
              Explorá haciendo distintas preguntas, viendo los resultados y aprendiendo de las imágenes.
              Cada consulta genera una imagen diferente, podés experimentar con ellas.

              </blockquote>
            </li>
          </ul>
        </div>
      </section>

      <section class="test-ia-section">
        <div class="container">
          <ul>
            {/* <!--PERSON 1--> */}
            <li>
              <img src={cpdf} alt="Person 1" />
              <p><strong>ChatPDF: </strong></p>
              <blockquote>
                Se utiliza esta poderosa herramienta para realizar consultas al PDF que es ingresado, obteniendo su respuesta como texto.
              </blockquote>
            </li>

            {/* <!--PERSON 2--> */}
            <li>
              <img src={t2s} alt="Person 2" />
              <p><strong>text-to-speech: </strong></p>
              <blockquote>
                Permite la conversión de texto obtenido en audio semejando una voz humana.
              </blockquote>
            </li>

            {/* <!--PERSON 3--> */}
            <li>
              <img src={nl} alt="Person 3" />
              <p><strong>Generador de Neural.love: </strong></p>
              <blockquote>
              Permite la creación de imagenes creadas por inteligencia artificial dado un texto, con diferentes configuraciones según las necesidades.
              </blockquote>
            </li>
          </ul>
        </div>
      </section>
      {/* <!--SECTION TEST  BLOG END--> */}

    </div>
  );
}

export default App;