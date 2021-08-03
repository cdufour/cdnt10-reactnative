export function PasswordBox({boxes}) {

  const b = boxes.map((box, index) => 
    <div key={index} className="box">{box}</div>)

  return(<>{ b }</>)
}