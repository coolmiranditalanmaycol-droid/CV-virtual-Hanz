
import './ProfileCard.css';


import {
  Code2,
  BrainCircuit,
  MonitorSmartphone
} from 'lucide-react';

import './ProfileCard.css';

const iconos = {
  web: MonitorSmartphone,
  software: Code2,
  ia: BrainCircuit
};

export default function ProfileCard({ area }) {
  // Seleccionamos el icono según el área recibida.
  const Icono = iconos[area.id] || Code2;

  return (
    <article className="profile-card">

      {/* Icono */}
      <div className="profile-card__icono">
        <Icono size={23} />
      </div>

      {/* Información recibida mediante props */}
      <h3>{area.nombre}</h3>
      <p>{area.detalle}</p>

    </article>
  );
}

