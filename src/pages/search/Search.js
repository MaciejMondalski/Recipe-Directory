import { useFetch } from '../../hooks/useFetch';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

// components
import RecipeList from '../../components/RecipeList';
import { useTheme } from '../../hooks/useTheme';

function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');
  const { mode } = useTheme();

  const url = 'http://localhost:3000/recipes?q=' + query;

  const { error, isPending, data } = useFetch(url);

  return (
    <StyledSearch>
      <h2 className={`page-title ${mode}`}>Recipes including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </StyledSearch>
  );
}

const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;

  // dark mode
  .dark {
    color: #777;
  }
  h2 {
    margin-top: 0;
  }
`;

export default Search;
