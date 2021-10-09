import React from 'react';

class SecondtMsgBtn extends React.Component {
    handleClickMsg() {
        console.log("Heyy! I'm realy working!!");
      }
    

    render() {
        return(
            <button onClick={this.handleClickMsg}>Mensagem 1 - NO CONSOLE</button>
        )
    }
}

export default SecondtMsgBtn;
