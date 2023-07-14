import { StyleSheet, Text, View } from 'react-native';
import Navigator from './Components/Navigator';
import { FitnessContext } from './Context';

export default function App() {
  return (
    <FitnessContext>
      <Navigator/>
    </FitnessContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
