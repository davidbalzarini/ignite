import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css'


export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://pbs.twimg.com/profile_images/1436750352129331206/5qGptDj-_400x400.jpg" alt=""/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>David Balzarini</strong>
                            <time title='9 de março de 2023' dateTime='2023-03-09'>publicado há 1h</time>
                        </div>
                        <button title='deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>boa</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    );
}