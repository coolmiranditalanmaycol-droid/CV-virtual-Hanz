
import { useEffect, useState } from 'react';

import {
  ChevronLeft,
  ChevronRight,
  Images
} from 'lucide-react';

import './GalleryCarousel.css';

export default function GalleryCarousel({ proyecto }) {
  // Guarda la posición de la captura seleccionada.
  const [indice, setIndice] = useState(0);

  // Al cambiar de proyecto, volvemos a la primera captura.
  useEffect(() => {
    setIndice(0);
  }, [proyecto.id]);

  const capturas = proyecto.capturas;

  // Si no tenemos capturas, mostramos un mensaje provisional.
  if (capturas.length === 0) {
    return (
      <div className="galeria-vacia">
        <Images size={42} />

        <strong>
          Capturas de {proyecto.titulo} pendientes
        </strong>

        <p>
          Agrega imágenes en public/imagenes/proyectos
          y sus rutas en proyectos.js.
        </p>
      </div>
    );
  }

  const actual = capturas[indice];

  // Avanza o retrocede en la galería.
  function mover(paso) {
    setIndice((anterior) =>
      (anterior + paso + capturas.length) % capturas.length
    );
  }

  return (
    <div className="carousel-cv">

      {/* Captura principal */}
      <figure className="carousel-cv__principal">
        <img src={actual.src} alt={actual.titulo} />

        <figcaption>
          {actual.titulo} · {indice + 1} / {capturas.length}
        </figcaption>
      </figure>

      {/* Controles del carrusel */}
      <div className="carousel-cv__acciones">
        <button
          type="button"
          className="boton boton--oscuro"
          onClick={() => mover(-1)}
          aria-label="Captura anterior"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          type="button"
          className="boton boton--oscuro"
          onClick={() => mover(1)}
          aria-label="Captura siguiente"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Miniaturas */}
      <div className="carousel-cv__miniaturas">
        {capturas.map((captura, posicion) => (
          <button
            key={captura.src}
            type="button"
            onClick={() => setIndice(posicion)}
            aria-label={`Mostrar ${captura.titulo}`}
            className={
              posicion === indice
                ? 'carousel-cv__miniatura carousel-cv__miniatura--activa'
                : 'carousel-cv__miniatura'
            }
          >
            <img src={captura.src} alt="" />
          </button>
        ))}
      </div>

    </div>
  );
}
