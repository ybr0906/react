class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }
    render() {
        const text = this.state.liked ? '좋아요 취소' : '좋아요';
        return React.createElement(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            text,
        );
    }
}

const domContainer1 = document.querySelector('#react-root1');
ReactDOM.render(React.createElement(LikeButton), domContainer1);

const domContainer2 = document.querySelector('#react-root2');
ReactDOM.render(React.createElement(LikeButton), domContainer2);

const domContainer3 = document.querySelector('#react-root3');
ReactDOM.render(React.createElement(LikeButton), domContainer3);

