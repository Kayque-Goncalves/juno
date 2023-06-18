import styled from "styled-components";

export const AlbumCover = styled.image`
  width: 200px;
  height: 200px;
  
  border-radius: 20px;
  margin-top: 10px;
  
  > img {
    width: 200px;
    height: 200px;

    border-radius: 20px;
    
    object-fit: cover;
  }
`
export const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;
`

export const MusicInfo = styled.div`
  display: flex;
  flex-direction: column;
  
  gap: 5px;
  
  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;

    color: #FFFFFF;
  }
  
  > span {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;

    color: #787878;
  }
`
