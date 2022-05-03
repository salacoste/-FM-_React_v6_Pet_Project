import ReactDOM from 'react-dom';
import SearchParam from './components/searchParam/searchParam';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { StrictMode } from 'react';
import Details from './components/details/Details';
import { Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import ThemeContext from './components/themeContext/ThemeContext';
import { useState } from 'react';


// import 'regenerator-runtime/runtime'




const App = () => {
const color = useState("darkblue")
    return (
        <ThemeContext.Provider value={color}>
        <div>
            <Router>
                <header>
                    <Link to={"/"}>
                        <h1>Adopt Me</h1>
                    </Link>
                </header>
                <Switch>
                    <Route path={"/details/:id"}>
                        <ErrorBoundary>
                        <Details />
                        </ErrorBoundary>
                    </Route>
                    <Route path={"/"}>
                        <SearchParam />
                    </Route>
                </Switch>
            </Router>
        </div>
        </ThemeContext.Provider>
    )

//   return React.createElement("div", {}, [
//     React.createElement("h1", {key: 23}, "Adopt Me"),
//     React.createElement(Pets),
//   ]);
};

ReactDOM.render(
    (
    <StrictMode>
            <App/>
    </StrictMode>
    ), 
    document.getElementById("root"));
