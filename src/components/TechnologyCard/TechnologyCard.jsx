
import { Code2 } from 'lucide-react';

import './TechnologyCard.css';

export default function TechnologyCard({ tecnologia }) {
  // Recibimos el lenguaje y su nivel desde tecnologias.js.
  return (
    <article className="technology-card">

      {/* Icono */}
      <div className="technology-card__icono">
        <Code2 size={24} />
      </div>

      {/* Nombre y área */}
      <h3>{tecnologia.nombre}</h3>
      <p>{tecnologia.area}</p>

      {/* Nivel actual de conocimiento */}
      <span className="technology-card__nivel">
        Nivel: {tecnologia.nivel}
      </span>

    </article>
  );
}
