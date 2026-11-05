
import {
  ArrowUpRight,
  Mail,
  MapPin,
  UserRound,
  Code2,
  BrainCircuit,
  Monitor
} from 'lucide-react';

import { perfil } from '../../data/perfil.js';

import './Hero.css';

export default function Hero({ onSelectSection }) {
  
  // La ruta preparada (para descomentar) está en src/data/perfil.js.
  // Si todavía no hay foto, se muestra el avatar provisional.

  // El Hero es la presentación inicial que siempre estará visible.
  // Recibe una función para abrir otras secciones del portafolio.

  return (
    <section className="hero" id="inicio">

      <div className="hero__principal">
        <div className="hero__presentacion">

          {/* Etiqueta superior */}
          <span className="hero__etiqueta">
            <i className="hero__punto" />
            PORTAFOLIO PERSONAL
          </span>

          {/* Información principal */}
          <h1>
            Hola, soy <span>{perfil.nombre.split(' ')[0]}.</span>
          </h1>

          <h2>{perfil.especialidad}</h2>

          <p>{perfil.resumen}</p>

          {/* Botones de navegación */}
          <div className="hero__acciones">
            <button
              type="button"
              className="hero__boton hero__boton--principal"
              onClick={() => onSelectSection('proyectos')}
            >
              Mis proyectos
              <ArrowUpRight size={17} />
            </button>

            <button
              type="button"
              className="hero__boton hero__boton--secundario"
              onClick={() => onSelectSection('contacto')}
            >
              Contacto
              <Mail size={17} />
            </button>
          </div>
        </div>

        {/* Fotografía o avatar provisional */}
        <div className="hero__foto">
          {perfil.foto ? (
            <img
              src={perfil.foto}
              alt={`Fotografía de ${perfil.nombre}`}
              className="hero__imagen"
            />
          ) : (
            <div className="hero__avatar">
              <UserRound size={70} strokeWidth={1.2} />
              <small className="hero__foto-ayuda">Aquí pon tu foto de perfil</small>
            </div>
          )}

          <strong>{perfil.nombre}</strong>

          <span>
            <MapPin size={14} />
            {perfil.ubicacion}
          </span>
        </div>
      </div>

      {/* Tarjetas de especialidades */}
      <div className="hero__areas">
        <div className="hero__area">
          <Code2 size={22} />
          <div>
            <strong>Desarrollo web</strong>
            <small>React y JavaScript</small>
          </div>
        </div>

        <div className="hero__area">
          <BrainCircuit size={22} />
          <div>
            <strong>Inteligencia artificial</strong>
            <small>Procesamiento de información</small>
          </div>
        </div>

        <div className="hero__area">
          <Monitor size={22} />
          <div>
            <strong>Software</strong>
            <small>Soluciones tecnológicas</small>
          </div>
        </div>
      </div>

    </section>
  );
}
