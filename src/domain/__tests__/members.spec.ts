import fetchMembers from '../members';

describe('Members', () => {
  it('should be able to fetch Members', () => {
    const expected = [
      {
        githubUserName: 'keitakn',
        githubPicture:
          'https://avatars1.githubusercontent.com/u/11032365?s=460&v=4',
        cvUrl: 'https://github.com/keitakn/cv',
      },
      {
        githubUserName: 'kobayashi-m42',
        githubPicture:
          'https://avatars0.githubusercontent.com/u/32682645?s=460&v=4',
        cvUrl: 'https://github.com/kobayashi-m42/cv',
      },
    ];

    expect(fetchMembers()).toStrictEqual(expected);
  });
});
