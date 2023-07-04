import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React from "react";

const Header = ({ input, setInput, onAddTask }) => {
  return (
    <View style={styles.header}>
      <TextInput
        placeholder="Agrega una tarea"
        style={styles.input}
        value={input}
        onChangeText={setInput}
      />
      <Pressable
        style={[styles.button, styles.buttonAdd]}
        onPress={onAddTask}
        disabled={input.trim() === ""}
      >
        <Text style={styles.labelButton}>Agregar tarea</Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    backgroundColor: "white",
  },
  input: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "gray",
    backgroundColor: "white",
    width: "100%",
    flex: 1,
    paddingHorizontal: 10,
  },
  buttonAdd: {
    backgroundColor: "#00bfff",
    padding: 10,
  },
  labelButton: {
    color: "white",
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 2,
  },
});
