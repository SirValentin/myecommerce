import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import RenderTask from "./RenderTask";

const TaskList = ({ list, onPressTask }) => {
  return (
    <View style={styles.containerList}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => RenderTask({ item, onPressTask })}
      />
    </View>
  );
};

export default TaskList;

const styles = StyleSheet.create({
  containerList: {
    flex: 1,
    width: "100%",
    height: "100%",
    paddingBottom: 20,
  },
});
