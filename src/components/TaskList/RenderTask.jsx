import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const RenderTask = ({ item, onPressTask }) => {
  return (
    <Pressable onPress={() => onPressTask(item)}>
      <View
        key={item.id}
        style={[styles.taskCard, item.completed ? styles.taskCompleted : null]}
      >
        <Text>{item.text}</Text>
      </View>
    </Pressable>
  );
};

export default RenderTask;

const styles = StyleSheet.create({
  taskCard: {
    backgroundColor: "#add8e6",
    borderRadius: 3,
    padding: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  taskCompleted: {
    backgroundColor: "#9acd32",
  },
});
