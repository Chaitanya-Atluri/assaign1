import mongoose from 'mongoose'
export const resolvers = {
  Query: {
    getItems: async (_parent, _args, _context, _info) => {
      const data=await _context.db.collection('items').find().toArray()
      console.log("here")
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
