import React from "react";
import { View , Text , TouchableOpacity, StyleSheet} from 'react-native';
import BookList from "../components/bookList";

const bookScreen = (props) => {
    return(
        <View>
            <BookList />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 5,
        marginHorizontal: 7,
    }
})

export default bookScreen;