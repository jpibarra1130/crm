import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import * as actions from '../actions';

class CompanyList extends Component {
    render() {
        return (
            <View>
                <Text>CompanyList</Text>
            </View>
        )
    }
}

export default connect(null, actions)(CompanyList);