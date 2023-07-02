import { Platform, StatusBar } from "react-native";
import { Main } from "./src/Main/Main";
import { TaskProvider } from "./src/Context/taskContext";

const App = (): JSX.Element => {
  return (
    <>
      <StatusBar
        backgroundColor="#000"
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      />
      <TaskProvider>
        <Main />
      </TaskProvider>
    </>
  );
};

export default App;