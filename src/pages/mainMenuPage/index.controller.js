import drugsData from '../../data/dataset.json';

export const getDrugsList = async (
  getDrugsListSuccess,
  getDrugsListError
) => {
  try {
    const response = drugsData;
    console.log("getDrugsList -- : ",response);
    getDrugsListSuccess( response);
  } catch (error) {
    console.error("getDrugsList ERROR -- : ",error);
    getDrugsListError(error);
  }
};
