import { StyleSheet, Text, View } from "react-native";
import WebView from "react-native-webview";

export default function Page() {
  return (
    <View className="flex-1 pt-8">
      <WebView
        source={{ uri: 'https://ibnshayed.github.io' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    padding: 50,
    height: 500,
    overflow: "hidden",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
