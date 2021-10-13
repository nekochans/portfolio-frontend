import FetchPublicReposError from './errors/FetchPublicReposError';
import { AsyncResult } from './asyncResult';

export type GitHubRepository = {
  id: number;
  name: string;
  htmlUrl: string;
  description: string;
};

export type FetchPublicRepos = () => Promise<
  AsyncResult<GitHubRepository[], FetchPublicReposError>
>;
