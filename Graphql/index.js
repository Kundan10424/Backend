import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';


async function startServer() {
    const app = express()

    const typeDefs = `
    type Todo{
    id: ID!
    title: String!
    completed: Boolean!
    user: User
    }

    type User{
    id: ID!
    name: String!
    username: String!
    email: String!
    phone: String!
    website: String!
    todos: [Todo]
    }
    
    type Query{
    getTodos: [Todo!]!
    getUsers: [User!]!
    getUserById(id: ID!): User
    }
    
    type Mutation{
    createTodo(title: String!, userId: ID!): Todo!
    }
    `

    const resolvers = {
        Query:{
            getTodos: async() => {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
                return response.data
            },

            getUsers: async() => {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                return response.data
            },

            getUserById: async(_, {id}) =>{
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                return response.data
            }
        },

        Mutation:{
            createTodo: async(_, {title, userId}) => {
                const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
                    title,
                    userId,
                    completed: false
                })
                return response.data
            }
        }
    }

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        introspection: true
    })

    await server.start();

    app.use('/graphql', cors(), express.json(), expressMiddleware(server));



    app.listen(4000, () => {
        console.log(`Server is running on http://localhost:4000/graphql`);
    })
}

startServer();
