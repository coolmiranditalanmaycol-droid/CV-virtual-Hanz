
import { FolderOpen } from 'lucide-react';

import { proyectos } from '../../data/proyectos.js';

import ProjectCard from '../../components/ProjectCard/ProjectCard.jsx';

import './Proyectos.css';

export default function Proyectos({ onOpenGallery }) {
  // Cada proyecto se convierte en una tarjeta.
  return (
    <div className="seccion proyectos">

      {/* Encabezado */}
      <div className="seccion__cabecera">
        <FolderOpen />

        <div>
          <h2 className="seccion__titulo">Mis proyectos</h2>

          <p className="seccion__intro">
            Trabajos reales que he desarrollado.
            Agregaré más después.
          </p>
        </div>
      </div>

      {/* Tarjetas de proyectos */}
      <div className="rejilla rejilla--dos">
        {proyectos.map((proyecto) => (
          <ProjectCard
            key={proyecto.id}
            proyecto={proyecto}
            onOpenGallery={onOpenGallery}
          />
        ))}
      </div>

    </div>
  );
}
