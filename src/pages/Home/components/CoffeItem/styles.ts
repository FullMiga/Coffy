import styled from "styled-components";

export const CoffeeTitle = styled.div`
  position: absolute;
  bottom: 0;

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.75rem;

  border-top: 1px solid ${props => props.theme["main-300"]};

  p
  {
    color: #403937;
  }
`

export const CoffeeAddToCard = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  transition: transform 0.2s ease;

  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem;
  
  background-color: ${props => props.theme["main-300"]};

  p
  {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${props => props.theme["sub-text"]}
  }
`

export const CoffeeActions = styled.div`
  display: flex;
  justify-content: space-between;

  > button 
  {
    border: none;
    background-color: transparent;

    font-size: 1rem;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  div
  {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    button
    {
      width: 1.3125rem;
      height: 1.3125rem;

      border: none;
      background-color: ${props => props.theme["main-200"]};
      border-radius: 4px;

      font-weight: 500;
      cursor: pointer;
    }
  }
`

export const TagsList = styled.div`
  display: flex;
  gap: 0.5rem;

  span
  {
    padding: 0.25rem 0.5rem;

    background-color: ${props => props.theme["main-200"]};
    border-radius: 4px;
  
    color: ${props => props.theme["text"]};
    font-size: 0.875rem;
  }
`

export const CoffeeItemContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;  
  overflow: hidden;

  &:hover ${CoffeeAddToCard} {
    transform: translateY(0%);
  }
`
