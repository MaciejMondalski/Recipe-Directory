import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

// page components
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';

// individual components
import Navbar from './components/Navbar';

import './App.scss';

function App() {
  return (
    <div>
      <StyledApp>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/create'>
              <Create />
            </Route>
            <Route exact path='/search'>
              <Search />
            </Route>
            <Route exact path='/recipes/:id'>
              <Recipe />
            </Route>
          </Switch>
        </BrowserRouter>
      </StyledApp>
    </div>
  );
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
