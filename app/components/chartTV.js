import React, { Component } from 'react';
import { View,Text,StyleSheet,ScrollView} from 'react-native';
import { VictoryPie,VictoryBar, VictoryChart, VictoryTheme,VictoryAxis,VictoryArea,VictoryPolarAxis,VictoryLine,VictoryScatter,VictoryLabel} from "victory-native";

const data = [
    { x: 1, y: 6, label:"Ingeniería"},
    { x: 2, y: 2, label:"Económico-Admvo"},
    { x: 3, y: 1, label:"Ciencias Básicas y Exactas"},
    { x: 4, y: 4, label:"Humanidades" },
    { x: 5, y: 5, label:"Ciencias Sociales" },
    { x: 6, y: 6, label:"Ciencias de la Salud" },
  ];

export default class ChartTV extends Component {
  
    render() {
        return (
            <View style={styles.container}>
                <VictoryChart
                
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 }
                }}>
                  <VictoryLine
                    interpolation="natural"
                    data={data}
                    labels={(datum) => datum.y}
                    labelComponent={<VictoryLabel renderInPortal dy={-5}/>}
                    style={{ data: { stroke: 'rgba(29,58,108, 1.0)', strokeWidth: 3, strokeLinecap: "round" } }}
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
                    labels={(datum) => datum.y}
                    labelComponent={<VictoryLabel renderInPortal dy={-5}/>}
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
    }
  });


