export const googleTagManagerId =
  process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID != null || '';

declare global {
  interface Window {
    dataLayer: Array<Record<string, unknown>>;
  }
}

export const pageview = (url: string): void => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
