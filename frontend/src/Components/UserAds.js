import React, {Component} from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import ManyAdsDisplay from "./ManyAdsDisplay";
import axios from 'axios';
import '../css/AllAds.css';
import '../css/Login.css';

class AllAds extends Component {
    state = {
        ads: []
    };
    componentDidMount(){
        setTimeout(() => {
            this.fetchUserAds(this.props.userId)
        }, 100)
    }
    fetchUserAds = userId => {
        this.props.loadingHandler();
        axios.get(`/api/user-ads?id=${userId}`).then(res => {
            this.setState({ads: res.data});
            this.props.loadingHandler();
        })
    };
    deleteAd = adId => {
        this.props.loadingHandler();
        axios.delete(`/api/delete-ad?ad_id=${adId}`)
            .then(() => {
                this.props.loadingHandler();
                this.fetchUserAds(this.props.userId);
                this.props.successHandler();
            })
            .catch(error => console.log(error))
    };
    render() {
        return (
            <React.Fragment>
            <div>
                <Typography component="h5" variant="h5" gutterBottom className={"user-ads-header"}>
                    Check out your ads, {this.props.name}
                </Typography>
                <ManyAdsDisplay ads={this.state.ads}
                                userId={this.props.userId}
                                deleteAd={this.deleteAd}
                />
            </div>

            </React.Fragment>
        )
    }
}

export default AllAds;
