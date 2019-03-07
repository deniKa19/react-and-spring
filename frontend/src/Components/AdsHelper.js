import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import AllAdds from "./AllAds";
import UserAds from "./UserAds";
import IndividualAd from "./IndividualAd";
import CreateAd from "./CreateAd";
import {connect} from "react-redux";
import * as actions from "../store/actions";
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import Icon from "@material-ui/core/Icon"
import IconButton from '@material-ui/core/IconButton';
import '../css/AllAds.css'

class AdsHelper extends Component {
    state = {
        isLoading: false,
        successActive: false
    };


    loadingHandler = () => {
        this.setState({
            isLoading : !this.state.isLoading,
        })
    };
    successHandler = () => {
        this.setState({
            successActive: true
        })
        setTimeout(() => {
            this.setState({
                successActive: false
            })
        }, 4000)
    };
    hideSuccess = () => {
        this.setState({successActive: false})
    };

    render() {
        let name = "";
        let userId = "";
        let username = ""
        if (this.props.user != null) {
            name = this.props.user.firstName;
            userId = this.props.user.id;
            username = this.props.user.username
        }
        let style = "";
        let progressStyle = "";
        let searchHidden = "";
        if (this.state.isLoading) {
            style = "loading";
            progressStyle = "spinner-loading";
            searchHidden = "search-hidden"
        }
        let successActive = "";
        if (this.state.successActive){
            successActive = "success-message-active";
        }


        return (
            <React.Fragment>
                <div className={`daddy-ads-cont ${style}`}>
                    <Switch>
                        <Route path={"/ads"} exact render={() => <AllAdds loadingHandler={this.loadingHandler}/>}/>
                        <Route path={"/ads/show/:user"} exact render={() =>
                            <UserAds name={name} userId={userId}
                                     username={username}
                                     searchHidden={searchHidden}
                                     deleteAd={this.deleteAd}
                                     loadingHandler={this.loadingHandler}
                                     successHandler={this.successHandler}


                            />}/>
                        <Route path={"/ads/view/:id"} render={(routeProps) =>
                            <IndividualAd
                                {...routeProps}
                                deleteAd={this.deleteAd}
                            />}/>
                        <Route path={"/ads/create"} exact render={() =>
                            <CreateAd name={name}
                                      userId={userId}
                                      loadingHandler={this.loadingHandler}
                            />}/>
                    </Switch>
                </div>
                <CircularProgress className={`progress ${progressStyle}`}/>
                <div className={`success-message ${successActive}`}>
                    <CheckCircleIcon/>
                    <Typography component="p" className={'success-p'}>
                        Success!
                    </Typography>
                    <CloseIcon className={"close-icon"} onClick={this.hideSuccess}/>
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
export default connect(mapStateToProps, actions)(AdsHelper);
