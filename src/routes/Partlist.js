import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addPart } from '../components/actions/listActions'
import "../style.css";

class PartList extends Component {
    handleClick = (id)=>{
        this.props.addPart(id); 
    }

    render() {
        let itemList = this.props.items.map(item=>{
            return(
                <li className="collection-item avatar" key={item.id}>
                    <div className="item-img"> 
                        <img src={item.img} alt={item.img} className=""/>
                    </div>

                    <div className="item-desc">
                        <span className="title">{item.title}</span>
                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleClick(item.id)}}>ADD ITEM</button>
                    </div>
                </li>
            )
        })

        return(
            <div className="container">
               
                    <h1>Parts of Cycle</h1>
                    <ul className="collection">
                        {itemList}
                    </ul>
               
                <Link to="dandd"><button type="button">ASSEMBLE PARTS</button></Link><br />
                <div></div>
                <br/>
                <Link to="/"><button type="button">HOME</button></Link>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.items,
        additions: state.addedItems
    }
}
const mapDispatchToProps= (dispatch)=>{
    return {
        addPart: (id)=>{dispatch(addPart(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PartList)