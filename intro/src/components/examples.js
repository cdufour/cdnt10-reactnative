import { useState } from 'react';

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

function Player({ firstname, lastname, inActivity, onChangeActivity }) {

  const [active, setActive] = useState(inActivity);

  lastname = lastname.toUpperCase();

  //var active = inActivity ? 'En activité' : 'Retraité';
  //if (!inActivity) return (<p>Retour prématuré...</p>);

  const changeActive = () => {
    setActive(!active);
    onChangeActivity(!active);
  }

  return (
    <p>Prénom: { firstname }, Nom: { lastname } 
      <span onClick={() => { changeActive() }}>({ active ? 'actif' : 'inactif' })</span></p>
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

  let numActive = dataSource
    .filter((player) => player.inActivity)
    .length;

  const [numActivePlayers, setNumActivePlayers] = useState(numActive);

  const players = dataSource.map(({id, lastname, firstname, inActivity}) => 
    <Player 
      key={id} 
      lastname={lastname} 
      firstname={firstname} 
      inActivity={inActivity}
      onChangeActivity={(active) => { 
        if (active) {
          setNumActivePlayers(numActivePlayers + 1);
        } else {
          setNumActivePlayers(numActivePlayers - 1);
        }
      }}
    /> );


  return(
    <>
      <h3>PlayerList Component</h3>
      <p>Nombre de joueurs actifs: { numActivePlayers }</p>
      { players }
    </>
  )
}