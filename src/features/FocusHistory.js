import { View, Text, StyleSheet, FlatList } from 'react-native';

import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

const FocusHistory = ({ history }) => {
  if (!history.length) {
    return (
      <Text style={styles.title}>You haven't focused on anything yet</Text>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
    padding: spacing.md,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
});

export default FocusHistory;
