import React, { Component } from 'react';

//Crear Context

const LaLigaContext = React.createContext();
export { LaLigaContext };

class LaLigaProvider extends Component {
    state = {
        teams: [
            {
                name: 'Real Madrid',
                titles: 33
            },
            {
                name: 'Barcelona',
                titles: 25
            },
            {
                name: 'Atlético de Madrid',
                titles: 10
            }
        ]
    }
    render() {
        return (

            <LaLigaContext.Provider value={{
                state: this.state.teams,
                champ: (id)=>{
                    const teams = [...this.state.teams];
                    teams[id].titles +=1;
                    this.setState({
                        state : teams
                    })
                }

            }}>

                {this.props.children}

            </LaLigaContext.Provider>

        );
    }
}

export default LaLigaProvider;