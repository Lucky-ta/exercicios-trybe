import React from 'react';

class FirstMsgBtn extends React.Component {
    handleClickMsg() {
        console.log("Heyy! I'm working!");
      }
    

    render() {
        return(
            <button onClick={this.handleClickMsg}>Mensagem 1 - NO CONSOLE</button>
        )
    }
}

export default FirstMsgBtn;
