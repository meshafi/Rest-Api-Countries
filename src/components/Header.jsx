import moon from '../assets/moon.png';
import sun from '../assets/sun.png';
import { ThemeContext } from './ThemeContext'; 
import { useContext,useState } from 'react';
export const Header=()=>{
    const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode((mode) => (mode === 'light' ? 'dark' : 'light'));
  };


    const { toggleTheme } = useContext(ThemeContext);
    const onClick= ()=>{
        toggleTheme();
        toggleMode();
    }
    return (
        <div className="header">
            <h2>Where in the world?</h2>
            
            <div className='Dark_Mode'onClick={onClick}>
            <img src={mode==='light'?sun :moon}/> 
                <p>{mode === 'light' ? 'Light Mode' : 'Dark Mode'}</p>
            </div>
            </div>
    )
}