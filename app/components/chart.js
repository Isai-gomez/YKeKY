import React, { Component } from 'react';
import { View,Text,StyleSheet,ScrollView} from 'react-native';
import { VictoryPie,VictoryBar, VictoryChart, VictoryTheme,VictoryAxis,VictoryArea,VictoryPolarAxis} from "victory-native";

const data = [
    { x: 1, y: 2, label:"1"},
    { x: 2, y: 3, label:"2"},
    { x: 3, y: 5, label:"3"},
    
  ];

export default class Chart extends Component {
  
    render() {
        return (
            <View style={styles.container}>
                {/* <VictoryPie
                  data={data}
                  innerRadius={40}
                  labelRadius={70}
                  style={{ labels: { fill: "white", fontSize: 20, fontWeight: "bold" } }}
                  polar={false}
                /> */}
                <VictoryChart 
                  polar
                  theme={VictoryTheme.material}
                  animate={{
                    duration: 2000,
                    onLoad: { duration: 1000 }
                  }}
                >
                   <VictoryArea data={data}
                   style={{ data: { fill: "#c43a31", width: 30 } }}
                   />
                   <VictoryPolarAxis/>
                </VictoryChart>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5fcff"
    }
  });


