import { View } from "react-native";
import { Header } from "./Header";
import { Task } from "./Tasks";

export const Home = (): JSX.Element => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <Task />
            {/* <View >
         
            </View> */}
        </View>
    );
};