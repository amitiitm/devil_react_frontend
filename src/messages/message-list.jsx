
import React, { Component } from 'react';
import MessageView from './message-view';

const API = 'https://api.cryptonator.com/api/full/btc-usd'

class MessageList extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        bitcoins: [],
      };
    }

    componentDidMount() {
      fetch(API)
        .then((result) => {
        return result.json();
        }).then((jsonResult) => {
          this.setState({ bitcoins: jsonResult });
        });
    }


    render() {
      const { bitcoins } = this.state;
      //console.log('----------PANDEY-------------');
      //console.log(bitcoins);
       return(
         <div>
           <h1>List of Bitcoins</h1>
           <MessageView bitcoins={bitcoins} />
         </div>
       )
     }
}


export default MessageList;
