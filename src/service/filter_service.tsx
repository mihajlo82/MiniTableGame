import { ItemData, FilterDataProps, ValidateNumbersProp } from "../types/dataTypes";

export const filterData = ({tableData, index, matchData}: FilterDataProps) => {
  const filteredList = tableData.map((item: ItemData) => {
    if (item.id === matchData[index]?.id) {
      item.score++;
    }
    return item;
  });

  return filteredList;
};


export const isValidNumbers = ({player1Score, player2Score}: ValidateNumbersProp) => {
  if(player1Score < 0 || player2Score < 0 || (typeof player1Score !== 'number') || (typeof player2Score !== 'number')){
    return false;
  }

  return true;
}