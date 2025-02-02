import x from './Main.module.css';
import Post from '../Post';

const Main = ({ posts }) => (
    <main className={x.main}>
        <h1>Sooooooooome Heading</h1>
        <div className={x.posts}>
            {posts.map(x => <Post key={x.id} post={x} />)}
        </div>
    </main>
);

export default Main;