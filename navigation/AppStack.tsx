import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewHome from '../screens/NewHome';
import Details from '../screens/Details';
import Info from '../screens/Info';

const AppStack = () => {
  
const Stack=createNativeStackNavigator();
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={NewHome}/>
      <Stack.Screen name='Details' component={Details}/>
      <Stack.Screen name='Info' component={Info}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
};


export default AppStack;
