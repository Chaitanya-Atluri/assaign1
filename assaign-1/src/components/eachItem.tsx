import React from "react";
//import Card from "../Models/Card";
import Item from '../Models/Items';
const EachItem: React.FC<{ product: Item,onHit:(event:React.MouseEvent)=>void}> = (props) => {
  return (
    <tr key={props.product.id} onClick={props.onHit}>
               <td id={props.product.id}>{props.product.name}</td>
               <td>{props.product.calories}</td>
               <td>{props.product.fat}</td>
               <td>{props.product.carbs}</td>
               <td>{props.product.protiens}</td>        
    </tr>
               );
};
export default EachItem;
