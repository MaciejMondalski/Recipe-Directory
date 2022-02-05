import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import styled from 'styled-components';

function Recipe() {
  const { id } = useParams();
  const url = 'http://localhost:3000/recipes/' + id;
  const { data: recipe, error, isPending } = useFetch(url);

  return (
    <StyledRecipe>
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
    </StyledRecipe>
  );
}

const StyledRecipe = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  text-align: center;
  background: #fff;
  padding: 40px;
  margin: 40px;
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
`;

export default Recipe;
