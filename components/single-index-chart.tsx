import { CHART_TIME_RANGE } from '@/constants/chartData';
import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import BaseChart, { ChartDataItem } from './ui/base-chart';

interface SingleIndexChartProps {
  data: {
    id: string;
    data: ChartDataItem[];
    spacing: number;
  }[];
}

export default function SingleIndexChart({
  data,
}: SingleIndexChartProps) {
  const [selectedRange, setSelectedRange] = useState('1D');

  const pointerConfig = {
    activatePointersOnLongPress: false,
    pointerStripHeight: 180,
    pointerStripUptoDataPoint: true,
    pointerLabelComponent: (items: { value: string | number; x?: string }[]) => {
      return (
        <View style={{ padding: 6, backgroundColor: 'black', borderRadius: 6, minWidth: 120 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>{`${items[0].x}: ${items[0].value}`}</Text>
        </View>
      );
    },
  };

  const currentData = data.find(item => item.id === selectedRange)?.data || [];
  const spacing = data.find(item => item.id === selectedRange)?.spacing || 25;
  // const spacing = Math.ceil(Dimensions.get("window").width - 32 / currentData.length);

  const handleRangeChange = (range: string) => {
    setSelectedRange(range);
  };

  return (
    <View style={{
      backgroundColor: "#171717",
      paddingHorizontal: 16,
      paddingVertical: 12,
    }}>
      <Text
        style={{
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: 14,
          lineHeight: 14 * 1.5,
          marginBottom: 12,
        }}>
        1 day percentage change
      </Text>

      <BaseChart
        data={currentData}
        hideAxisLabels
        spacing={spacing}
        hideAxesAndRules
        pointerConfig={pointerConfig}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 12 }}>
        {CHART_TIME_RANGE.map((range) => (
          <Pressable
            key={range}
            onPress={() => handleRangeChange(range)}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderRadius: 12,
              backgroundColor: selectedRange === range ? '#0D1B2A' : 'transparent',
            }}
          >
            <Text style={{ color: selectedRange === range ? '#FFC107' : 'rgba(255, 255, 255, 0.7)', fontWeight: 'bold' }}>
              {range}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}