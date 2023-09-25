import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      name: 'Pedro Lucas',
      role: 'Software Engineer',
      avatarUrl: 'https://github.com/pdro-lucas.png',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋',
      },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2023-09-25 20:00:00'),
  },
  {
    id: 2,
    author: {
      name: 'Maria Silva',
      role: 'UX Designer',
      avatarUrl: 'https://github.com/maria-silva.png',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Olá pessoal! 👋',
      },
      {
        type: 'paragraph',
        content:
          'Estou trabalhando em um novo projeto de interface de usuário para um aplicativo de saúde. Adoro a combinação de design e tecnologia!',
      },
    ],
    publishedAt: new Date('2023-09-25 20:00:00'),
  },
  {
    id: 3,
    author: {
      name: 'João Santos',
      role: 'Data Scientist',
      avatarUrl: 'https://github.com/joao-santos.png',
    },
    content: [
      {
        type: 'paragraph',
        content: 'E aí, pessoal! 👋',
      },
      {
        type: 'paragraph',
        content:
          'Estou explorando dados para identificar tendências de mercado. A inteligência artificial está desempenhando um papel crucial nessa análise.',
      },
    ],
    publishedAt: new Date('2023-09-25 20:00:00'),
  },
  {
    id: 4,
    author: {
      name: 'Ana Oliveira',
      role: 'Cybersecurity Analyst',
      avatarUrl: 'https://github.com/ana-oliveira.png',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Oi pessoal! 👋',
      },
      {
        type: 'paragraph',
        content:
          'Recentemente, participei de uma conferência sobre cibersegurança. Fiquei impressionada com as últimas técnicas de prevenção de ameaças.',
      },
    ],
    publishedAt: new Date('2023-09-25 20:00:00'),
  },
  {
    id: 5,
    author: {
      name: 'Lucas Santos',
      role: 'Web Developer',
      avatarUrl: 'https://github.com/lucas-santos.png',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Olá pessoal da tecnologia! 👋',
      },
      {
        type: 'paragraph',
        content:
          'Estou trabalhando em um novo projeto de site responsivo usando as mais recentes tecnologias da web, como React e GraphQL. Em breve, compartilharei mais detalhes!',
      },
    ],
    publishedAt: new Date('2023-09-25 20:00:00'),
  },
  {
    id: 6,
    author: {
      name: 'Isabel Pereira',
      role: 'AI Researcher',
      avatarUrl: 'https://github.com/isabel-pereira.png',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Oi pessoal! 👋',
      },
      {
        type: 'paragraph',
        content:
          'Minha pesquisa atual envolve o treinamento de modelos de IA para tarefas de processamento de linguagem natural. Os avanços recentes na área são emocionantes!',
      },
    ],
    publishedAt: new Date('2023-09-25 20:00:00'),
  },
  {
    id: 7,
    author: {
      name: 'Ricardo Lima',
      role: 'Cloud Architect',
      avatarUrl: 'https://github.com/ricardo-lima.png',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Olá, pessoal! 👋',
      },
      {
        type: 'paragraph',
        content:
          'Trabalhei recentemente na migração de uma infraestrutura para a nuvem. A escalabilidade e a flexibilidade da nuvem são incríveis!',
      },
    ],
    publishedAt: new Date('2023-09-25 20:00:00'),
  },
  {
    id: 8,
    author: {
      name: 'Laura Alves',
      role: 'Mobile App Developer',
      avatarUrl: 'https://github.com/laura-alves.png',
    },
    content: [
      {
        type: 'paragraph',
        content: 'E aí, pessoal da tecnologia! 👋',
      },
      {
        type: 'paragraph',
        content:
          'Estou empolgada em anunciar que meu novo aplicativo móvel está prestes a ser lançado. Ele oferece uma experiência de usuário incrível e funciona perfeitamente em dispositivos iOS e Android.',
      },
    ],
    publishedAt: new Date('2023-09-25 20:00:00'),
  },
  {
    id: 9,
    author: {
      name: 'Carlos Mendes',
      role: 'Machine Learning Engineer',
      avatarUrl: 'https://github.com/carlos-mendes.png',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala, galera da tecnologia! 👋',
      },
      {
        type: 'paragraph',
        content:
          'Atualmente, estou trabalhando em um projeto de aprendizado de máquina para prever o tempo com maior precisão. É um desafio emocionante!',
      },
    ],
    publishedAt: new Date('2023-09-25 20:00:00'),
  },
  {
    id: 10,
    author: {
      name: 'Mariana Costa',
      role: 'Frontend Developer',
      avatarUrl: 'https://github.com/mariana-costa.png',
    },
    content: [
      {
        type: 'paragraph',
        content: 'Oi, pessoal! 👋',
      },
      {
        type: 'paragraph',
        content:
          'Estou explorando novas técnicas de animação e interatividade para melhorar a experiência do usuário em sites. A tecnologia está sempre evoluindo!',
      },
    ],
    publishedAt: new Date('2023-09-25 20:00:00'),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
