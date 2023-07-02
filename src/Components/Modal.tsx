import { View, Modal, StyleSheet, Pressable, Text, TouchableOpacity, Platform, TextInput, useWindowDimensions } from "react-native";
import { LevelListRender } from "./LevelListRender";
import { Dispatch, SetStateAction, useCallback, useContext, useState } from "react";
import { TaskCard } from "./TaskCard";
import { TaskContext } from "../Context/taskContext";
import { Task } from "../Context/task";

interface ModalProps {
    isVisible: boolean;
    closeModal: (close: boolean) => void
}

const CloseButton = ({ isVisible, closeModal }: ModalProps): JSX.Element => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => closeModal(!isVisible)}
            style={styles.closeButton}
        >
            <View
                style={{
                    paddingVertical: 10,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >

                <Text style={styles.closeButtonText}> X </Text>
            </View>
        </TouchableOpacity>
    )
}


interface addButtonProps extends ModalProps {
    newTask: Task;
    addTask: (newTask: Task) => void
}

const AddButton = ({ addTask, newTask, isVisible, closeModal }: addButtonProps): JSX.Element => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
                addTask(newTask)
                closeModal(!isVisible)
            }} // test this will take action
            style={styles.addButton}
        >
            <Text style={styles.addButtonText}> + </Text>
        </TouchableOpacity>
    )
}

export interface Form {
    title: string;
    description: string;
    levelColor: string
}

// export type ActionSelectColor = (form : Form) => void;

export const ModalTask = ({ isVisible, closeModal }: ModalProps): JSX.Element => {

    const [form, setForm] = useState<Task>({ title: '', description: '', levelColor: '' })

    const { mytask, addNewTask } = useContext(TaskContext)

    const dim = useWindowDimensions()




    const onChangeColor = (fn: Dispatch<SetStateAction<Task>>, value: string): void => {

        fn({ ...form, levelColor: value })

    }

    // const actionSelect = (fn: Function, value: string): void => {
    //     fn(setForm({ ...form, levelColor: value }))
    // }

    const onChange = (value: string, field: string) => {
        setForm({
            ...form,
            [field]: value,
        })
    }




    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={isVisible}
            >

                <View style={styles.centeredView}>

                    <View style={styles.modalView}>
                        <LevelListRender
                            dispatchSetAction={setForm}
                            action={onChangeColor}
                        />
                        <View style={{ width: dim.width - 50, marginTop: 10 }}>
                            <Text style={{ textAlign: 'center', fontSize: 20, }}> Task or Learning Short Decription</Text>
                            <TextInput
                                style={styles.textInput}
                                placeholder='Title'
                                autoCorrect={false}
                                autoCapitalize="words"
                                onChangeText={(value) => onChange(value, 'title')}
                            />
                            <TextInput
                                style={styles.textInput}
                                placeholder='Description'
                                autoCorrect={false}
                                autoCapitalize="words"
                                onChangeText={(value) => onChange(value, 'description')}
                            />
                        </View>
                        <View
                            style={{ width: dim.width - 20, margin: 10, alignItems: 'flex-start', justifyContent: 'flex-start' }}
                        >
                            {
                                form.levelColor ?
                                    <TaskCard
                                        title={form.title}
                                        description={form.description}
                                        levelColor={form.levelColor}
                                        boxContainer={{ width: dim.width - 90, height: 40 }}
                                        textTitleStyle={{ fontSize: 15, fontWeight: '500' }}
                                        desTitleStyle={{ fontSize: 12, fontWeight: '300' }}
                                    /> : null
                            }
                        </View>
                    </View>
                    <CloseButton
                        closeModal={closeModal}
                        isVisible={isVisible}
                    />
                    <View
                        style={styles.addButtonCotaniner}
                    >

                        <AddButton
                            isVisible={isVisible}
                            newTask={form}
                            addTask={addNewTask}
                            closeModal={closeModal}
                        />
                        {/* <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => {
                                console.log("this was click");
                                
                                addNewTask(form)
                            }} // test this will take action
                            style={styles.addButton}
                        >
                            <Text style={styles.addButtonText}> + </Text>
                        </TouchableOpacity> */}
                    </View>


                </View>
            </Modal>


        </View>
    );
};

const styles = StyleSheet.create({

    centeredView: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: Platform.OS === 'android' ? 22 : 50,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    closeButton: {
        top: -7,
        position: 'absolute',
        backgroundColor: '#2196F3',
        width: 50,
        height: 50,
        borderRadius: 100,
        padding: 2,
        left: 19
    },
    addButtonCotaniner: {
        position: 'relative',
        justifyContent: 'center',
        // right: 20,
        alignItems: 'center',
        // top: -50
        // bottom: Platform.OS === 'ios' ? 100 : 70
    },
    addButton: {
        bottom: 10,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#2196F3',
        width: 50,
        height: 50,
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
    addButtonText: {
        alignSelf: 'center',
        fontWeight: '400',
        fontSize: 30,
        color: '#fff'
    },
    textStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: '00',
        fontSize: 20,
        color: '#fff'

    },
    closeButtonText: {
        fontWeight: '700',
        fontSize: 20,
        color: '#fff'
    },
    textInput: {
        marginVertical: 2,
        paddingVertical: 15,

        borderBottomWidth: 1,
        borderBottomColor: '#2196F3'

    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
