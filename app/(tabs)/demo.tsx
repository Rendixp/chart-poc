import SingleIndexChart from '@/components/single-index-chart';
import { SINGLE_INDEX_DATA } from '@/constants/chartData';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function DemoComponentScreen() {

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 40,
          marginBottom: 40
        }}>

        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 40
        }}>
          Single Index Chart
        </Text>

        <SingleIndexChart data={SINGLE_INDEX_DATA} />

      </View>
    </ScrollView>
  );
}
