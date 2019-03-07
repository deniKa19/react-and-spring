import React, {Component} from 'react';
import * as actions from '../store/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import '../css/Landing.css';
import Button from '@material-ui/core/Button';

class Landing extends Component {
    componentDidMount(){
        this.props.fetchUser()
    }
    render() {
        return (
            <React.Fragment>
                <div className="landing-cont">
                    <Typography component="h4" variant="h4" gutterBottom className={"landing-header"}>
                        Welcome to Buy, Sell, Bye!
                    </Typography>
                    <div className="intro-text">
                        <Typography component="h6" variant="h6" gutterBottom className={"landing-sub-header"}>
                            The first words in the raging San Antonio service and item selling scene
                        </Typography>
                        <Typography component="p" className={"landing-text"}>
                            First words
                        </Typography>
                    </div>
                    <div className="btn-cont">
                        <Link to={"/about"}><Button className={"landing-about-btn"} variant="outlined" color="default"><div>Learn More</div></Button></Link>
                        <Link to={"/ads"}><Button className={"landing-ads-btn"} variant="contained" color="primary"><div>See the Ads</div></Button></Link>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default connect(null, actions)(Landing);
