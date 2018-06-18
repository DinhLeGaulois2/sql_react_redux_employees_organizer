import React from 'react'
import requireAuth from '../requireAuth'
import { Route, NavLink } from "react-router-dom";
import '../HeaderStyle.css';

import AddDptComponent from './AddDptComponent'
import AddEmpComponent from './AddEmpComponent'

class AddUIComponent extends React.Component {
    render() {
        const { match } = this.props
        return (
            <div>
                <div style={{ "backgroundColor": "black" }}>
                    <br />
                    <p align="center">
                        <NavLink to={`${match.url}/department`} className="navLink" activeStyle={{ color: 'blue' }}>Add Department</NavLink>
                        <NavLink to={`${match.url}/employee`} className="navLink" activeStyle={{ color: 'blue' }}>Add Employee</NavLink>
                    </p>
                    <br />
                </div>
                <Route path={`${match.url}/department`} exact component={AddDptComponent} />
                <Route path={`${match.url}/employee`} exact component={AddEmpComponent} />
            </div>
        )
    }
}

export default requireAuth(AddUIComponent)