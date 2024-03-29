import './App.css';
import Container from '@material-ui/core/Container';
import {Header} from './components/Header/Header';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
// import {RouterBreadcrumbs} from './components/Breadcrumbs/Breadcrumbs';
import {FAQ} from './components/FAQ/FAQ';
import { Route, Switch } from 'react-router';
import {Homepage} from './components/Homepage/Homepage';
import Breadcrumbs from './components/Breadcrumbs';

function App() {
  return (
    // <Container maxWidth="sm">
       <div className="App">
        <Header />
        <Breadcrumbs />
        <Switch>
          <Route path='/' exact component={Homepage}>

          </Route>
          <Route path='/FAQ'>
            
            <FAQ />
          </Route>
        </Switch>  
        
      </div>
    // </Container>
  );
}

export default App;
