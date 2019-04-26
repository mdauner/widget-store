import React from 'react'
import gql from 'graphql-tag'
import logo from './logo.svg'
import './App.css'
import { useQuery } from 'react-apollo-hooks'

const GET_ALL_WIDGETS = gql`
    query allWidgets {
        widgets {
            name
        }
    }
`

function App() {
    const { data, error, loading } = useQuery(GET_ALL_WIDGETS)
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error! {error.message}</div>
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{data.widgets.map(widget => widget.name)}</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
