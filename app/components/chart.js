import React, { Component } from 'react';
import { View,Text,StyleSheet,ScrollView} from 'react-native';
import { VictoryPie,VictoryBar, VictoryChart, VictoryTheme,VictoryAxis,VictoryArea,VictoryPolarAxis,VictoryLine,VictoryScatter} from "victory-native";

const data = [
    { x: 1, y: 2, label:"1"},
    { x: 2, y: 3, label:"2"},
    { x: 3, y: 5, label:"3"},
    { x: 5, y: 3 },
    { x: 4, y: 4 },
    { x: 6, y: 6 },
    { x: 7, y: 2 },
    { x: 8, y: 3 },
    { x: 9, y: 5 },
    { x: 10, y: 3 },
    { x: 11, y: 4 },
    { x: 12, y: 6},
  ];

export default class Chart extends Component {
  
    render() {
        return (
            <View style={styles.container}>
                {/* <VictoryChart 
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
                </VictoryChart> */}
                <VictoryChart
                
                animate={{
                  duration: 5000,
                  onLoad: { duration: 1000 }
                }}>
                  <VictoryLine
                    interpolation="natural"
                    data={data}
                    style={{ data: { stroke: "#c43a31", strokeWidth: 5, strokeLinecap: "round" } }}
                  />
                  <VictoryScatter
                    style={{
                      parent: {
                        border: "1px solid #ccc"
                      },
                      data: {
                        fill:(d) => d.x === 1? "#ff9e00" :d.x === 2? "#290198" :d.x === 3? "#c595b7":d.x === 4? "#5cb85c" :d.x === 5? "#0970d2":d.x === 6? "#0970d2":d.x === 7? "#0970d2":d.x === 8? "#0970d2":d.x === 9? "#0970d2":d.x === 10? "#0970d2":d.x === 11? "#c595b7":"#c43a31"
                      },
                                           
                    }}
                    size={9}
                    data={data}
                    labels={(datum) => datum.x}
                  />
                  </VictoryChart>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5fcff"
    }
  });


