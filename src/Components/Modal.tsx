import { View, Modal, StyleSheet, Pressable, Text, TouchableOpacity, Platform } from "react-native";

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

                <Text style={styles.buttonText}> X </Text>
            </View>
        </TouchableOpacity>
    )
}

export const ModalTask = ({ isVisible, closeModal }: ModalProps): JSX.Element => {

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
            >

                <View style={styles.centeredView}>

                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Text style={styles.modalText}>Hello World!</Text>


                    </View>
                    <CloseButton
                        closeModal={closeModal}
                        isVisible={isVisible}
                    />
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
        // borderRadius: 20,
        padding: 2,
        right: 19
    },
    textStyle: {
        textAlign: 'center',
        alignSelf: 'center',
        fontWeight: '00',
        fontSize: 20,
        color: '#fff'

    },
    buttonText: {
        fontWeight: '700',
        fontSize: 20,
        color: '#fff'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
