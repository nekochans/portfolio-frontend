import { appUrlPath, appUrl } from './url';

type AppName = 'nekochans';

const appName: AppName = 'nekochans';

const defaultTitle = appName;

const defaultDescription = 'GitHub Organization Introduction to nekochans';

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
});
