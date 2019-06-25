import fetchMembers from '../members';

describe('Members', () => {
  it('should be able to fetch Members', () => {
    const expected = [
      { githubUserName: 'keitakn' },
      { githubUserName: 'kobayashi-m42' },
    ];

    expect(fetchMembers()).toStrictEqual(expected);
  });
});
