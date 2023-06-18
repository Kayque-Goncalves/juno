import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: space-between;
  align-items: center;
  
  margin-bottom: 12px;
  
  padding: 5px 0;
  
  > div {
    display: flex;
    flex-direction: row;
    
    align-items: center;
  }
  
  cursor: pointer;
  pointer-events: all;
  z-index: 100;

  transition: opacity 0.2s ease-in-out;

  :hover {
    opacity: 0.6;
  }
`

export const Number: any = styled.div`
  display: flex;
  width: 30px;
  
  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;

    color: ${({ isActive }: any) => !isActive ? '#E0DDDD' : '#486ADE'};
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  
  margin-left: 18px;
  
  gap: 8px;
`

export const Left = styled.div`
  display: flex;
`

export const Right: any = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-left: 10px;
  width: 150px;
  
  gap: 5px;
  
  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 13px;

    color: ${({ isActive }: any) => !isActive ? '#FFFFFF' : '#486ADE'};

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  
  > span {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;

    color: #787878;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

export const Cover = styled.div`
  width: 35px;
  height: 35px;

  background: #474747;
  border-radius: 8px;
  
  > img {
    width: 35px;
    height: 35px;
    
    object-fit: cover;
    border-radius: 8px;
  }
`

export const Plays = styled.div`
  display: flex;
  
  margin-left: 100px;
  
  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;

    color: #FFFFFF;
  }
`

export const Album = styled.div`
  display: flex;

  margin-left: 21px;
  
  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 11px;

    color: #FFFFFF;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    width: 150px;
  }
`

export const Time = styled.div`
  display: flex;
  
  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 11px;

    color: #FFFFFF;
  }
`