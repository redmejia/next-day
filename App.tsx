import { Platform, StatusBar } from "react-native";
import { Main } from "./src/Main/Main";

const App = (): JSX.Element => {
  return (
    <>
       <StatusBar
				backgroundColor="#000"
				barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
			/>
      <Main />
    </>
  );
};

export default App;