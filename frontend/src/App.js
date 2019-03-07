import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from './store/actions';
import Landing from './Components/Landing';
import Profile from './Components/Profile';
import Register from "./Components/Register";
import Header from "./Components/Header/Header";
import TopNavBar from './Components/Header/TopNavBar';
import Login from "./Components/Login";
import './css/App.css';
import AdsHelper from "./Components/AdsHelper";
import UserAds from "./Components/UserAds";

class App extends Component {
    componentDidMount() {
        // reaches out and sets user-logged in to store
        this.props.fetchUser()
    }

    render() {
        let blurContent = "";
        if (this.props.menuShown) {
            blurContent = "blur-content"
        }
        return (

            <BrowserRouter>
                <React.Fragment>
                    <div className={"main-cont"} id={"top"}>
                        <Header/>
                        <TopNavBar/>
                        <main className={`main ${blurContent}`} onClick={this.props.closeMenu}>
                            <Switch>
                                <Route path={"/profile"} render={() => <Profile/>}/>
                                <Route path={"/login"} render={() => <Login/>}/>
                                <Route path={"/register"} render={() => <Register/>}/>
                                <Route path={"/ads"} render={(routeProps) => <AdsHelper {...routeProps}/>}/>
                                <Route path={"/"} exact render={() => <Landing/>}/>
                            </Switch>
                        </main>
                    </div>
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => {
    return {
        menuShown: state.menuShown
    }
};
export default connect(mapStateToProps, actions)(App);


