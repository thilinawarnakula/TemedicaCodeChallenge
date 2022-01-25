import { 
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import {COLORS} from '../../utilities/colors'; 

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
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

export default style;
