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
          placeholder='Search recipes'
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
    margin: 0 10px 0 10px;
    padding: 5px;
    border-radius: 6px;

    width: 100%;
    padding: 9px 4px 9px 40px;
    background: rgba(245, 246, 247, 1)
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
      no-repeat 13px center;

    ::placeholder {
      color: rgba(173, 177, 179, 1);
      font-size: 0.8em;
    }
  }
`;

export default Searchbar;
