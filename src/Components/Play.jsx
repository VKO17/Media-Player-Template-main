import React from "react";

class Play extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            img: "",
            tittle: "",
            artist: "",
            track: "PLAY",
            lyrics: ""
        }
    }
    
    stop() {
        if(this.state.track === "PLAY") {
            this.setState({track: "STOP"});
        } else {
            this.setState({track: "PLAY"});
        }
    }

    render() {

        return (
            <>
                <button onClick={() => this.stop()} ><h1>{this.state.track}</h1></button>   
            </>
        )
    }
}

export default Play;