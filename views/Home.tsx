import {
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { home as styles } from "../resources/styles";

const OPTIONS = [
  { title: "Inventario", link: "Inventory" },
  { title: "Tienda", link: "Shop" },
  { title: "Configuración", link: "Shop" },
];

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

      <View style={styles.options}>
        <View>
          <Text style={styles.titleMenu}>Menú</Text>
        </View>
        <ScrollView horizontal={true} style={{ marginHorizontal: 5 }}>
          {OPTIONS.map((option, index) => (
            <Pressable
              onPress={() => navigation.navigate(option.link)}
              key={index}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#54BFFF" : "#99D9FF",
                },
                styles.option,
              ]}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#007EC8",
                  fontWeight: "bold",
                }}
              >
                {option.title}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
