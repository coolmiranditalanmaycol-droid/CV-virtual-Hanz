
import { useState } from 'react';

import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import SectionTabs from './components/SectionTabs/SectionTabs.jsx';
import Footer from './components/Footer/Footer.jsx';

import Perfil from './sections/Perfil/Perfil.jsx';
import Experiencia from './sections/Experiencia/Experiencia.jsx';
import Proyectos from './sections/Proyectos/Proyectos.jsx';
import Galeria from './sections/Galeria/Galeria.jsx';
import FormacionTecnologias from './sections/FormacionTecnologias/FormacionTecnologias.jsx';
import Contacto from './sections/Contacto/Contacto.jsx';

import './styles/variables.css';
import './styles/global.css';

export default function App() {
  // Guarda la sección que se muestra debajo del menú horizontal.
  const [seccion, setSeccion] = useState('perfil');

  // Guarda el proyecto al que se entra desde una tarjeta.
  const [proyectoId, setProyectoId] = useState('ezfactu');

  // Cambia la pestaña seleccionada sin recargar la página.
  function seleccionarSeccion(id) {
    setSeccion(id);

    // Desplaza la página hasta el contenido.
    requestAnimationFrame(() => {
      document.getElementById('contenido-seccion')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  // Abre la galería asociada al proyecto seleccionado.
  function abrirGaleria(id) {
    setProyectoId(id);
    seleccionarSeccion('galeria');
  }

  return (
    <div className="pagina-cv">

      {/* Encabezado principal */}
      <Navbar />

      <main className="contenedor pagina-cv__principal">

        {/* Presentación personal */}
        <Hero onSelectSection={seleccionarSeccion} />

        {/* Barra de navegación horizontal */}
        <SectionTabs
          activa={seccion}
          onSelectSection={seleccionarSeccion}
        />

        {/* Contenido dinámico de cada pestaña */}
        <section
          id="contenido-seccion"
          className="pagina-cv__contenido"
        >
          {seccion === 'perfil' && <Perfil />}

          {seccion === 'experiencia' && <Experiencia />}

          {seccion === 'proyectos' && (
            <Proyectos onOpenGallery={abrirGaleria} />
          )}

          {seccion === 'galeria' && (
            <Galeria proyectoInicial={proyectoId} />
          )}

          {seccion === 'formacion' && <FormacionTecnologias />}

          {seccion === 'contacto' && <Contacto />}
        </section>

      </main>

      {/* Pie de página */}
      <Footer />

    </div>
  );
}
