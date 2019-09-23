import React,{Component} from 'react';
import {View,Text,StyleSheet, FlatList, ActivityIndicator,TouchableOpacity,Image,Alert} from 'react-native';
import colors from '../styles/colors';
import { ListItem, SearchBar,ButtonGroup} from 'react-native-elements';

export default class UniversidadesContainer extends Component{
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {    const url = `http://3.15.183.131:3001/api/instituciones/`;
    this.setState({ loading: true });

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          data: response,
          error: response.error || null,
          loading: false,
        });
        this.arrayholder = response;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 3,
          width: '100%',
          backgroundColor: 'rgba(206,208,206, 0.2)',
          marginLeft: '0%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.nombre.toUpperCase()} ${item.calle.toUpperCase()} ${item.clave_sep.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  // renderHeader = () => {
  //   return (
  //     <SearchBar
  //       placeholder="busca Aquí..."
  //       lightTheme
  //       round
  //       onChangeText={text => this.searchFilterFunction(text)}
  //       autoCorrect={false}
  //       value={this.state.value}
  //       inputContainerStyle={{marginBottom: 20}}
  //     />
  //   );
  // };

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    const buttons = ['hola']
    return (
      <View style={{flex:1}} >
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              leftAvatar={{ source: { uri: item.logo } }}
              title={`${item.nombre}`}
              titleStyle={{fontWeight: 'bold'}}
              subtitle={`Clave: ${item.clave_sep}`}
              subtitleStyle={styles.suptitulo}
              // onPress={() => {Alert.alert(`Haz presionado el item ${item.nombre}`)}}
              onPress={() => {this.props.navigation.navigate('DetalleUniversidad', {universidad: item})}}
              containerStyle={styles.list}
              titleStyle={styles.titulo}              
              rightComponent={
                <ButtonGroup 
                  buttons={buttons}
                />
              }
            />
          )}
          keyExtractor={item => item.nombre}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    list:{
      backgroundColor:'transparent'
    },
    titulo:{
      color:'#ffff',
      fontSize: 12,
      backgroundColor:'#16A086',
      borderRadius:5,
      fontWeight:'bold'
    },
    suptitulo:{
      fontSize: 19,
      color:'rgba(29,58,108, 1.0)',
      textAlign:'center',
      fontFamily:'GothamBold'


    }
})