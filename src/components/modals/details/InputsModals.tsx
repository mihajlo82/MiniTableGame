import {
  InputsModalContainer,
  ItemName,
  InputScore,
} from "../../../styled/table/PlayModal";
import { InputModalProp } from "../../../types/dataTypes";
import { InputsModalsDefProp } from "../../../types/default_props/components_default_props";

const InputsModals = ({
  matchData,
  player1Score,
  player2Score,
  setPlayer1Score,
  setPlayer2Score,
}: InputModalProp) => {
  return (
    <InputsModalContainer>
      <ItemName> {matchData[0]?.name} </ItemName>

      <InputScore
        type="number"
        value={player1Score}
        onChange={(e: any) => setPlayer1Score(parseInt(e.target.value))}
      />
      <InputScore
        type="number"
        value={player2Score}
        onChange={(e: any) => setPlayer2Score(parseInt(e.target.value))}
      />

      <ItemName> {matchData[1]?.name} </ItemName>
    </InputsModalContainer>
  );
};

export default InputsModals;
InputsModals.defaultProps = InputsModalsDefProp;
