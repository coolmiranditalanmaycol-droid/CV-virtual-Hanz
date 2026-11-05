
import {
  ArrowUpRight,
  Images,
  Github,
  LayoutDashboard
} from 'lucide-react';

import './ProjectCard.css';

export default function ProjectCard({ proyecto, onOpenGallery }) {
  // Recibimos los datos del proyecto mediante props.
  // Los enlaces aparecen solamente si están configurados.

  return (
    <article className="project-card">

      {/* Imagen del proyecto o icono provisional */}
      <div className="project-card__imagen">
        {proyecto.imagen ? (
          <img
            src={proyecto.imagen}
            alt={`Vista de ${proyecto.titulo}`}
          />
        ) : (
          <LayoutDashboard size={52} />
        )}
      </div>

      {/* Información principal */}
      <span className="etiqueta">{proyecto.tipo}</span>
      <h3>{proyecto.titulo}</h3>
      <p>{proyecto.descripcion}</p>

      {/* Tecnologías utilizadas */}
      <div className="project-card__tecnologias">
        {proyecto.tecnologias.map((tecnologia) => (
          <span className="etiqueta" key={tecnologia}>
            {tecnologia}
          </span>
        ))}
      </div>

      {/* Botones de interacción */}
      <div className="project-card__acciones">

        <button
          className="boton"
          type="button"
          onClick={() => onOpenGallery(proyecto.id)}
        >
          <Images size={16} />
          Galería
        </button>

        {proyecto.repositorio && (
          <a
            className="boton boton--oscuro"
            href={proyecto.repositorio}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} />
            Código
          </a>
        )}

        {proyecto.demo && (
          <a
            className="boton boton--oscuro"
            href={proyecto.demo}
            target="_blank"
            rel="noreferrer"
          >
            <ArrowUpRight size={16} />
            Demo
          </a>
        )}

      </div>
    </article>
  );
}
