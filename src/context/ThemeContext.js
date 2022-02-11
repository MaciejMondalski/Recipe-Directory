import { createContext } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  return (
    <div className=''>
      <ThemeContext.Provider value={{ color: 'blue' }}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}
