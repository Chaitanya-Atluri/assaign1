import  {  gql  }  from  "apollo-server-micro"; 

export  const  typeDefs  =  gql`
    type  Item{
    catogery: String
    id: ID
    name: String
    calories: String
    protiens: String
    carbs: String
    fat: String
    }

    type  Query {
        getItems: [Item]
    }`