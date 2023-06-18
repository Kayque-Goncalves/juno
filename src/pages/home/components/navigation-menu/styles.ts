import styled from 'styled-components'
import {convertPxToVw} from "../../../../utils/convertPxToVW";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  max-width: ${convertPxToVw(172)};
  
  justify-content: space-between;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;

  transition: opacity 0.2s ease-in-out;

  :hover {
    opacity: 0.5;
    
    > p {
      color: #EA2C2C;
    }
  }
`

export const LogoContainer = styled.header`
  display: flex;
  flex-direction: row;
  
  align-items: center;
  justify-content: space-between;
  
  gap: 10px;
  
  padding: 38px 25px;
  
  > h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
    
    color: #FFFFFF;
  }
`

export const Logo = styled.div`
  width: 29px;
  height: 44px;

  background: #D9D9D9;
  border-radius: 8px;
`

export const MainMenuContainer = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  
  margin-left: 25px;
  
  color: #6A6A6A;
  
  > span {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
  }
`

export const MainMenuHeader = styled.div`
  display: flex;
`

export const MainMenuBody = styled.section`
  display: flex;
  flex-direction: column;
  
  justify-content: space-between;

  margin-top: 20px;
  margin-left: -25px;

  gap: 16px;
`

export const CollectionMenuContainer = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: space-between;

  margin-left: 25px;

  color: #6A6A6A;

  > span {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
  }
`

export const CollectionMenuHeader = styled.div`
  display: flex;
  
  margin-top: 21px;
`

export const CollectionMenuBody = styled.section`
  display: flex;
  flex-direction: column;
  
  justify-content: space-between;

  margin-top: 20px;
  margin-left: -25px;

  gap: 16px;
`

export const ExitContainer = styled.footer`
  display: flex;
  flex-direction: row;
  
  align-items: center;
  justify-content: flex-start;
  
  gap: 16px;

  margin-left: 25px;
  margin-bottom: 34px;

  color: #D9D9D9;
  cursor: pointer;

  :hover {
    color: #EA2C2C;
  }

  > span {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
  }
`


