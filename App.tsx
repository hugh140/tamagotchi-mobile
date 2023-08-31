import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./views/Home";
import Inventory from "./views/Inventory";
import Shop from "./views/Shop";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Inventory"
          component={Inventory}
        />
        <Stack.Screen
          name="Shop"
          component={Shop}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
