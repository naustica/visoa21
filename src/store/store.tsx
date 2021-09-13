import createStore, { Store } from 'unistore'
// @ts-ignore
import DataFrame from 'dataframe-js'

const df = new DataFrame({
  bundesland: ["DE-BW", "DE-BW", "DE-MV", "DE-MV", "DE-MV", "DE-HB", "DE-NW", "DE-MV", "DE-ST", "DE-TH"],
  oa_policy: [true, false, false, true, true, true, false, false, true, true],
  oa_leitlinie: [true, false, true, true, true, true, false, true, true, true]
}, ['bundesland', 'oa_policy', "oa_leitlinie"])

export interface StoreState {
  df: any,
  filter: any
}

export const initialState: StoreState = {
  df: df,
  filter: ["bundesland"]
}

const store: Store<StoreState> = createStore(initialState)


export default store
