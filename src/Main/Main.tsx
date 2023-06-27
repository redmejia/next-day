import { View, } from "react-native";
import { Header } from "../screens/Header";

export const Main = (): JSX.Element => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <View style={{ flex: 3, backgroundColor: '#fff' }} />
        </View>
    );
};