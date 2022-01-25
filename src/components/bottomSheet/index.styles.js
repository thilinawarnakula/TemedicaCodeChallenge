import { 
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
    COLORS
} from '../../utilities/colors';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
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
    },
    iconView:{
        width : '30rem',
        height : '30rem',
    }
});

export default style;
