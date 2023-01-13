import {
  ButtonWrapper,
  PlayButton,
} from "../../../styled/table/parts/TableParts";
import { TablePlayButtonProp } from "../../../types/dataTypes";
import { TablePlayButtonDefProps } from "../../../types/default_props/components_default_props";

const TablePlayButton = ({ generateMatch }: TablePlayButtonProp) => {
  return (
    <ButtonWrapper>
      <PlayButton type="button" onClick={generateMatch}>
        Play
      </PlayButton>
    </ButtonWrapper>
  );
};

export default TablePlayButton;
TablePlayButton.defaultProps = TablePlayButtonDefProps;
