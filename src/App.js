import React, { Component } from 'react';
import Post from './Components/Post/Post'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createdBy: `Somebody's Name`,
            avatar: `https://www.clevelanddentalhc.com/wp-content/uploads/2018/03/sample-avatar.jpg`,
            description: `I'm not feeling good today!`,
            images: [
                'https://s3.amazonaws.com/secretsaucefiles/photos/images/000/107/867/large/Samples.jpeg?1485369806',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9p3NDZJgywrwhR1dqSBRKshGf2P9cTDI4yM2JIAQ3NLNQeYNy',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QpuZBjR8wPwKUleiQteTozL1Kl95_HzSx2STyYSLKNFpiVli',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp5KErePBeTqsPjQJ-yrTlm7UdYGaMMjgQ6qgYVCJmP0wE6zJg',
                'http://www.voyagecharters.com/media//magpleasure/imagegallery/file_name_file/0/2/021a845ff10925a89c802cdaca844de8.jpg',
                'http://www.voyagecharters.com/media//magpleasure/imagegallery/file_name_file/0/2/021a845ff10925a89c802cdaca844de8.jpg',],
            createdAt: Date.now(),
            likes: [`Milad Khan`, 'Faizan Ahmed', 'Kashif Suleiman'],
        };
    }

    render() {
        return (
            <div>
                <Post state={this.state} />
            </div>
        );
    }
}

export default App;