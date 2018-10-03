import React, { Component } from 'react';
// import FbImageLibrary from 'react-fb-image-grid';
import FbImageLibrary from '../Images'
import '../../CSS/Post.css'


const images = [
    'https://s3.amazonaws.com/secretsaucefiles/photos/images/000/107/867/large/Samples.jpeg?1485369806',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9p3NDZJgywrwhR1dqSBRKshGf2P9cTDI4yM2JIAQ3NLNQeYNy',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2QpuZBjR8wPwKUleiQteTozL1Kl95_HzSx2STyYSLKNFpiVli',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp5KErePBeTqsPjQJ-yrTlm7UdYGaMMjgQ6qgYVCJmP0wE6zJg',
    'http://www.voyagecharters.com/media//magpleasure/imagegallery/file_name_file/0/2/021a845ff10925a89c802cdaca844de8.jpg',
]

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <div id="post">
                    {/* TOP SECTION OF THE POST */}
                    {/* ----------------------------------------------------- */}
                    <div id="post-header">
                        <div id="top-top-row">
                            <div id="dp-row">
                                <img src="https://www.clevelanddentalhc.com/wp-content/uploads/2018/03/sample-avatar.jpg" alt="profile-pic" />

                            </div>
                            <div id="desc-row">
                                <p>Alterations  By Hammad</p>
                            </div>
                        </div>
                    </div>

                    {/* MID SECTION OF THE POST */}
                    {/* ----------------------------------------------------- */}
                    <div id='images-mid'>
                        <FbImageLibrary images={images} countFrom={5} width={100} />
                    </div>


                    {/* BOTTOM SECTION OF THE POST */}
                    {/* ----------------------------------------------------- */}
                    <div>
                        <div id="bottom-top-row">
                            <div id="reactions">

                            </div>
                            <div id="likes-list">

                            </div>
                            <div id="comments-list">

                            </div>
                        </div>
                        <div id="bottom-bottom-row">
                            <div id="like-btn">

                            </div>
                            <div id="comment-btn">

                            </div>
                            <div id="share-btn">

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Post;