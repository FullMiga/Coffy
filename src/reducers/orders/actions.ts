import { Coffee, CreateOrderData } from "./reducer";

export enum ActionTypes {
  ADD_NEW_ITEM_TO_BAG = "ADD_NEW_ITEM_TO_BAG",
  CREATE_NEW_ORDER = "CREATE_NEW_ORDER",
  CLEAR_CLIENT_ORDER = "CLEAR_CLIENT_ORDER",
  UPDATE_ITEM_QUANTITY = "UPDATE_ITEM_QUANTITY",
  REMOVE_ITEM_FROM_BAG = "REMOVE_ITEM_FROM_BAG",
}

export function addNewItemToBagAction(newItem: Coffee) {
  return  {
    type: ActionTypes.ADD_NEW_ITEM_TO_BAG,
    payload: {
      newItem,
    }
  }
}

export function createNewOrderAction(orderData: CreateOrderData) {
  return  {
    type: ActionTypes.CREATE_NEW_ORDER,
    payload: {
      orderData     
    }
  }
}

export function clearClientOrderAction() {
  return {
    type: ActionTypes.CLEAR_CLIENT_ORDER,
  }
}

export function updateItemQuantityAction(item: Coffee, updatedItemAmount: number) {
  return {
    type: ActionTypes.UPDATE_ITEM_QUANTITY,
    payload: {
      item,
      updatedItemAmount
    }
  }
}

export function removeItemFromBagAction(item: Coffee) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_BAG,
    payload: {
      item
    }
  }
}
