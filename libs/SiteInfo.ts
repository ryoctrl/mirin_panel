export enum SiteInfo {
  SITE_NAME = 'Panel',
}

export const isServer = () => typeof window === 'undefined';

export const localAddress = 'http://127.0.0.1:3000';
