import styled from "styled-components";

export const HeroContainer = styled.section`
  margin: auto;
  
  max-width: 100rem;
  width: 100%;
  height: 41.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.125rem;
  
  background-image: url('./home/home_heroBackground.png');
  border: solid 1px ${props => props.theme["main-300"]};
  border-top: none;
`

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const HeroImage = styled.img`
  width: 476px;
  height: 360px;
`

export const TextWrapper = styled.div`
  max-width: 36.75rem;
  width: 100%;

  h1
  {
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;

    color: ${props => props.theme["text"]}
  }

  p
  {
    margin-top: 1rem;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${props => props.theme["text"]}
  }
`

export const CoffyFeatures = styled.div` 
  max-width: 47rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  span
  {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const CoffeeTitle = styled.div`
  margin: auto;

  max-width: 100rem;
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme["text"]};
  border: 1px solid ${props => props.theme["main-300"]};
  border-top: none;

  font-size: 1.75rem;
  font-weight: 600;
  text-align: center;
`
export const CoffeeList = styled.main`
  margin: auto;

  max-width: 100rem;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  > div
  {
    height: 25rem;
    border: 1px solid ${props => props.theme["main-300"]};
    border-top: none;
    border-left: none;
  }

  > div:nth-child(4n + 1)
  {
    height: 25rem;
    border: 1px solid ${props => props.theme["main-300"]};
    border-top: none;
  }

  > div:nth-child(4n + 4)
  {
    height: 25rem;
    border: 1px solid ${props => props.theme["main-300"]};
    border-top: none;
    border-left: none;
  }
`