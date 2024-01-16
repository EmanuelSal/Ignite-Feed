// jsx = javascript + xml

import {Post} from "./Post"
import { Header } from "./components/Header"
// isso significa que estamos importando o React da biblioteca react

import styles from "./App.module.css";

import "./global.css"
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div> 
      <Header />

      <div className={styles.wrapper}> 
        <Sidebar />
        <main> 
          <Post 
            author="Emanuel Lima" 
            content="conteudo do post" 
          />
          
          <Post 
            author="Fulano" 
            content="novo conteudo do post"
          />
          
        </main>
      </div>

    </div>
  )
}

export default App
