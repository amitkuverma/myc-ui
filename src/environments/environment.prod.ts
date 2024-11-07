import packageInfo from '../../package.json';

export const environment = {
  API_URL:'https://api.mycinemadigital.com/api',
  IMAGE_URL:'https://api.mycinemadigital.com/',
  UI_URL:'https://dashboard.mycinemadigital.com/',
  appVersion: packageInfo.version,
  production: true
};
