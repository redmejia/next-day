import { StyleSheet, Text, View } from "react-native";

export const Complete = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Text> Complete </Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent: 'center',
    alignItems:'center',
  }
});