import { ScrollView, SafeAreaView, Text, Pressable, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { shop as styles } from "../resources/styles";

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
            Array(3)
              .fill("")
              .map((item, index) => (
                <View key={index} style={styles.section}>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    Hola
                  </Text>
                </View>
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
                <View key={index} style={styles.item}>
                  <Text
                    style={{
                      textAlign: "center",
                      color: "#C89B00",
                      fontWeight: "bold",
                    }}
                  >
                    Hola
                  </Text>
                </View>
              )),
          ]}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
