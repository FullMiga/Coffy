import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: auto;

  max-width: 100rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;

  background-color: transparent;
  border: 1px solid ${props => props.theme["main-300"]};

  user-select: none;

  a
  {
    display: flex;
    gap: 0.75rem;

    background-color: ${props => props.theme["tertiary-100"]};
    border-radius: 4px;

    color: ${props => props.theme["text-action"]};
    text-decoration: none;
    cursor: pointer;

    &:has(img)
    {
      background-color: transparent;
    }
  }
`

export const Location = styled.span`
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem;
  
  background-color: ${props => props.theme["main-200"]};
  border-radius: 4px;

  color: ${props => props.theme["text-action"]};
  font-size: 0.875rem;
`

export const LogoImg = styled.img`

`

export const BagCount = styled.div`
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;

  font-size: 0.875rem;

  span
  {
    p 
    {
      width: 1.25rem;
      text-align: center;
    }
  }
`
export const BackToHome = styled.button`
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;

  color: ${props => props.theme["text-button"]};
  background-color: ${props => props.theme["tertiary-100"]};
  border-radius: 4px;
  border: none;
  cursor: pointer;
`