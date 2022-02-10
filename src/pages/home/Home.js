import { useFetch } from '../../hooks/useFetch';
import styled from 'styled-components';
import RecipeList from '../../components/RecipeList';

function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/recipes');

  return (
    <StyledHome>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </StyledHome>
  );
}

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80vw;
  margin-top: 40px;
`;

export default Home;
