import "./Content.css";
import fotomono1 from "../img/haciendo-el-mono1-foto-pablete.jpg";
import fotomono2 from "../img/haciendo-el-mono2-foto-pablete.jpg";
import Newsletter from "./Newsletter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Content = () => {
  return (
    <div className="content">
      <p>Te voy a contar mi historia.</p>
      <p>
        Porque puede que sea la primera vez que lees o que sabes algo sobre mí.
      </p>
      <p>
        Y ahora es cuando dices:{" "}
        <i>
          "bueno ya está el típico entrenador personal o preparador físico de
          turno contándome lo mismo que me cuentan todos".
        </i>
      </p>
      <p style={{marginLeft: "8rem"}}>"Que cómo voy a bajar de peso."</p>
      <p style={{marginLeft: "14rem"}}>"Que cómo voy a ser Usain BOLT en las próximas olimpiadas."</p>
      <p style={{marginLeft: "18rem"}}>
        "Que cómo voy a comer mejor, a adquirir hábitos saludables y a moverme
        mejor."
      </p>
      <br />
      <p>
        <strong>Espera.</strong>
      </p>
      <br />
      <p>
        <strong>Espera.</strong>
      </p>
      <br />
      <p>
        <strong>Wait.</strong>
      </p>
      <br />
      <p>¿Qué ha sido lo último que has dicho?</p>
      <p>
        Eso de <strong>comer mejor</strong>, adquirir{" "}
        <strong>buena salud</strong> gracias a <strong>tus hábitos</strong>, a{" "}
        <strong>moverte mejor</strong> mejorando la fisiología de tu cuerpo
        teniendo una <strong>conexión</strong> increíble{" "}
        <strong>cuerpo - mente</strong>.
      </p>
      <br />
      <p>Ah vale que te interesa esto último.</p>
      <p>Pues te desarrollo este último punto.</p>
      <div className="box-newsletter">
        <p>
          Si dejas <strong>tu correo</strong> aquí, <strong>te REGALO</strong> un{" "}
          <strong>MINICURSO DE HÁBITOS</strong> para que{" "}
          <strong>EMPIECES DESDE YA</strong> a implementarlos en tu vida.
        </p>
        <Newsletter />
      </div>
      <h2>Y ahora la historia.</h2>
      <br />
      <p>
        Mi nombre es Pablo Bascuñán soy técnico superior en actividades físicas,
        preparador físico y entrenador personal.
      </p>
      <p>
        Pero no soy el entrenador al uso como se ve hoy en día en redes
        sociales.
      </p>
      <p>
        Soy un entrenador diferente y no es puro hablar, porque doy mucha
        importancia al movimiento, a la conexión cuerpo - mente. Además pienso
        que <strong>todo lo que realizamos en la vida es entrenamiento</strong>.
      </p>
      <br />
      <p>Sí, sí, TODO</p>
      <p>
        Desde sentarte en una silla, hasta la posición que tenemos mientras
        estamos tumbados viendo la tele.
      </p>
      <br />
      <p>
        <strong>Todo es entrenamiento.</strong>
      </p>
      <p>Y por eso, me gusta entrenar, para la VIDA.</p>
      <div className="box-fotos">
        <img className="imagen-mono-pablete" src={fotomono1} alt="haciendo-el-mono-foto-pablete" />
        <img className="imagen-mono-pablete" src={fotomono2} alt="haciendo-el-mono-foto-pablete" />
      </div>
      <p>
        Y es lo que quiero que entiendas, que tengo una perspectiva peculiar
        sobre el entrenamiento. Me gusta hacer el mono y todo esto lo he ido
        descubriendo gracias al ensayo y error de los tropiezos y obstáculos que
        la vida me ha puesto por delante.
      </p>
      <br />
      <p>
        Recuerdo cuando era niño que nunca tenía claro lo que quería ser de
        mayor hasta que me topé con el deporte, empecé como empieza todo el
        mundo: ir a un gimnasio a sentarte en una maquina a tirar peso y poder
        decir: <i>"joder que fuerte estoy, que brazos estoy sacando"</i>.
      </p>
      <p>
        Pero no era mi caso, siempre he sido delgado y me ha costado horrores
        coger peso, y cuando parecía que lo cogía llegaba alguien que te decía…
        <i>“parece que estás más delgado”</i> (y sé que no hay que tomarselo a
        lo personal, pero joder eso me frutraba porque apreciaba que la gente no
        veía mis avances)
      </p>
      <p>
        Así que me puse a estudiar un grado superior relacionado con el deporte.
        Y fue lo mejor que pude hacer; despúes seguí formándome (y lo sigo
        haciendo) de manera autodidacta como entrenador personal y preparador
        físico.
      </p>
      <p>
        Y uno de los hitos más importantes fue cuando descubrí la calistenia y
        el ejercicio funcional bodyweight (con tu propio peso corporal)
      </p>
      <br />
      <p>
        <i>
          "Joder esto es lo que tanto he estado buscando, poder potenciar en
          cada entrenamiento todas y cada una de las partes del cuerpo mejorando
          la flexibilidad, movilidad, fuerza, resistenica y potencia."
        </i>
      </p>
      <p>Y eso es a lo que me dedico actualmente.</p>
      <br />
      <p>
        <strong>Te ayudo a moverte mejor y a entrenar para la vida</strong>.
      </p>
      <br />
      <p>
        Y sigo formándome para poder ayudarte a conseguir tus objetivos en el
        entrenamiento bodyweight, calistenia y ejercicios funcionales, ya que
        estoy en un aprendizaje continuo, aprendiendo de los mejores.
      </p>
      <p>Y hasta aquí mi historia.</p>
      <h2>Si te apetece que sigamos charlando...</h2>
      <p>
        Por aquí abajo te dejo una cajita para que veas todos mis MOVIMIENTOS.
      </p>
      <br />
      <p>"MOVEMENT IS LIFE"</p>
      <br />
      <Newsletter />
      <p>
        Si quieres conseguir un <strong>minicurso de hábitos</strong> para poder
        implementar el deporte o cualquier hábito saludable en tu vida, así como
        eliminar cualquier otro que no te haga bien, deja{" "}
        <strong>tu correo</strong> por aquí.
      </p>
      <br />
      <div className="logos-rrss">
        <FontAwesomeIcon icon={faYoutube} className="logo-rrss"/>
        <FontAwesomeIcon icon={faInstagram} className="logo-rrss"/>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Content;
