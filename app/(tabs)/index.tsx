import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LineChart } from "react-native-gifted-charts";

export default function HomeScreen() {
  const dataA = [
    { value: 15 },
    { value: 30 },
    { value: 26 },
    { value: 75 },
    { value: 15 },
    { value: 28 },
    { value: 22 },
    { value: 40 },
    { value: 55 },
    { value: 75 },
    { value: 15 },
    { value: 28 },
    { value: 22 },
    { value: 40 },
    { value: 22 },
    { value: 40 },
    { value: 22 },
    { value: 40 },
    { value: 30 },
    { value: 25 },
    { value: 22 },
    { value: 40 },
    { value: 50 },
  ];

  const dataB = [
    { value: 20 }, { value: 15 }, { value: 35 }, { value: 65 },
    { value: 25 }, { value: 40 }, { value: 18 }, { value: 55 },
    { value: 52 }, { value: 60 }, { value: 10 }, { value: 18 },
    { value: 30 }, { value: 20 }, { value: 30 }, { value: 25 },
    { value: 50 }, { value: 55 }, { value: 75 }, { value: 15 },
  ];

  const [currentData, setCurrentData] = useState(dataA);

  // const largeData = Array.from({ length: 500 }, (_, i) => ({
  //   value: Math.floor(20 + Math.random() * 80),
  //   x: `P${i + 1}`,
  // }));

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', gap: 40, marginBottom: 40 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 40 }}>
          Gifted Charts
        </Text>

        <LineChart
          areaChart
          animateOnDataChange
          scrollToEnd
          initialSpacing={0}
          endSpacing={0}
          data={currentData}
          color="#FFC107"
          startFillColor="#FFB347"
          startOpacity={0.8}
          endFillColor="#FFB347"
          endOpacity={0.1}
          width={350}
          spacing={25}
          // spacing={3}
          hideDataPoints
          hideYAxisText
          yAxisColor={"transparent"}
          xAxisColor={"transparent"}
          pointerConfig={{
            activatePointersOnLongPress: false,
            pointerStripHeight: 180,
            pointerStripUptoDataPoint: true,
            pointerLabelComponent: (items: { value: string }[]) => {
              console.log('Pointer Items:', items);
              return (
                <View style={{ padding: 6, backgroundColor: 'black', borderRadius: 6, width: 30 }}>
                  <Text style={{ color: 'white' }}>{items[0].value}</Text>
                </View>
              );
            },
          }}
        />

        <Button
          title="Change Data to Test Animation"
          onPress={() => setCurrentData(currentData === dataA ? dataB : dataA)}
        />

        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 40 }}>
          Gifted Charts with multiple indices
        </Text>

        <LineChart
          areaChart
          animateOnDataChange
          scrollToEnd
          initialSpacing={0}
          endSpacing={0}
          data={dataA}
          data2={dataB}
          color1="#FFC107"
          color2="#03A9F4"
          startFillColor="#FFB347"
          startFillColor2="#81D4FA"
          startOpacity={0.8}
          endFillColor="#FFB347"
          endFillColor2="#81D4FA"
          endOpacity={0.1}
          width={350}
          spacing={40}
          hideDataPoints
          pointerConfig={{
            activatePointersOnLongPress: false,
            pointerStripHeight: 180,
            pointerStripUptoDataPoint: true,
            pointerLabelComponent: (items: { value: string }[]) => {
              console.log('Pointer Items:', items);
              return (
                <View style={{ padding: 6, backgroundColor: 'black', borderRadius: 6, width: 30 }}>
                  <Text style={{ color: 'white' }}>{items[0].value}</Text>
                </View>
              );
            },
          }}
        />
      </View>
    </ScrollView>
  );
}
