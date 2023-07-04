import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import ModalTask from "../components/Modal";

export default function MainScreen({ taskList }) {
  const [list, setList] = useState(taskList);
  const [input, setInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTask, setActiveTask] = useState({});

  const onAddTask = () => {
    const newTask = {
      id: list.length + 1,
      text: input,
      completed: false,
    };
    setList([...list, newTask]);
    setInput("");
  };

  const onPressTask = (item) => {
    setActiveTask(item);
    setModalVisible(true);
  };

  const updateTask = (status) => {
    // copiamos el activetask y editamos la copia
    const editedTask = { ...activeTask };
    editedTask.completed = status;
    // copiamos la lista de tareas y obtenemos el indice de la tarea editada
    const editedList = [...list];
    const indexTask = editedList.findIndex((task) => task.id === editedTask.id);

    if (indexTask !== -1) {
      // si existe la tarea editada la reemplazamos en la lista de tareas
      editedList.splice(indexTask, 1, editedTask);
    }
    // actualizamos la lista original
    setList([...editedList]);
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Header input={input} onAddTask={onAddTask} setInput={setInput} />
      <TaskList list={list} onPressTask={onPressTask} />
      <ModalTask
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        activeTask={activeTask}
        updateTask={updateTask}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 30,
    paddingHorizontal: 20,
    gap: 20,
  },
});
