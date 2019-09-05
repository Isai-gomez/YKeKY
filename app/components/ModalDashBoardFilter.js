import React, { Component } from "react";
import { Button, Text, View,TextInput,Switch,StyleSheet } from "react-native";
import Modal from "react-native-modal";
import colors from '../styles/colors';
import { CheckBox } from 'react-native-elements';

export default class ModalDashBoardFilter extends Component {
  state = {
    // isModalVisible: false,
    switchValue1:false,
    switchValue2:false,
    checked: false,
    publica: false,
    privada: false
  };

  // toggleModal = () => {
  //   this.setState({ isModalVisible: !this.state.isModalVisible });
  // };

  render() {
    return (
      <View style={styles.container}>
        {/* <Button title="Filtros" onPress={this.toggleModal} /> */}
        <Modal isVisible={this.props.isModalVisible} style={{backgroundColor: 'white'}} 
        onBackButtonPress={this.props.onBackButtonPressModal}
        >
          <View style={styles.container}>
            <Text style={{textAlign:'center', fontSize: 20}}>Tipo de </Text>
            <CheckBox
            title='Pública'
            onPress={()=> { this.setState({publica: !this.state.publica})}}
            checked={this.state.publica}
            />
            <CheckBox
            title='Privada'
            onPress={()=> { this.setState({privada: !this.state.privada})}}
            checked={this.state.privada}
            />
            <View>
                <Text>Ubicación</Text> 
            </View>

          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  textInput: {
    width: '80%',
    borderBottomColor: colors.gray03,
    borderBottomWidth: 2,
  }
})