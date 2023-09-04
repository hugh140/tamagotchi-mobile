import { useState, useEffect } from "react";
import { Pressable, View, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import { home as styles } from "../resources/styles";
import storage from "../resources/storage";

type coinsType = {
  x: number;
  y: number;
  collected: boolean;
  render: boolean;
}[];

export default function Coins() {
  const [coins, setCoins] = useState<coinsType>([]);
  const [money, setMoney] = useState(0);
  const [int, setInt] = useState<number[]>([]);

  useEffect(() => {
    storage
      .load({
        key: "moneyIntervals",
      })
      .then((data) => {
        const coinsGenerated = [...coins];
        data.intervals.forEach((interval: number, index: number) => {
          if (interval == null) interval = Infinity
          if (interval <= Date.now()) {
            data.intervals[index] = Infinity;
            coinsGenerated.push({
              x: 40 + Math.round(Math.random() * 20),
              y: 20 + Math.round(Math.random() * 60),
              collected: false,
              render: true,
            });
          }
        });
        setCoins(coinsGenerated);
        setInt(data.intervals);
        storage.save({
          key: "moneyIntervals",
          data: { intervals: data.intervals },
        });
      });

    storage
      .load({
        key: "money",
      })
      .then((res) => setMoney(res.money));
  }, []);

  function collectCoin(index: number) {
    let modifiedCoin = [...coins];
    modifiedCoin[index].collected = true;
    setCoins(modifiedCoin);

    storage.save({
      key: "money",
      data: {
        money: money + 1,
      },
    });
    setMoney(money + 1);

    const intervals = [...int];
    intervals[index] = Date.now() + 1000 * index * 60 * 90;
    storage.save({
      key: "moneyIntervals",
      data: {
        intervals: intervals,
      },
    });
    setInt(intervals);

    setTimeout(() => {
      modifiedCoin = [...coins];
      modifiedCoin[index].render = false;
      setCoins(modifiedCoin);
    }, 200);
  }

  return (
    <>
      {coins?.map((coin, index) => {
        if (coin.render)
          return (
            <View
              key={index}
              style={{
                ...styles.money,
                top: `${coin.x}%`,
                left: `${coin.y}%`,
              }}
            >
              {coin.collected ? (
                <Text
                  style={{ fontSize: 25, color: "#23AD25", fontWeight: "bold" }}
                >
                  +1
                </Text>
              ) : (
                <Pressable onPress={() => collectCoin(index)}>
                  <FontAwesomeIcon
                    icon={faMoneyBill1}
                    size={40}
                    style={{ color: "#23AD25" }}
                  />
                </Pressable>
              )}
            </View>
          );
      })}
    </>
  );
}
