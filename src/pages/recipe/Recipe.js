import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { projectFirestore } from '../../firebase/config';
import { useTheme } from '../../hooks/useTheme';
import styled from 'styled-components';

function Recipe() {
  const { id } = useParams();
  const { mode } = useTheme();

  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore
      .collection('recipes')
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError('Could not find that recipe');
        }
      });
    return () => unsub();
  }, [id]);

  const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title: 'Something completely different',
    });
  };

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
            <button onClick={handleClick}>Update me</button>
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

    button {
      margin: auto;
    }

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
