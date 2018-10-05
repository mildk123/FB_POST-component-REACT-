import React, { Component } from 'react';
import swal from 'sweetalert';



class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


CommingSoon(){
    swal("Function Coming Soon!", "Please Be Patient!", "warning");
    
}
    

    render() {
        console.log(this.props.state)
        const { createdBy, avatar, description, images, likes } = this.props.state;
        return (
            <div>
               
