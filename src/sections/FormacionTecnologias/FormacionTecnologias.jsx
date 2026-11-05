
import { useState } from 'react';

import {
  GraduationCap,
  BookOpen,
  Code2
} from 'lucide-react';

import { formacion } from '../../data/formacion.js';
import { tecnologias } from '../../data/tecnologias.js';

import TechnologyCard from '../../components/TechnologyCard/TechnologyCard.jsx';

import './FormacionTecnologias.css';

const niveles = [
  'Todos',
  'Medio',
  'Bajo',
  'Aprendiendo'
];

export default function FormacionTecnologias() {
  // Guarda el nivel que desea consultar el visitante.
  const [filtro, setFiltro] = useState('Todos');

  // Filtra las tecnologías según el nivel seleccionado.
  const visibles = filtro === 'Todos'
    ? tecnologias
    : tecnologias.filter((tecnologia) => tecnologia.nivel === filtro);

  return (
    <div className="seccion formacion">

      {/* Encabezado */}
      <div className="seccion__cabecera">
        <GraduationCap />

        <div>
          <h2 className="seccion__titulo">
            Formación y tecnologías
          </h2>

          <p className="seccion__intro">
            Estudios y tecnologías con niveles que podré actualizar.
          </p>
        </div>
      </div>

      {/* Formación académica */}
      <div className="rejilla rejilla--dos">
        <div className="panel">
          <span className="etiqueta">
            FORMACIÓN ACADÉMICA
          </span>

          <h3>{formacion.institucion}</h3>
          <p>{formacion.carrera}</p>

          <span className="etiqueta">
            {formacion.estado}
          </span>
        </div>

        {/* Áreas estudiadas */}
        <div className="panel">
          <h3>
            <BookOpen size={18} />
            Áreas estudiadas
          </h3>

          <ul>
            {formacion.cursos.map((curso) => (
              <li key={curso}>{curso}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Filtros por nivel */}
      <div>
        <h3>
          <Code2 size={20} />
          Lenguajes y herramientas
        </h3>

        <div className="formacion__filtros">
          {niveles.map((nivel) => (
            <button
              type="button"
              key={nivel}
              className={
                filtro === nivel
                  ? 'boton'
                  : 'boton boton--oscuro'
              }
              onClick={() => setFiltro(nivel)}
            >
              {nivel}
            </button>
          ))}
        </div>
      </div>

      {/* Tarjetas de tecnologías */}
      <div className="rejilla rejilla--tres">
        {visibles.map((tecnologia) => (
          <TechnologyCard
            key={tecnologia.id}
            tecnologia={tecnologia}
          />
        ))}
      </div>

      {/* Mensaje cuando no hay resultados */}
      {visibles.length === 0 && (
        <p className="texto-secundario">
          Todavía no hay tecnologías en este nivel.
        </p>
      )}

    </div>
  );
}
