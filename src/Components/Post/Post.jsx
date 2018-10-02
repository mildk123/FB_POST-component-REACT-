import React, { Component } from 'react';
import FbImageLibrary from 'react-fb-image-grid';


const images = ['https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
    'https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg',
    'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&h=350', " ", " "
]

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                {/* TOP SECTION OF THE POST */}
                {/* ----------------------------------------------------- */}
                <div id="post-header">
                    <div id="top-top-row">
                        <div id="dp-row">
                            <img src="https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg" alt="profile-pic" />

                        </div>
                        <div id="desc-row">
                            <p>Alterations By Hammad</p>
                        </div>
                    </div>
                </div>

                {/* MID SECTION OF THE POST */}
                {/* ----------------------------------------------------- */}
                <div id='images-mid'>
                    <FbImageLibrary images={images} width={50} />
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
        );
    }
}

export default Post;