import React, { Component } from "react";
import { Button, Text, View,Image } from "react-native";
import Modal from "react-native-modal";

export default class SwiperComponent extends Component {
  state = {
    isModalVisible: true
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Button title="Show modal" onPress={this.toggleModal} /> */}
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1,  }}>
            <Text style={{textAlign: 'justify', fontSize: 22, color: '#fff'}}>Desliza la barra para asignar una calificación a cada una de las preguntas</Text>
            <Button title="Entendido" onPress={this.toggleModal} />
            <View style={{top: 390, alignItems: 'center'}}>
                <Image source={require('../assets/swipe.gif')} style={{width: 150, height: 150}} />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}