import { useState } from "react";
import { ItemData, PlayModalProp } from "../../../types/dataTypes";
import { filterData, isValidNumbers } from "../../../service/filter_service";
import { usePlayModalDefProp } from "../../../types/default_props/custom_hook_default_props";

const usePlayModal = ({
  tableData,
  matchData,
  setTableData,
  setOpenModal,
}: PlayModalProp) => {
  const [player1Score, setPlayer1Score] = useState<number>(0);
  const [player2Score, setPlayer2Score] = useState<number>(0);

  const generateWinner = (index: number) => {
    alert(`${matchData[index]?.name.toLocaleUpperCase()} WIN!`);
    const tmpTableData = filterData({ tableData, index, matchData });
    const sortedTableData = tmpTableData.sort(
      (a: ItemData, b: ItemData) => b.score - a.score
    );

    setTableData(sortedTableData);
  };

  const finishMatch = () => {
    if (!isValidNumbers({ player1Score, player2Score })) {
      return alert("NUMBERS NOT VALID! ENTER VALID NUMBERS!");
    }

    if (player1Score > player2Score) generateWinner(0);
    else if (player2Score > player1Score) generateWinner(1);
    else alert("DRAW");

    setOpenModal(false);
  };

  return {
    player1Score,
    setPlayer1Score,
    player2Score,
    setPlayer2Score,
    finishMatch,
  };
};

export default usePlayModal;

usePlayModal.defaultProps = usePlayModalDefProp;
