import React, { useEffect, useState, useRef } from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
} from 'react-native';
import styles from './index.styles';
import {
    getDrugsList
} from './index.controller';
import { useIsFocused } from '@react-navigation/native';
import RBSheet from "react-native-raw-bottom-sheet";

import _, {debounce} from 'lodash';
import {memoize} from 'lodash/fp';

import MenuCard from '../../components/menuCard/index.component';
import NoResults from '../../components/noResults/index.component';
import HomeHeader from '../../components/homeHeader/index.component';
import Loader from '../../components/loader/index.component';
import CustomTextView from '../../components/customTextView/index.component';
import BottomSheet from '../../components/bottomSheet/index.component';

import {
    filterItems
  } from '../../services/helperService';

import {
    NO_RESULT_HEADER,
    NO_RESULT_SUB_HEADER,
    RESULTS_ITEM_COUNT_PART_ONE,
    RESULTS_ITEM_COUNT_PART_TWO
} from '../../utilities/strings';

const MainMenuPage = ({ navigation }) => {

    const [searchText, setSearchText] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [dataList, setData] = useState([]);
    const [filterDataList, setFilterData] = useState([]);
    const [drugName, setDrugName] = useState('');;
    const [drugDescription, setDrugDescription] = useState('');

    const isFocused = useIsFocused();
    const refRBSheet = useRef();

    useEffect(() => {
        if (isFocused) {
            fetchData();
        }
    }, [isFocused]);

    useEffect(() => {
        if (drugName != '' && drugDescription != '') {
            refRBSheet.current.open()
        }
    }, [drugName, drugDescription]);

    const fetchData = () => {
        resetStateValues();
        setLoading(true);
        getDrugsList(
            getDrugsListSuccess,
            getDrugsListError,
        );
    }

    const getDrugsListSuccess = (response) => {
        let dataList = response.drugs;
        setData(dataList);
        setFilterData(dataList);
        setLoading(false);
    };

    const getDrugsListError = (error) => {
        setData([]);
        setFilterData([]);
        setLoading(false);
    };

    const onPressItem = (item) => {
        setDrugName(item.name);
        setDrugDescription(item.description);
    };

    const resetStateValues = () => {
        setSearchText('');
        setData([])
        setFilterData([]);
    };

    const clearText = () => {
        setSearchText('');
        setFilterData(dataList);
    };

    const closeBottomSheet = () => {
        clearDrugData();
    };

    const clearDrugData = () => {
        setDrugName('');
        setDrugDescription('');
    };

    const onTextChange = (text) => {
        setLoading(true);
        setSearchText(text);
        if (text !== '') {
            const func = memoize(
                debounce(() => {
                    searchItem(text);
                }, 300),
            );
            func();
        } else {
            setFilterData(dataList);
            setLoading(false);
        }
    };

    const searchItem = (text) => {
        const filteredData = filterItems(dataList,text);
        setFilterData(filteredData);
        setLoading(false);
    };

    const renderItem = ({ item, index }) => {
        return (
            <MenuCard
                key={item.id}
                drugName={item.name}
                drugDescription={item.description}
                drugDiseases={item.diseases}
                drugReleasedDate={item.released}
                onPress={() => onPressItem(item)}
                index={index}

            />
        )
    };

    const renderFullLoadingIndicator = () => ((isLoading) ? (
        <View style={styles.loadingView}>
            <Loader />
        </View>
    ) : null);

    const renderFlatListContainer = () => (
        <FlatList
            nestedScrollEnabled
            data={filterDataList}
            renderItem={renderItem}
            style={styles.listView}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listViewContainer}
            onRefresh={() => {
                fetchData();
            }}
            refreshing={isLoading}
            ListHeaderComponent={!isLoading && filterDataList.length > 0 && renderDrugCount()}
        />
    );

    const renderNoResultList = () => (
        <NoResults
            headerText={NO_RESULT_HEADER}
            subHeaderText={NO_RESULT_SUB_HEADER} />
    );

    const renderDrugCount = () => (
        <CustomTextView
            textValue={filterDataList.length > 0
                ? RESULTS_ITEM_COUNT_PART_ONE + ` ${filterDataList.length} ` + RESULTS_ITEM_COUNT_PART_TWO : 0}
            textStyle={styles.itemCountText} />
    );

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
                {renderFlatListContainer()}
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    height={400}
                    closeOnPressMask={false}
                    customStyles={styles.bottomSheetView}
                    onClose={closeBottomSheet}
                >
                    <BottomSheet drugName={drugName} drugDescription={drugDescription} />
                </RBSheet>
            </View>
            <View style={styles.loadingContainer}>
                {isLoading &&
                    renderFullLoadingIndicator()
                }
            </View>
            {!isLoading && filterDataList.length == 0 &&
                renderNoResultList()
            }
        </SafeAreaView>
    )
}

export default MainMenuPage;