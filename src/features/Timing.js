import { View, StyleSheet } from 'react-native';

import RoundedButton from '../components/RoundedButton';

const times = [10, 15, 20];

const Timing = ({ onChangeTime }) => {
  return (
    <>
      {times.map((time) => (
        <View key={time} style={styles.container}>
          <RoundedButton
            title={String(time)}
            size={75}
            onPress={() => {
              onChangeTime(time);
            }}
          />
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Timing;
