interface Member {
  githubUserName: string;
}

const fetchMembers = (): Member[] => {
  return [
    { githubUserName: 'keitakn' },
    { githubUserName: 'kobayashi-m42' }
  ];
};

export default fetchMembers;
