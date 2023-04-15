import { FormEvent, useState } from 'react';
// import styles from './PostComments.module.css';

import Comment from '../../models/Comment';
import { PostButton, PostComments, PostComment, PostCommentContent, PostCommentsForm, PostFormTextarea } from './Post-Comments';

const Post = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [tempComment, setTempComment] = useState('');

    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComment = new Comment(comments.length, tempComment);
        setTempComment('');
        setComments([...comments, newComment]);
    }

    return (
        <div>
            <PostComments>
                {comments.map(({ comment, id }) => (
                    <PostComment key={id}>
                        <PostCommentContent>
                            {comment}
                        </PostCommentContent>
                    </PostComment>
                ))}
            </PostComments>
            <PostCommentsForm onSubmit={handleAddComment}>
                <PostFormTextarea data-testid="campo-comentario" value={tempComment} onChange={e => setTempComment(e.target.value)} required />
                <PostButton data-testid="btn-postar" type="submit">
                    Comentar
                </PostButton>
            </PostCommentsForm>
        </div>
    );
}

export default Post;