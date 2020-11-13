import React , {lazy , Suspense} from 'react'
import { Skeleton } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const HomePage = lazy(() => import('./Pages/Home'))
const Writepage = lazy(() => import('./Pages/Write'))
class App extends React.PureComponent{
    render(){
        return(
            <Suspense fallback={<Skeleton active/> }>
                <Router>
                    <Switch>
                        <Route path="/Home">
                            <HomePage/>
                        </Route>
                        <Route path="/Write">
                            <Writepage/>
                        </Route>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                    </Switch>
                </Router>
            </Suspense>
        )
    }

}
export default App
