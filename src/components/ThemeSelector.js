import styled from 'styled-components';
import { useTheme } from '../hooks/useTheme';

const themeColors = ['#58249c', '#249c6b', '#b70233'];

function ThemeSelector() {
  const { changeColor } = useTheme();

  return (
    <StyledThemeSelector>
      <div className='theme-buttons'>
        {themeColors.map((color) => (
          <div
            key={color}
            onClick={() => changeColor(color)}
            style={{ background: color }}
          />
        ))}
      </div>
    </StyledThemeSelector>
  );
}

const StyledThemeSelector = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 80vw;
  margin: 20px auto;

  .theme-buttons div {
    display: inline-block;
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-left: 15px;
    border-radius: 50%;
  }
`;

export default ThemeSelector;
