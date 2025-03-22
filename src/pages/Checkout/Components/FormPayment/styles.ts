import styled from "styled-components";

export const FormPaymentContainer = styled.div`
  padding: 1.25rem;
  border: 1px solid ${props => props.theme["main-300"]};

  > div:last-child
  {
    margin-top: 2rem;

    display: flex;
    gap: 0.75rem;

    label
    {
      cursor: pointer;
      font-size: 0.75rem;
      position: relative;
      height: 3.1875rem;
      color: ${props => props.theme["sub-text"]};

      > div {
        position: absolute;
        width: 100%;
        height: 100%;

        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 1rem;
        gap: 0.75rem;
      }
    }

    label
    {
      img
      {
        width: 1rem;
        height: 1rem;
      }

      svg {
        stroke: ${props => props.theme["purple"]};
      }
    }

    input
    {
      width: 11.25rem;
      height: 100%;
      appearance: none;

      &:checked {
        background-color: ${props => props.theme["purple-light"]};
        border: 1px solid ${props => props.theme["purple"]};
      }
    }
  }
`

export const FormDescription = styled.span`
  display: flex;
  gap: 0.5rem;

  > div
  { 
    h3
    {
      color: ${props => props.theme["text"]};
    }

    p
    {
      font-size: 0.875rem;
      color: ${props => props.theme["sub-text"]};
    }
  }
`