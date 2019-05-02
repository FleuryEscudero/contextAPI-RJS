import React, { Component } from 'react';
import { LaLigaContext } from './LaLiga';

class Team extends Component {

    render() {

        return (
            <LaLigaContext.Consumer>
                {(value) => {
                    return Object.keys(value.state).map(teamId => {
                        return (
                            <li className="list-group-item d-flex justify-content-between 
                            align-items-center" key={teamId}>
                                <p className="m-0">{value.state[teamId].name}
                                <span className="ml-4 badge badge-danger">{value.state[teamId].titles}</span>
                                </p>
                                <button onClick={()=>{
                                    value.champ(teamId);
                                }} className="btn btn-success" type="button">
                                    Es Campeón
                                </button>
                            </li>
                        )
                    })
                }}
            </LaLigaContext.Consumer>

            /*     */

        );
    }
}

export default Team;