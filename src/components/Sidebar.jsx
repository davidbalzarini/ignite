import styles from './Sidebar.module.css'
import { PencilSimpleLine } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>
                <Avatar src="https://pbs.twimg.com/profile_images/1436750352129331206/5qGptDj-_400x400.jpg" />

            


                <strong>David Balzarini Pereira</strong>
                <span>Web Developer</span>

            </div>
            <footer>
                <a href="#">
                    <PencilSimpleLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}