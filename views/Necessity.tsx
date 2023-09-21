import { View, Text, SafeAreaView, Pressable } from "react-native";
import { necessity as styles } from "../resources/styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const stats = [
  { title: "Hambre", porcentance: 42 },
  { title: "Sed", porcentance: 31 },
  { title: "Aseo", porcentance: 91 },
  { title: "Diversión", porcentance: 76 },
];

export default function Necessity({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.prevButton}
        onPress={() => navigation.navigate("Home")}
      >
        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "white" }} />
      </Pressable>

      <Text style={styles.title}>Necesidades</Text>

      {stats.map((stat) => (
        <View key={stat.title}>
          <Text style={styles.indicates}>{stat.title}</Text>
          <View
            style={{
              height: 30,
              width: 250,
              backgroundColor: "#43BBFF",
              position: "relative",
              borderRadius: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "#007BC1",
                position: "absolute",
                height: 30,
                width: (stat.porcentance * 250) / 100,
                borderRadius: 10,
              }}
            ></View>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {stat.porcentance}%
              </Text>
            </View>
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
}
