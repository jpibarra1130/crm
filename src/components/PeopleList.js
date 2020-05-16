import React, { useEffect } from 'react';
import { View, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import { connect } from 'react-redux';

import { loadInitialContacts } from '../thunks';

import PeopleItem from './PeopleItem';
import PeopleDetail from './PeopleDetail';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 353,
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 20,
    }
});

const PeopleList = ({ detailView, people, loadInitialPeople }) => {
    useEffect(() => {
        loadInitialPeople();
    }, []);
    
    const renderInitialView = () => {
        if (detailView === true) {
            return (<PeopleDetail />)
        } else {
            return (
                <FlatList 
                    data={people}
                    keyExtractor={(item) => item._id}
                    renderItem={({item}) => <PeopleItem people={item}/>}
                />
            )
        }
    }

    return (
        <View styles={styles.container}>
            <SafeAreaView>
                {renderInitialView()}
            </SafeAreaView>
        </View>
    )
};

const mapStateToProps = state => {
    return { 
        people: state.people,
        detailView: state.detailView,
    }
};

const mapDispatchToProps = dispatch => ({
    loadInitialPeople: () => dispatch(loadInitialContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);