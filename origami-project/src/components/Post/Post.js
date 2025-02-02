import x from './Post.module.css';

const Post = ({post}) => (
    <div className={x.post}>
        <img src="blue-origami-bird.png" alt="Origami" />
        <p className={x.description}>{post.content}</p>
        <div>
            <span>
                <small>Author: </small> {post.author}
            </span>
        </div>
    </div>
)

export default Post;