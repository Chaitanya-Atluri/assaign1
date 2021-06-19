import React, { useContext, useState } from "react";
import EachItem from "./eachItem";
import classes from "./items.module.css";
import { ItemsContext } from "../Store/itemscontext";
import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const UsersQuery = gql`
  query getItems {
      catogery,
      name,
      calories,
      fat,
      carbs,
      protiens,
      id
  }`

const Product = ( ) => {
  const { loading, error, data } = useQuery(UsersQuery)
  const itemsctx = useContext(ItemsContext);
  const [selected, setSelected] = useState<string[]>([]);

  const selectHandler = (event:React.MouseEvent) => {
      const id:string=event.currentTarget.firstElementChild?event.currentTarget.firstElementChild.id.toString():' ';
    setSelected([id,...selected]);
  };
const removeSelected =()=>{
     itemsctx.removeItem(selected);
    setSelected([]);
}

  return (
    <table className={classes.items}>
      {selected.length > 0 && <tr onClick={removeSelected } className={classes.delete}> Delete </tr>}
      <tr>
      {selected.length > 0 &&<th>Select</th>}
        <th>Name</th>
        <th>calories</th>
        <th>fat</th>
        <th>carbs</th>
        <th>protiens</th>
      </tr>
      {itemsctx.products.map((item) => (
        <EachItem  key={item.id} product={item} onHit={selectHandler} />
      ))}
    </table>
  );
};

export default Product;
