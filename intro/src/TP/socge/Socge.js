import './Socge.css';
import { useState } from 'react';
import { VirtualKb } from './VirtualKb';
import { PasswordBox } from './PasswordBox';
import { SwitchBtn } from './SwitchBtn';

export function Socge() {
  const PASSWD_MAX_LEN  = 6;

  const [cond, setCond] = useState(false);
  const [boxes, setBoxes] = useState(Array(6).fill('_'));
  const [boxIndex, setBoxIndex] = useState(0);
  const [vkbOn, setVkbOn] = useState(false);
  const [infoOn, setInfoOn] = useState(false);

  function checkConditions(e) {
    let value = e.target.value;
    let cond = value.length === 8 && Number.isInteger(+value);
    setCond(cond);
    if (!cond) setVkbOn(false);
  }

  function onSelectKey(value) {

    if (boxIndex < PASSWD_MAX_LEN) {
      let newBoxes = [...boxes];
      newBoxes[boxIndex] = '*';
      setBoxes(newBoxes);
      setBoxIndex(boxIndex + 1);
    }

  }

  function onReset() {
    setBoxes(Array(6).fill('_'));
    setBoxIndex(0);
  }

  
  return(<>
    <h1>TP Socge</h1>
    <input
      maxLength="8"
      onChange={checkConditions}
      style={{ borderBottomColor: cond ? 'green' : 'red' }}
      id="txtCodecli" 
      type="text"
      placeholder="Saisissez votre code client" />
    
    <div id="record">
        <SwitchBtn />
        <span>Se souvenir de moi</span>
        <span 
          className="btnInfo"
          onMouseEnter={() => setInfoOn(true)}
          onMouseLeave={() => setInfoOn(false)}
        >i</span>
        <div id="infoBox" className={ !infoOn ? 'hide' : ''}>
            <p>Se souvenir de moi</p>
            <p>En cochant cette case, votre code client sera mémorisé sur cet appareil.</p>
            <p>De cette manière vous n'aurez plus à le saisir lors de vos prochaines connexions.</p>
            <p>Ceci est déconseillé si votre ordinateur est utilisé par d'autres personnes.</p>
        </div>
    </div>
    
    { cond && vkbOn &&
      <>
        <PasswordBox boxes={boxes} onReset={onReset} />
        <div className="clearfix"></div>
        <VirtualKb onSelectKey={onSelectKey} />
      </>
    }

    <div className="clearfix"></div>
    <button 
      onClick={() => setVkbOn(true)} 
      id="btnValid" 
      disabled={!cond}
      className="btn">Valider</button>
    </>)
}