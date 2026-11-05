
import { BriefcaseBusiness } from 'lucide-react';

import { experiencias } from '../../data/experiencia.js';

import ExperienceCard from '../../components/ExperienceCard/ExperienceCard.jsx';

import './Experiencia.css';

export default function Experiencia() {
  // Recorremos las experiencias para generar las tarjetas.
  return (
    <div className="seccion experiencia">

      {/* Encabezado */}
      <div className="seccion__cabecera">
        <BriefcaseBusiness />

        <div>
          <h2 className="seccion__titulo">
            Experiencia y trayectoria
          </h2>

          <p className="seccion__intro">
            Formación práctica, desarrollo web y servicio técnico.
          </p>
        </div>
      </div>

      {/* Tarjetas de experiencia */}
      <div className="experiencia__lista">
        {experiencias.map((experiencia) => (
          <ExperienceCard
            key={experiencia.id}
            experiencia={experiencia}
          />
        ))}
      </div>

    </div>
  );
}
