import { useState } from "react";
import Table from "../table/Table";
import { TABLE_DB } from "../../data/data";
import { ItemData } from "../../types/dataTypes";
import { MainContainer } from "../../styled/main/MainStyled";

const Main = () => {
  const [tableData, setTableData] = useState<Array<ItemData>>(TABLE_DB);

  return (
    <MainContainer>
      <Table tableData={tableData} setTableData={setTableData} />
    </MainContainer>
  );
};

export default Main;
