import { Component } from 'react';
import * as postService from './services/postService';
import x from './App.module.css';
import Aside from './components/Aside';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {

  constructor(props) {
    super();
    this.state = { posts: [], selectedPost: null };
  };

  componentDidMount() {
    postService.getAll().then(x => this.setState(() => ({ posts: x })));
  };

  onAsideItemClickApp(id) {
    this.setState(() => ({ selectedPost: id }));
  }

  getPosts() {
    if (!this.state.selectedPost) return this.state.posts;
    return [this.state.posts.find(x => x.id == this.state.selectedPost)];
  }

  render() {
    return (
      <div className={x.app}>
        <Header />
        <div className={x.conteiner}>
          <Aside onAsideItemClick={this.onAsideItemClickApp.bind(this)} />
          <Main posts={this.getPosts()} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
