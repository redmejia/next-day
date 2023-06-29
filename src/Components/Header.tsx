import React from "react";
import { StyleSheet, View, StyleProp, ViewProps, Platform, ViewStyle } from "react-native";


interface HeaderProps {

    actionText?: JSX.Element;
    actionButton?: JSX.Element;

    containerBackgroundColor?: string;

    headerIndicator?: JSX.Element;

    taskStatusStyle?: StyleProp<ViewStyle>;
}

export const Header = ({ 
    actionButton, 
    actionText,
    containerBackgroundColor ='#009688',
    taskStatusStyle, 
    headerIndicator
}: HeaderProps): JSX.Element => {
    return (
        <View style={{...styles.container, backgroundColor: containerBackgroundColor  }} >
            {actionButton}

            <View style={[styles.taskStatus, taskStatusStyle ]}>
                {actionText}
            </View>
            {headerIndicator}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        // backgroundColor: '#009688',
        justifyContent: 'center',
        // alignItems:'center',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        // zIndex: 9999
    },
    taskStatus: {
        // backgroundColor: 'red',
        
        // marginTop: 95,
        top: Platform.OS === 'android'? 10 : 30,
    },
  
 
    
});