import React, { useEffect, useState } from "react";
import Items from "../Models/Items";
import classes from "./items.module.css";
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks'
const Product = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [product, setProduct] = useState<Items[]>([]);
  const [selectedCatogery, setselectedCatogery] = useState<String[]>(["dessert", "rice", "drink", "starters"]);
  const [updatedData, { data: newData }] = useMutation(deleteItemsQuery, {
    variables: {
      ids: selected
    }
  })
  useEffect(() => { setProduct(newData ? newData.deleteItems : []) }, [newData])
  const { data, loading, error } = useQuery(getItemsQuery)
  useEffect(() => { setProduct(data ? data.getItems : []) }, [data])
  if (loading) return <div>Loading......</div>
  else if (error) return <div>ERROR LOADING DATA</div>

  const removeHandler = () => {

    updatedData();
    console.log(newData)
    setSelected([]);

  }

  const selectHandler = (event: React.MouseEvent) => {

    const id: string = selected.length === 0 ? event.currentTarget.childNodes[0].id.toString() : event.currentTarget.childNodes[1].id.toString();
    selected.includes(id) ? setSelected(selected.filter((item) => { return item !== id })) : setSelected([...selected, id]);
  };

  const catogeryHandler = (event: React.ChangeEvent) => {
    const catogery: String[] = event.target.value
    if (catogery.includes("All"))
      setselectedCatogery(["dessert", "rice", "drink", "starters"])
    else (setselectedCatogery(catogery));

  };
  const sortHandler = (event: React.MouseEvent) => {

    const id= event.currentTarget.id;
    console.log(id)

const tempData=product.sort((a, b) => (a.name> b.name) ? 1 : -1);
console.log(tempData);
setProduct(tempData);
};

  console.log(selected)
  return (
    <table className={classes.items}>
      <tbody>
        <tr>
          <th colSpan={4}>Nutrition</th>
          <th colSpan={2}><label htmlFor="catogery">Choose a catogery:</label>
            <select onChange={catogeryHandler} name="catogerys" id="catogerySelected" >
              <option value="All" >All</option>
              <option value="dessert">Dessert</option>
              <option value="rice">Rice</option>
              <option value="drink">Drink</option>
              <option value="starters">Starters</option>
            </select></th></tr>
        {selected.length > 0 && <tr>
          <th colSpan={5}>Items selected : {selected.length}</th>
          <th><button onClick={removeHandler} className={classes.delete}> Delete </button></th></tr>}
        <tr>
          {selected.length > 0 && <th >Select</th>}
          <th onClick={sortHandler} id="Name">Name</th>
          <th>calories</th>
          <th>fat</th>
          <th>carbs</th>
          <th>protiens</th>
        </tr>
        {product.map((item) => (
          selectedCatogery.includes(item.catogery) && <tr key={item._id} onClick={selectHandler} className={selected.includes(item._id) ? classes.selected : ""}>
            {selected.length > 0 && <td><input type="checkbox" checked={selected.includes(item._id)} /></td>}
            <td id={item._id} >{item.name}</td>
            <td>{item.calories}</td>
            <td>{item.fat}</td>
            <td>{item.carbs}</td>
            <td>{item.protiens}</td>
          </tr>
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