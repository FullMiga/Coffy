import styled from "styled-components";

export const BagItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 1.25rem;

  border-bottom: 1px solid ${props => props.theme["main-300"]};
  > div
  {
    width: 100%;
  }
`
export const BagItemImage = styled.img`
  width: 4rem;
  height: 4rem;
`

export const BagItemDescription = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
`

export const BagItemActions = styled.div`

`

export const CoffeeAmountAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 

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

  button {
    line-height: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    
    color: ${props => props.theme["text"]};
    transition: all 0.2s linear;

    &:hover
    {
      color: ${props => props.theme["tertiary-600"]};
    }
  }
`