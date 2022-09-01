import React from "react"

export default class Header extends React.Component {
    
    render(){
        return(
            <header className="header">
                <img 
                    src="./images/troll-face.png" 
                    className="header--image"
                />
                <h2 className="header--title">Meme Generator</h2>
                <h4 className="header--project">Made by Mahmood</h4>
            </header>
        )
    }
}