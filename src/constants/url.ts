export const appBaseUrl = (): string =>
  process.env.NEXT_PUBLIC_APP_URL ? process.env.NEXT_PUBLIC_APP_URL : '';

export const appUrlPath = {
  top: '/',
} as const;

export const appUrl = {
  top: appBaseUrl(),
  ogpImg: `${appBaseUrl()}/ogp.webp`,
} as const;

export type AppUrlPath = (typeof appUrlPath)[keyof typeof appUrlPath];

export type AppUrl = (typeof appUrl)[keyof typeof appUrl];
