import type { FC } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import type { ComponentStoryObj } from '@storybook/react';
import { metaTagList } from '../constants/metaTag';
import DefaultLayout from '../layouts/DefaultLayout';

import OssList, { Props } from './OssList';

const props: Props = {
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

const OssListWithDefaultLayout: FC<Props> = ({ ossList }) => (
  <DefaultLayout metaTag={metaTagList().top}>
    <OssList ossList={ossList} />
  </DefaultLayout>
);

type Story = ComponentStoryObj<typeof OssListWithDefaultLayout>;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  component: OssListWithDefaultLayout,
};

export const Default: Story = {
  args: { ossList: props.ossList },
};
