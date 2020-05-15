import React from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import * as actions from '../actions';

const styles = StyleSheet.create({
    card: {
      marginTop: 10,
      paddingBottom: 20,
      marginBottom: 20,
      borderColor: 'lightgrey',
      borderWidth: 0.5,
    },
    title1: {
        top: 10,
        left: 80,
        fontSize: 24,
    },
    title2: {
        top: 35,
        left: 82,
        fontSize: 18,
    },
    image: {
        flex: 0,
        height: 100,
        width: 333,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeIcon: {
        position: 'absolute',
        top: 5,
        left: 295,
        color: 'rgba(233,166,154,0.8)',
        backgroundColor: 'rgba(255,255,255,0)',
    },  
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)',
    },
    textArea: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingTop: 10,
        width: 260,
    },
    textIcons: {
        color: '#26a69a',
    },
    actionArea: {
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
  });

const PeopleDetail = ({ selectedPerson, noneSelected}) => {
    return (
    <View styles={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Image 
                source={require('../images/background.jpg')}
                style={styles.image}
            />
            <EvilIcon 
                name={'user'}
                size={100}
                style={styles.icon}
            />

            <SimpleIcon 
                name={'close'}
                size={30}
                style={styles.closeIcon}
                onPress={() => noneSelected()}
            />
            <Text style={[styles.title1]}>{selectedPerson.firstName} {selectedPerson.lastName}</Text>
            <Text style={[styles.title2]}>from {selectedPerson.company}</Text>
            <View style={styles.textArea}>
                <MaterialIcon 
                    name={'phone'}
                    size={40}
                    style={styles.textIcons}
                    onPress={() => noneSelected()}
                />
                <Text >{selectedPerson.phone}</Text>
            </View>
            <View style={styles.textArea}>
                <MaterialIcon 
                    name={'email'}
                    size={40}
                    style={styles.textIcons}
                    onPress={() => noneSelected()}
                />
                <Text>{selectedPerson.email}</Text>
            </View>
            <View style={styles.textArea}>
                <MaterialIcon 
                    name={'assignment'}
                    size={40}
                    style={styles.textIcons}
                    onPress={() => noneSelected()}
                />
                <Text>{selectedPerson.project}</Text>
            </View>
            <View style={styles.textArea}>
                <MaterialIcon 
                    name={'mode-edit'}
                    size={40}
                    style={styles.textIcons}
                    onPress={() => noneSelected()}
                />
                <Text>{selectedPerson.notes}</Text>
            </View>
            <View>
                <TouchableOpacity>
                    <Image 
                        source={require('../images/call@2x.png.png')}
                        style={styles.actionImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        source={require('../images/email@2x.png.png')}
                        style={styles.actionImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        source={require('../images/sms@2x.png.png')}
                        style={styles.actionImage}
                    />
                </TouchableOpacity>
                <View style={styles.textArea}>
                    <Text>Call</Text>
                    <Text>Email</Text>
                    <Text>SMS</Text>
                </View>
            </View>
        </ScrollView>
    </View>)
}

const mapStateToProps = state => {
    return { 
        selectedPerson: state.selectedPerson,
    }
};

const mapDispatchToProps = dispatch => ({
    noneSelected: () => dispatch(actions.noneSelected()),
});


export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetail);