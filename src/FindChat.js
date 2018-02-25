import React, { Component } from 'react';
import axios from 'axios';

class FindChat extends Component {

  constructor(props) {
    super(props);
    this.nameChange = this.nameChange.bind(this);
    this.findChat = this.findChat.bind(this);
  }

  nameChange(event) {
      var name = event.target.value;
      if(name.length > 0) {
          this.props.setName(name);
      }
  }

  findChat(e) {
      e.preventDefault();
      this.props.changePage('chat');
  }

  render() {
    return (
        <form onSubmit={this.findChat}>
            <input type="text" placeholder="what's your name?" onChange={this.nameChange} autoFocus/>
            <input type="submit" value="Find a Chat"/>
        </form>
    );
  }

  async componentDidMount() {
    try{
        var result = await axios.get('http://localhost:8000/newRoom');
        this.props.updateRoom(result.data);
    }catch (e) {
        console.log(e);
    }
  }
}

export default FindChat;
