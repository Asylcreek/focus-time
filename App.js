import { useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { colors } from './src/utils/colors';

import Focus from './src/features/Focus';
import Timer from './src/features/Timer';
import FocusHistory from './src/features/FocusHistory';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState('');
  const [history, setHistory] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus setCurrentSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          clearSubject={() => {
            setCurrentSubject('');
          }}
          onTimerEnd={(subject) => {
            setHistory((prev) => [...prev, subject]);
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: colors.darkBlue,
  },
});
