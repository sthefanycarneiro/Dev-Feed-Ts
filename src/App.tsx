import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostType } from './components/Post';

import styles from './App.module.css'

import './global.css';

//author: {avatar_url: "" , name: "", role: ""}
//publishedAt: Date
//content: String

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rockeseat',
    },
    content: [
    { type: "paragraph" , content: "Fala galeraa 👋" },
    { type: "paragraph" , content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
    { type: "link" , content: "👉 diegof.design/doctorcare" },
    ],
    publishedAt: new Date('2023-09-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'CTO @ Rockeseat',
    },
    content: [
    { type: "paragraph" , content: "Oi pessoal" },
    { type: "paragraph" , content: "Tem video novo no canal! Confiram lá!" },
    { type: "link" , content: 'youtube.com/@maykbrito'}
    ],
    publishedAt: new Date('2023-10-24 15:00:00'),
  },
]

function App() {
  return (
      <div>
        <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main> 
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
