import { createContext, ReactNode, useEffect, useReducer } from "react";
import { Coffee, CreateOrderData, orderReducer } from "../reducers/orders/reducer";
import { addNewItemToBagAction, clearClientOrderAction, createNewOrderAction, removeItemFromBagAction, updateItemQuantityAction } from "../reducers/orders/actions";

interface OrderContextProps {
  children: ReactNode;
}

interface OrderContextType {  
  bagItems: Coffee[];
  activeOrder: CreateOrderData | null;
  amountBagItems: number;
  

  createNewOrder: (orderData: CreateOrderData) => void;
  resetOrderData: () => void;
  addNewItemToBag: (item: Coffee) => void;
  removeItemFromBag: (item: Coffee) => void;
  udpateOrderItemQuantity: (item: Coffee, updatedItemAmount: number) => void;
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProps) {
  const [orderState, dispatch] = useReducer(orderReducer, {
      bagItems: [],
      activeOrder: null,
    }, (initialState) => {
      const storedStateAsJSON = localStorage.getItem('@coffy-delivery:order-state-1.0.0');

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState
    }
  );

  useEffect(() => {
    const stateJSON = JSON.stringify(orderState)

    localStorage.setItem('@coffy-delivery:order-state-1.0.0', stateJSON);
  }, [orderState])

  const { bagItems, activeOrder } = orderState;

  const amountBagItems = bagItems.length;

  function createNewOrder(orderData: CreateOrderData) {
    dispatch(createNewOrderAction(orderData))
  }
  
  function addNewItemToBag(newItem: Coffee) {
    dispatch(addNewItemToBagAction(newItem))
  }

  function resetOrderData() {
    dispatch(clearClientOrderAction())
  }

  function udpateOrderItemQuantity(item: Coffee, updatedItemAmount: number) {
    dispatch(updateItemQuantityAction(item, updatedItemAmount))
  }

  function removeItemFromBag(item: Coffee) {
    dispatch(removeItemFromBagAction(item))
  }

  return(
    <OrderContext.Provider 
      value={
        { bagItems,
          addNewItemToBag,
          removeItemFromBag, 
          createNewOrder, 
          amountBagItems, 
          activeOrder, 
          udpateOrderItemQuantity, 
          resetOrderData,
        }
      }>
      {children}
    </OrderContext.Provider>
  )
}