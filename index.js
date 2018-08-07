class Comments extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyBnc2i8wvP5Ol06hCWBJOqP8UNtZ714V4Q&textFormat=plainText&part=snippet&videoId=kJQP7kiw5Fk&maxResults=100`)
      .then(res => {
        const posts = res.data.items.map(obj => obj.snippet);
        this.setState({ posts });
      });
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.posts.map(post =>
            <li>{post.topLevelComment.snippet.textOriginal.replace(/\W/g, ' ')}</li>
          )}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <Comments/>,
  document.getElementById('comments')
);