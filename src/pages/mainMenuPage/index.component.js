import React, { useEffect, useState } from 'react';
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

import MenuCard from '../../components/MenuCard';
import HomeHeader from '../../components/HomeHeader';


const MainMenuPage = ({ navigation }) => {

    const [searchText, setSearchText] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [dataList, setData] = useState([]);
    const [filterDataList, setFilterData] = useState([]);

    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            fetchData();
        }
    }, [isFocused]);


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

    const onTextChange = (text) => {
        setLoading(true);
        setSearchText(text);
        if (text !== '') {
            const filteredData = dataList.filter((item) => {

                const itemData = item.name
                    ? item.name.toLowerCase()
                    : ''.toUpperCase();
                const textData = text.toLowerCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilterData(filteredData);
            setLoading(false);
        } else {
            setFilterData(dataList);
            setLoading(false);
        }
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
        />
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
            </View>
        </SafeAreaView>
    )
}

export default MainMenuPage

