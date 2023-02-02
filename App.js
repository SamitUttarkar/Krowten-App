import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer"

//screens
import RegisterScreen from './app/screens/RegisterScreen';
import ConnectScreen from './app/screens/ConnectScreen';
import NotificationsScreen from './app/screens/NotificationsScreen';
import SpacesScreen from './app/screens/SpacesScreen';
import HomeScreen from './app/screens/HomeScreen';
import SearchRecommendationScreen from './app/screens/SearchRecommendationScreen';
import AddMemberScreen from './app/screens/AddMemberScreen';
import ProfileScreen from './app/screens/ProfileScreen';

//components
import AppDrawer from './app/components/common/AppDrawer';

//config
import Colors from './app/config/Colors';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {


  const HomeDrawer = () => {
    return <Drawer.Navigator screenOptions={{ headerShown: false, drawerPosition: 'right' }} initialRouteName="HomeScreen" overlayColor="transparent" edgeWidth={100} drawerStyle={{ backgroundColor: Colors.white, width: "75%" }} drawerContent={(props) => <AppDrawer {...props} />}  >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="NotificationsScreen" component={NotificationsScreen} />
    </Drawer.Navigator>
  }


  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="RegisterScreen">
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ConnectScreen" component={ConnectScreen} />
        <Stack.Screen name="HomeDrawer" component={HomeDrawer} />
        <Stack.Screen name="SpacesScreen" component={SpacesScreen} />
        <Stack.Screen name="SearchRecommendationScreen" component={SearchRecommendationScreen} />
        <Stack.Screen name="AddMemberScreen" component={AddMemberScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

