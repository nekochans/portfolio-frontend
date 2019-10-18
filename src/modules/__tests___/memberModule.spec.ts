//import { useDispatch } from 'react-redux';
import store from '../../store';
import memberModule from '../memberModule';

describe('Members', () => {
  it('should be able to fetch Members', () => {
    const members = [
      {
        githubUserName: 'keitakn',
        githubPicture:
          'https://avatars1.githubusercontent.com/u/11032365?s=460&v=4',
        cvUrl: 'https://github.com/keitakn/cv',
      },
    ];

    const mockStore = store();

    mockStore.dispatch(memberModule.actions.fetchMemberSuccess(members));

    const expected = {
      member: { members }
    };

    expect(mockStore.getState()).toStrictEqual(expected);
  });
});
