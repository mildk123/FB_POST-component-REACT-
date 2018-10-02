import React, { Component } from 'react';
import Post from './Components/Post/Post'



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div>
                {/* <header><h1 className="display-3 bg-primary text-white">Facebook Post</h1></header> */}
                <Post />
            </div>
        );
    }
}

export default App;