import styled from "styled-components";
import { convertPxToVw } from "../../../../utils/convertPxToVW";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  max-width: ${convertPxToVw(247)};
  
  justify-content: space-between;
  
  padding: 41px 47px 41px 0;
`

export const ProfileContainer = styled.section`
  display: flex;
  flex-direction: row;
  
  align-items: center;
  gap: 10px;
  
  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 10px;

    color: #FFFFFF;
  }
`

export const PlayingNowContainer = styled.section`
  display: flex;
  flex-direction: column;
  
  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;

    color: #FFFFFF;
    
    margin-bottom: 12px;
  }
`