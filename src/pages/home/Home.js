import { projectFirestore } from '../../firebase/config';
import styled from 'styled-components';
import RecipeList from '../../components/RecipeList';
import { useEffect, useState } from 'react';

function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection('recipes')
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError('No recipes to load');
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, []);

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
  margin-top: auto;
`;

export default Home;
