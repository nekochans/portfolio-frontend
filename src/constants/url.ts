export const appBaseUrl = (): string =>
  process.env.NEXT_PUBLIC_APP_URL ? process.env.NEXT_PUBLIC_APP_URL : '';

export const apiPath = {
  hello: '/api/hello',
} as const;

export const appUrlPath = {
  top: '/',
  isr: '/isr',
  repos: '/repos',
} as const;

export const appUrl = {
  top: appBaseUrl(),
  ogpImg: `${appBaseUrl()}/ogp.webp`,
  isr: `${appBaseUrl()}/${appUrlPath.isr}`,
  repos: `${appBaseUrl()}/${appUrlPath.repos}`,
} as const;

export type AppUrlPath = typeof appUrlPath[keyof typeof appUrlPath];

export type AppUrl = typeof appUrl[keyof typeof appUrl];

export type ApiPath = typeof apiPath[keyof typeof apiPath];
