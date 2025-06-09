import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

const BitcoinRates = () => {
  const [currency, setCurrency] = useState(currencies[0]);
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchRate = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`,
          { signal: controller.signal }
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setRate(data.bitcoin[currency.toLowerCase()]);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Error fetching Bitcoin rate");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRate();

    return () => controller.abort();
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose Currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>

      <div style={{ marginTop: "1rem" }}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
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
