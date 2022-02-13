import React from "react";
import { View , Text , StyleSheet} from "react-native";

class navBar extends React.Component{
    render(){
        return(
            <View style={styles.headerConatiner}> 
                <Text style={styles.headertext}>Nav</Text>
                
                <View style={styles.headerTabConatiner}>
                    <Text style={styles.headerTab}>One</Text>
                    <Text style={styles.headerTab}>Two</Text>
                    <Text style={styles.headerTab}>Three</Text>
                    <Text style={styles.headerTab}>Four</Text>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerConatiner: {
        backgroundColor: 'dimgrey',
        height: 150,
        justifyContent: 'space-between',
        alignItems: "center",
        paddingTop: 10
    }
    ,
    headertext: {
        marginTop: 25,
        fontSize: 26,
        color: "white"
    }
    ,
    headerTabConatiner: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 25,
        marginTop: 8,
        backgroundColor: 'white',
        alignSelf: "flex-end"
    }
    ,
    headerTab: {
        fontSize: 20,
        paddingVertical: 10,
    }
})

export default navBar;