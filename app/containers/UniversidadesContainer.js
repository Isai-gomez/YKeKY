import React,{Component} from 'react';
import {View,Text,StyleSheet, FlatList, ActivityIndicator,TouchableOpacity,Image} from 'react-native';
import colors from '../styles/colors';
import { ListItem, SearchBar } from 'react-native-elements';

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

  makeRemoteRequest = () => {
    const url = `http://18.191.196.186:3001/api/universidades/`;
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
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.nombreUniversidad.toUpperCase()} ${item.calle.toUpperCase()} ${item.clave_sep.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              leftAvatar={{ source: { uri: item.logo } }}
              title={`${item.nombreUniversidad} ${item.calle}`}
              subtitle={item.clave_sep}
            />
          )}
          keyExtractor={item => item.nombreUniversidad}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.blue,
        marginBottom: 20,
        flexWrap: 'wrap',
        marginHorizontal: 10,
        borderRadius: 5
    }
})