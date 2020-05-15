import React from 'react';
import { Text, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
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
        <View style={styles.card}>
            <Image 
                source={require('../images/background.jpg')}
                style={styles.image}/>
            <Icon />
            <Text style={styles.title}>{props.people.firstName} {props.people.lastName}</Text>
            <Text style={styles.action}>{props.people.company}</Text>
        </View>
    </TouchableWithoutFeedback>
    )
}

const mapStateToProps = state => {
    return { people: state.people }
};

export default connect(null, actions)(PeopleItem);