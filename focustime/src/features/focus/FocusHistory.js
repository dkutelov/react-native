import React from "react";

import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";

import { fontSizes, spacing } from "../../utils/sizes";
import { RoundedButton } from "../../components/RoundedButton";

const HistroyItem = ({ item, index }) => {
  return <Text style={styles(item.status).itemList}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles().title}>Things we've focused on</Text>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: "center" }}
              data={focusHistory}
              renderItem={HistroyItem}
            />
            <View style={styles().clearContainer}>
              <RoundedButton
                size={spacing.xxxl}
                title="Clear"
                onPress={onClear}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = (status) =>
  StyleSheet.create({
    itemList: {
      color: status > 1 ? "red" : "green",
      fontSize: fontSizes.md
    },
    title: {
      color: "white",
      fontSize: fontSizes.lg
    },
    clearContainer: {
      alignItems: "center",
      padding: spacing.lg
    }
  });
