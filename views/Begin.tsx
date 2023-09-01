import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  Modal,
  ImageBackground,
} from "react-native";
import { begin as styles } from "../resources/styles";

import storage from "../resources/storage";

export default function Begin({ navigation }: any) {
  const [name, setName] = useState("");
  const [alert, setAlert] = useState(false);
  const [modal, setModal] = useState(false);

  function confirmName() {
    if (!name) {
      setAlert(true);
      setTimeout(() => setAlert(false), 5000);
      return;
    }
    Alert.alert("", `¿Deseas ponerle ${name} a tu Tamagotchi?`, [
      { text: "Cancelar", style: "cancel" },
      { text: "Confirmar", style: "default", onPress: beginExecute },
    ]);
  }

  function beginExecute() {
    setModal(true)
    setTimeout(() => {
      storage.clearMap();
      storage.save({
        key: "name",
        data: {
          name: name,
        },
      });
      storage.save({
        key: "money",
        data: {
          money: 10,
        },
      });
      navigation.navigate("Home")
    },3000)

  }

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={false} visible={modal}>
        <ImageBackground
          source={require('../assets/imgs/sky.jpg')}
          resizeMode="cover"
          style={{ flex: 1, justifyContent: "center" }}
        >
          <View style={styles.modal}>
            <Text style={{ ...styles.modalText }}>
              Ahora{" "}
              <Text
                style={{
                  ...styles.modalText,
                  color: "#D88BFF",
                  fontSize: 30,
                  marginVertical: 30,
                }}
              >
                {name}
              </Text>
            </Text>

            <Text style={{ ...styles.modalText }}>
              será tu eterna compañía.
            </Text>
          </View>
        </ImageBackground>
      </Modal>

      <Text style={styles.title}>¡Bienvenidx!</Text>
      <TextInput
        style={styles.input}
        placeholder="Ponle un nombre a tu Tamagotchi ( ˶ˆᗜˆ˵ )"
        onChangeText={(text) => setName(text)}
      />
      <Button title="Listo" color="#71C5FF" onPress={confirmName} />

      {alert && (
        <View style={styles.alert}>
          <Text style={{ color: "white", textAlign: "center" }}>
            Introduce un nombre
          </Text>
        </View>
      )}
    </View>
  );
}
