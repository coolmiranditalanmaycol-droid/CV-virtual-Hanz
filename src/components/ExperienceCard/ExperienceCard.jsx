
import { useState } from 'react';

import {
  BriefcaseBusiness,
  MonitorSmartphone,
  Wrench,
  ChevronDown,
  ChevronUp,
  Check
} from 'lucide-react';

import './ExperienceCard.css';

const iconos = {
  empresa: BriefcaseBusiness,
  web: MonitorSmartphone,
  tecnico: Wrench
};

export default function ExperienceCard({ experiencia }) {
  // Guarda si los detalles de esta experiencia están abiertos.
  const [abierta, setAbierta] = useState(false);

  // Selecciona el icono.
  const Icono = iconos[experiencia.tipo] || BriefcaseBusiness;

  // Comprueba si hay actividades registradas.
  const tieneDetalles = experiencia.actividades.length > 0;

  return (
    <article className="experience-card">

      {/* Icono de la experiencia */}
      <div className="experience-card__icono">
        <Icono size={23} />
      </div>

      <div className="experience-card__contenido">

        {/* Información general */}
        <span className="etiqueta">
          {experiencia.categoria}
        </span>

        <h3>{experiencia.titulo}</h3>
        <strong>{experiencia.organizacion}</strong>
        <p>{experiencia.descripcion}</p>

        {/* Botón desplegable */}
        {tieneDetalles && (
          <button
            className="experience-card__alternar"
            onClick={() => setAbierta(!abierta)}
            aria-expanded={abierta}
            type="button"
          >
            {abierta ? 'Ocultar detalles' : 'Ver detalles'}

            {abierta
              ? <ChevronUp size={17} />
              : <ChevronDown size={17} />}
          </button>
        )}

        {/* Actividades de la experiencia */}
        {abierta && tieneDetalles && (
          <ul className="experience-card__lista">
            {experiencia.actividades.map((actividad) => (
              <li key={actividad}>
                <Check size={15} />
                {actividad}
              </li>
            ))}
          </ul>
        )}

      </div>
    </article>
  );
}
