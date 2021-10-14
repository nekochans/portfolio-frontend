/**
 * @jest-environment jsdom
 */
import fetch from 'jest-fetch-mock';
import { renderHook, act } from '@testing-library/react-hooks';
import useFetchPublicRepos from '../useFetchPublicRepos';

describe('useFetchPublicRepos TestCases', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should be able to fetch public GitHub Repositories', async () => {
    const mockBody = [
      {
        id: 1,
        name: 'my-terraform',
        html_url: 'https://github.com/keitakn/my-terraform',
        description: '個人の検証用で使うTerraform',
      },
    ];

    const mockParams = {
      status: 200,
      statusText: 'OK',
    };

    fetch.mockResponseOnce(JSON.stringify(mockBody), mockParams);

    const expected = {
      items: [
        {
          id: 1,
          title: 'my-terraform',
          url: 'https://github.com/keitakn/my-terraform',
          description: '個人の検証用で使うTerraform',
        },
      ],
    };

    await act(async () => {
      const renderHookResult = renderHook(() => useFetchPublicRepos());

      await renderHookResult.waitFor(() => {
        expect(renderHookResult.result.current).toStrictEqual(expected);
      });
    });
  });
});
