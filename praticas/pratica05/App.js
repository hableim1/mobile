import { SafeAreaProvider } from "react-native-safe-area-context";
import { SettingsContext } from "react-native-paper/lib/typescript/core/settings";
import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  return <SafeAreaProvider><ProfileScreen></ProfileScreen></SafeAreaProvider>;
}

export default App;
