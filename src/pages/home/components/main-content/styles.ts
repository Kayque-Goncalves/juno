import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 47px 94px;
`

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  width: 100%;
  height: 35px;
  
  padding-left: 20px;
  
  align-items: center;
  
  background: #3F3F3F;
  border-radius: 100px;
  
  gap: 24px;
`

export const SearchBar = styled.input`
  border: none;
  
  color: #787878;
  font-size: 13px;
  background: none;
  
  height: 35px;
  width: 90%;

  outline: none;
`

export const CategoriesContainer = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 40px;
  
  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;

    color: #FFFFFF;
  }
`

export const HomePlaylistContainer = styled.section`
  display: flex;
  flex-direction: column;
  
  margin-top: 42px;

  height: 600px;
  
  overflow: auto;
  
  padding-right: 16px;
  
  > p {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;

    color: #FFFFFF;
  }
`
