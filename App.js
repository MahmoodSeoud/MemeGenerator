import React from "react"
import Header from "/components/Header"
import Meme from "./components/Meme"

export default class App extends React.Component {
    render(){
        return (
            <>
            <Header />
            <Meme />
            </>
        )
    }
}