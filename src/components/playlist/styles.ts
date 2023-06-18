import styled from "styled-components";

export const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: space-between;
  
  :last-child {
    margin-bottom: 46px;
  }
`

export const PlaylistHeader = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: space-between;
  align-items: center;
  
  margin-left: 36px;
  margin-top: 12px;
  margin-bottom: 13px;
  
  > div > p {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;

    color: #6A6A6A;
    
    margin-left: 10px;
  }
  
  > div {
    display: flex;
    flex-direction: row;
  }
  
  :first-child {
    justify-content: space-between;
  }
`

export const Album = styled.div`
  display: flex;
  
  margin-left: 288px;
  
  > p {
    font-style: normal;
    font-weight: 400;
    font-size:12px;

    color: #6A6A6A;
  }
`
