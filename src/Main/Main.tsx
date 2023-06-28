import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Home } from "../screens/HomeScreen";
import { Complete } from "../screens/Complete";
import Icon from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

export const Main = (): JSX.Element => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                sceneContainerStyle={{
                    backgroundColor: '#fff'
                }}
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#6A1B9A',
                    tabBarLabelStyle:{

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
        </NavigationContainer>
    );
};