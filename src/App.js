import React from 'react';
import './style.css';

const App = () => {
  const [list, setList] = React.useState([]);
  const [value, setValue] = React.useState('');

  const addToList = () => {
    // let tempArr = list;
    // tempArr.push(value);
    // Operateur de diffusion
    setList([...list, value]);
    setValue('');
  };

  return (
    <div className="App">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />{' '}
      <button onClick={addToList}>ADD</button>
      <ul>{list.length > 0 && list.map((item) => <li>{item} </li>)}</ul>
    </div>
  );
};

export default App;
