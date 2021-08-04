export function PasswordBox({boxes, onReset}) {

  const b = boxes.map((box, index) => 
    <div key={index} className="box">{box}</div>)

  return(
    <>
      { b }
      <div onClick={onReset} className="box close pointer">X</div>
    </>)
}