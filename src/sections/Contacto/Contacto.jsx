
import { useState } from 'react';

import {
  Mail,
  Github,
  Linkedin,
  Send,
  Phone
} from 'lucide-react';

import { contacto } from '../../data/contacto.js';

import './Contacto.css';

export default function Contacto() {
  // Guarda temporalmente la información del formulario.
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Abre la aplicación de correo para preparar el mensaje.
  function prepararCorreo(evento) {
    evento.preventDefault();

    // No continuamos si aún no configuramos el destinatario.
    if (!contacto.correo) return;

    const asunto = encodeURIComponent(
      `Contacto desde el CV - ${nombre}`
    );

    const cuerpo = encodeURIComponent(
      `${mensaje}\n\nDe: ${nombre}\nCorreo: ${correo}`
    );

    window.location.href =
      `mailto:${contacto.correo}?subject=${asunto}&body=${cuerpo}`;
  }

  return (
    <div className="seccion contacto">

      {/* Encabezado */}
      <div className="seccion__cabecera">
        <Mail />

        <div>
          <h2 className="seccion__titulo">Contacto</h2>

          <p className="seccion__intro">
            Medios para comunicarte conmigo.
          </p>
        </div>
      </div>

      <div className="rejilla rejilla--dos">

        {/* Enlaces profesionales */}
        <div className="panel">
          <h3>Mis enlaces</h3>

          <div className="contacto__enlaces">

            <div>
              <Mail size={18} />
              {contacto.correo ? (
                <a href={`mailto:${contacto.correo}`}>
                  {contacto.correo}
                </a>
              ) : (
                <span>Correo por configurar</span>
              )}
            </div>

            <div>
              <Github size={18} />
              {contacto.github ? (
                <a
                  href={contacto.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  Mi GitHub
                </a>
              ) : (
                <span>GitHub por configurar</span>
              )}
            </div>

            <div>
              <Linkedin size={18} />
              {contacto.linkedin ? (
                <a
                  href={contacto.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  Mi LinkedIn
                </a>
              ) : (
                <span>LinkedIn por configurar</span>
              )}
            </div>

            {contacto.telefono && (
              <div>
                <Phone size={18} />
                <span>{contacto.telefono}</span>
              </div>
            )}

          </div>
        </div>

        {/* Formulario */}
        <form
          className="panel contacto__formulario"
          onSubmit={prepararCorreo}
        >
          <h3>Escríbeme</h3>

          <p>
            Al continuar, se abrirá tu aplicación de correo
            para que confirmes el envío.
          </p>

          <label>
            Nombre
            <input
              className="campo"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
            />
          </label>

          <label>
            Correo
            <input
              className="campo"
              required
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="tu@email.com"
            />
          </label>

          <label>
            Mensaje
            <textarea
              className="campo"
              required
              rows={4}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Escribe tu mensaje"
            />
          </label>

          <button
            className="boton"
            type="submit"
            disabled={!contacto.correo}
          >
            <Send size={16} />
            Preparar mensaje
          </button>

          {!contacto.correo && (
            <small className="texto-secundario">
              Habilitarás el formulario al agregar tu correo
              en data/contacto.js.
            </small>
          )}

        </form>
      </div>

    </div>
  );
}
