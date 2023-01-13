import { PlayModalContainer } from "../../styled/table/PlayModal";
import { PlayModalProp } from "../../types/dataTypes";
import { PlayModalDefProp } from "../../types/default_props/components_default_props";
import Modal from "../../utils/modals/Modal";
import usePlayModal from "./custom/usePlayModal";
import Buttons from "./details/Buttons";
import Closer from "./details/Closer";
import InputsModals from "./details/InputsModals";

const PlayModal = ({
  setOpenModal,
  matchData,
  setTableData,
  tableData,
}: PlayModalProp) => {
  const {
    player1Score,
    setPlayer1Score,
    player2Score,
    setPlayer2Score,
    finishMatch,
  } = usePlayModal({ tableData, matchData, setTableData, setOpenModal });

  return (
    <Modal>
      <PlayModalContainer>
        <Closer setOpenModal={setOpenModal} />

        <InputsModals
          player1Score={player1Score}
          setPlayer1Score={setPlayer1Score}
          player2Score={player2Score}
          setPlayer2Score={setPlayer2Score}
          matchData={matchData}
        />

        <Buttons finishMatch={finishMatch} />
      </PlayModalContainer>
    </Modal>
  );
};

export default PlayModal;
PlayModal.defaultProps = PlayModalDefProp;
