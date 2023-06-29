import { View, Modal, StyleSheet, Pressable, Text, TouchableOpacity, Platform } from "react-native";
import { LevelListRender } from "./LevelListRender";

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

const AddButton = ({ isVisible, closeModal }: ModalProps): JSX.Element => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => closeModal(isVisible)} // test this will take action
            style={styles.addButton}
        >
            <Text style={styles.addButtonText}> + </Text>
        </TouchableOpacity>
    )
}

export const ModalTask = ({ isVisible, closeModal }: ModalProps): JSX.Element => {

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={isVisible}
            >

                <View style={styles.centeredView}>

                    <View style={styles.modalView}>
                        <LevelListRender />
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Text style={styles.modalText}>Hello World!</Text>


                    </View>
                    <CloseButton
                        closeModal={closeModal}
                        isVisible={isVisible}
                    />
                    <View
                        style={{ position: 'absolute', justifyContent: 'center', right: 20, alignItems: 'center', bottom: Platform.OS === 'ios' ? 100 : 70 }}
                    >

                        <AddButton
                            isVisible={isVisible}
                            closeModal={closeModal}
                        />
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
    addButton: {
        bottom: 10,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#2196F3',
        width: 50,
        height: 50,
        borderRadius: 100,

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
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
