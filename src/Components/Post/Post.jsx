import React, { Component } from 'react';
import FbImageLibrary from 'react-fb-image-grid';
import FacebookEmoji from 'react-facebook-emoji';
import { Glyphicon } from 'react-bootstrap';
import swal from 'sweetalert';
import '../../CSS/Post.css'



class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    CommingSoon() {
        swal("Function Coming Soon!", "Please Be Patient!", "warning");

    }


    render() {
        const { createdBy, avatar, description, images, likes, likedByMe } = this.props.state;
        const { likeFunction } = this.props;

        return (
            <div>
                <div id="post">
                    {/* TOP SECTION OF THE POST */}
                    {/* ----------------------------------------------------- */}
                    <div id="post-header">
                        <div id="top-top-row">
                            <div id="dp-row">
                                <img src={avatar} alt="profile-pic" />
                            </div>
                            <div id="name-row">
                                <p>{createdBy}</p>
                            </div>

                            <div id="desc-row">
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>

                    {/* MID SECTION OF THE POST */}
                    {/* ----------------------------------------------------- */}
                    <div id='images-mid'>
                        <FbImageLibrary width={100} images={images} hideOverlay={true} />
                    </div>
                    {/* BOTTOM SECTION OF THE POST */}
                    {/* ----------------------------------------------------- */}
                    <div id='interact-bottom'>
                        <div id="bottom-top-row">
                            <div id="reactions">
                                <FacebookEmoji type="like" size="xxs" />
                                <FacebookEmoji type="love" size="xxs" />
                                <FacebookEmoji type="wow" size="xxs" />
                            </div>
                            <div id="likes-list">
                                {likes.length > 4 ?`${likes[0]},${likes[1]} and ${likes.length - 2} others liked this.`:
                                    likes.map(item => {
                                            return <span key={item}>{item},</span>
                                        })
                                }
                            </div>
                            <div id="comments-list">
                                <p onClick={this.CommingSoon}>123 comments</p>
                            </div>
                        </div>
                        <div id="bottom-bottom-row">
                            <div id="like-btn">
                                {!likedByMe && <Glyphicon glyph="glyphicon glyphicon-thumbs-up" style={{ margin: 6 }} />}
                                {!likedByMe && <input type='button' onClick={likeFunction} value="Like" />}
                                {likedByMe && <Glyphicon glyph="glyphicon glyphicon-thumbs-up" style={{ margin: 6, color: 'blue' }} />}
                                {likedByMe && <input type='button' onClick={likeFunction} value="Like" style={{ color: 'blue' }} />}
                            </div>
                            <div id="comment-btn">
                                <Glyphicon glyph="glyphicon glyphicon-comment" style={{ margin: 6 }} />
                                <input type='button' onClick={this.CommingSoon} value="Comment" />
                            </div>
                            <div id="share-btn">
                                <Glyphicon glyph="glyphicon glyphicon-share" style={{ margin: 6 }} />
                                <input type='button' onClick={this.CommingSoon} value="Share" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Post;


