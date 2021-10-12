import { useEffect, useState } from 'react';
import { CardListItem } from '../components/CardList';
import { fetchPublicRepos } from '../api/fetch/github';
import { isSuccessResult } from '../domain/asyncResult';

export type UseFetchPublicReposReturnType = {
  items?: CardListItem[];
};

const useFetchPublicRepos = (): UseFetchPublicReposReturnType => {
  const [items, setItems] = useState<CardListItem[]>();

  useEffect(() => {
    const fetchRepo = async () => {
      const publicRepos = await fetchPublicRepos();
      if (isSuccessResult(publicRepos)) {
        const cardListItems = publicRepos.value.map((gitHubRepository) => ({
          id: gitHubRepository.id,
          title: gitHubRepository.name,
          url: gitHubRepository.htmlUrl,
          description: gitHubRepository.description,
        }));

        setItems(cardListItems);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchRepo();
  }, []);

  return { items };
};

export default useFetchPublicRepos;
