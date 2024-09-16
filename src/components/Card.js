import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Card({ card }) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>{card.title}</Text>
        <Text style={styles.cardLevel}>Level:{card.level} </Text>
      </View>

      <Image source={card.image} style={styles.cardImage} />

      <View style={styles.cardInfo}>
        <Text style={styles.cardType}>{card.type}</Text>
        <Text style={styles.cardDescription}>{card.description}</Text>
        <View style={styles.divider}></View>
        <Text style={styles.cardStats}>
          ATK: {card.ATK} / DEF: {card.DEF}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#C8AD71",
    width: 350,
    height: 550,
    borderRadius: 5,
    borderWidth: 10,
    borderColor: "#3C3F51",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  cardImage: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: 10,
    borderWidth: 8,
    borderColor: "#3C3F51",
  },
  cardInfo: {
    backgroundColor: "#EBD1C5",
    borderColor: "#D1882B",
    borderWidth: 4,
    padding: 4,
    width: 320,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardTitleContainer: {
    backgroundColor: "#c3985463",
    padding: 5,
    marginBottom: 5,
    width: 320,
    borderWidth: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#7A5E26",
  },
  cardLevel: {
    fontSize: 16,
    marginBottom: 5,
  },
  cardType: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 12,
    textAlign: "justify",
    marginBottom: 5,
  },
  cardStats: {
    fontSize: 14,
    textAlign: "right",
    fontWeight: "bold",
  },
  divider: {
    width: "100%",
    backgroundColor: "#313131",
    padding: 1,
  },
});
