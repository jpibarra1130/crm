import React from 'react';
import { ImageBackground, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import { CardItem, Text, Body } from 'native-base';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import { selectedPerson } from '../actions';

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

const PeopleItem = ({selectedPerson, people,}) => {
    return (
    <TouchableWithoutFeedback 
        onPress={() => selectedPerson(people)}>
        <CardItem>
            <ImageBackground 
                source={require('../images/background.jpg')}
                style={styles.image}>
            <Body>
                <Icon />            
                <Text style={styles.title}>{people.firstName} {people.lastName}</Text>
            </Body>
            <Text style={styles.action}>{people.company}</Text>
            </ImageBackground>
        </CardItem>
    </TouchableWithoutFeedback>
    )
}

const mapDispatchToProps = dispatch => ({
    selectedPerson: (people) => dispatch(selectedPerson(people)),
});

export default connect(null, mapDispatchToProps)(PeopleItem);