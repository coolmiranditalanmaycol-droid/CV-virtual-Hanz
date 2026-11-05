import './Footer.css';

export default function Footer() {
  // Este pie se verá en todas las secciones del CV.
  return (
    <footer className="footer">
      <div className="contenedor footer__contenido">
        <span>© {new Date().getFullYear()} · Portafolio personal</span>
        <span>Desarrollado con React</span>
      </div>
    </footer>
  );
}
