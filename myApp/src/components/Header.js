import React from "react";
import {View , Text} from 'react-native';

const Header = (props) => {
    const {textStyling , viewStyle} = styles;
    return(
        <View style={viewStyle}>
            <Text style={textStyling}>{props.title}</Text>
        </View>
    )
}

const styles = {
    textStyling: {
        fontSize: 30,
        color: 'red'
    },
    viewStyle:{
        backgroundColor: 'gainsboro',
        height: 70,
        alignItems: 'center',
        justifyContent:'center',
    }
};

export default Header;