import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Draggable from "react-draggable";

class Dandd extends Component {
    
    render(){

        let addedItems = this.props.items.length ?
        (  
            this.props.items.map(item=>{
                return(
                    
                    <li className="collection-item" key={item.id}>
                        <div className="item-img">                             
                            <Draggable>
                                <img src={item.img} className=""/>     
                            </Draggable>                                                                
                        </div>                
                    </li>
                )
            })
        ):

        (
            <p>oops!!! you have'nt selected Items +_+</p>
        )     
        
        return(
            <div className="container">                
                <div class="container">
                    <h1>Your Selections</h1>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
                <Link to="finalp"><button type="button">FINAL PRODUCT</button></Link><br /><br />
                <Link to="partlist"><button type="button">SELECT MORE ITEMS</button></Link><br /><br />
                <Link to="/"><button type="button">HOME</button></Link>
            </div>
       )
    }
}

 const mapStateToProps = (state)=>{
     return{
        items: state.addedItems,
        selections: state.selectedItems
    }
 }
 export default connect(mapStateToProps,null)(Dandd)