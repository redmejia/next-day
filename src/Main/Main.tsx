import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../screens/HomeScreen";

import Icon from 'react-native-vector-icons/Ionicons'
import { Complete } from "../screens/CompleteScreen";
import { SelectTaskScreen } from "../screens/SelectTask";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParams = {
    Bottom: Object,
    Progress: Object 
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParams>()



const BottomTab = (): JSX.Element => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: '#fff'
            }}
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#6A1B9A',
                tabBarLabelStyle: {

                },
                tabBarStyle: {
                    backgroundColor: '#000000',
                    position: 'absolute',
                    // backgroundColor : 'rgba(0,0,0, 0.0)',
                    borderWidth: 0,
                    // elevation: 0,
                    // marginTop: 10
                }

            }}

        >
            <Tab.Screen
                name="Home"
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            color={color}
                            size={25}
                            name="home-outline"
                        />)
                }}
                component={Home} />
            <Tab.Screen
                name="Complete"
                options={{
                    tabBarLabel: 'Complete',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            color={color}
                            size={25}
                            name="trophy-outline"
                        />)
                }}
                component={Complete} />
        </Tab.Navigator>
    );
};

export const Main = (): JSX.Element => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Bottom"
                    component={BottomTab}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="Progress"
                    options={{headerShown: false}}
                    component={SelectTaskScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};