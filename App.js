import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  View,
  Button,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import Card from "./src/components/Card";
import { Cards } from "./src/data/cards";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < Cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <StatusBar style="auto" />
        <Card card={Cards[currentIndex]} />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="Anterior"
            onPress={handlePrevious}
            disabled={currentIndex === 0}
          />
          <Button
            disabled={currentIndex === Cards.length - 1}
            style={styles.button}
            title="Próximo"
            onPress={handleNext}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 6,
    backgroundColor: "#173487",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",

    marginVertical: 20,
  },
});
