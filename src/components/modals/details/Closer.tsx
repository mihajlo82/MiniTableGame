import { CloseContainer, Close } from "../../../styled/table/PlayModal";
import { CloserProp } from "../../../types/dataTypes";
import { CloserDefProps } from "../../../types/default_props/components_default_props";

const Closer = ({ setOpenModal }: CloserProp) => {
  return (
    <CloseContainer>
      <Close onClick={() => setOpenModal(false)}> &#10005; </Close>
    </CloseContainer>
  );
};
export default Closer;

Closer.defaultProps = CloserDefProps;
