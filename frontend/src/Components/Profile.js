import React, {Component} from "react";
import { Link, Redirect } from 'react-router-dom';
import * as actions from '../store/actions';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux';
import '../css/Profile.css';

class Profile extends Component{
    componentDidMount(){
        this.props.fetchUser()
    }
    render(){
        if (this.props.user === false){
            return <Redirect to={"/login"}/>
        }
        let name = "";
        if (this.props.user != null){
            name = this.props.user.firstName;
        }

        return (
            <React.Fragment>
                <Typography variant="display2" gutterBottom className={"profile-header"}>
                    Welcome back, {name}
                </Typography>
                <div className="profile-body">
                    <Typography variant="subheading">
                        What would you like to do?
                    </Typography>
                </div>
                <div className="profile-actions">
                    <div className="btn-cont">
                        <Link to={`ads/show/${this.props.name}`}><Button variant="contained" color="default" className={"prof-my-btn"}><div>See My Ads</div></Button></Link>
                            <Link to={"/profile/edit"}><Button variant="outlined">Edit Profile</Button></Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};
export default connect(mapStateToProps, actions)(Profile);