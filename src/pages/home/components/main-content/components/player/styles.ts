import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  
  padding: 11px 35px;
  
  width:  100%;
  height: 46px;

  background: rgba(217, 217, 217, 0.08);
  backdrop-filter: blur(5px);

  border-radius: 10px;
  margin-top: -25px;
  
  z-index: 1000;
`

export const ActionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: space-between;
  
  gap: 10px;
`

export const Button = styled.div`
  display: flex;
  
  cursor: pointer;
  align-items: center;
  justify-content: center;
  
  width: 25px;
  height: 25px;

  transition: opacity 0.3s ease-in-out;
  
  :hover {
    opacity: 0.5;
    border-radius: 100px;
  }
`

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  
  width: 60%;
  
  margin-left: 37px;
  
  > span {
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;

    color: #FFFFFF;
  }
`

export const SliderWrapper = styled.div`
  display: flex;
  
  width: 100%;
  align-items: center;
`
