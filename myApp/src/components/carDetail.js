import React from "react";
import { View , Text , Image , Linking } from "react-native";
import Item from './item';
import ItemSection from './itemSection';
import Button from "./button";

const carDetail = (props) => {
    return(
        <Item>
            <ItemSection>
                <View View={styles.headerContainer}>
                    <Text style={styles.headerText}>{props.brand.model[0].name}</Text>
                    <Text style={styles.headerText}>{props.brand.brand}</Text>
                </View>
            </ItemSection>
            <ItemSection>
                <Image source={{ uri: props.brand.model[1].image }}  style={styles.imageStyle} />
            </ItemSection>
            <ItemSection>
                <Button text='Learn More' buttonpress = {() => {
                    Linking.openURL(props.brand.model[0].url);
                }}/>
            </ItemSection>
        </Item>
    )
}

const styles = {
    headerContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    headerText: {
        fontSize: 18,
        fontWeight: "500",
        textTransform: 'uppercase'
    },
    imageStyle: {
        height: 300,
        flex: 1, 
        width: 0
    }
}

export default carDetail;