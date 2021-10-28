import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Pai" component={PassFatherSreen} options={{ title: 'Docs do Pai' }} />
        <Drawer.Screen name="Mãe" component={RemediosMother} options={{ title: 'Remédios da mãe' }} />
      </Drawer.Navigator>
      </NavigationContainer>
  );
}

function HomeScreen({ navigation }) { 
  return (
  <View style={styles.container}>
    <Text>Cuidemos do Pai e da Mãe</Text>
    <Button title="Docs do pai" onPress={() => navigation.navigate('Pai')} />
    <Button title="Remédios da mãe" onPress={() => navigation.navigate('Mãe')} />
  </View>
  )
}

function PassFatherSreen({ navigation }) { 
  return (
  <View style={styles.container}>
    <Text>Senhas do Pai</Text>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </View>
  )
}

function RemediosMother({ navigation }) { 
  return (
  <View style={styles.container}>
    <Text>Remédios da mãe</Text>
    <Button title="Go back" onPress={() => navigation.goBack()} />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
