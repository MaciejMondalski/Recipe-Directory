import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from './hooks/useTheme';

// page components
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';

// individual components
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';

import './App.scss';

function App() {
  const { mode } = useTheme();

  return (
    <div>
      <StyledApp>
        <div className={`App ${mode}`}>
          <BrowserRouter>
            <Navbar />
            <div className='main-content'>
              <ThemeSelector />
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
            </div>
          </BrowserRouter>
        </div>
      </StyledApp>
    </div>
  );
}

const StyledApp = styled.div`
  .App {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

    .main-content {
      margin-top: 60px;
    }
  }
  .App.dark {
    background: #333;
  }
`;

export default App;
