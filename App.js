import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ImageLogBook from "./Components/ImageLogBook";

const View = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View.Navigator>
        <View.Screen name="ImageScreen" component={ImageLogBook} />
      </View.Navigator>
    </NavigationContainer>
  );
}

