import styled from 'styled-components'

export const PlayModalContainer = styled.section`
  width: 95%;
  max-width: 700px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 2px 1px 8px 2px rgba(255,255,255,0.75); 
`;

export const CloseContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items:flex-end; 
  `;

export const Close = styled.p`
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
  `;

export const InputsModalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items:center;
  `;

export const ItemName = styled.div`
  width: 29%;
  height: 35px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  align-items:center;
  overflow: hidden;
  font-weight: bold;
  font-size: 1.05rem;
`;

export const InputScore = styled.input`
  width: 15%;
  height: 30px;
  background-color: lightgray;
`;

export const ButtonContainer = styled.div`
  padding: 10px 0px;
  width: 100%x;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  margin-top:  10px;
  width: 150px;
  padding: 12px;
  border-radius: 10px;
  background-color: grey;
  border: 1px solid lightgrey;
  font-weight: 700;
  outline: none;
  color: white;
  cursor: pointer;
  font-size: 1.02rem;
`;