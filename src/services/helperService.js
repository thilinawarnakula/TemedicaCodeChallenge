
export const filterItems = (dataList,searchText) => {
    const filteredData = dataList.filter((item) => {

        const itemData = item.name
            ? item.name.toLowerCase()
            : ''.toUpperCase();
        const textData = searchText.toLowerCase();
        return itemData.indexOf(textData) > -1;
    });
    return filteredData;
}