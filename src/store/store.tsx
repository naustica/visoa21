import createStore, { Store } from 'unistore'

export interface StoreState {
  df: any,
  filter: any
}

export const initialState: StoreState = {
  df: null,
  filter: ["bundesland"]
}

const store: Store<StoreState> = createStore(initialState)


export default store
