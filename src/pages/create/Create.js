import { useState, useRef } from 'react';
import { projectFirestore } from '../../firebase/config';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

function Create() {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const doc = {
      title,
      ingredients,
      method,
      cookingTime: cookingTime + ' minutes',
    };
    try {
      await projectFirestore.collection('recipes').add(doc);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngerdients) => [...prevIngerdients, ing]);
    }
    setNewIngredient('');
    ingredientInput.current.focus();
  };

  return (
    <StyledCreate>
      <h2 className='page-title'>Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe ingredients</span>
          <div className='ingredients'>
            <input
              type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className='btn'>
              add
            </button>
          </div>
        </label>
        <p>
          Current ingredients:{' '}
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>

        <label>
          <span>Recipe method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking time (minutes):</span>
          <input
            type='number'
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className='btn'>submit</button>
      </form>
    </StyledCreate>
  );
}

const StyledCreate = styled.div`
  color: #555;
  max-width: 580px;
  margin: auto;
  padding: 0 40px;

  h2 {
    margin: 0;
  }

  span {
    display: inline-block;
    margin: 30px 0 10px;
  }

  p {
    font-size: 0.8em;
    margin-top: 10px;
  }

  .ingredients-label {
  }

  .ingredients {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;

    button {
      margin: 0 0 0 10px;
    }
  }

  button {
    display: block;
    width: 100px;
    font-size: 1em;
    color: #fff;
    padding: 8px 20px;
    border: 0;
    border-radius: 4px;
    background: #58249c;
    cursor: pointer;
    text-decoration: none;
    margin: 20px auto;
  }
`;

export default Create;
