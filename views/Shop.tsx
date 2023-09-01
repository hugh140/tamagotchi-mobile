import { useEffect, useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  Text,
  Pressable,
  View,
  Modal,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import { food, drinks, cleanliness, toys } from "../resources/products";
import { shop as styles } from "../resources/styles";

import storage from "../resources/storage";

const SECTIONS = [
  { title: "Comida", list: food },
  { title: "Bebidas", list: drinks },
  { title: "Aseo", list: cleanliness },
  { title: "Juguetes", list: toys },
];

type SectionType = { title: string; price: number }[];

export default function Shop({ navigation }: any) {
  const [section, setSection] = useState(food);
  const [modal, setModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [money, setMoney] = useState(0);

  useEffect(() => {
    storage
      .load({
        key: "money",
      })
      .then((res) => setMoney(res.money));
  }, []);

  function changeSection(list: SectionType) {
    setSection(list);
  }

  async function buyConfirm(product: string, price: number) {
    setModal(true);
    setTimeout(() => setModal(false), 1000);

    if (price > money) {
      setErrorModal(true);
      return;
    } else setErrorModal(false);

    storage.save({
      key: "money",
      data: {
        money: money - price,
      },
    });

    setMoney(money - price);

    try {
      const loadedProduct = await storage.load({
        key: "inventory",
        id: product,
      });

      loadedProduct.quantity++;

      storage.save({
        key: "inventory",
        id: product,
        data: loadedProduct,
      });
    } catch (e) {
      storage.save({
        key: "inventory",
        id: product,
        data: {
          product: product,
          quantity: 1,
        },
      });
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Modal animationType="fade" transparent={false} visible={modal}>
        {!errorModal ? (
          <View style={styles.modal}>
            <Text
              style={{
                color: "#FFAEF5",
                ...styles.modalText,
              }}
            >
              Compra Exitosa
            </Text>
            <Text style={{ color: "#FF81F0", ...styles.modalText }}>
              ⸜(｡˃ ᵕ ˂ )⸝♡
            </Text>
          </View>
        ) : (
          <View style={styles.modal}>
            <Text
              style={{
                color: "#9234D8",
                ...styles.modalText,
              }}
            >
              No tienes suficiente dinero.
            </Text>
            <Text style={{ color: "#7120AD", ...styles.modalText }}>
              (っ◞‸◟ c)
            </Text>
          </View>
        )}
      </Modal>

      <Pressable
        style={styles.prevButton}
        onPress={() => navigation.navigate("Home")}
      >
        <FontAwesomeIcon icon={faChevronLeft} style={{ color: "white" }} />
      </Pressable>

      <Text style={styles.coins}>${money}</Text>

      <Text style={styles.title}>Tienda</Text>

      <ScrollView horizontal={true}>
        <View style={styles.sections}>
          {[
            SECTIONS.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => changeSection(item.list)}
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
            section.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => buyConfirm(item.title, item.price)}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "#FFDE88" : "#FFEDBE",
                  },
                  styles.item,
                ]}
              >
                <Text style={styles.price}>${item.price}</Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: "#FFB800",
                    fontWeight: "bold",
                  }}
                >
                  {item.title}
                </Text>
              </Pressable>
            )),
          ]}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
