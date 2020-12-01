import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Raiana Pereira',
  subtitle: 'Front End Developer',
  cta: 'Saiba Mais',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile2.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/raiana-pereira-1595a867', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.PNG',
    title: 'Portal de Filmes usando api do The Movie DB ',
    info: 'Projeto desenvolvido como trabalho final da disciplina de desenvolvimento de interfaces web administrada pela PUC minas. O objetivo era fazer um portal de filmes usando como estilizadores o CSS e o Bootstrap. Integrando a interface web a api da The Movie DB. A proposta era deixar o site responsivo seja usando o grid do bootstrap ou media querys no css.',
    info2: '',
    url: 'https://portal-filmes.herokuapp.com/',
    repo: 'https://github.com/raianap76/diw_puc-portal_filmes_bootstrap', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.PNG',
    title: 'Portal intranet interno desafio técnico Mundiale ',
    info: 'Teste pratico desenvolvido para ingressar na empresa Mundiale, a landing page foi feita usando ‘React redux’ saga para a administração dos estados. O objetivo da aplicação era desenvolver uma intranet onde era possível ver todos os funcionários atuais da empresa, seria como se fosse uma rede social interna.',
    info2: '',
    url: 'https://desafio-tecnico-mundiale.herokuapp.com/',
    repo: 'https://github.com/raianap76/Desafio-Mundiale-React-Front-End', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.PNG',
    title: 'Projeto administrador portal de filmes(inserção e remoção de filmes) ',
    info: 'Portal de filmes desenvolvido para o desafio técnico final do curso de front end da Alura cursos. A pagina foi feita usado react e hooks(administrador de estados em react). O objetivo era que o usuário pudesse cadastrar filmes e novas categorias de filmes, e exibir em cards usando o componente slider do material UI.',
    info2: '',
    url: 'https://imersao-react-alura-cur6nin2v.vercel.app/',
    repo: 'https://github.com/raianap76/IMERSAO-REACT-ALURA/tree/master/alura-flix', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.PNG',
    title: 'Mini site para pesquisar os pacotes com destino mais barato ',
    info: 'Mini interface web feita em react usando useState para verificar e retornar o card com o destino de pacote mais barato',
    info2: '',
    url: 'https://mini-site-123milhas.herokuapp.com/',
    repo: 'https://github.com/raianap76/123-Milhas', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project5.PNG',
    title: 'Meu Portifolio',
    info: 'Portifolioss desenvolvido com o objetivo de compartilhar os mini projetos que faço usando as tecnologias front end, seja em react , html, css e javascript ou todas ;)',
    info2: '',
    url: 'https://portifolio-dev-frontend.netlify.app/',
    repo: 'https://github.com/raianap76/Gaspy_repo', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '(31) 97506-8648 & (31) 97132-1854',
  btn: 'raianap76@gmail.com',
  email: 'raianap76@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/raianap76/?hl=pt-br',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/raiana-pereira-1595a867',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/raianap76?tab=repositories',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
