import  styles from './Comment.module.css'
import { PiTrashDuotone , PiThumbsUpDuotone } from "react-icons/pi";
import { Avatar } from "./Avatar";
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
    
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    /*function handleLikeComment() {
        setLikeCount(likeCount + 1);}*/
       
    /*Para aumentar os likes de 2 e 2:
    function handleLikeComment() {
        const newLikeCount = likeCount + 1
        setLikeCount(newLikeCount)
        setLikeCount(newLikeCount + 1);}*/    

    /*function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1})}*/

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&q=80&w=300&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>

                        <div className={styles.authorAndTime}>
                            <strong>Maria Helena</strong>
                            <time title="11 de Outubro às 20:17" dateTime='2023-10-11 20:17:30'>Cerca de 2h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar' comentário">
                            <PiTrashDuotone size={23}/>
                        </button>
                    </header>

                    <p> {content} </p>
                </div>

                <footer>
                    <button onClick={() => setLikeCount(likeCount +1)}>
                        <PiThumbsUpDuotone/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}