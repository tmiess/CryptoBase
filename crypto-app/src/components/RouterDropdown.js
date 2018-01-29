import React from 'react';
import { withRouter  } from 'react-router-dom';
import {  MenuItem } from 'react-bootstrap';

class NavItemWithoutRouter extends React.Component {
 
 constructor(props) {
         super(props);
         this.handleLink = this.handleLink.bind(this);
     }
    
    handleLink(path) {
        this.props.history.push(path);
    }

    render() {
        const { to, eventKey, children, onSelect } = this.props;
        return (
            <MenuItem eventKey={eventKey} onSelect={onSelect} onClick={()=>this.handleLink(to)}>
                {children}
            </MenuItem>
        );
    }
}

const RouterNavItem = withRouter(NavItemWithoutRouter)
export default RouterNavItem;