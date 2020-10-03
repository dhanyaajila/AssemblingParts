import React from "react"
import { Link } from "react-router-dom"
import "../style.css"
function Home(){
    return(
        <div>
            <h1>Cycle Parts Assembly</h1>
            <p>THIS IS THE PLACE WHERE YOU CAN ASSEMBLE THE DIFFERNT CYCLE PARTS BY DRAGGING AND DROPPING</p><br/>
            <p>the final product is expecter to be somathing like below</p>
            <img src={require('../images/full.png')} alt=""/>
            <h4>so let's get started!!</h4>
            <Link to="/registry"><button type="button">LIST OF PARTS</button></Link> 
        </div>
    )
}

export default Home
