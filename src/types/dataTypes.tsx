export interface ItemData {
  id: number;
  name: string;
  score: number;
}

export interface TableRowType {
  index: number;
  item: ItemData;
}

export interface FilterDataProps {
  tableData: Array<ItemData>;
  index: number;
  matchData: Array<ItemData>;
}

export interface ValidateNumbersProp {
  player1Score: number,
  player2Score: number
}

export interface DataTable {
  tableData: Array<ItemData>;
  setTableData: React.Dispatch<React.SetStateAction<ItemData[]>>;
}

export interface UseTableProp {
  tableData: Array<ItemData>;
}

export interface PlayModalProp {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  matchData: Array<ItemData>;
  tableData: Array<ItemData>;
  setTableData: React.Dispatch<React.SetStateAction<ItemData[]>>;
}

export interface InputModalProp {
  matchData: Array<ItemData>;
  player1Score: number;
  player2Score: number;
  setPlayer1Score: React.Dispatch<React.SetStateAction<number>>;
  setPlayer2Score: React.Dispatch<React.SetStateAction<number>>;
}

export interface CloserProp {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ButtonProp {
  finishMatch: () => void;
}

export interface TablePlayButtonProp {
  generateMatch: () => void;
}
