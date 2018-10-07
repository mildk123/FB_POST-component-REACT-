import React, { Component } from 'react';
import FbImageLibrary from 'react-fb-image-grid';
import FacebookEmoji from 'react-facebook-emoji';
import { Glyphicon } from 'react-bootstrap';
import swal from 'sweetalert';
import '../../CSS/Post.css'



class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showReactions: false,
            likeBtnFlag: false,
            
            reactLike: false,
            reactLove: false,
            reactWow: false,
            reactYay: false,
            reactAngry: false,
            reactHaha: false,
            reactSad: false
        };
        this.showReactions = this.showReactions.bind(this);
    }

    showReactions() {
        this.setState({
            showReactions: !this.state.showReactions,
        });
    }

    handlerShowReactions(param) {
        // const { showReactions } = this.state
        this.setState({ showReactions: param });
      }

    CommingSoon() {
        swal("Function Coming Soon!", "Please Be Patient!", "warning");

    }


    render() {
        const { createdBy, avatar, description, images, likes, likedByMe } = this.props.state;
        const { likeFunction } = this.props;
        const {
            showReactions,
            reactLike,
            reactLove,
            reactWow,
            reactYay,
            reactAngry,
            reactHaha,
            reactSad
          } = this.state;

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
                                {likes.length > 4 ? `${likes[0]},${likes[1]} and ${likes.length - 2} others liked this.` :
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
                                <div className="like-btn"
                                    onMouseOver={this.showReactions} >
                                    {!likedByMe && <Glyphicon
                                        glyph="glyphicon glyphicon-thumbs-up"
                                        style={{ margin: 6 }} />}
                                    {!likedByMe && <input
                                        type='button'
                                        onClick={likeFunction}
                                        style={{ margin: 6 }}
                                        value="Like" />}
                                </div>

                                <div className="like-btn">
                                    {likedByMe && <Glyphicon
                                        glyph="glyphicon glyphicon-thumbs-up"
                                        style={{ margin: 6, color: `blue` }} />}
                                    {likedByMe && <input
                                        type='button'
                                        style={{ color: `blue` }}
                                        onClick={likeFunction}
                                        style={{ margin: 6 , color: `blue`}}
                                        value="Like" />}
                                </div>
                            </div>

                            {/* // ********************************************************* */}
                            {showReactions && (
                                <div
                                    style={{
                                        bottom: "7%",
                                        width: 55,
                                        position: "fixed",
                                        padding: "5px 10px",
                                        borderRadius: "50px",
                                        background: "#fafafa",
                                        boxShadow: "1px 1px 5px grey"
                                    }}
                                    onMouseLeave={() => {
                                        this.handlerShowReactions(false);
                                    }}
                                >
                                    <span
                                        onMouseOver={() => {
                                            this.setState({ reactLike: true });
                                        }}
                                        onMouseOut={() => {
                                            this.setState({ reactLike: false });
                                        }}
                                        onTouchStart={() => {
                                            this.setState({ reactLike: true });
                                        }}
                                        onTouchMove={() => {
                                            this.setState({ reactLike: false });
                                        }}
                                        onClick={() => {
                                            this.handlerShowReactions(false);
                                            this.props.likeFunction();
                                            this.setState({ reactLike: false });
                                        }}
                                    >
                                        <FacebookEmoji size={reactLike ? "md" : "sm"} type="like" />
                                    </span>
                                    <span
                                        onMouseOver={() => {
                                            this.setState({ reactLove: true });
                                        }}
                                        onMouseOut={() => {
                                            this.setState({ reactLove: false });
                                        }}
                                        onTouchStart={() => {
                                            this.setState({ reactLove: true });
                                        }}
                                        onTouchMove={() => {
                                            this.setState({ reactLove: false });
                                        }}
                                        onClick={() => {
                                            this.handlerShowReactions(false);
                                            this.props.likeFunction();
                                            this.setState({ reactLove: false });
                                        }}
                                    >
                                        <FacebookEmoji size={reactLove ? "md" : "sm"} type="love" />
                                    </span>
                                    <span
                                        onMouseOver={() => {
                                            this.setState({ reactHaha: true });
                                        }}
                                        onMouseOut={() => {
                                            this.setState({ reactHaha: false });
                                        }}
                                        onTouchStart={() => {
                                            this.setState({ reactHaha: true });
                                        }}
                                        onTouchMove={() => {
                                            this.setState({ reactHaha: false });
                                        }}
                                        onClick={() => {
                                            this.handlerShowReactions(false);
                                            this.props.likeFunction();
                                            this.setState({ reactHaha: false });
                                        }}
                                    >
                                        <FacebookEmoji size={reactHaha ? "md" : "sm"} type="haha" />
                                    </span>
                                    <span
                                        onMouseOver={() => {
                                            this.setState({ reactYay: true });
                                        }}
                                        onMouseOut={() => {
                                            this.setState({ reactYay: false });
                                        }}
                                        onTouchStart={() => {
                                            this.setState({ reactYay: true });
                                        }}
                                        onTouchMove={() => {
                                            this.setState({ reactYay: false });
                                        }}
                                        onClick={() => {
                                            this.handlerShowReactions(false);
                                            this.props.likeFunction();
                                            this.setState({ reactYay: false });
                                        }}
                                    >
                                        <FacebookEmoji size={reactYay ? "md" : "sm"} type="yay" />
                                    </span>
                                    <span
                                        onMouseOver={() => {
                                            this.setState({ reactWow: true });
                                        }}
                                        onMouseOut={() => {
                                            this.setState({ reactWow: false });
                                        }}
                                        onTouchStart={() => {
                                            this.setState({ reactWow: true });
                                        }}
                                        onTouchMove={() => {
                                            this.setState({ reactWow: false });
                                        }}
                                        onClick={() => {
                                            this.handlerShowReactions(false);
                                            this.props.likeFunction();
                                            this.setState({ reactWow: false });
                                        }}
                                    >
                                        <FacebookEmoji size={reactWow ? "md" : "sm"} type="wow" />
                                    </span>
                                    <span
                                        onMouseOver={() => {
                                            this.setState({ reactAngry: true });
                                        }}
                                        onMouseOut={() => {
                                            this.setState({ reactAngry: false });
                                        }}
                                        onTouchStart={() => {
                                            this.setState({ reactAngry: true });
                                        }}
                                        onTouchMove={() => {
                                            this.setState({ reactAngry: false });
                                        }}
                                        onClick={() => {
                                            this.handlerShowReactions(false);
                                            this.props.likeFunction();
                                            this.setState({ reactAngry: false });
                                        }}
                                    >
                                        <FacebookEmoji size={reactAngry ? "md" : "sm"} type="angry" />
                                    </span>
                                    <span
                                        onMouseOver={() => {
                                            this.setState({ reactSad: true });
                                        }}
                                        onMouseOut={() => {
                                            this.setState({ reactSad: false });
                                        }}
                                        onTouchStart={() => {
                                            this.setState({ reactSad: true });
                                        }}
                                        onTouchMove={() => {
                                            this.setState({ reactSad: false });
                                        }}
                                        onClick={() => {
                                            this.handlerShowReactions(false);
                                            this.props.likeFunction();
                                            this.setState({ reactSad: false });
                                        }}
                                    >
                                        <FacebookEmoji size={reactSad ? "md" : "sm"} type="sad" />
                                    </span>
                                </div>
                            )}
                            {/* // ********************************************************* */}


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


