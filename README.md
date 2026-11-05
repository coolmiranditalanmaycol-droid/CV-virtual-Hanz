# CV Virtual — Hanz Valdez

Portafolio con **React + Vite + Lucide**, con navegación horizontal y colores negro, blanco y gris. Se conservó la estructura original del ZIP y se corrigieron estilos duplicados.

## Iniciar en VS Code

```bash
npm install
npm run dev
```

Después abre la dirección que muestre Vite (normalmente `http://localhost:5173/`).

## Cambiar tus datos

- **Correo y GitHub:** `src/data/contacto.js`. Ya incluyen los datos indicados.
- **LinkedIn:** hay una línea comentada en `src/data/contacto.js`; cuando lo tengas, cambia la URL y descomenta la línea.
- **Foto:** guarda una imagen como `public/imagenes/perfil/foto-perfil.jpg` y **descomenta solo la línea `foto:`** en `src/data/perfil.js`. El Hero la mostrará automáticamente.
- **Descarga CV:** el botón ya descarga `public/cv/CV_Hanz_Valdez_provisional.pdf`, un **PDF borrador** creado para probar la función. Revisa su contenido y sustituye ese PDF por tu CV definitivo antes de publicar. Si cambias el nombre, actualiza `pdf` en `src/data/perfil.js`.
- **Datos personales:** `src/data/perfil.js`. Actualmente el nombre es **Hanz Valdez** tal como estaba en el ZIP.
- **Experiencia:** `src/data/experiencia.js`.
- **Proyectos y capturas:** `src/data/proyectos.js`.
- **Niveles de tecnologías:** `src/data/tecnologias.js`. Los niveles actuales son ejemplos que hay que validar.
- **Colores universales:** `src/styles/variables.css`. Los estilos adicionales usan `var(--color-...)`.

## Componentes

Secciones incluidas: Perfil, Experiencia, Proyectos, Galería, Formación y Tecnologías y Contacto. El formulario de contacto prepara un mensaje mediante `mailto:`; la persona debe confirmar el envío desde su aplicación de correo.

## Notas

- No incluye `node_modules/` ni `dist/`: se generan con `npm install` y `npm run build`.
- No se agregó Git ni se publicó en Vercel.
- La galería de EZFACTU espera imágenes reales; no se inventaron capturas ni enlaces a repositorios específicos.
