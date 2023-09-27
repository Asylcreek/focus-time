import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

import RoundedButton from '../components/RoundedButton';

import { spacing } from '../utils/sizes';

const Focus = ({ setCurrentSubject }) => {
  const [subject, setSubject] = useState('');

  const handleSubmit = () => {
    setCurrentSubject(subject);
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="What would you like to focus on?"
          value={subject}
          onChangeText={setSubject}
        />
        <RoundedButton title="+" size={50} onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    padding: spacing.lg,
    justifyContent: 'top',
    alignItems: 'center',
  },
  textInput: {
    marginRight: spacing.sm,
  },
});

export default Focus;
