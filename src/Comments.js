import {useContext, useEffect, useState} from "react";
import {VideoContext} from "./App";
import "./Comments.css";

export function Comments() {
    const [comments, setComments] = useState(JSON.parse(localStorage.getItem("comments")) || []);
    const {currentVideo} = useContext(VideoContext);

    useEffect(() => {
        if (comments?.length) {
            localStorage.setItem("comments", JSON.stringify(comments));
        }
    }, [comments]);

    const onEnter = (event) => {
        if (event.key === "Enter") {
            const message = event.target.value;
            addComment(message);
            event.target.value = "";
        }
    }

    const addComment = (message) => {
        const id = Math.random().toString(36).slice(2, 8);
        const newComment = {id, message, userId: 1, videoId: currentVideo.id};
        setComments([...comments, newComment]);
    }

    const deleteComment = (commentId) => {
        const filteredComments = comments.filter(comment => comment.id !== commentId);
        if (window.confirm("Do you really want to delete this comment?")) {
            setComments(filteredComments);
        }
    }

    const editComment = (commentId, message) => {
        const editedComments = comments.map(comment => {
            if (comment.id === commentId) {
                return {...comment, message}
            }
            return comment;
        })
        setComments(editedComments);
    }

    return (
        <div>
            <input type="text" onKeyDown={onEnter}/>
            <ul>
                {comments.filter(comment => comment.videoId === currentVideo.id)
                    .reverse().map(({id, message}) => (
                        <li key={id} className="Comment">
                            <p contentEditable 
                               onBlur={(event)=> editComment(id, event.target.innerHTML)} 
                               dangerouslySetInnerHTML={{__html: message}}/>
                            <span className="material-symbols-outlined md-24 Delete"
                                  onClick={() => deleteComment(id)}>delete</span>
                        </li>))}
            </ul>
        </div>);
}