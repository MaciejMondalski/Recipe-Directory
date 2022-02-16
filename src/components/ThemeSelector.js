import styled from 'styled-components';
import { useTheme } from '../hooks/useTheme';
import modeIcon from '../assets/mode-icon.svg';

const themeColors = ['#58249c', '#249c6b', '#b70233'];

function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme();

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark');
  };
  console.log(mode);

  return (
    <StyledThemeSelector>
      <div className='mode-toggle'>
        <img
          src={modeIcon}
          onClick={toggleMode}
          alt='dark/light toggle icon'
          style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)' }}
        />
      </div>
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

  .mode-toggle {
    margin-right: auto;

    img {
      width: 24px;
      height: 24px;
      cursor: pointer;
    }
  }
`;

export default ThemeSelector;
