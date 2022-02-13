import React from "react";
import { TouchableOpacity  , Text } from 'react-native';

const Button = (props) => {
    return(
        <TouchableOpacity onPress={props.buttonpress} style={styles.buttonStyle}>
            <Text style={styles.textStyle}>
                {props.text}
            </Text>
        </TouchableOpacity>
        
    )
}

const styles = {
    textStyle: {
        fontSize: 14 ,
        fontWeight: "500",
        paddingTop:6 ,
        paddingBottom:6 ,
        color: "black"
    },
    buttonStyle: {
        flex: 1,
        borderRadius: 14
    }
}

export default Button;