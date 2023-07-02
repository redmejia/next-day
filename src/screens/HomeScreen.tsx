import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../Components/Header";
import Icon from "react-native-vector-icons/Ionicons";
import { ActionScrollList } from "../Components/ActionScrollList";
import { ListRender } from "../Components/ListRender";
import { ModalTask } from "../Components/Modal";
import { useContext, useState } from "react";
import { TaskContext } from "../Context/taskContext";


export const Home = (): JSX.Element => {

    const [isVisible, setModalVisible] = useState<boolean>(false)

    const { mytask } = useContext(TaskContext)

    if (isVisible) {
        return <ModalTask isVisible={isVisible} closeModal={setModalVisible} />
    }


    return (
        <View style={{ flex: 1 }}>

            <Header
                actionButton={
                    <View
                        style={styles.actionButtons}
                    >
                        <TouchableOpacity>
                            <Icon
                                color={"#fff"}
                                size={30}
                                name="checkmark-done-outline" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon
                                color={"#fff"}
                                size={25}
                                name="pencil-outline" />
                        </TouchableOpacity>
                    </View>
                }
                actionText={
                    <Text style={styles.actionText}>Start Task Or Learning</Text>
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
                        onPresAction={(value: number) => { console.log(value) }}
                        data={mytask}
                    />

                }
                actionButton={

                    <TouchableOpacity
                        activeOpacity={0.30}
                        onPress={() => setModalVisible(true)}
                        style={styles.floatingButton}
                    >
                        {/* use Icon not text */}
                        <Text style={styles.buttonText}> + </Text>

                    </TouchableOpacity>
                }
            />

        </View>
    );
};

const styles = StyleSheet.create({
    actionButtons: {
        top: Platform.OS === 'android' ? 12 : 55,
        // alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        right: 20,
        position: 'absolute',
        // backgroundColor: 'red',
        width: 100,
        height: 30
    },
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

    floatingButton: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 100 : 70,
        right: 40,

        height: 50,
        width: 50,

        backgroundColor: '#2196F3',
        borderRadius: 100,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 10,

    },

    buttonText: {
        alignSelf: 'center',
        fontWeight: '400',
        fontSize: 30,
        color: '#fff'
    }
});