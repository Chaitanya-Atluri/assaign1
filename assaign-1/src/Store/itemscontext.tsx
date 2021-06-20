// import Items from "../Models/Items";
// import React,{useState,useEffect} from 'react';
// import gql from 'graphql-tag'
// import { useQuery } from '@apollo/react-hooks'
// const UsersQuery = gql`
//   query getItems {
//       catogery,
//       name,
//       calories,
//       fat,
//       carbs,
//       protiens,
//       id
//   }`



// type itemContext={
//     products: Items[];
//     removeItem: (selected: string[]) => void;

//   };

// export const ItemsContext = React.createContext<itemContext>({
//   products: [],
//   removeItem: (selected: string[]) => {},
  
// });

// const ItemsContextProvider: React.FC = (props) => {
//   console.log("herwergergergr");

//   const { loading, error, data } = useQuery(UsersQuery)
//   const[items,setItems]=useState<Items[]>([]);
//   useEffect(()=>{
//     setItems(data);
//   },[])
  
//   const removeHandler =(selected:string[]) => {
//     selected.map((id)=>{
//       setItems((prev)=>{
//         return prev.filter(todo =>todo.id !== id);
//       })
//     });
//   };

//   const contextValue : itemContext = ({
//     products : items,
//     removeItem: removeHandler
//   });
//   return <ItemsContext.Provider value={contextValue}>{props.children}</ItemsContext.Provider>;
// };

// export default ItemsContextProvider;