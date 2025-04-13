import { StyleSheet, Text, View } from "react-native";

function App() {
  return (
    <View style={{ flex: 1 }}>
    <AppBar titulo="Minha Aplicação React Native" />
    <View style={styles.container}></View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#fff", 
    justifyContent: "center", 
    alignItems: "center"
  },

  appBar: {
    height: 50, 
    backgroundColor: "#333", 
    justifyContent: "center", 
    paddingLeft: 16
  },
  title: {
    fontSize: 20, 
    fontWeight: "bold", 
    color: "#fff"
  },
});


function AppBar(props) {
  return (
    <View style={styles.appBar}>
      <Text style={styles.title}>{props.titulo}</Text>
    </View>
  );d
  
}



export default App;
