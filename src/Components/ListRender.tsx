import { StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import { TaskCard } from "./TaskCard";
import React from "react";
import { Task } from "../Context/task";


interface ListRenderProps {
    data: Task[];
    conteinerStyle?: StyleProp<ViewStyle>;
    buttonStyle?: StyleProp<ViewStyle>;

    onPresAction: (value: number) => void;
}


// this is only for render task cards 
// use the index for id or generate random number for ids
export const ListRender = ({ data, conteinerStyle, buttonStyle, onPresAction }: ListRenderProps): JSX.Element[] => {
    return data.map((item, index) => {

        return (
            <View
                style={conteinerStyle}
                key={index}
            >
                <TouchableOpacity
                    onPress={() => onPresAction(index)}
                    style={[styles.buttonCard, buttonStyle]}
                    activeOpacity={0.5}
                >
                    <TaskCard
                        levelColor={item.levelColor}
                        title={item.title}
                        description={item.description}
                    />
                </TouchableOpacity>
            </View>
        );

    });
};

const styles = StyleSheet.create({
    buttonCard: {
        marginVertical: 3,
    }
});