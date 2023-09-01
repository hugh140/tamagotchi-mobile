import { useEffect, useState } from "react";
import storage from "../resources/storage";

import { ScrollView, SafeAreaView, Text, Pressable, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { inventory as styles } from "../resources/styles";

type productTypes = { product: string; quantity: number }[];

export default function Inventory({ navigation }: any) {
  const [products, setProducts] = useState<productTypes>();

  useEffect(() => {
    storage.getAllDataForKey("inventory").then((res) => setProducts(res));
  }, []);

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
            products?.map((item, index) => (
              <Pressable
                key={index}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "#56F25E" : "#99FF9E",
                  },
                  styles.item,
                ]}
              >
                <Text style={styles.counter}>x{item.quantity}</Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#00C800",
                    fontWeight: "bold",
                  }}
                >
                  {item.product}
                </Text>
              </Pressable>
            )),
          ]}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
