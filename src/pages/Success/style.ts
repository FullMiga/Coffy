import styled from "styled-components";

export const SuccessCotainer = styled.div`
  margin: auto;
  margin-top: 5rem; 

  max-width: 100rem;
  width: 100%;
  height: 37.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.75rem;

  border: 1px solid ${props => props.theme["main-300"]};
`
export const SuccessWrapper = styled.div`

`

export const SuccessTitle = styled.div`
  justify-self: flex-start;

  h2
  {
    color: ${props => props.theme["yellow-dark"]};
    font-size: 2rem;
  }

  p
  {
    margin-top: 0.25rem;
    color: ${props => props.theme["sub-text"]};
    font-size: 1.25rem;
  }
`

export const SuccessInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6.375rem;
`
export const InfoWrapper = styled.div`
  width: 39.75rem;
  
  div
  {
    margin-top: 2rem;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.75rem;

    font-size: 1rem;

    p
    {
      color: ${props => props.theme["sub-text"]};
    }
    
    strong
    {
      font-weight: 700;
      text-transform: capitalize
    }
  }
`

export const InforImage = styled.img`

`