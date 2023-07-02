import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../Components/Header";
import Icon from "react-native-vector-icons/Ionicons";
import { useContext } from "react";
import { TaskContext } from "../Context/taskContext";
import { ActionScrollList } from "../Components/ActionScrollList";
import { ListRender } from "../Components/ListRender";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

interface Props extends NativeStackScreenProps<any, any> { }

export const SelectTaskScreen = ({ navigation }: Props): JSX.Element => {

    const { mytask, onProgress, addToProgres } = useContext(TaskContext)

    return (
        <View style={{ flex: 1 }}>
            <Header
                containerBackgroundColor={onProgress.title.length !== 0 ? '#6A1B9A': '#009688' }
                actionButton={
                    <View
                        style={styles.goBackButton}
                    >
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                        >
                            <Icon
                                color={"#fff"}
                                size={30}
                                name="arrow-back-circle-outline" />
                        </TouchableOpacity>
                    </View>
                }
                actionText={
                    <Text style={styles.actionText}>{onProgress.title || ''}</Text>
                }
                headerIndicator={
                    <View style={styles.headerTitle}>
                        <Text style={styles.headerText}> My Learning | My Tasks </Text>
                        <Icon
                            color={"#fff"}
                            size={30}
                            name="chevron-down-outline"
                        />
                    </View>
                }
            />

            <ActionScrollList
                renderListItems={
                    <ListRender
                        onPresAction={addToProgres}
                        data={mytask}
                    />

                }
            />
        </View>
    );
};

const styles = StyleSheet.create({

    actionText: {
        marginHorizontal: 10,
        color: '#fff',
        fontSize: 20,

    },
    headerTitle: {
        // backgroundColor: 'red',
        position: 'relative',
        top: Platform.OS === 'ios' ? 70 : 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 15
    },
    goBackButton: {
        top: Platform.OS === 'android' ? 12 : 55,
        // alignItems: 'center',
        // justifyContent: 'center',
        flexDirection: 'row',
        left: 10,
        position: 'absolute',
        // backgroundColor: 'red',
        width: 100,
        height: 30
    },
});