import { ScrollView, SafeAreaView, Text, Pressable, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { inventory as styles } from "../resources/styles";

export default function Inventory({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.prevButton}
        onPress={() => navigation.navigate("Home")}
      >
        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "white" }} />
      </Pressable>

      <Text style={styles.title}>Inventario</Text>

      <ScrollView>
        <View style={styles.items}>
          {[
            Array(50)
              .fill("")
              .map((item, index) => (
                <Pressable
                  key={index}
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed ? "#56F25E" : "#99FF9E",
                    },
                    styles.item,
                  ]}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#00C800",
                      fontWeight: "bold",
                    }}
                  >
                    Hola
                  </Text>
                </Pressable>
              )),
          ]}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
