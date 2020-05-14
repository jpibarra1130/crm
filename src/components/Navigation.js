import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/EvilIcons';

import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName="People"
            tabBarOptions={{
                activeTintColor: 'white',
                inactiveTintColor: '#80cbc4',
                showLabel: false,
                showIcon: true, // for android, ios works without this
                style: {
                    backgroundColor: '#26a69a'
                }}
            }
        >
            <Tab.Screen 
                name="People" 
                component={PeopleList} 
                options={{
                    tabBarIcon: ({tintColor}) => (
                        <Icon name={'user'} size={50} color={tintColor} />
                    )
                }}/>
            <Tab.Screen 
                name="Add" 
                component={AddPerson}
                options={{
                    tabBarIcon: ({tintColor}) => (
                        <Icon name={'plus'} size={50} color={tintColor} />
                    )
                }} />
            <Tab.Screen
                name="Company"
                component={CompanyList} 
                options={{
                    tabBarIcon: ({tintColor}) => (
                        <Icon name={'archive'} size={50} color={tintColor} />
                    )
                }}/>
        </Tab.Navigator>
    </NavigationContainer>
);

export default BottomTabs;
