import React from 'react';
import {
    Dimensions,
    View,
} from 'react-native';
import {
    COLORS
} from '../utilities/colors';
import { 
    LOGO_ICON,
} from '../utilities/icons';
import {
    SERCH_TEXT_INPUT_NAME
} from '../utilities/strings';

import CustomInput from './CustomInput';
import CustomIcon from './CustomIcon';


import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const HomeHeader = ({
    onChangeText,
    searchText,
    clearText
}) => {

    return (
        <View style={styles.container}>
            <CustomIcon iconName={LOGO_ICON}/>
            <CustomInput 
                searchText={searchText} 
                onChangeText={onChangeText} 
                clearText={clearText}
                textInputName={SERCH_TEXT_INPUT_NAME}/>
        </View>
    );
};

const styles = EStyleSheet.create({
    container: {
        backgroundColor : COLORS.primary,
        height : '120rem',
        opacity : 0.9,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: '20rem',
        borderBottomRightRadius: '20rem',
        marginBottom:'10rem',
    },
    headerTextView:{
        color : COLORS.white,
        fontSize:'30rem',
    }
});

export default HomeHeader;
