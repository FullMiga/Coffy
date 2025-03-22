import styled from "styled-components";

export const CheckoutContainer = styled.div`
  margin: auto;
  margin-top: 5rem;
  max-width: 100rem;
  width: 100%;

  form
  { 
    height: 100%;

    display: flex;
    gap: 2.5rem;

    user-select: none;

    > div:first-child {
      flex: 1;
    }
  }


  > div
  {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  input
  {
    width: 100%;
    padding: 0 0.75rem;
    height: 2.8125rem;

    background-color: ${props => props.theme["main-50"]};
    border: 1px solid ${props => props.theme["main-200"]};
    color: ${props => props.theme["text"]};

    &::placeholder
    {
      color: ${props => props.theme["input-placeholder"]};
    }
  }
`

export const BagList = styled.div`
  width: 40.3125rem;
  border: 1px solid ${props => props.theme["main-300"]};

  > div:first-child
  {
    max-height: 24.1875rem;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 3px;
    }
    &::-webkit-scrollbar-track {
      background: ${props => props.theme["main-50"]};
    }

    &::-webkit-scrollbar-thumb {
      background: ${props => props.theme["main-200"]};
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${props => props.theme["main-300"]};
    }
  }
`
export const CouponWrapper = styled.div`
  margin-top: 1.25rem;
  padding: 0 2rem;
  display: flex;
  gap: 1rem;

  button
  {
    border: none;
    background-color: transparent;
    width: 8.25rem;
    font-size: 0.875rem;
    text-decoration: underline;
    cursor: pointer;
  }

  input
  {
    width: 100%;
  }
`

export const BagResume = styled.div`
  margin-top: 2.75rem;
  margin-bottom: 2rem;
  padding: 0 2rem;

  > div:nth-child(1)
  {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div {
      display: flex;
      justify-content: space-between;

      p:first-child {
        font-size: 0.875rem;
        color: ${props => props.theme["sub-text"]};
      }
      p:last-child {
        color: ${props => props.theme["text"]};
      }
    }
  }

  > div:nth-child(2)
  {
    margin-top: 0.5rem;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-top: 1px solid ${props => props.theme["main-300"]};

  }

  a
  {
    text-decoration: none;
  }

  button 
  {
    margin-top: 1.25rem;
    width: 100%;
    height: 3.25rem;

    background-color: ${props => props.theme["bg-button"]};
    border: none;
    
    color: ${props => props.theme["text-button"]};
    font-size: 1rem;
    font-weight: 700;
    cursor: pointer;
  }
`