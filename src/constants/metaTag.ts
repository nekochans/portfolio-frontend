import { appUrlPath, appUrl } from './url';

type AppName = 'Next Sample App';

const appName: AppName = 'Next Sample App';

const defaultTitle = appName;

const defaultDescription = 'Next.js のサンプルプロジェクトです。';

export type MetaTag = {
  title: string;
  ogpImgUrl: string;
  ogpTargetUrl: string;
  appName: AppName;
  description?: string;
};

type MetaTagList = {
  [key in keyof typeof appUrlPath]: MetaTag;
};

export const metaTagList = (): MetaTagList => ({
  top: {
    title: `${defaultTitle} | ${defaultDescription}`,
    ogpImgUrl: appUrl.ogpImg,
    ogpTargetUrl: appUrl.top,
    appName,
    description: defaultDescription,
  },
  isr: {
    title: `${defaultTitle} ISRサンプルページ`,
    ogpImgUrl: appUrl.ogpImg,
    ogpTargetUrl: appUrl.isr,
    appName,
  },
  repos: {
    title: `${defaultTitle} GitHubリポジトリ一覧`,
    ogpImgUrl: appUrl.ogpImg,
    ogpTargetUrl: appUrl.repos,
    appName,
  },
});
