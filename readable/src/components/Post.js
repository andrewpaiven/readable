/**
 * Created by apaivaer on 19/12/2017.
 */
import React, { Component } from 'react';
import Voter from './Voter.js'

class Post extends Component {

    processTime = (unixTime) => {
        let timeStamp = new Date(unixTime);
        let timeStampString = `${timeStamp.getDate()}\\${timeStamp.getMonth()}\\${timeStamp.getYear()} @ ${timeStamp.toISOString().slice(-13, -5)}`
        return timeStampString
    }

    render() {
        return(
            <div className="postDiv">
                <h1 className="postTitle">{`${this.props.title}`}</h1>
                <h2 className="postAuthor">{`by ${this.props.author}`}</h2>
                <Voter voteScore={this.props.voteScore}/>
                <p className="postContent">{`${this.props.body}`}</p>
                <span className="postTimeStampAndCategory">{`Posted in ${this.props.category} on ${this.processTime(this.props.timestamp)}`}</span>
                <button className="postEdit">Edit Post</button>
                <button className="postDelete">Delete Post</button>
            </div>
        )
    }
}

export default Post
