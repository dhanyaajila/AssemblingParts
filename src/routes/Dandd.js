import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Draggable from "react-draggable";
import "./da.css";

class Dandd extends Component {
    
    render(){

        let addedItems = this.props.items.length ?
        (  
            this.props.items.map(item=>{
                return(
                    
                    <li className="collection-item avatar" key={item.id}>
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
                    <h5>Your Selections</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
                <Link to="finalp"><button type="button">FINAL PRODUCT</button></Link><br />
                <Link to="registry"><button type="button">SELECT MORE ITEMS</button></Link><br />
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