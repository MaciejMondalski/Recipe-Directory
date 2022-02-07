import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

function Searchbar() {
  const [term, setTerm] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${term}`);
  };

  return (
    <StyledSearchbar>
      <form onSubmit={handleSubmit}>
        <label htmlFor='search'></label>
        <input
          type='text'
          id='search'
          onChange={(e) => setTerm(e.target.value)}
          required
          placeholder='Search'
        />
      </form>
    </StyledSearchbar>
  );
}

const StyledSearchbar = styled.div`
  display: flex;
  align-items: center;
  form {
    display: flex;
    align-items: center;
    color: white;
  }

  input {
    margin-left: 10px;
    padding: 5px;
  }
`;

export default Searchbar;
