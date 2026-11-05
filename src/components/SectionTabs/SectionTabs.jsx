import { UserRound, BriefcaseBusiness, PanelsTopLeft, Images, GraduationCap, Mail } from 'lucide-react';
import './SectionTabs.css';

// Cada pestaña tiene un identificador, un texto y un icono.
const secciones = [
  { id: 'perfil', titulo: 'Perfil', Icono: UserRound },
  { id: 'experiencia', titulo: 'Experiencia', Icono: BriefcaseBusiness },
  { id: 'proyectos', titulo: 'Proyectos', Icono: PanelsTopLeft },
  { id: 'galeria', titulo: 'Galería', Icono: Images },
  { id: 'formacion', titulo: 'Formación y tecnologías', Icono: GraduationCap },
  { id: 'contacto', titulo: 'Contacto', Icono: Mail }
];

export default function SectionTabs({ activa, onSelectSection }) {
  // App.jsx guarda cuál pestaña está activa; nosotros solo mostramos las opciones.
  // Al hacer clic avisamos a App.jsx qué sección debe abrir.
  return (
    <nav className="section-tabs" id="navegacion" aria-label="Secciones del CV Virtual">
      <div className="section-tabs__encabezado">
        <span>EXPLORAR PORTAFOLIO</span>
        <small>Navegación horizontal</small>
      </div>
      <div className="section-tabs__lista">
        {secciones.map(({ id, titulo, Icono }) => (
          <button
            key={id}
            type="button"
            aria-current={activa === id ? 'page' : undefined}
            onClick={() => onSelectSection(id)}
            className={`section-tabs__boton ${activa === id ? 'section-tabs__boton--activo' : ''}`}
          >
            <Icono size={18} aria-hidden="true" />
            <span>{titulo}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
