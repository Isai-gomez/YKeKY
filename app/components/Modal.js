import React, {Component} from 'react';
import { Text, TouchableHighlight, View,StyleSheet, TouchableOpacity,TextInput,Button} from 'react-native';
import Modal from "react-native-modal";

export default class ModalExample extends Component {
render () {
  return (
      <View>
        <Modal isVisible={this.props.visible} >
          <View style={styles.container}>
            <TouchableOpacity style={styles.cerrar} onPress={this.props.close} >
                <Text>X</Text>
            </TouchableOpacity>
            <Text>Contacto</Text>
            <TextInput style={styles.input} placeholder={'Nombre'}/>
            <TextInput style={styles.input} placeholder={'Correo'} keyboardType={'email-address'}/>
            <TextInput style={styles.input} placeholder={'Mensaje'} multiline={true}  numberOfLines={6}/>
            <Button title='Enviar' onPress={this.props.close}/>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center',
    margin:5

  },
  cerrar: {
    justifyContent:'center',
    alignItems:'center',
    height:30,
    width:30,
    borderRadius:100,
    borderWidth:2,
    borderColor:'red',
    backgroundColor:'#ccc'
  },
  input:{
    borderColor:'#ccc',
    borderWidth:2,
    width:'80%'
  }
})
