import { ButtonContainer, Button } from "../../../styled/table/PlayModal";
import { ButtonProp } from "../../../types/dataTypes";
import { ButtonsDefProps } from "../../../types/default_props/components_default_props";

const Buttons = ({finishMatch}: ButtonProp) => {
  return (
    <ButtonContainer>
        <Button onClick={finishMatch}>Finish</Button>
    </ButtonContainer>
  )
}

export default Buttons;
Buttons.defaultProps = ButtonsDefProps;