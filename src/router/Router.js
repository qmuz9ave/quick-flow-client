import {Switch,Route} from 'react-router-dom'
import Home from "../pages/Home/Home"
import Login from "../pages/Auth/Login/Login"
import Signup from "../pages/Auth/Signup/Signup"
import Tag from "../pages/Tag/Tag"
import NotFound from '../pages/404/404'
import Recover from '../pages/Auth/Login/Recover'
import Question from '../pages/Question/Question'

export const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/category' component={Tag} />
            <Route exact path='/login/recover' component={Recover} />
            <Route exact path='/question' component={Question} />
            <Route path='*' component={NotFound} />
        </Switch> 
    )
    
}