import { ScrollView, View, Text, StyleSheet } from "react-native";

const OPTIONS = [
  { title: "Tienda" },
  { title: "Tienda" },
  { title: "Tienda" },
  { title: "Tienda" },
  { title: "Tienda" },
  { title: "Tienda" },
];

export default function Menu() {
  return (
    <View style={styles.options}>
      <View>
        <Text style={styles.title}>Menú</Text>
      </View>
      <ScrollView horizontal={true}>
        {OPTIONS.map((option, index) => (
          <View key={index} style={styles.option}>
            <Text style={{ textAlign: "center", color: "#007EC8" }}>
              {option.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    padding: 10,
    textAlign: "center",
    color: "#007EC8",
    fontWeight: "bold",
  },
  options: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#BBE6FF",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    zIndex: -1,
  },
  option: {
    width: 150,
    height: 150,
    backgroundColor: "#99D9FF",
    justifyContent: "center",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    margin: 5,
  },
});
