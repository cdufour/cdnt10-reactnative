export function Simple() {
  return (
    <p>Simple paragraph</p>
  )
}

export function Simple2(props) {
  return (
    <p>Message: { props.message }</p>
  )
}

// function Player(props) {
//   let { firstname, lastname } = props;
//   lastname = lastname.toUpperCase();
//   return (
//     <p>Prénom: { firstname }, Nom: { lastname }</p>
//   )
// }

function Player({ firstname, lastname, inActivity }) {
  lastname = lastname.toUpperCase();

  var active = inActivity ? 'En activité' : 'Retraité';

  if (!inActivity) return (<p>Retour prématuré...</p>);

  return (
    <p>Prénom: { firstname }, Nom: { lastname } 
      <span onClick={() => { active = '...'; console.log(active) }}>({ active })</span></p>
  )
}

// export function PlayerList(props) {
//   return(
//     <>
//       <Player firstname="Leo" lastname="Bonucci" />
//       <Player firstname="Giorgio" lastname="Chiellini" />
//     </>
//   )
// }

export function PlayerList({ dataSource }) {

  const players = dataSource.map(({id, lastname, firstname, inActivity}) => 
    <Player 
      key={id} 
      lastname={lastname} 
      firstname={firstname} 
      inActivity={inActivity} 
    /> );
  
  return(
    <>
      { players }
    </>
  )
}