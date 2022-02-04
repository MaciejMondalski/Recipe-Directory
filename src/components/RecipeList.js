import styled from 'styled-components';
import { Link } from 'react-router-dom';

function RecipeList({ recipes }) {
  return (
    <StyledRecipeList>
      {recipes.map((recipe) => (
        <div key={recipe.id} className='card'>
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
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 30px;
  margin: 40px auto;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 1px grey solid;
    padding: 20px;
    border-radius: 6px;
    color: #333;
    background: #fff;
    transition: all 0.3s ease;

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
      transform: scale(1.03);
    }

    #card-element {
      padding: 10px;
    }
  }
`;

export default RecipeList;
