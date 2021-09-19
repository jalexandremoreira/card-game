import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
} from "react-native";

import randomizeArray from "./src/middleware/randomizeArray";
import { getCards } from "./src/service/cards";

export default function App() {
  const [cards, setCards] = useState([]);
  const [rows, setRows] = useState(11);

  const screenWidth = Dimensions.get("window").width;
  const tilesize = screenWidth / rows;

  const handleArray = () => {
    const cardArray = getCards();

    const randomizedCards = randomizeArray(cardArray, rows * rows);

    setCards(randomizedCards);
  };

  useEffect(() => {
    handleArray();
  }, []);

  if (cards.length < 0) return null;

  return (
    <View style={styles.container}>
      {/* {cards.map((card, index) => {
        console.log(card.img);
        return (
          <View key={index}>
          <Text>{card.type}</Text>
          <Image source={card.img} />
          </View>
          );
        })} */}

      {/* <TextInput
        value={rows.toString()}
        onChangeText={(text) => {
          setRows(parseInt(text, 10));
          handleArray();
        }}
      /> */}
      <Button onPress={handleArray} title="refresh" />
      <Text style={{ fontWeight: "bold" }}>Cards</Text>

      <View style={styles.cardContainer}>
        {cards.map((card, index) => {
          return (
            <View key={index} style={{ width: tilesize, height: tilesize }}>
              {/* <Text>{card.type}</Text> */}
              {card.img ? (
                <View style={styles.card}>
                  <Image source={card.img} style={styles.image} />
                </View>
              ) : card.type === "home" ? (
                <View style={{ ...styles.card, backgroundColor: "red" }} />
              ) : (
                <View style={styles.card} />
              )}
            </View>
          );
        })}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "98%",
    height: "98%",
    borderColor: "black",
    borderWidth: 1,
  },
  cardContainer: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    // margin: "auto",
  },
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    marginTop: 50,
  },
  image: {
    width: "80%",
    height: "80%",
    margin: "auto",
  },
});
