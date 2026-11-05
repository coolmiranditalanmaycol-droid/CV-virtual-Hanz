
import { Download } from 'lucide-react';
import { perfil } from '../../data/perfil.js';

import './DownloadCV.css';

export default function DownloadCV() {
  // Si todavía no tenemos el archivo PDF, desactivamos el botón.
  if (!perfil.pdf) {
    return (
      <button
        className="descargar-cv"
        disabled
        title="Agrega el PDF en public/cv y configura perfil.pdf"
      >
        <Download size={15} />
        CV pendiente
      </button>
    );
  }


  return (
    <a className="descargar-cv" href={perfil.pdf} download>
      <Download size={15} />
      Descargar CV
    </a>
  );
}
