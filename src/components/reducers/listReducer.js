import Item1 from '../../images/fwheel.png'
import Item2 from '../../images/bwheel.png'
import Item3 from '../../images/front.png'
import Item4 from '../../images/peddle.png'
import Item5 from '../../images/seat.png'
import {ADD_TO_CART} from '../actions/action-types/list-action'

const initState = {
    items: [
        {id:1,title:'Front Wheel',img:Item1},
        {id:2,title:'Back Wheel',img:Item2},
        {id:3,title:'Handel',img:Item3},
        {id:4,title:'Peddle',img:Item4},
        {id:5,title:'Seat',img:Item5}       
    ],
    addedItems:[]
}
const listReducer= (state = initState, action)=>{
    if(action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item=> action.id === item.id)
        let existed_item= state.addedItems.find(item=> action.id === item.id)
        if(!existed_item) {
            addedItem.quantity = 1;
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem]
            }
        }
    }
    else{
        return state
    }
}
export default listReducer