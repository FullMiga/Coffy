import styled from "styled-components";

export const FormAddressContainer = styled.div`
  padding: 1.25rem;
  margin-bottom: 1.25rem;

  border: 1px solid ${props => props.theme["main-300"]};

  > div:first-child 
  {
    margin-bottom: 2rem;

    h1
    {
      margin-bottom: 1.25rem;
      text-transform: uppercase;
      font-size: 1.125rem;
    }
  }
  > div:last-child
  {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`
export const InputPostcodeWrapper = styled.div`
  display: flex;
  gap: 1.25rem;
  
  input
  {
    padding: 0 0.75rem;
    height: 2.8125rem;
    width: 15.5rem;

    background-color: ${props => props.theme["main-50"]};
    border: 1px solid ${props => props.theme["main-200"]};
    color: ${props => props.theme["text"]};

    &::placeholder
    {
      color: ${props => props.theme["input-placeholder"]};
    }
  }

  button
  {
    padding: 0 0.75rem;
    height: 2.8125rem;

    background-color: ${props => props.theme["secondary-200"]};
    border: none;
    color: ${props => props.theme["secondary-900"]};
    cursor: pointer;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  gap: 1.25rem;

  input
  {
    flex: 1;
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

  input:nth-child(3)
  {
    flex: 0;
    width: 5rem;
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