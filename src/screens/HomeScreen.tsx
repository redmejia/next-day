import {  Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../Components/Header";
import Icon from "react-native-vector-icons/Ionicons";
import { ActionScrollList } from "../Components/ActionScrollList";
import { ListRender } from "../Components/ListRender";
import { ModalTask } from "../Components/Modal";
import { useContext, useState } from "react";
import { TaskContext } from "../Context/taskContext";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LevelColor } from "../Context/labelLevelColor";


interface Props extends NativeStackScreenProps<any, any> { }

export const Home = ({ navigation }: Props): JSX.Element => {

    const [isVisible, setModalVisible] = useState<boolean>(false)

    const { mytask, onProgress, markAsComplete, resetTask, deleteTask } = useContext(TaskContext)

    // const {navigate} = useNavigation()


    if (isVisible) {
        return <ModalTask isVisible={isVisible} closeModal={setModalVisible} />
    }



    return (
        <View style={{ flex: 1 }}>

            <Header
                containerBackgroundColor={onProgress.title.length !== 0 ? '#6A1B9A' : '#009688'}
                actionButton={
                    <View
                        style={styles.actionButtons}
                    >
                        {
                            onProgress.title && <TouchableOpacity
                                onPress={() => {
                                    markAsComplete({ ...onProgress, levelColor: LevelColor.COMPLETE })
                                    resetTask()
                                    deleteTask(onProgress.tskID)
                                }}
                            >
                                <Icon
                                    color={"#fff"}
                                    size={30}
                                    name="checkmark-done-outline" />
                            </TouchableOpacity>
                        }

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Progress')}
                        >
                            <Icon
                                color={"#fff"}
                                size={25}
                                name="pencil-outline" />
                        </TouchableOpacity>
                    </View>
                }
                actionText={
                    <>
                        {
                            onProgress.title &&
                            <Icon
                                name="bicycle-outline"
                                size={30}
                                color={'#fff'}
                                style={{ marginHorizontal: 10 }}
                            />
                        }
                        {/* if you have title show task els NADA */}
                        <Text style={styles.actionText}>{onProgress.title || ''}
                        </Text>
                    </>
                }

                headerIndicator={
                    <View style={styles.headerTitle}>
                        <Text style={styles.headerText}> My Learning | Tasks </Text>
                        <Icon
                            color={"#fff"}
                            size={25}
                            name="chevron-down-outline"
                        />
                    </View>
                }
            />

            <ActionScrollList
                renderListItems={
                    <ListRender
                        onDeletAction={deleteTask}
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
        top: Platform.OS === 'ios' ? 60 : 50,
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