import React from "react"
import { Link } from "react-router-dom"

function Home(){
    return(
        <div>
            <h1> Cycle Parts Assembly</h1>
            <p>THIS IS THE PLACE WHERE YOU CAN ASSEMBLE THE DIFFERNT CYCLE PARTS BY DRAGGING AND DROPPING</p><br/>
            <p>The final product is expected to be something like below</p>
            <img src={require('../images/full.png')} alt=""/><br/>
            <h2>So let's get started!!</h2><br/>
            <Link to="/Partlist"><button type="button">LIST OF PARTS</button></Link> 
        </div>
    )
}

export default Home
