import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { Button, FlatList, Image, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, View } from 'react-native';
import { Square } from './components/Square';

export default function App() {

  const [meals, setMeals] = useState([]);

  // équivalent de componentDidMount pour un Class Component
  useEffect(() => {

    console.log('useEffect')

    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then(res => res.json())
    .then(res => {
      setMeals(res.meals)
    })

  }, [])


  const renderItem = ({ item }) => {
    return (
      <View>
        {/* <Text>{item.strMeal}</Text> */}

        <TouchableHighlight onLongPress={() => console.log('Press')}>
          <Image
            style={{ width:100, height: 100}}
            source={{ uri: item.strMealThumb }}
            onPress={() => { console.log('Press') }}
          />
        </TouchableHighlight>
      </View>)
  }

  if (meals.length > 0) {
    return (

      <View style={styles.home}>
        <FlatList 
          data={meals} 
          renderItem={renderItem}
        />
      </View>
    
    );
  }

  return (
    <View style={styles.home}>
      <Text>No data...</Text>
      <Image 
        style={{ width: 50, height: 50 }} 
        source={require('./assets/icon.png')} />
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
