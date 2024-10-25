import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image ,TouchableOpacity, Dimensions, Platform} from 'react-native';
import { useDimensions, useDeviceOrientation} from '@react-native-community/hooks';

export default function App() {
  const {landscape} = useDeviceOrientation();

  return (
      <View style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "baseline",
      }}>
        <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 300,
      }}>
        
      </View>

      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 150,
      }}>
        
      </View>

      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100,
      }}>
        
      </View>
        
      </View>
      
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff9900',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
