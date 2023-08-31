import { Text, View, SafeAreaView, Image } from "react-native";

import Menu from "../components/IndexMenu";

import { home as styles } from "../resources/styles";

export default function Home({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>My Tamagotchi</Text>
      </View>

      <View style={styles.pet}>
        <Image
          source={require("../assets/imgs/cat.jpg")}
          style={{ width: 300, height: 300 }}
        />
        <View style={styles.stateContainer}>
          <Text style={styles.petState}>Ando Cool 🤑</Text>
        </View>
      </View>

      <Menu nav={navigation} />
    </SafeAreaView>
  );
}
