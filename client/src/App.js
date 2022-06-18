// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Clients from './components/Clients'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
// import Home from './pages/Home'
// import Project from './pages/Project'
// import NotFound from './pages/NotFound'
import AddClientModal from './components/AddClientModal'

// cache react devtools warning fix
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming
          },
        },
      },
    },
  },
})

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
})

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className='container'>
          <AddClientModal />
          <Clients />
        </div>
      </ApolloProvider>
    </>
  )
}

export default App
