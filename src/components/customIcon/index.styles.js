import { 
    Dimensions
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({ $rem: entireScreenWidth / 380 });

const style = EStyleSheet.create({
    imageView :{
        width : '30rem',
        height : '30rem',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default style;
