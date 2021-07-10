import { Strings } from '@/types/i18n';
import constants from '@/helpers/constants';

const strings: Strings = {
  BlogMeta: {
    minRead: 'min de lectura',
    comments: 'comentarios',
  },
  BlogSidebar: {
    mostViewedPosts: 'publicaciones Más Vistas',
    categories: 'Categorías',
    tags: 'Etiquetas',
  },
  PostPreview: {
    keepReading: 'Seguir Leyendo',
  },
  ContactForm: {
    email: 'Correo Electrónico',
    subject: 'Asunto',
    name: 'Nombre',
  },
  AboutMe: {
    whoAmI: '¿Quién soy?',
    me: `Soy ${constants.name}, frontend developer, emprendedor y blogger. Me encuentro en Perú (GMT -5). Me apasiona la tecnología y me encanta aprender nuevas cosas.`,
    technologiesIUsed: 'Tecnologías que he usado',
    footerTitle: '¿quieres conocer más de mi?',
    footerButton: 'Visita mi LinkedIn',
  },
  Hero: {
    hello: '¡Hola! Mi nombre es',
    im: 'Soy',
    tagline: 'Soluciono problemas diarios usando código.',
    viewMyWork: 'conoce mi trabajo',
    description:
      'Soy un ingeniero de software especializado en crear experiencias digitales para la web. Me apasiona usar la tecnología para mejorar la vida de las personas.',
  },
  Proyects: {
    title: '¿Quieres ver más proyectos?',
    button: 'Visita mi Github',
  },
  Layout: {
    description: `Soy ${constants.name}, fullstack web developer, emprendedor y blogger. Me apasiona la tecnología y me encanta aprender nuevas cosas.`,
  },
  Portfolio: {
    all: 'Todos',
  },
  ProjectModal: {
    goToWeb: 'Visita la Página',
  },
  Header: {
    home: 'inicio',
    aboutMe: 'sobre mi',
    portfolio: 'portafolio',
    contact: 'contacto',
  },
  Blog: {
    subtitle: 'Aprendamos un poco juntos',
  },
  Index: {
    aboutMeTitle: 'Sobre Mi',
    aboutMeSubtitle: 'Peruano, tech geek, emprendedor, lifelong learner',
    parallax1Quote: 'La mejor forma de predecir el futuro es implementarlo',
    parallax1Author: 'David Heinemeier - Creador de Ruby on Rails',
    portfolioTitle: 'Portafolio',
    portfolioSubtitle: 'Conoce alguno de los proyectos en los que he trabajado',
    parallax2Quote:
      'Una máquina puede hacer el trabajo de cincuenta hombres ordinarios. Ninguna máquina puede hacer el trabajo de un hombre extraordinario.',
    parallax2Author: 'Elbert Hubbard - Escritor',
    contactTitle: 'Contacto',
    contactSubtitle: '¿Tienes una idea de proyecto? ¡Trabajemos juntos!',
  },
  Spinner: {
    loading: 'Cargando',
  },
  BlogSocial: {
    like: 'Me Gusta',
    shareTwitter: 'Compartir en Twitter',
    shareFacebook: 'Compartir en Facebook',
  },
};

export default strings;
