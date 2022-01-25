import React from 'react';
import {
    Dimensions,
    View,
    Text
} from 'react-native';
import styles from './index.styles';
import { 
    TAG_ICON,
} from '../../utilities/icons';

import CustomIcon from '../customIcon/index.component';

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const DiseasesTags = (props) => {

    const {
        diseasesName
    } = props;

    return (
        <View style={styles.mainView}>
            <CustomIcon iconName={TAG_ICON} containerStyle={styles.iconView}/>
           <Text style={styles.diseasesName}>{diseasesName}</Text>
        </View>
    );
};

export default DiseasesTags;
