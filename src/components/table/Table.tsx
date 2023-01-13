import TableRow from "./tableRow/TableRow";
import { DataTable } from "../../types/dataTypes";
import PlayModal from "../modals/PlayModal";
import Thead from "./parts/Thead";
import TablePlayButton from "./parts/TablePlayButton";
import useTable from "./custom/useTable";
import {
  TableContainer,
  TableMain,
  Tbody,
} from "../../styled/table/TableStyled";
import { TableDefProps } from "../../types/default_props/components_default_props";

const Table = ({ tableData, setTableData }: DataTable) => {
  const { openModal, setOpenModal, matchData, generateMatch } = useTable({
    tableData,
  });

  return (
    <TableContainer>
      <TableMain>
        <Thead />
        <Tbody>
          {tableData.map((item, index) => (
            <TableRow key={item.id} item={item} index={index} />
          ))}
        </Tbody>
      </TableMain>

      <TablePlayButton generateMatch={generateMatch} />

      {openModal && (
        <PlayModal
          setOpenModal={setOpenModal}
          matchData={matchData}
          setTableData={setTableData}
          tableData={tableData}
        />
      )}
    </TableContainer>
  );
};

export default Table;
Table.defaultProps = TableDefProps;
