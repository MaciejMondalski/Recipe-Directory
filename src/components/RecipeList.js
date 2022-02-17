import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

function RecipeList({ recipes }) {
  const { mode } = useTheme();

  if (recipes.length === 0) {
    return <div className='error'>No recipes to load...</div>;
  }

  return (
    <StyledRecipeList>
      {recipes.map((recipe) => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3 id='card-element'>{recipe.title}</h3>
          <p id='card-element'>{recipe.cookingTime} to make.</p>
          <div id='card-element'>{recipe.method.substring(0, 100)}...</div>
          <Link id='card-element' to={`/recipes/${recipe.id}`}>
            Cook this
          </Link>
        </div>
      ))}
    </StyledRecipeList>
  );
}

const StyledRecipeList = styled.div`
  font-size: 0.9em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  max-width: 90%;

  // grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 30px;
  margin: auto;
  margin-bottom: 40px;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    border-radius: 6px;
    color: #333;
    background: #fff;
    transition: all 0.3s ease;
    max-width: 450px;

    h3 {
      color: #555;
    }

    p {
      color: #999;
      font-size: 0.9em;
    }

    div {
      color: #555;
      font-size: 0.75em;
    }

    a {
      color: #555;
      text-decoration: none;
      background: #e2e2e2;
      margin: 20px auto 0;
      width: 100px;
      text-align: center;
      font-size: 0.9em;
      padding: 8px;
      border-radius: 4px;
    }

    &:hover {
      transform: scale(1.013);
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

    #card-element {
      padding: 10px;
    }
  }

  // dark mode
  .dark {
    background: #555;

    &:hover {
      transform: scale(1.013);
      box-shadow: rgba(192, 192, 192, 0.2) 0px 7px 29px 0px;
    }

    p,
    h3,
    div {
      color: #e4e4e4;
    }
  }
`;

export default RecipeList;
