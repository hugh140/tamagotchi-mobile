import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import storage from "./resources/storage";

import Home from "./views/Home";
import Inventory from "./views/Inventory";
import Shop from "./views/Shop";
import Begin from "./views/Begin";

const Stack = createNativeStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState<boolean>();

  useEffect(() => {
    storage
      .load({
        key: "name",
      })
      .then(() => {
        setInitialRoute(true);
      })
      .catch(() => {
        setInitialRoute(false);
      });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {initialRoute ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Begin" component={Begin} />
          </>
        ) : (
          <>
            <Stack.Screen name="Begin" component={Begin} />
            <Stack.Screen name="Home" component={Home} />
          </>
        )}
        <Stack.Screen name="Inventory" component={Inventory} />
        <Stack.Screen name="Shop" component={Shop} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
