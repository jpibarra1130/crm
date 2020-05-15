import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { createNewContact } from '../thunks';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 50,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    addButton: {
        marginTop: 20,
    }
});

const AddPerson = ({addPerson, navigation})  => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [project, setProject] = useState('');
    const [notes, setNotes] = useState('');
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.form}>
                <Text>Add a new contact</Text>
                <TextInput
                    value={firstName}
                    onChangeText={text => setFirstName(text)}
                    placeholder={'First name...'}
                />
                <TextInput
                    value={lastName}
                    onChangeText={text => setLastName(text)}
                    placeholder={'Last name...'}
                />
                <TextInput
                    value={phone}
                    onChangeText={text => setPhone(text)}
                    placeholder={'Phone...'}
                />
                <TextInput
                    value={company}
                    onChangeText={text => setCompany(text)}
                    placeholder={'Company...'}
                />
                <TextInput
                    value={email}
                    onChangeText={text => setEmail(text)}
                    placeholder={'Email...'}
                />
                <TextInput
                    value={project}
                    onChangeText={text => setProject(text)}
                    placeholder={'Project...'}
                />
                <TextInput
                    value={notes}
                    onChangeText={text => setNotes(text)}
                    placeholder={'Notes...'}
                />
                
            </View>
            <View style={styles.AddButton}>
                <Button
                    title="Add"
                    color="blue"
                    accessibilityLabel="Learn more about this purple button"
                    onPress={() => {
                        addPerson(firstName, lastName, phone, email, company, project, notes);
                        navigation.navigate('People');
                    }}/>
            </View>
        </ScrollView>
    )
}

const mapDispatchToProps = dispatch => ({
    addPerson: (firstName, lastName, phone, email, company, project, notes) => dispatch(createNewContact(firstName, lastName, phone, email, company, project, notes)),
});

export default connect(null, mapDispatchToProps)(AddPerson);
