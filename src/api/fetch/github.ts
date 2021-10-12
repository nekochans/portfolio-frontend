import {
  createFailureResult,
  createSuccessResult,
} from '../../domain/asyncResult';
import FetchPublicReposError from '../../domain/errors/FetchPublicReposError';
import { FetchPublicRepos, GitHubRepository } from '../../domain/github';

// https://docs.github.com/en/rest/reference/repos のAPIの返り値
type GitHubRepositoriesResponse = {
  id: number;
  name: string;
  // eslint-disable-next-line camelcase
  html_url: string;
  description: string;
}[];

// eslint-disable-next-line import/prefer-default-export
export const fetchPublicRepos: FetchPublicRepos = async () => {
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    };

    const response = await fetch(
      'https://api.github.com/orgs/nekochans/repos?type=public&per_page=4&page=1&sort=pushed',
      options,
    );

    if (response.status !== 200) {
      return createFailureResult<FetchPublicReposError>(
        new FetchPublicReposError(),
      );
    }

    const responseBody = (await response.json()) as GitHubRepositoriesResponse;

    return createSuccessResult<GitHubRepository[]>(
      responseBody.map((gitHubRepository) => ({
        id: gitHubRepository.id,
        name: gitHubRepository.name,
        htmlUrl: gitHubRepository.html_url,
        description: gitHubRepository.description,
      })),
    );
  } catch (error) {
    // TODO このブロックに入った時は原因不明なエラーなのでSlack等に通知を送信したい
    const newError =
      error instanceof Error
        ? new FetchPublicReposError(error)
        : new FetchPublicReposError(
            new Error('fetchPublicRepos Unexpected Error'),
          );

    return createFailureResult<FetchPublicReposError>(newError);
  }
};
