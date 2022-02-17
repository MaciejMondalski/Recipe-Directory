import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useTheme } from '../../hooks/useTheme';
import styled from 'styled-components';

function Recipe() {
  const { id } = useParams();
  const url = 'http://localhost:3000/recipes/' + id;
  const { data: recipe, error, isPending } = useFetch(url);
  const { mode } = useTheme();

  return (
    <StyledRecipe>
      <div className={`wrapper ${mode}`}>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {recipe && (
          <>
            <h2 className='page-title'>{recipe.title}</h2>
            <p>Takes {recipe.cookingTime} to cook.</p>
            <div className='div-wrapper'>
              <ul>
                {recipe.ingredients.map((ing) => (
                  <li key={ing}>{ing}</li>
                ))}
              </ul>
            </div>
            <p className='method'>{recipe.method}</p>
          </>
        )}
      </div>
    </StyledRecipe>
  );
}

const StyledRecipe = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    width: 80vw;
    text-align: center;
    background: #fff;
    padding: 40px;
    box-sizing: border-box;
    max-width: 1200px;

    h2 {
      margin: 0;
    }

    p {
      margin: 0;
      padding: 20px;
    }

    ul {
      padding: 0;
      margin-top: 0;
      display: inline-block;
      text-align: left;
    }

    li {
      list-style-type: none;
      color: #777;

      &::after {
        content: ',';
      }

      &:last-child::after {
        content: '.';
      }
    }

    .method {
      text-align: left;
      line-height: 1.5em;
    }
  }

  // dark mode
  .dark {
    background: #555;
    color: #e4e4e4;
  }
`;

export default Recipe;
