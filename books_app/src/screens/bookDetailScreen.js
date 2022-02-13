import React from "react";
import { View , Text , StyleSheet } from 'react-native';

const BookDetailScreen  = (props) => {
    const book = props.navigation.getParam('book');
    
    return(
        <View>
            <Text>{book.title}</Text>
        </View>
    )
}

export default BookDetailScreen;