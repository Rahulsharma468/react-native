import React from "react";
import {View , Text , ScrollView} from 'react-native';
import axios from 'axios';
import CarDetail from '../components/carDetail';

class carList extends React.Component {
    constructor(){
        super();
        this.state = {
            carList: []
        }
    }

    renderList = () => {
        return this.state.carList.map((brand) => {
            return(
                <CarDetail key={brand.model[0].name} brand={brand} />
            )
        })
    }

    componentDidMount(){
        axios.get('https://givecars.herokuapp.com')
        .then((res) => {
            console.log("res"+res)
            this.setState({
                carList: res.data
            })
        })
        .catch(err => {
            console.log("eror"+ err.message)
        })
    }
    render(){
        return(
            <ScrollView >
                {this.renderList()}
            </ScrollView>
        )
    }
}

export default carList;