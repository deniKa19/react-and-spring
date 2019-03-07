import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import ArrowBack from '@material-ui/icons/ArrowBack';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import '../css/AllAds.css';

class IndividualAd extends Component {
    state = {
        shownAd: {
            title: "",
            price: "",
            description: ""
        },
        isLoading: false
    };

    componentDidMount() {
        this.setState({isLoading: true});
        setTimeout(() => {
            axios.get(`/api/one-ad?ad_id=${this.props.match.params.id}`)
                .then(res => this.setState({
                    shownAd: res.data,
                    isLoading: false
                }))
        }, 2)

    }

    render() {
        return (
            <React.Fragment>
                <Card className={`big-ad-cont`}>
                    <CardContent>
                        <div className="big-ad-header">
                            <Typography component="h3" variant="h3" gutterBottom className={"big-ad-header"}>
                                {this.state.shownAd.title}
                            </Typography>
                            <Button size="small" color="secondary">
                                Share
                            </Button>
                        </div>
                        <Typography component="h4" variant="h4" gutterBottom>
                            $ {this.state.shownAd.price}
                        </Typography>
                        <div className="ad-description">
                            <Typography component="p">
                                {this.state.shownAd.description}
                            </Typography>
                        </div>
                    </CardContent>
                    <CardActions className={"action-cont"}>

                        <Button variant="outlined">
                            Contact Seller
                        </Button>
                        <Button variant="contained" color="primary" className={"save-ad-butt"}>
                            Save
                        </Button>
                    </CardActions>
                    <Fab color="primary" aria-label="Add" className={"back-button"}>
                        <div onClick={this.props.history.goBack}>
                            <ArrowBack/>
                        </div>
                    </Fab>
                </Card>
            </React.Fragment>
        )


    }
}

export default IndividualAd;

// on delete of an ad, show a snackbar
