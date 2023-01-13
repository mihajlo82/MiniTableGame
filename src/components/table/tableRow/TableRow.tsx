import { TableRowType } from "../../../types/dataTypes";
import { Row, Cell } from "../../../styled/table/TableStyled";
import { TableRowDefProps } from "../../../types/default_props/components_default_props";

const TableRow = ({ item, index }: TableRowType) => {
  const { name, score } = item;
  return (
    <Row>
      <Cell> {index + 1} </Cell>
      <Cell> {name} </Cell>
      <Cell> {score} </Cell>
    </Row>
  );
};

export default TableRow;
TableRow.defaultProps = TableRowDefProps;
