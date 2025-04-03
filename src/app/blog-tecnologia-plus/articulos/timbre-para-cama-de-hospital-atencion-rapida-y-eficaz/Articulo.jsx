import ArticuloPlantilla from "../components/ArticuloPlantilla";

const articuloTimbreCama = {
  titulo:
    "Timbre para Cama de Hospital: Atención Rápida y Eficaz para el Paciente",
  publicadoPor: "Tecnología Plus",
  fechaPublicacion: "3 de abril de 2025",
  fechaActualizacion: "3 de abril de 2025",
  contenido: [
    {
      tipo: "imagen",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743712565/2-2-r2t8qbxf8mvesiss8ymnx9zqjfj67eus8hglr7abkw_klgqcz.webp",
      descripcion: "Paciente hospitalizado con timbre de llamado",
    },
    {
      tipo: "subtitulo",
      texto: "🏥 La Vulnerabilidad del Paciente Hospitalizado",
    },
    {
      tipo: "texto",
      texto:
        "Estar hospitalizado es una experiencia desafiante. La pérdida de autonomía y la incertidumbre generan ansiedad y estrés. Muchos pacientes tienen dificultades para moverse, lo que impide pedir ayuda rápidamente.",
    },
    {
      tipo: "lista",
      ordenada: false,
      bulletStyle: "circle",
      items: [
        "Limitaciones de movilidad: Dificultad para moverse y llamar a una enfermera.",
        "Riesgos de caídas: Intentar levantarse sin asistencia puede ocasionar accidentes.",
        "Falta de asistencia inmediata: Puede derivar en incomodidad y riesgos para la salud.",
        "Estrés y ansiedad: La imposibilidad de solicitar ayuda genera inseguridad.",
      ],
    },
    {
      tipo: "subtitulo",
      texto:
        "📢 El Rol del Timbre para Cama de Hospital en la Atención del Paciente",
    },
    {
      tipo: "lista",
      ordenada: false,
      items: [
        "✅ Mayor rapidez en la respuesta a las necesidades del paciente.",
        "✅ Disminución del estrés del paciente al saber que puede solicitar ayuda en cualquier momento.",
        "✅ Menor carga física y emocional para los enfermeros.",
        "✅ Optimización del trabajo del personal de salud, permitiendo priorizar las solicitudes.",
      ],
    },
    {
      tipo: "imagen",
      url: "https://res.cloudinary.com/ddqh0mkx9/image/upload/v1743712676/image-3-1030x564_nbgcnw.webp",
      descripcion: "Enfermera respondiendo a llamado de paciente",
    },
    {
      tipo: "subtitulo",
      texto:
        "👩‍⚕️ Beneficios para el Personal de Enfermería y la Clínica/Hospital",
    },
    {
      tipo: "lista",
      ordenada: false,
      items: [
        "✔ Facilita la priorización de emergencias.",
        "✔ Evita desplazamientos innecesarios.",
        "✔ Mejora la eficiencia del equipo médico.",
        "✔ Disminuye el estrés laboral del personal de salud.",
      ],
    },
    {
      tipo: "subtitulo",
      texto:
        "📊 Impacto del Timbre para Cama de Hospital en la Satisfacción del Paciente",
    },
    {
      tipo: "lista",
      ordenada: false,
      items: [
        "🏥 Mayor autonomía para el paciente.",
        "🏥 Tranquilidad para los familiares.",
        "🏥 Atención más humana y rápida.",
      ],
    },
    {
      tipo: "subtitulo",
      texto:
        "📌 Casos de Éxito en la Implementación del Timbre para Cama de Hospital",
    },
    {
      tipo: "lista",
      ordenada: false,
      items: [
        "🔹 Mental Health IPS SAS: Mejor organización y reducción en el tiempo de respuesta.",
        "🔹 Hogar Gerontológico Neurovital: Mayor tranquilidad para adultos mayores y cuidadores.",
      ],
    },
    {
      tipo: "subtitulo",
      texto: "🛠️ Implementa Soluciones con Tecnología Plus",
    },
    {
      tipo: "texto",
      texto:
        "En Tecnología Plus, ofrecemos sistemas de timbres diseñados para mejorar la seguridad y eficiencia en hospitales y clínicas. Contáctanos para asesoría personalizada.",
    },
    {
      tipo: "subtitulo",
      texto: "📚 Artículos relacionados",
    },
    {
      tipo: "enlaces",
      items: [
        {
          titulo:
            "✅ Cómo un Botón para Llamar a Enfermera Facilita la Labor del Personal de Enfermería",
          url: "https://tecnologiaplus.com/boton-para-llamar-a-enfermera-como-facilita-la-labor-del-personal-de-enfermeria/",
        },
        {
          titulo:
            "✅ 🏥 Cómo los Llamadores de Enfermería Transforman los Hospitales📢",
          url: "https://tecnologiaplus.com/llamadores-de-enfermeria-como-transforman-los-hospitales/",
        },
        {
          titulo:
            "✅ Mejora la Experiencia del Paciente con un Timbre de Llamado de Enfermería 🏥",
          url: "https://tecnologiaplus.com/timbre-de-llamado-de-enfermeria-mejora-la-experiencia-del-paciente/",
        },
      ],
    },
  ],
};

function Articulo() {
  return (
    <ArticuloPlantilla
      titulo={articuloTimbreCama.titulo}
      publicadoPor={articuloTimbreCama.publicadoPor}
      fechaPublicacion={articuloTimbreCama.fechaPublicacion}
      fechaActualizacion={articuloTimbreCama.fechaActualizacion}
      contenido={articuloTimbreCama.contenido}
    />
  );
}

export default Articulo;
