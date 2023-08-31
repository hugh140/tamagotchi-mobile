import { ScrollView, View, Text, Pressable } from "react-native";
import { menu as styles } from "../resources/styles";

const OPTIONS = [
  { title: "Inventario", link: "Inventory" },
  { title: "Tienda", link: "Shop" },
  { title: "Configuración", link: "Shop" },
  { title: "Tienda", link: "Shop" },
];

export default function Menu({ nav }: any) {
  return (
    <View style={styles.options}>
      <View>
        <Text style={styles.title}>Menú</Text>
      </View>
      <ScrollView horizontal={true} style={{ marginHorizontal: 5 }}>
        {OPTIONS.map((option, index) => (
          <Pressable
            onPress={() => nav.navigate(option.link)}
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
  );
}
