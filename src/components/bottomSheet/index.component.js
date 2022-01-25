import React from 'react';
import {
    Dimensions,
    View
} from 'react-native';
import { 
    LOGO_ICON,
} from '../../utilities/icons';

import styles from './index.styles';

import CustomTextView from '../customTextView/index.component';
import CustomIcon from '../customIcon/index.component';

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const BottomSheet = (props) => {

    const {
        drugName,
        drugDescription
    } = props;

    return (
        <View style={styles.mainContainer}>
            <CustomIcon iconName={LOGO_ICON} containerStyle={styles.iconView}/>
            <CustomTextView  textValue={drugName} textStyle={styles.drugNameBottomSheet} />
            <CustomTextView  textValue={drugDescription} textStyle={styles.drugDescriptionBottomSheet} />
        </View>
    );
};

export default BottomSheet;
