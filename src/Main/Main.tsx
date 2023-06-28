import { View, } from "react-native";
import { Header } from "../screens/Header";
import { Task } from "../screens/Tasks";

export const Main = (): JSX.Element => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <Task />
        </View>
    );
};