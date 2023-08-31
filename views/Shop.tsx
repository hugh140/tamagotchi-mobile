import { ScrollView, SafeAreaView, Text, Pressable, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { shop as styles } from "../resources/styles";

const SECTIONS = [
  { title: "Comida" },
  { title: "Bebidas" },
  { title: "Aseo" },
  { title: "Juguetes" },
];

export default function Shop({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.prevButton}
        onPress={() => navigation.navigate("Home")}
      >
        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "white" }} />
      </Pressable>

      <Text style={styles.title}>Tienda</Text>

      <ScrollView horizontal={true}>
        <View style={styles.sections}>
          {[
            SECTIONS.map((item, index) => (
              <Pressable
                key={index}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "#F1AF00" : "#FFC429",
                  },
                  styles.section,
                ]}
              >
                <Text style={styles.sectionText}>{item.title}</Text>
              </Pressable>
            )),
          ]}
        </View>
      </ScrollView>

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
                      backgroundColor: pressed ? "#FFDE88" : "#FFEDBE",
                    },
                    styles.item,
                  ]}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#FFB800",
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
