import React from "react";
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FunctionComponent = () => {
    const history= useHistory();
    return (
        <React.Fragment>
            <h1>Hello!</h1>
            <p> This is a useless page. You already now who i am</p>
            <button className='btn' onClick={()=> history.push('/')}>Go back</button>
        </React.Fragment>
    )
}