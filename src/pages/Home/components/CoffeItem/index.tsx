import { useContext, useState } from 'react'
import { CoffeeTitle, CoffeeAddToCard, CoffeeItemContainer, CoffeeActions, TagsList } from './styles'
import { OrderContext } from '../../../../contexts/OrderContext';
import { coffeeCatalog } from '../../../../data/CoffeCatalog';

interface CoffeItemProps {
  coffeData: coffeeCatalog;
}

export function CoffeeItem({ coffeData }: CoffeItemProps) {
  const { addNewItemToBag } = useContext(OrderContext)
  const [amount, setAmount] = useState(1);

  function addAmountCoffe() {
    setAmount((state) => {
      return state + 1;
    })
  }

  function reduceAmountCoffe() {
    setAmount((state) => {
      if(state >= 2) {
        return state - 1;
      }
      return state;        
    })
  }

  function handleAddNewItemToBag() {
    const newCoffeItem = {
      id: new Date().toISOString(),
      imageURL: coffeData.imageURL,
      title: coffeData.title,
      price: coffeData.price,
      amount: amount,
    }
    addNewItemToBag(newCoffeItem)
  }


  return (

      <CoffeeItemContainer>
        <img src={coffeData.imageURL} alt="" />
        <CoffeeTitle>
          <p>{coffeData.title}</p>
          <p>R$ {coffeData.price}</p>
        </CoffeeTitle>
        <CoffeeAddToCard>
          <CoffeeActions>
            <button onClick={handleAddNewItemToBag}>Add to Cart</button>
            <div>
              <button onClick={reduceAmountCoffe}>-</button>
                <span>{amount}</span>
              <button onClick={addAmountCoffe}>+</button>
            </div>
          </CoffeeActions>
          <p>{coffeData.description}</p>
          <TagsList>
            {coffeData.tags.map(tag =>
              <span key={tag}>{tag}</span>
            )}
          </TagsList>
        </CoffeeAddToCard>
      </CoffeeItemContainer>

  )
}