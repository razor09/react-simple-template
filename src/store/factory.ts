import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Observable } from './typings';

export abstract class Store {
  protected observe = (): void => {};
}

export const useStore = <S extends Store>(store: S): Observable<S> => {
  let handlers = new Array<Dispatch<SetStateAction<S>>>();
  return () => {
    const [_, dispatch] = useState<S>();
    useEffect(() => {
      handlers = [...handlers, dispatch];
      return () => {
        handlers = handlers.filter((handler) => handler !== dispatch);
      };
    }, []);
    store['observe'] = () => {
      handlers.forEach((handler) => {
        handler(store);
      });
    };
    return store;
  };
};
