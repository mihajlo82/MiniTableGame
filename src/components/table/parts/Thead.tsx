import { THead, Row, HeadRow } from "../../../styled/table/TableStyled";

const Thead = () => {
  return (
    <THead>
      <Row>
        <HeadRow>Position</HeadRow>
        <HeadRow>Name</HeadRow>
        <HeadRow>Score</HeadRow>
      </Row>
    </THead>
  );
};

export default Thead;
