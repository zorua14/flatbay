import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const PersonDetails = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={[styles.container, { padding: 15 }]}>
        <Text style={[styles.title, { marginBottom: 10 }]}>About</Text>
        <Text style={[styles.subtitle, { marginBottom: 10, marginLeft: 10 }]}>
          Looking for a New Home
        </Text>
        <Text style={[styles.title, { marginVertical: 15 }]}>
          Compatable with
        </Text>
        <View style={[styles.row, { marginLeft: 10, top: -10 }]}>
          <View style={styles.column}>
            <Text style={styles.item}>Food preferences</Text>
            <Text style={styles.sectionHeader}>Veg</Text>
            <Text style={styles.item}>Smoking</Text>
            <Text style={styles.sectionHeader}>Never</Text>
            <Text style={styles.item}>Partying</Text>
            <Text style={styles.sectionHeader}>Occasionally</Text>
          </View>

          <View style={styles.column}>
            <Text style={styles.item}>Pets</Text>
            <Text style={styles.sectionHeader}>Dont Mind</Text>
            <Text style={styles.item}>Drinking</Text>
            <Text style={styles.sectionHeader}>Occasionally</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PersonDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    marginRight: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  item: {
    fontSize: 14,
    marginBottom: 5,
    marginTop: 15,
  },
});
