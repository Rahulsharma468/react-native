import React from "react";
import { View , Text , StyleSheet} from "react-native";

class todoList extends React.Component{
    render(){
        return(
            <View style={styles.todocontainer}>
                <Text style={styles.item}>ONE TODO</Text>
                <Text style={styles.item}>TWO TODO</Text>
                <Text style={styles.item}>THREE TODO</Text>
                <Text style={styles.item}>FOUR TODO</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    todocontainer: {
        backgroundColor: 'dimgrey',
        alignItems: "center",
        justifyContent: "space-around"
    }
    ,
    item: {
        color: 'white',
        fontSize: 18,
        paddingVertical: 10
    }
})

export default todoList;