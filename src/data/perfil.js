
// Información general del propietario del CV.
export const perfil = {
  nombre: 'Hanz Valdez',
  especialidad: 'Ingeniería de Software con Inteligencia Artificial',
  ubicacion: 'Huancayo, Perú',
  institucion: 'SENATI',

  resumen:
    'Estudiante de Ingeniería de Software con Inteligencia Artificial. Me gusta desarrollar interfaces web y crear soluciones tecnológicas para problemas reales.',

  // FOTO DE PERFIL: aquí pon tu foto de perfil.
  // Copia tu imagen a public/imagenes/perfil/foto-perfil.jpg
  // DESCOMENTA la siguiente línea para mostrar la imagen en el Hero:
  foto: '/imagenes/perfil/image.png',

  // Puedes reemplazar el PDF en public/cv manteniendo este nombre.
  pdf: '/cv/CV_Hanz_Valdez_D.pdf',

  areas: [
    {
      id: 'web',
      nombre: 'Desarrollo web',
      detalle: 'Interfaces y componentes con React.'
    },
    {
      id: 'software',
      nombre: 'Software',
      detalle: 'Aplicaciones y lógica de programación.'
    },
    {
      id: 'ia',
      nombre: 'Inteligencia artificial',
      detalle: 'Procesamiento de información y modelos.'
    }
  ]
};
