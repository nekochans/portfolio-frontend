import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import OssList from './OssList';
import { metaTagList } from '../constants/metaTag';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'src/components/OssList.tsx',
  component: OssList,
  includeStories: ['showOssListWithDefaultLayout'],
};

const props = {
  ossList: [
    {
      id: 1,
      name: 'address-search-apis',
      url: 'https://github.com/nekochans/address-search-apis',
      version: 'v1.0.0',
      description: '住所検索に関する様々なAPIを提供します。',
    },
    {
      id: 2,
      name: 'convert-to-webp',
      url: 'https://github.com/nekochans/convert-to-webp',
      version: 'v1.0.1',
      description:
        'S3 にアップロードされた画像をWebpに変換するLambda関数です。',
    },
    {
      id: 3,
      name: 'terraform-aws-vpc',
      url: 'https://github.com/nekochans/terraform-aws-vpc',
      version: 'v3.0.0',
      description:
        'Terraform module to create VPC resource with Nat Instance on AWS.',
    },
  ],
};

export const showOssListWithDefaultLayout = (): JSX.Element => (
  <DefaultLayout metaTag={metaTagList().top}>
    <OssList ossList={props.ossList} />
  </DefaultLayout>
);
