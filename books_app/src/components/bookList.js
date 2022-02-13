import React from "react";
import { View , Text , FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'

import data from '../../data/books.json';

const BookList = (props) => {
    return(
        <View>
            <FlatList 
            data={data} 
            renderItem={({item}) => {
                return(
                    <TouchableOpacity onPress={() => props.navigation.navigate('BookDetailS' , {book: item})}>
                        <Text style={styles.textStyle}>{item.title}</Text>
                    </TouchableOpacity>
                )
            }}
            keyExtractor={book => book.isbn} />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,

    }
})

export default withNavigation(BookList);