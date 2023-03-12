// import styles from './Post.module.css';
import {Postagem, PostImagem, PostText} from './Post-module';

import PostComments from '../PostComments';
import { ReactNode } from 'react';

export type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post = (props: Props) => (
<Postagem>
    <PostImagem src={props.imageUrl} />
    {/* <img className={styles['post-image']} src={imageUrl} /> */}
    {/* <p className={styles['post-text']}> {children} </p> */}
    <PostText>{props.children}</PostText>
    <PostComments />
</Postagem>
);

export default Post;