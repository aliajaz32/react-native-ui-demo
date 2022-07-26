import {SafeAreaView, Text, View,TextInput ,StyleSheet, Dimensions} from 'react-native';
import MapView from 'react-native-maps';

export default function Map(){
    return(
      <MapView style={styles.map} />
    )
}

const styles = StyleSheet.create({
    map: {
      width: 300,
      height: 300,
    },
  });