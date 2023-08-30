import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";

import Menu from "./components/IndexMenu";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Tamagotchi</Text>
      </View>

      <View style={styles.pet}>
        <Image
          source={require("./assets/imgs/cat.jpg")}
          style={{ width: 300, height: 300 }}
        />
        <View style={styles.stateContainer}>
          <Text style={styles.petState}>Ando Cool 🤑</Text>
        </View>
      </View>

      <Menu />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#D8F1FF",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#007EC8",
  },
  pet: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  stateContainer: {
    padding: 20,
    marginTop: 10,
  },
  petState: {
    textAlign: "center",
    fontSize: 15,
    color: "#007EC8",
  },
});
