import { Key } from "./Key";

export function VirtualKb({onSelectKey}) {

  const numbers         = [0,1,2,3,4,5,6,7,8,9];
  const padding         = ['','','','','','']; // 6 * ''
  const keyValuesInit   = numbers.concat(padding);
  var keyValues         = [...keyValuesInit]; // copy (spread operator)

  function randomIndex(max) {
    // renvoie une valeur comprise entre 0 et max
    return Math.floor(Math.random() * max);
  }

  function pickValue() {
    var max = keyValues.length;
    return keyValues.splice(randomIndex(max), 1)[0];
  }

  function onSelect(value) {
  
    onSelectKey(value);
  }


  const rows = Array(4).fill(null).map((row, index) => {

    const keys = Array(4).fill(null).map((key, index) => {

      let value = pickValue();
      return <Key key={index} onSelect={onSelect} value={value} />

    })

    return(<div key={index} className="row">{ keys }</div>);

  });


  return(<>
    { rows }
  </>)
}