
import {
  MapPin,
  GraduationCap,
  UserRound
} from 'lucide-react';

import { perfil } from '../../data/perfil.js';

import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx';

import './Perfil.css';

export default function Perfil() {
  // Mostramos la información profesional y las áreas de interés.
  return (
    <div className="seccion perfil">

      {/* Encabezado */}
      <div className="seccion__cabecera">
        <UserRound />
        <div>
          <h2 className="seccion__titulo">Perfil profesional</h2>
          <p className="seccion__intro">
            Conoce mi formación e intereses.
          </p>
        </div>
      </div>

      {/* Información principal */}
      <div className="rejilla rejilla--dos">

        <article className="panel">
          <span className="etiqueta">SOBRE MÍ</span>
          <h3>Un poco sobre mí</h3>
          <p className="texto-secundario">{perfil.resumen}</p>
        </article>

        <article className="panel">
          <span className="etiqueta">INFORMACIÓN GENERAL</span>

          <div className="perfil__dato">
            <MapPin size={19} />
            <span>{perfil.ubicacion}</span>
          </div>

          <div className="perfil__dato">
            <GraduationCap size={19} />
            <span>
              {perfil.institucion} · {perfil.especialidad}
            </span>
          </div>
        </article>

      </div>

      {/* Tarjetas de intereses */}
      <div>
        <h3>Áreas de interés</h3>

        <div className="rejilla rejilla--tres">
          {perfil.areas.map((area) => (
            <ProfileCard key={area.id} area={area} />
          ))}
        </div>
      </div>

    </div>
  );
}
