import React from 'react';
import { ImageBackground, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { CardItem, Text, Body } from 'native-base';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
    },
    title: {
        top: 20,
        left: 80,
        fontSize: 24,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        height: 100,
    },
    action: {
        backgroundColor: 'black',
        color: 'white',
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0)',
    },
});

const PeopleItem = (props) => {
    return (
    <TouchableWithoutFeedback 
        onPress={() => props.selectedPerson(props.people)}>
        <CardItem>
            <ImageBackground 
                source={require('../images/background.jpg')}
                style={styles.image}>
            <Body>
                <Icon />            
                <Text style={styles.title}>{props.people.firstName} {props.people.lastName}</Text>
            </Body>
            <Text style={styles.action}>{props.people.company}</Text>
            </ImageBackground>
        </CardItem>
    </TouchableWithoutFeedback>
    )
}

const mapStateToProps = state => {
    return { people: state.people }
};

export default connect(null, actions)(PeopleItem);