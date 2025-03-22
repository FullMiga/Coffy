import { useContext, useEffect, useState } from "react";
import { BagItemActions, BagItemContainer, BagItemDescription, BagItemImage, CoffeeAmountAction } from "./styles";
import { Trash2 } from "lucide-react";
import { OrderContext } from "../../../../contexts/OrderContext";

interface bagItemInterface {
  id: string;
  imageURL: string;
  title: string;
  price: number;
  amount: number;
}

interface CoffeItemProps {
  coffeData: bagItemInterface;
}

export function BagItem({ coffeData }: CoffeItemProps) {
  
  const [itemAmount, setItemAmount] = useState(coffeData.amount)
  
  const { udpateOrderItemQuantity, removeItemFromBag} = useContext(OrderContext)

  function addAmountCoffe() {
    setItemAmount((state) => state + 1)
  }

  function reduceAmountCoffe() {
    setItemAmount((state) => {
      if (state >= 2) {
        return state - 1;
      }
      return state;
    })
  }

  function deleteItem() {
    removeItemFromBag(coffeData)
  }

  const actualAmountItem = coffeData.amount;

  useEffect(() => {
    if(itemAmount !== actualAmountItem) {
      udpateOrderItemQuantity(coffeData, itemAmount)
    }
  }, [itemAmount, udpateOrderItemQuantity, actualAmountItem, coffeData])

  return (
    <BagItemContainer>
      <BagItemImage src={coffeData.imageURL} alt=""/>
      <div>
        <BagItemDescription>
          <p>{coffeData.title}</p>
          <p>R$ {coffeData.price.toFixed(2)}</p>
        </BagItemDescription>
        <BagItemActions>
          <CoffeeAmountAction>
            <div>
              <button type="button" onClick={reduceAmountCoffe}>-</button>
                <span>{itemAmount}</span>
              <button type="button" onClick={addAmountCoffe}>+</button>
            </div>
            <button type="button" onClick={deleteItem}>
              <Trash2 size={18}/>
            </button>
          </CoffeeAmountAction>
        </BagItemActions>
      </div>
    </BagItemContainer>
  )
}