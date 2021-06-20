import mongoose from 'mongoose'
export const resolvers = {
  Query: {
    getItems: async (_parent, _args, _context, _info) => {
      const data=await _context.db.collection('items').find().toArray()
      const newdata = data.map((item)=>{
        item._id = item._id.toString(),
        item.catogery=item.catogery,
        item.name=item.name,
        item.calories=item.calories,
        item.fat=item.fat,
        item.carbs=item.carbs,
        item.protiens=item.protiens
      })
      console.log(typeof(data[0]._id))
      return data
    },
  },
  Mutation: {
    deleteItems: async (_parent, _args, _context, _info) => {
      const ids= _args.id.map((id)=> {return mongoose.Types.ObjectId(id)})
       ids.map((id)=>{
        _context.db.collection('items').deleteOne({_id:id})
       })
      return _context.db.collection('items').find().toArray()
    }
  }
}
