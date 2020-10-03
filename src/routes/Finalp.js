import React from "react"
import { Link } from "react-router-dom"

function Finalp(){
    return(
        <div>
            <h1>FINAL PRODUCT!!!</h1>
            <h2></h2>
            <Link to="/"><button type="button">HOME</button></Link>
        </div>
    )
}

export default Finalp


// <Draggable defaultPosition={{x: 25, y: 25}} {...dragHandlers}>
//           <div className="box">
//             {"I have a default position of {x: 25, y: 25}, so I'm slightly offset."}
//           </div>
// </Draggable>


// <Draggable onDrop={this.handleDrop} {...dragHandlers}>
//           <div className="box">
//             <div>I track my deltas</div>
//             <div>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div>
//           </div>
//         </Draggable>

// handleDrag = (e, ui) => {
//     const {x, y} = this.state.deltaPosition;
//     this.setState({
//       deltaPosition: {
//         x: x + ui.deltaX,
//         y: y + ui.deltaY,
//       }
//     });
//   };

//   state = {
    
//     deltaPosition: {
//       x: 0, y: 0
//     }
    
//   };