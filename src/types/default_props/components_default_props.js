export const ButtonsDefProps = {
    finishMatch: ()=>{}
}

export const CloserDefProps = {
    setOpenModal: ()=>{}
}

export const InputsModalsDefProp = {
    matchData: [],
    player1Score: 0, 
    player2Score: 0,  
    setPlayer1Score: ()=>{}, 
    setPlayer2Score: ()=>{}
}

export const PlayModalDefProp = {
    setOpenModal: ()=>{},
    matchData: [],
    setTableData: ()=>{},
    tableData: []
}

export const TablePlayButtonDefProps = {
    generateMatch: ()=>{}
}

export const TableRowDefProps = {
    item: {
        id: Math.floor(Math.random()*9999),
        name: 'Test',
        score: '0'
    },
    index: 0
}

export const TableDefProps = {
    tableData: [], 
    setTableData: ()=>{}
}