import React, { Component } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions'
import Link from '@material-ui/core/Link'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import VideoLabel from '@material-ui/icons/VideoLabel';
import ListSubheader from '@material-ui/core/ListSubheader';
import CardHeader from '@material-ui/core/CardHeader';
import Person from '@material-ui/icons/Person';
import PersonAdd from '@material-ui/icons/PersonAdd';
import LibraryBooks from '@material-ui/icons/LibraryBooks';



class LoggedOutMenu extends Component{
    render(){
        const navItems = (
            <div className={"nav-items-test"}>
                <CardHeader title={"Buy, Sell, Bye"}/>
                <List>
                    <ListItem button>
                        <ListItemIcon>{<VideoLabel/>}</ListItemIcon>
                        <Link component={RouterLink} to={"/"}><ListItemText primary={'Home'}/></Link>
                    </ListItem>
                    <ListSubheader>Ads</ListSubheader>
                    <ListItem button>
                        <ListItemIcon>{<LibraryBooks/>}</ListItemIcon>
                        <Link component={RouterLink} to={"/ads"}><ListItemText primary={'Ads'}/></Link>
                    </ListItem>
                </List>
                <Divider/>
                <List>
                    <ListSubheader>Users</ListSubheader>
                    {['Login', 'Register'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <Person/> : <PersonAdd/>}</ListItemIcon>
                            <Link component={RouterLink} to={index % 2 === 0 ? "/login": "/register"}><ListItemText primary={text}/></Link>
                        </ListItem>
                    ))}
                </List>
            </div>
        );



        return (
                <Drawer variant={"temporary"} open={this.props.menuShown} onClose={this.props.closeMenu.bind(this)}>
                    <div className={"close-div"}
                    tabIndex={0}
                    role="button"
                    onClick={this.props.closeMenu}
                    onKeyDown={this.props.closeMenu}
                    onScrollCapture={this.props.closeMenu}>
                    {navItems}
                    </div>
                </Drawer>
        )
    }
}
const mapStateToProps = state => {
    return {
        menuShown: state.menuShown
    }
};
export default connect(mapStateToProps, actions)(LoggedOutMenu);



