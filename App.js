import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import { Screen } from 'react-native-screens';

function HomeScreen({navigation}) {
  console.log(Screen);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home </Text>
         <Button
         onPress={() => navigation.navigate('Settings')}
         title="Go to notifications"
      />
       
    </View>
  );
}

function SettingsScreen({navigation}) {
  return (
    <>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
        <Button
         onPress={() => navigation.navigate('Home')}
         title="Go to notifications"
      />
       
    </View>
  
          </>
        )
    

  
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}  options={{tabBarIcon:({focused})=>(

          <View>  
            <Icon name="home"  style={{ tintColor: focused?'red':'black'}}color="black" size={25}/>
          </View>
        )}}/>

        <Tab.Screen name="Settings" component={SettingsScreen}  options={{tabBarIcon:({focused})=>(
          <View>
            <Icon name="settings"  style={{ tintColor: focused?'purple':'black'}} color="black" size={25}  />
            
        </View>
        
       )}}/>
               <Tab.Screen name="profile" component={SettingsScreen}  options={{tabBarIcon:({focused})=>(
          <View>
            <Icon    name='rowing'  style={{ tintColor: focused?'purple':'black'}} color="black" size={25}  />
            
        </View>
        
       )}}/>
       
       

      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

////////////////////////////////////////
// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import { ImageBackground } from 'react-native-web';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />

//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }