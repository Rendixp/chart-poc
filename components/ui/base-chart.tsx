import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { LineChart, LineChartPropsType } from 'react-native-gifted-charts';

export type ChartDataItem = Record<string, string | number>;

interface BaseChartProps extends LineChartPropsType {
  data: ChartDataItem[];
  data2?: ChartDataItem[];
  data3?: ChartDataItem[];
  data4?: ChartDataItem[];
  data5?: ChartDataItem[];
  hideAxisLabels?: boolean;
}

export default function BaseChart({
  data,
  data2,
  spacing = 25,
  color1 = '#FFC107',
  color2 = '#03A9F4',
  startFillColor = '#FFB347',
  startFillColor2 = '#81D4FA',
  startOpacity = 0.8,
  endFillColor = '#FFB347',
  endFillColor2 = '#81D4FA',
  endOpacity = 0.1,
  hideDataPoints = true,
  areaChart = true,
  animateOnDataChange = true,
  scrollToEnd = true,
  initialSpacing = 0,
  endSpacing = 0,
  hideAxisLabels = false,
  ...props
}: BaseChartProps) {
  const defaultPointerConfig = {
    activatePointersOnLongPress: false,
    pointerStripHeight: 180,
    pointerStripUptoDataPoint: true,
    pointerLabelComponent: (items: { value: string }[]) => {
      return (
        <View style={{ padding: 6, backgroundColor: 'black', borderRadius: 6, width: 30 }}>
          <Text style={{ color: 'white' }}>{items[0].value}</Text>
        </View>
      );
    },
  }

  const defaultWidth = Dimensions.get('window').width - 32; // full width minus some padding

  return (
    <LineChart
      {...props}
      data={data}
      areaChart={areaChart}
      width={props.width ?? defaultWidth}
      spacing={spacing}
      color1={color1}
      startFillColor={startFillColor}
      startFillColor2={startFillColor2}
      startOpacity={startOpacity}
      endFillColor={endFillColor}
      endFillColor2={endFillColor2}
      endOpacity={endOpacity}
      yAxisColor={hideAxisLabels ? 'transparent' : props.yAxisColor}
      xAxisColor={hideAxisLabels ? 'transparent' : props.xAxisColor}
      hideDataPoints={hideDataPoints}
      hideYAxisText={hideAxisLabels || props.hideYAxisText}
      animateOnDataChange={animateOnDataChange}
      scrollToEnd={scrollToEnd}
      initialSpacing={initialSpacing}
      endSpacing={endSpacing}
      pointerConfig={props.pointerConfig ?? defaultPointerConfig}
    />
  );
}