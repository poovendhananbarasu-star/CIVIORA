import { createContext, useContext } from 'react';

export const SEOContext = createContext(null);

export function useSEOCollector() {
  return useContext(SEOContext);
}
