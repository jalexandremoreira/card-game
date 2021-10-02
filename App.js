import React, { useEffect, useState } from 'react';
import { Box, Button, Text, HStack, NativeBaseProvider } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
  TriangleShape,
  SquareShape,
  CircleShape,
  HexagonShape,
} from './components/Shapes';

import randomizeArray from './src/middleware/randomizeArray';
import { getCards } from './src/service/cards';

export default function App() {
  const [cards, setCards] = useState([]);

  const rows = 15;
  const { width } = Dimensions.get('window');
  const tilesize = width / rows;

  const handleArray = () => {
    const cardArray = getCards();

    const randomizedCards = randomizeArray(cardArray, rows * rows, rows);

    setCards(randomizedCards);
  };

  // console.log(rowsIndex);
  // console.log(cards.length);

  useEffect(() => {
    handleArray();
  }, []);

  if (cards.length < 0) return null;

  const Shape = ({ type }) => {
    const iconSize = 7;

    switch (type) {
      case 'Square':
        return <SquareShape color="#E8C09B" size={iconSize} />;
      case 'Circle':
        return <CircleShape color="#8BA5CC" size={iconSize} />;
      case 'Hexagon':
        return <HexagonShape color="#D67F7F" size={iconSize} />;
      // case 'Triangle':
      //   return <TriangleShape color="#B8D792" size={iconSize} />;
      default:
        return <TriangleShape color="#B8D792" size={iconSize} />;
    }
  };

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

          <Box style={styles.cardContainer} mt={5}>
            {cards.map(({ type, rowLocation, columnLocation }, index) => {
              return (
                <Box key={index} width={tilesize} height={tilesize}>
                  {type === 'home' ? (
                    <Box style={{ ...styles.card, backgroundColor: 'blue' }} />
                  ) : type !== '' ? (
                    <Box style={styles.card}>
                      {/* <Shape type={type} /> */}
                      <HStack>
                        <Text>{rowLocation}</Text>
                      </HStack>
                    </Box>
                  ) : (
                    <Box style={styles.card} />
                  )}
                </Box>
              );
            })}
          </Box>
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
});
