import React from 'react'
import { Route, NavLink } from "react-router-dom";
import requireAuth from '../requireAuth'
import '../HeaderStyle.css';

import DisplayDptComponent from './DisplayDptComponent'
import DisplayEmpComponent from './DisplayEmpComponent'

class DisplayUIComponent extends React.Component {
    render() {
        const { match } = this.props
        return (
            <div>
                <div style={{ "backgroundColor": "black" }}>
                    <br />
                    <p align="center">
                        <NavLink to={`${match.url}/departments`} className="navLink" activeStyle={{ color: 'blue', fontSize: 'bold' }}>Show Courses</NavLink>
                        <NavLink to={`${match.url}/employees`} className="navLink" activeStyle={{ color: 'blue', fontSize: 'bold' }}>Show Instructors</NavLink>
                    </p>
                    <br />
                </div>
    
                <Route path={`${match.url}/departments`} exact component={DisplayDptComponent} />
                <Route path={`${match.url}/employees`} exact component={DisplayEmpComponent} />
            </div>
        )
    }
}

export default requireAuth(DisplayUIComponent)