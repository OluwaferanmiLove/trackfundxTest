import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Profile from "./src/screens/Profile/Profile";

export default function App() {
  return (
    <Provider store={store}>
      <Profile />
    </Provider>
  );
}
