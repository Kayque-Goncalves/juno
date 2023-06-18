import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  
  gap: 16px;
  
  align-items: center;
  
  transition: opacity 0.2s ease-in-out;

  :hover {
    opacity: 0.5;
  }
`

export const ActiveStatusContainer = styled.section`
  display: flex;
  
  justify-content: flex-start;
`

export const ActiveStatus = styled.div`
  display: flex;

  width: 7px;
  height: 27px;
  
  background: #486ADE;

  border-radius: 0px 8px 8px 0px;
`

export const MenuContainer: any = styled.div`
  display: flex;
  flex-direction: row;

  background: none;

  border: none;

  gap: 16px;

  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;

    color: ${({ isActive }: any): string => isActive ? '#486ADE' :  '#D9D9D9'};
  }

  cursor: pointer;
`
