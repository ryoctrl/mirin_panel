export enum SiteInfo {
  SITE_NAME = 'Panel',
}

export const isServer = () => typeof window === 'undefined';

// export const backendAddress = 'http://127.0.0.1:3000';
export const backendAddress = process.env.PANEL_BACKEND_ADDRESS;
