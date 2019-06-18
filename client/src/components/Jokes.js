import React from 'react';
import api from '../helpers/api';
import withAuth from '../helpers/auth';

class Jokes extends React.Component {
    state = {
        jokes: [],
    }

    async componentDidMount() {
        try {
            const result = await api.get('/jokes');

            this.setState({
                jokes: result.data,
            })
        } catch(err) {
            console.error(err);
        }
    }

    render() {
        return (
            <>
                <h1>Jokes</h1>

                <ul>
                    {this.state.jokes.map((jokes, i) => {
                        return <li key={i}>{jokes.joke}</li>
                    })}
                </ul>
            </>
        );
    }
}

export default withAuth(Jokes);
