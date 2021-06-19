export const resolvers = {
  Query: {
    getItems(_parent, _args, _context, _info) {
      return _context.db
        .collection('item')
        .findOne()
        .then((data) => {
          return data.items
        })
    },
  },
}
