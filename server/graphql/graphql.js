export const typeDefs = `
  type Product {
    id: ID!
    name: String!
    description: String
    price: Float!
  }
  type Query {
    getAllProducts: [Product]
  }
  type Mutation {
    signup(
        email: String!
        password: String!
        confirmPassword: String!
    ): AuthPayload
  }
  type AuthPayload {
    token: String
  }
`;

export const resolvers = {
    
    Mutation: {
    signup: (parent, args) => {
        console.log("args", args)
        console.log("parent", parent)
        // const password = await bcrypt.hash(args.password, 10);
        // const user = await context.prisma.user.create({
        //   data: {...args, password}
        // });
      
        // const token = jwt.sign({userId: user.id}, APP_SECRET);
      
        // return {
        //   token : "toekn"
        // };
      }
  }
};

// module.exports =  {resolvers, typeDefs };