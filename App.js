import React, { useEffect, useState } from 'react';
import { Box, Button, Center, HStack, NativeBaseProvider } from 'native-base';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import randomizeArray from './src/middleware/randomizeArray';
import { getCards } from './src/service/cards';

const rows = [11, 15, 21];

export default function App() {
  const [cards, setCards] = useState([]);
  const [rowsIndex, setRowsIndex] = useState(0);

  const { width } = Dimensions.get('window');
  const tilesize = width / rows[rowsIndex];

  const handleArray = () => {
    const cardArray = getCards();

    const randomizedCards = randomizeArray(
      cardArray,
      rows[rowsIndex] * rows[rowsIndex]
    );

    console.log('rows', rows[rowsIndex]);
    console.log('rows * rows', rows[rowsIndex] * rows[rowsIndex]);

    setCards(randomizedCards);
  };

  // console.log(rowsIndex);
  // console.log(cards.length);

  useEffect(() => {
    handleArray();
  }, []);

  if (cards.length < 0) return null;

  return (
    <>
      <StatusBar style="auto" />
      <NativeBaseProvider>
        <Box alignItems="center" bg="#fff" mt={20} justifyContent="center">
          <HStack>
            <Button onPress={handleArray} size="lg">
              refresh
            </Button>
            {/* <Button
              onPress={() => {
                const index = rowsIndex < 2 ? rowsIndex + 1 : 0;
                setRowsIndex(index);
                handleArray();
              }}
              size="lg"
            >
              {rows[rowsIndex]}
            </Button> */}
          </HStack>
          <Text style={{ fontWeight: 'bold' }}>Cards</Text>

          <View style={styles.cardContainer}>
            {cards.map((card, index) => {
              return (
                <View key={index} style={{ width: tilesize, height: tilesize }}>
                  {/* <Text>{card.type}</Text> */}
                  {card.img ? (
                    <View style={styles.card}>
                      <Image source={card.img} style={styles.image} />
                    </View>
                  ) : card.type === 'home' ? (
                    <View style={{ ...styles.card, backgroundColor: 'red' }} />
                  ) : (
                    <View style={styles.card} />
                  )}
                </View>
              );
            })}
          </View>
        </Box>
      </NativeBaseProvider>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    width: '98%',
    height: '98%',
    borderColor: 'black',
    borderWidth: 1,
  },
  cardContainer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // margin: "auto",
  },
  image: {
    width: '80%',
    height: '80%',
    margin: 'auto',
  },
});
