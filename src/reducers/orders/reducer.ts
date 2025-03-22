import { produce } from 'immer'
import { ActionTypes } from "./actions";

export interface Coffee {
  id: string;
  imageURL: string;
  title: string;
  price: number;
  amount: number;
}

export interface CreateOrderData {
  addressPostcode: string;
  addressLine: string;
  addressNumber: string;
  addressComplement?: string;
  addressNeighborhood: string;
  addressCity: string;
  addressUF: string;
  paymentMethod: string;
  bagAmountItems: number;
}

interface OrdersState {
  bagItems: Coffee[];
  activeOrder: CreateOrderData | null;
}

export function orderReducer (state: OrdersState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM_TO_BAG:
      return produce(state, (draft) => {
        draft.bagItems.push(action.payload.newItem)
      })
      
    case ActionTypes.CREATE_NEW_ORDER:
      return produce(state, (draft) => {
        draft.activeOrder = action.payload.orderData;
      })

    case ActionTypes.CLEAR_CLIENT_ORDER:
      return produce(state, (draft) => {
        draft.bagItems = [];
        draft.activeOrder = null;
      })

    case ActionTypes.UPDATE_ITEM_QUANTITY: {
      const itemToUpdate = action.payload.item.id;
      
      if (!itemToUpdate) {
        return state;
      }

      return produce(state, (draft) => {
        draft.bagItems = state.bagItems.map((bagItem) => {
          if (bagItem.id === itemToUpdate) {
            return {...bagItem, amount: action.payload.updatedItemAmount}
          } else {
            return bagItem;
          }
        })
      })
    }

    case ActionTypes.REMOVE_ITEM_FROM_BAG: {
      const itemToRemove = action.payload.item.id

      if (!itemToRemove) {
        return state;
      }

      return produce(state, (draft) => {
        draft.bagItems = state.bagItems.filter((bagItem) => {
          return bagItem.id !== itemToRemove;
        })
      })
    }

    default:
      return state;
  }
}