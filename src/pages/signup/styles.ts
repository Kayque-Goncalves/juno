import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  
  background: #313131;
`;

export const LeftSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  
  max-width: 40vw;
  width: 100%;
  
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 5.07%, rgba(36, 36, 36, 0.455106) 63.02%, #242424 99.6%);
`;

export const RightSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  
  max-width: 60vw;
  width: 100%;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  align-items: center;
  justify-content: center;
  
  gap: 16px;
  
  > h1 {
    font-family: Inter sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 77px;
    color: #D9D9D9;
  }
`

export const Logo = styled.div`
  width: 39px;
  height: 59px;

  background: #D9D9D9;
  border-radius: 8px;
`

export const RightSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  max-width: 420px;
  width: 100%;
`

export const GreetingsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  margin-bottom: 60px;
  
  gap: 14px;
  
  > h2 {
    font-family: Inter sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;

    color: #FFFFFF;
  }
  
  > h3 {
    font-family: Inter sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #929292;
  }
`

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  
  gap: 30px;
`

export const InputContainer = styled.div`
  display: flex;
  
  align-items: center;
  justify-content: center;
  
  padding: 5px;
  gap: 10px;
  
  border: 1px solid #929292;
  border-radius: 8px;
  
  &:hover {
    border: 1px solid #5C5C5C;
  }
`

export const TextInput = styled.input`
  flex: 1 0;
  
  min-width: 50px;
  min-height: 25px;
  
  background-color: transparent;
  padding-left: 5px;
  border: 0;

  font-family: Inter sans-serif;
  color: #929292;
  font-size: 16px;
  
  &:focus {
    outline: none;
  }
`

export const Icon = styled.div`
  flex: 0 0;
  height: 24px;
`;

export const ActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  align-items: center;
  justify-content: space-between;
  
  margin-top: 60px;
  
  > button {
    width: 141px;
    height: 40px;
    
    border: none;

    background: #486ADE;
    border-radius: 10px;
    
    cursor: pointer;

    font-family: Inter sans-serif;
    color: #FFFFFF;
  }
  
  > span {
    font-family: Inter sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #929292;
    
    > a {
      color: #486ADE;
      font-weight: 400;
      font-family: Inter sans-serif;
      
      cursor: pointer;
      text-decoration: none;
    }
  }
`

