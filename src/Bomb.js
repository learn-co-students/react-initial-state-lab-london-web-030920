// your Bomb code here!
import React from 'react';

class Bomb extends React.Component{
    state = {
        secondsLeft: props.initialCount
        }
    }

countDown = () => {
    if(this.state.secondsLeft === 0){
        return <h1>Boom!</h1>
    }
    else {
        return <h3>{this.state.secondsLeft} seconds left before I go boom!</h3>
    }


    }
    render(){
        return (
            <div>{this.countDown()}</div>
        )
    }
}

export default Bomb