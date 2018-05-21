import React, { Component } from 'react';

class MessageView extends React.Component {

  displayBlock = () => {
    return(
      <div className="container">
        <div className="from">
          <span className="label">Market: </span>
          <span className="value">aa</span>
        </div>
        <div className="status">
          <span className="label">Price: </span>
          <span className="value">bb</span>
        </div>
        <div className="message">
          <span className="label">Volume: </span>
          <span className="value">cc</span>
        </div>
     </div>);
   }


  render() {

    const bitcoin = this.props.bitcoins;
    console.log('===========PANDEY=============')
    console.log(bitcoin.ticker);
    return(

      this.displayBlock

    )
  }

  // Mark message input parameter as required

}
export default MessageView;
