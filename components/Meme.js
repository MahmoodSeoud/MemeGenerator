import React from "react"

export default class Meme extends React.Component{

    state = {
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        allMemes: []
    }


    componentDidMount(){
        console.log("mount")
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => this.setState({allMemes: data.data.memes }))
    }


    handleChange = () => {
        const {name, value} = event.target
        this.setState(prevState => ({
            [name] : value
        }))
    }


    getMemeImage = () => {
         const randomNumber = Math.floor(Math.random() * this.state.allMemes.length)
         const url = this.state.allMemes[randomNumber].url
         this.setState({randomImage: url})
    }
    render() {
        console.log("render")
        return (
            <main>
                <div className="form">
                    <input
                        type="text"
                        placeholder="Top text"
                        className="form-input"
                        name="topText"
                        value={this.state.topText.value} // <-- FILL WITH STATE VALUE
                        onChange={this.handleChange}
                        maxlength="25"
                    />
                    <input
                        type="text"
                        placeholder="Bottom text"
                        className="form-input"
                        name="bottomText"
                        value={this.state.bottomText.value} // <-- FILL WITH STATE VALUE
                        onChange={this.handleChange}
                        maxlength="25"
                    />
                    <button
                    className="form--button"
                    onClick={this.getMemeImage}
                    >
                    Get a new meme image 🖼
                     </button>
                </div>

                <div className="meme">
                    <img src={this.state.randomImage} className="meme-image"/>
                    <h2 className="meme-text top">{this.state.topText}</h2>
                    <h2 className="meme-text bottom">{this.state.bottomText}</h2>
                </div>
            </main>
        )
    }
}