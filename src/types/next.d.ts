import 'next';
import { ReduxStoreInstance } from '../redux/store';

declare module 'next' {
  export interface NextPageContext {
    store: ReduxStoreInstance;
  }
}
