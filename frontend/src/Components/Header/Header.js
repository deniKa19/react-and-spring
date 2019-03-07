import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoggedOutMenu from './LoggedOutMenu';
import LoggedInMenu from './LoggedInMenu';

class Header extends Component{

    determineLogin = () => {
        switch(this.props.user){
            case null:
                return;
            case false:
                return <LoggedOutMenu/>;
            default:
                return <LoggedInMenu/>;
        }
    };
    render(){
        return (
            <React.Fragment>
                {this.determineLogin()}
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
};
export default connect(mapStateToProps)(Header);