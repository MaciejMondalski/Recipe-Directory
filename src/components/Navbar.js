import styled from 'styled-components';
import { useTheme } from '../hooks/useTheme';
import { Link } from 'react-router-dom';
import Searchbar from './Searchbar';

function Navbar() {
  const { color, changeColor } = useTheme();

  return (
    <StyledNavbar
      style={{ background: color }}
      onClick={() => changeColor('pink')}
    >
      <nav>
        <Link to='/' className='brand'>
          <h1>Diet Planner</h1>
        </Link>
        <div className='wrapper'>
          <Searchbar />
          <Link to='/create' className='create'>
            Create Meal
          </Link>
        </div>
      </nav>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  background: linear-gradient(
    167deg,
    rgba(88, 36, 156, 1) 22%,
    rgba(68, 36, 156, 1) 58%,
    rgba(66, 36, 156, 1) 100%
  );

  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  z-index: 5;
  nav {
    display: flex;
    justify-content: space-between;
    width: 80vw;
    margin: 0.8rem auto;
    align-items: center;

    a {
      text-decoration: none;
      color: #fff;
    }

    .wrapper {
      display: flex;
      align-items: center;

      div {
        padding-right: 30px;
      }
    }

    .create {
      border: 1px solid #fff;
      border-radius: 6px;
      padding: 6px;
      height: 50%;

      &:hover {
        background: #fff;
        color: #333;
      }
    }
  }
`;

export default Navbar;
