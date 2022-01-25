import React from 'react';
import {
    Dimensions,
    View,
} from 'react-native';
import { 
    LOGO_ICON,
} from '../../utilities/icons';
import {
    SERCH_TEXT_INPUT_NAME,
    SERCH_TEXT_PlACE_HOLDER_INPUT_NAME
} from '../../utilities/strings';

import styles from './index.styles';

import CustomInput from '../customInput/index.component';
import CustomIcon from '../customIcon/index.component';


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
            <CustomIcon iconName={LOGO_ICON} containerStyle={styles.iconView}/>
            <CustomInput 
                searchText={searchText} 
                onChangeText={onChangeText} 
                clearText={clearText}
                textInputName={SERCH_TEXT_INPUT_NAME}
                placeholderName={SERCH_TEXT_PlACE_HOLDER_INPUT_NAME}/>
        </View>
    );
};

export default HomeHeader;
