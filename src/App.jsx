import { useState } from 'react';
import { Header } from './components/Header';
import { Post }  from './components/Post';
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';

const posts = [
  {
      id: 1,
      author:{
          avatarUrl: "https://pbs.twimg.com/profile_images/1436750352129331206/5qGptDj-_400x400.jpg",
          name: "David Balzarini",
          role: "Web Developer"
      },
      content: [
          { type:'paragraph', content: 'venho aqui hoje para apresentar meu projeto' },
          {type: 'paragraph' ,content:'ODEIO VOCES'},
          {type: 'link', content: '#gay'},
      ],
      publishedAt: new Date ('2022-05-03 20:00:00')
  },
  {
      id: 2,
      author:{
          avatarUrl: "https://pbs.twimg.com/profile_images/696081815820443648/HmZr27yx_400x400.jpg",
          name: "Ana Clara Clarim",
          role: "Professora"
      },
      content: [
          { type:'paragraph', content: 'Hoje tive o prazer de dar minha primeira aula...' },
          {type: 'paragraph' ,content:'ODEIO VOCES'},
          {type: 'link', content: '#gay'},
      ],
      publishedAt: new Date ('2023-03-09 20:00:00')
  }
]


export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return(
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


