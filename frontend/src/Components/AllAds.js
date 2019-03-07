import React, {Component} from 'react';
import * as actions from '../store/actions';
import {connect} from 'react-redux';
import '../css/AllAds.css';
import Typography from "@material-ui/core/Typography/Typography";
import ManyAdsDisplay from "./ManyAdsDisplay";
import axios from "axios";


class AllAds extends Component {
    state = {
        ads: []
    };
    componentDidMount(){
        this.fetchAllAds()
    }
    fetchAllAds = () => {
        this.props.loadingHandler();
        axios.get(`/api/ads`).then(res => {
            console.log(res.data);
            this.setState({ads: res.data});
            this.props.loadingHandler();
        })
    };
    render() {
        return (
            <React.Fragment>
                <div className={`all-ads-cont`}>
                    <Typography component="h4" variant="h4" gutterBottom className={"all-ads-header"}>
                        Search the glorious ads
                    </Typography>
                    <ManyAdsDisplay ads={this.state.ads}/>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(null, actions)(AllAds);
