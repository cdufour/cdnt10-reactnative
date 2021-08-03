import { useState } from "react";
import './FormDemo.css';

export function FormDemo() {

  const [input, setInput] = useState('');
  const [selectedColor, setSelectedColor] = useState('#ccc');
  const [mood, setMood] = useState('Mécontent');
 
  const onKeyUp = (e) => {
    //console.log(e.target.value)
    setInput(e.target.value);
  };

  const onChangeColor = (e) => {
    setSelectedColor(e.target.value);
  };

  const onChangeMood = (e) => {
    const mood = e.target.checked ? 'Content' : 'Mécontent';
    setMood(mood);
  };

  const onClick = (e) => {
    const data = {input, selectedColor, mood, token: '123abc'};
    
    // exemple de requête ajax contenant nos entrées de formulaire
    fetch('http://fakeapi.com', { 
      method: 'POST', 
      body: JSON.stringify(data)
    })
  };

  const colors = [
    {name: 'Rouge', css: 'red'},
    {name: 'Vert', css: 'green'},
    {name: 'Bleu', css: 'blue'},
    {name: 'Violet clair', css: '#cc80ff'}
  ].map((color, index) => <option key={index} value={color.css}>{color.name}</option>);

  return (
    <>
      <h3>FormDemo Component</h3>
      <input onKeyUp={ onKeyUp } type="text" />
      <span>{ input }</span>

      <select onChange={ onChangeColor }>
        { colors }
      </select>

      <div 
        className="square" 
        style={{ backgroundColor: selectedColor}}></div>

      <input type="checkbox" onChange={ onChangeMood } />
      <label>{ mood }</label>

      <button onClick={ onClick }>Valider</button>

    </>
  )
}