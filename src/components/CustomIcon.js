import React from 'react';
import {
    Image,
    Dimensions
} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';
const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const CustomIcon = (props) => {

    const {
        iconName,
    } = props;

    return (
        <Image
            source={iconName}
            style={styles.imageView} 
            resizeMode='contain'/>
    );
};

const styles = EStyleSheet.create({
    imageView :{
        width : '30rem',
        height : '30rem',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CustomIcon;
