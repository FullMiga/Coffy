import { CoffeeList, CoffeeTitle, CoffyFeatures, HeroContainer, HeroImage, HeroTextWrapper, TextWrapper } from "./styles";
import { coffeeCatalog } from '../../data/CoffeCatalog'
import { CoffeeItem } from "./components/CoffeItem";

export function Home() {
  return (
    <>
      <HeroContainer>
        <HeroTextWrapper>
          <TextWrapper>
            <h1>Find the perfect coffee for any time of day</h1>
            <p>With Coffee Delivery you can receive your coffee wherever you are, at any time.</p>
          </TextWrapper>
          <CoffyFeatures>
            <span>
              <img src="./home/home_cartIcon.svg" />
              Simple and secure purchase
            </span>
            <span>
              <img src="./home/home_boxIcon.svg" />
              Packaging keeps the coffee intact
            </span>
            <span>
              <img src="./home/home_timeIcon.svg" />
              Fast and tracked delivery
            </span>
            <span>
              <img src="./home/home_coffeIcon.svg" />
              The coffee arrives fresh to you
            </span>
          </CoffyFeatures>
        </HeroTextWrapper>
        <HeroImage src="./home/home_heroImage.png" alt=""/>
      </HeroContainer>
      <CoffeeTitle>
        OUR COFFEE
      </CoffeeTitle>
      <CoffeeList>
        {coffeeCatalog.map(coffe => 
          <CoffeeItem key={coffe.title} coffeData={coffe}/>
        )}
      </CoffeeList>
    </>
  )
}