import React, { useEffect, useState,useRef } from 'react';
import {
    SafeAreaView,
    View,
} from 'react-native';
import styles from './index.styles';
import HomeHeader from '../../components/HomeHeader';

const MainMenuPage = ({ navigation }) => {

    const [searchText, setSearchText] = useState('');

    const clearText = () => {
        setSearchText('');
    };

    const onTextChange = (text) => {
        setSearchText(text);
    }

    const renderHeader = () => (
        <View>
            <HomeHeader
                searchText={searchText}
                onChangeText={value => onTextChange(value)}
                clearText={clearText}
            />
        </View>
    );

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View>
                {renderHeader()}
            </View>
        </SafeAreaView>
    )
}

export default MainMenuPage