
import { FileText } from 'lucide-react';

import { perfil } from '../../data/perfil.js';
import DownloadCV from '../DownloadCV/DownloadCV.jsx';

import './Navbar.css';

export default function Navbar() {
  // Mostramos el nombre desde nuestro archivo de datos.
  return (
    <header className="navbar">
      <div className="contenedor navbar__contenido">

        {/* Logo y nombre */}
        <a
          className="navbar__identidad"
          href="#inicio"
          aria-label="Volver al inicio"
        >
          <span className="navbar__logo">HV.</span>

          <span className="navbar__texto">
            <strong>{perfil.nombre}</strong>
            <small>CV Virtual · React</small>
          </span>
        </a>

        {/* Herramientas del encabezado */}
        <div className="navbar__acciones">
          <span className="navbar__etiqueta">
            <FileText size={15} />
            Portafolio profesional
          </span>

          <DownloadCV />
        </div>

      </div>
    </header>
  );
}
