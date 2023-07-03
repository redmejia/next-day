import { ScrollView, View,  Platform, StyleSheet, StyleProp,  ViewStyle, ImageBackground } from "react-native";

interface ActionListProps {
    actionButton?: JSX.Element; // floating button to add more task o action

    containerStyle?: StyleProp<ViewStyle>;
    continerScrollStyle?: StyleProp<ViewStyle>;
    renderListItems?: JSX.Element,


}

export const ActionScrollList = ({ actionButton, containerStyle, renderListItems }: ActionListProps): JSX.Element => {
    return (
        <View style={[styles.container, containerStyle]} >

            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
            >
                {/* taka a Component that return a list of tasks card */}
                {renderListItems}
            </ScrollView>
            {/* for button add more task or items to lis */}
            {actionButton}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 8,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: Platform.OS === 'ios' ? 100 : 70
    }
});