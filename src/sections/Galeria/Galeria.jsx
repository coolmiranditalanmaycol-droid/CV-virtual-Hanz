
import { useEffect, useState } from 'react';
import { Images } from 'lucide-react';

import { proyectos } from '../../data/proyectos.js';

import GalleryCarousel from '../../components/GalleryCarousel/GalleryCarousel.jsx';

import './Galeria.css';

export default function Galeria({ proyectoInicial }) {
  // Guarda el proyecto seleccionado en la galería.
  const [seleccionado, setSeleccionado] = useState(proyectoInicial);

  // Actualizamos la selección al abrir desde una tarjeta.
  useEffect(() => {
    setSeleccionado(proyectoInicial);
  }, [proyectoInicial]);

  // Buscamos los datos del proyecto seleccionado.
  const proyecto =
    proyectos.find((p) => p.id === seleccionado) || proyectos[0];

  return (
    <div className="seccion galeria">

      {/* Encabezado */}
      <div className="seccion__cabecera">
        <Images />

        <div>
          <h2 className="seccion__titulo">
            Galería de proyectos
          </h2>

          <p className="seccion__intro">
            Capturas y descripción técnica de cada proyecto.
          </p>
        </div>
      </div>

      {/* Selector de proyectos */}
      <div className="galeria__selector">
        {proyectos.map((p) => (
          <button
            type="button"
            key={p.id}
            className={
              p.id === seleccionado
                ? 'boton'
                : 'boton boton--oscuro'
            }
            onClick={() => setSeleccionado(p.id)}
          >
            {p.titulo}
          </button>
        ))}
      </div>

      {/* Carrusel de capturas */}
      <GalleryCarousel proyecto={proyecto} />

      {/* Descripción técnica */}
      <div className="panel">
        <h3>{proyecto.titulo}</h3>

        <p className="texto-secundario">
          {proyecto.descripcion}
        </p>

        <div className="galeria__tecnologias">
          {proyecto.tecnologias.map((tecnologia) => (
            <span key={tecnologia} className="etiqueta">
              {tecnologia}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
