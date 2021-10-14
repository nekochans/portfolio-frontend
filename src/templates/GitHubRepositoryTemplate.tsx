import React from 'react';
import useFetchPublicRepos from '../hooks/useFetchPublicRepos';
import DefaultLayout from '../layouts/DefaultLayout';
import { metaTagList } from '../constants/metaTag';
import CardList from '../components/CardList';

const GitHubRepositoryTemplate: React.VFC = () => {
  const publicReposRes = useFetchPublicRepos();

  return (
    <DefaultLayout filename="src/pages/index.tsx" metaTag={metaTagList().repos}>
      {publicReposRes.items == null ? (
        ''
      ) : (
        <CardList items={publicReposRes.items} />
      )}
    </DefaultLayout>
  );
};

export default GitHubRepositoryTemplate;
