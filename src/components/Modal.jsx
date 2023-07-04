import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import React from "react";

const ModalTask = ({
  modalVisible,
  setModalVisible,
  activeTask,
  updateTask,
}) => {
  return (
    <Modal
      animationType=""
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{activeTask.text}</Text>
          <View style={styles.buttonsModal}>
            <Pressable
              style={[styles.button, styles.buttonDone]}
              onPress={() => updateTask(true)}
            >
              <Text style={styles.textStyle}>Completado</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonNotYet]}
              onPress={() => updateTask(false)}
            >
              <Text style={styles.textStyle}>Incompleto</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalTask;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonsModal: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#708090",
  },
  buttonDone: {
    backgroundColor: "#008000",
  },
  buttonNotYet: {
    backgroundColor: "#ff0000",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
