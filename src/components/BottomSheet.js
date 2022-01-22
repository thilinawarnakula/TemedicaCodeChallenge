import React from 'react';
import {
    Dimensions,
    View
} from 'react-native';
import { COLORS } from '../utilities/colors';
import { 
    LOGO_ICON,
} from '../utilities/icons';

import CustomTextView from './CustomTextView';
import CustomIcon from './CustomIcon';

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
            <CustomIcon iconName={LOGO_ICON}/>
            <CustomTextView  textValue={drugName} textStyle={styles.drugNameBottomSheet} />
            <CustomTextView  textValue={drugDescription} textStyle={styles.drugDescriptionBottomSheet} />
        </View>
    );
};

const styles = EStyleSheet.create({
    mainContainer :{
        padding: '8rem',
        justifyContent: 'center',
        alignItems: 'center',
    },
    drugNameBottomSheet :{
        color: COLORS.primary,
        fontSize: '18rem',
        fontWeight: '700',
        textAlign: 'center',
    },
    drugDescriptionBottomSheet :{
        color: COLORS.black,
        fontSize: '14rem',
        fontWeight: '700',
        textAlign: 'center',
    }
});

export default BottomSheet;
