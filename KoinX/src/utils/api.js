const BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchCryptoData = async (coinId) => {
  const response = await fetch(
    `${BASE_URL}/simple/price?ids=${coinId}&vs_currencies=inr,usd&include_24hr_change=true`
  );
  return response.json();
};

export const fetchTrendingCoins = async () => {
  const response = await fetch(`${BASE_URL}/search/trending`);
  return response.json();
};