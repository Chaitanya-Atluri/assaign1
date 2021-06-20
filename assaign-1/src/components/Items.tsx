import React, { useMemo, useEffect, useState } from "react";
import Items from "../Models/Items";
import EachItem from "./eachItem";
import classes from "./items.module.css";
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks'


const Product = ( ) => {
  const [selected, setSelected] = useState<string[]>([]);
  const [product, setProduct] = useState<Items[]>([]);
  const [ updatedData ]  = useMutation(deleteItemsQuery,{variables:{
    ids:selected
  }})  
  const { data ,loading, error} = useQuery(getItemsQuery)
  useEffect(()=>{setProduct(data?data.getItems:[])},[data])
  if(loading) return <div>Loading......</div>
  else if (error) return <div>ERROR LOADING DATA</div>
  
   
  
  const selectHandler = (event:React.MouseEvent) => {
      const id:string=event.currentTarget.firstElementChild?event.currentTarget.firstElementChild.id.toString():' ';
    setSelected([id,...selected]);
  };


  return (
    <table className={classes.items}>
      <tbody>
      {selected.length > 0 && <tr><button onClick={updatedData} className={classes.delete}> Delete </button></tr>}
      <tr>
      {selected.length > 0 &&<th>Select</th>}
        <th>Name</th>
        <th>calories</th>
        <th>fat</th>
        <th>carbs</th>
        <th>protiens</th>
      </tr>
      { product.map((item) => (
        <EachItem  key={item._id} product={item} onHit={selectHandler} />
      ))}
      </tbody>
    </table>
  );
};
const getItemsQuery = gql`
  {
    getItems {
      catogery,
      name,
      calories,
      fat,
      carbs,
      protiens,
      _id
  }
}`

const deleteItemsQuery = gql`
mutation($ids:[String]!){
  deleteItems (id:$ids){
       catogery,
       name,
       calories,
       fat,
       carbs,
       protiens,
       _id
   }
   }
`

export default Product;
