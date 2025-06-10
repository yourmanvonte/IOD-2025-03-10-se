import { useState } from 'react';
import { useBitcoinRate } from './useBitcoinRate'; 
import { useEmoji } from './EmojiContext'

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

const BitcoinRates = () => {
  const [currency, setCurrency] = useState(currencies[0]);
  const { rate, loading, error } = useBitcoinRate(currency);
  const { emoji } = useEmoji();

  const options = currencies.map(curr => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <p>Current Mood: {emoji}</p>

      <label>
        Choose Currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>

      <div style={{ marginTop: '1rem' }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {rate !== null && !loading && !error && (
          <p>
            1 BTC = {rate} {currency}
          </p>
        )}
      </div>
    </div>
  );
};

export default BitcoinRates;
