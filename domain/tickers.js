// todo: how can I keep my data here?

// keyword 'default' allows import statments to assume this function
//         otherwise you'd need the {} in the import statment
export default function loadTickers()
{
  return [
      {name: 'XRP', market: 'kraken:xrpusd', price: 0.2276544},
      {name: 'ETH', market: 'kraken:ethusd', price: 348.318684},
      {name: 'LTC', market: 'kraken:ltcusd', price: 78.8455199}
  ];
}