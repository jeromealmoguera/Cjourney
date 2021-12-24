// import "react-native-gesture-handler";
// import { StatusBar } from "expo-status-bar";
// import React, { Component } from "react";
// import { Text, View, Button } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";

// import Home from "./screens/Home";
// import Diary from "./screens/Diary";
// import Alarm from "./screens/Alarm";

// const Stack = createStackNavigator();

// export default class App extends Component {
//   render() {
//     return (
//       <NavigationContainer>
//         <StatusBar style="auto" />
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={Home} />
//           <Stack.Screen name="Diary" component={Diary} />
//           <Stack.Screen name="Alarm" component={Alarm} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./navigation/tabs";

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
