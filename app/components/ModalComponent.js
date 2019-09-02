import React, { Component } from "react";
import { Button, Text, View,TextInput,Switch,StyleSheet } from "react-native";
import Modal from "react-native-modal";
import colors from '../styles/colors';

export default class ModalComponent extends Component {
  state = {
    // isModalVisible: false,
    switchValue1:false,
    switchValue2:false,
  };

  // toggleModal = () => {
  //   this.setState({ isModalVisible: !this.state.isModalVisible });
  // };

  toggleSwitch1 = (value) => {
    //onValueChange of the switch this function will be called
    this.setState({switchValue1: value})
    //state changes according to switch
    //which will result in re-render the text
  }

  toggleSwitch2 = (value) => {
    //onValueChange of the switch this function will be called
    this.setState({switchValue2: value})
    //state changes according to switch
    //which will result in re-render the text
  }
 
  render() {
    return (
      <View style={styles.container}>
        {/* <Button title="Filtros" onPress={this.toggleModal} /> */}
        <Modal isVisible={this.props.isModalVisible} style={{backgroundColor: 'white'}} 
        onBackButtonPress={this.props.onBackButtonPressModal}
        >
          <View style={styles.container}>
            <Text style={{textAlign:'center', fontSize: 20}}>Filtros de Búsqueda</Text>
            <TextInput style={styles.textInput} placeholder={'Ingrese Estado'} />
            <TextInput style={styles.textInput} placeholder={'Ingrese Estado'} />
            <TextInput style={styles.textInput} placeholder={'Ingrese Ciudad'} />
            <TextInput style={styles.textInput} placeholder={'Ingrese C.P.'} />
            <View style={{flexWrap:'wrap', flexDirection: 'row', right: 70}}>
              <Text>Pública</Text>
              <Switch
                // style={{marginTop:30}}
                onValueChange = {this.toggleSwitch1}
                value = {this.state.switchValue1}/>
            </View>
            <View style={{flexWrap:'wrap', flexDirection: 'row', right: 70}}>
              <Text>Privada</Text>
              <Switch
                // style={{marginTop:30}}
                onValueChange = {this.toggleSwitch2}
                value = {this.state.switchValue2}/>
            </View>
            <TextInput style={styles.textInput} placeholder={'Ingrese Clave Sep'} />
            <Button title="Buscar" onPress={this.toggleModal} />
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