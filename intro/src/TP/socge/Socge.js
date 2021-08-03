import './Socge.css';
import { useState } from 'react';
import { VirtualKb } from './VirtualKb';
import { PasswordBox } from './PasswordBox';

export function Socge() {
  const PASSWD_MAX_LEN  = 6;

  const [cond, setCond] = useState(false);
  const [boxes, setBoxes] = useState(Array(6).fill('_'));
  const [boxIndex, setBoxIndex] = useState(0);

  function checkConditions(e) {
    let value = e.target.value;
    let cond = value.length === 8 && Number.isInteger(+value);
    setCond(cond);
  }

  function onSelectKey(value) {

    if (boxIndex < PASSWD_MAX_LEN) {
      let newBoxes = [...boxes];
      newBoxes[boxIndex] = '*';
      setBoxes(newBoxes);
      setBoxIndex(boxIndex + 1);
    }

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
        <button className="btnSwitch">non</button>
        <span>Se souvenir de moi</span>
        <span className="btnInfo">i</span>
        <div id="infoBox" className="hide">
            <p>Se souvenir de moi</p>
            <p>En cochant cette case, votre code client sera mémorisé sur cet appareil.</p>
            <p>De cette manière vous n'aurez plus à le saisir lors de vos prochaines connexions.</p>
            <p>Ceci est déconseillé si votre ordinateur est utilisé par d'autres personnes.</p>
        </div>
    </div>
    
    <PasswordBox boxes={boxes} />
    <div className="clearfix"></div>
    <VirtualKb onSelectKey={onSelectKey} />
    
    <div className="clearfix"></div>
    <button 
      onClick={() => console.log('ok')} 
      id="btnValid" 
      disabled={!cond}
      className="btn">Valider</button>
    </>)
}