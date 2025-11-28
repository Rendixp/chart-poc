import { useState } from "react";
import { Button, Dimensions, ScrollView, Text, View } from "react-native";
import {
  LineChart
} from "react-native-chart-kit";

export default function EChartScreen() {
  const dataA = [
    5,
    15,
    30,
    26,
    75,
    55,
    85,
  ];

  const dataB = [
    30,
    55,
    26,
    75,
    15,
    5,
    45,
  ];

  const [currentData, setCurrentData] = useState(dataA);
  const [tooltip, setTooltip] = useState<{ value: number, x: number, y: number } | null>(null);

  return (
    <ScrollView>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', gap: 40, marginBottom: 40 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 40 }}>
          RN Chart Kit
        </Text>

        <ScrollView horizontal style={{ marginLeft: -60 }}>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [
                {
                  data: currentData
                },
              ]
            }}
            width={Dimensions.get("window").width + 30}
            height={220}
            transparent
            withHorizontalLabels={false}
            withVerticalLabels={false}
            withDots={false}
            yAxisInterval={1}
            chartConfig={{
              decimalPlaces: 2,
              color: () => `rgba(255, 193, 7)`,
              strokeWidth: 3,
            }}
            bezier
          />
        </ScrollView>

        <Button
          title="Change Data to Test Animation"
          onPress={() => setCurrentData(currentData === dataA ? dataB : dataA)}
        />

        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 40 }}>
          RN Chart Kit with multiple indices
        </Text>

        <View style={{ marginLeft: -60 }}>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [
                {
                  data: dataA,
                  color: () => `rgba(255, 193, 7)`, // optional
                  strokeWidth: 3 // optional
                },
                {
                  data: dataB,
                  color: () => `rgba(3, 169, 244)`, // optional

                  strokeWidth: 3 // optional
                }
              ]
            }}
            width={Dimensions.get("window").width + 180} // from react-native
            height={220}
            transparent
            withHorizontalLabels={false}
            withVerticalLabels={false}
            withDots={false}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
              decimalPlaces: 2, // optional, defaults to 2dp
              color: () => `rgba(255, 193, 7)`,
              strokeWidth: 3,
            }}
            bezier
          />
        </View>

        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 40 }}>
          RN Chart Kit with tooltip
        </Text>

        <View style={{ marginLeft: -60 }}>
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [
                {
                  data: currentData
                },
              ]
            }}
            width={Dimensions.get("window").width + 180}
            height={220}
            transparent
            withHorizontalLabels={false}
            withVerticalLabels={false}
            withDots={true}
            yAxisInterval={1}
            chartConfig={{
              decimalPlaces: 2,
              color: () => `rgba(255, 193, 7)`,
              strokeWidth: 3,
            }}
            bezier
            onDataPointClick={(data) => {
              setTooltip({
                value: data.value,
                x: data.x,
                y: data.y,
              });
            }}
          />

          {tooltip && (
            <View
              style={{
                position: 'absolute',
                left: tooltip.x - 20,
                top: tooltip.y - 30,
                backgroundColor: 'black',
                padding: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: 'white' }}>{tooltip.value}</Text>
            </View>
          )}
        </View>
      </View>


    </ScrollView>
  );
}
