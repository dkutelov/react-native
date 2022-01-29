import React from 'react';

import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

import { fontSizes, spacing } from '../../utils/sizes';
import { RoundedButton } from '../../components/RoundedButton';

const HistroyItem = ({ item, index }) => {
  return <Text style={styles.itemList(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
        <Text style={styles.title}>Things we've focused on</Text>
        {!!focusHistory.length && (
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ flex: 1, alignItems: 'center' }}
            data={focusHistory}
            renderItem={HistroyItem}
          />
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  itemList: (status) => ({
    color: status > 1 ? 'red' : 'green',
    fontSizes: fontSizes.md,
  }),
  title: {
    color: 'white',
    fontSize: fontSizes.lg,
  },
});
