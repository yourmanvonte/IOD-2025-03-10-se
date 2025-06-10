import { useEffect, useReducer } from 'react';

const initialState = {
  rate: null,
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_START':
      return { ...state, loading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, rate: action.payload };
    case 'FETCH_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function useBitcoinRate(currency) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const controller = new AbortController();

    const fetchRate = async () => {
      dispatch({ type: 'FETCH_START' });
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`,
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: data.bitcoin[currency.toLowerCase()] });
      } catch (error) {
        if (error.name !== 'AbortError') {
          dispatch({ type: 'FETCH_ERROR', payload: 'Error fetching Bitcoin rate' });
        }
      }
    };

    fetchRate();

    return () => controller.abort();
  }, [currency]);

  return state;
}