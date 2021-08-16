import { Store } from 'vuex'
import { initialiseStores } from '~/utils/store-accessor'
const initialiser = (store: Store<any>) => initialiseStores(store)
export const plugins = [initialiser]
export * from '~/utils/store-accessor'