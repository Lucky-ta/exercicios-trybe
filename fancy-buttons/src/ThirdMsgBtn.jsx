import React from 'react';

class ThirdtMsgBtn extends React.Component {
    handleClickMsg() {
        console.log("Heyy! I'm realy REALY working!!!!!!!");
      }
    

    render() {
        return(
            <button onClick={this.handleClickMsg}>Mensagem 3 - NO CONSOLE</button>
        )
    }
}

export default ThirdtMsgBtn;
