import styled from 'styled-components'

export const TableContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px; 
`;

export const TableMain = styled.table`
    width: 30%;
    max-width: 700px;
    border-collapse: collapse;
    border: 1px solid black;    
`;

export const THead = styled.thead``;

export const Tbody = styled.tbody``;

export const Row = styled.tr`
    border: 1px solid black;
    width: 100%;
`;

export const HeadRow = styled.th`
    width: 33.33%;
    border: 1px solid black;
    text-align: left;
    padding: 3px 6px;
`;

export const Cell = styled.td`
    border: 1px solid black;
    width: 33.33%;
    max-width: 200px;
    min-width: 110px;
    overflow: auto;
    padding: 3px 6px;
    text-align: left;

    ::-webkit-scrollbar {
        width: 10px;
        height: 5px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        height: 5px;
        background: #888; 
    }

    ::-webkit-scrollbar-thumb:hover {
         background: #555;
    } 
`;