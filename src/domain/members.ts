export interface Member {
  githubUserName: string;
  githubPicture: string;
  cvUrl: string;
}

const fetchMembers = (): Member[] => {
  return [
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
};

export default fetchMembers;
