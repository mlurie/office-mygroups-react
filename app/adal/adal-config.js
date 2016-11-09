var adalConfig = {
  tenant: 'common',
  clientId: 'b81c097f-15b2-4c36-8aa2-ddbfa47d5c45',
  extraQueryParameter: 'nux=1',
  disableRenewal: true,
  endpoints: {
    'https://graph.microsoft.com': 'https://graph.microsoft.com'
  }
  // cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost. 
};

module.exports = adalConfig;
