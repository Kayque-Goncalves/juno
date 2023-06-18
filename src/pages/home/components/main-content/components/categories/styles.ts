import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  gap: 27px;
  
  margin-top: 27px;
  
  max-width: 50vw;
  overflow: auto;
  
  padding-bottom: 26px;
`

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  justify-content: center;

  transition: opacity 0.2s ease-in-out;

  :hover {
    opacity: 0.7;
  }

  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    
    margin-top: -35px;

    color: #FFFFFF;
    cursor: pointer;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: end;

  width: 130px;
  height: 130px;

  background: #474747;
  border-radius: 10px;
  
  gap: 10px;
  
  cursor: pointer;
  
  > img {
    width: 130px;
    height: 130px;
    
    border-radius: 10px;
    
    object-fit: cover;
  }
`