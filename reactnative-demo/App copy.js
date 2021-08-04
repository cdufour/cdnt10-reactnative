import { StatusBar } from 'expo-status-bar';
import React, { useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Square } from './components/Square';

export default function App() {

  const title = "J'ai presque peur en vérité Tant je sens ma vie enlacé à la funeste pensée qui m'a pris l'âme l'autre";
  const [counter, setCounter] = useState(0);

  const onPress = () => {
    setCounter(counter + 1);
  }

  // const squares = [
  //   <Square bgColor="green" />,
  //   <Square bgColor="orange" />,
  //   <Square bgColor="#ff55dd" />
  // ];

  return (
    <View style={styles.home}>
      <View style={{ 
        backgroundColor: 'pink',
        height: 150,
        flex: .5,
        padding: 4
      }}>
        <Text 
          onPress={() => console.log('Press')} 
          numberOfLines={2}>{title}</Text>
      </View>
      <View style={{ 
        backgroundColor: 'purple',
        height: 150,
        flex: .50,
      }}>
        <Button title="Press me" onPress={onPress} color="red" />
        <Text style={{color: 'white'}}>{counter}</Text>

        {/* { 
          ['red','green','#ff44aa']
            .map(color => <Square bgColor={color} />) 
        } */}

        {
          Array(counter).fill(null)
            .map(() => <Square bgColor="green" />)
        }


      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  demo: { backgroundColor: 'green' },
  home: { 
    backgroundColor: '#45df33',
    height: '50%',
    flexDirection: 'row',
    padding: 25
  }
})

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
