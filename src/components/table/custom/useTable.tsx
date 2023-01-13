import { useState } from "react";
import { generateIdsMatch } from "../../../service/random_match_generator";
import { ItemData, UseTableProp } from "../../../types/dataTypes";
import { useTableDefProp } from "../../../types/default_props/custom_hook_default_props";

const useTable = ({ tableData }: UseTableProp) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [matchData, setMatchData] = useState<Array<ItemData>>([]);

  const generateMatch = () => {
    const matchesId = generateIdsMatch();
    if (matchesId.length !== 2 || !matchesId)
      return alert("Generate Match Error!");

    const matchesDeal = [tableData[matchesId[0]], tableData[matchesId[1]]];
    setMatchData(matchesDeal);
    setOpenModal(true);
  };

  return { openModal, setOpenModal, matchData, generateMatch };
};

export default useTable;
useTable.defaultProps = useTableDefProp;
