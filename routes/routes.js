import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import { StoreProviders } from '../redux/provider/Provider';


const Routes = () => {

  const Stack = createStackNavigator();


  return (
  
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}

          />

        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
   
  );
};


export default Routes;
