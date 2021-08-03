export function Key({onSelect, value}) {


  if (value !== '') {
    return (<div onClick={ () => onSelect(value) } className="key">{value}</div>)
  }

  return(
    <div className="key">{value}</div>
  )
}