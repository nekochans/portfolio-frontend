import createStore from '../../createStore';
import memberModule from '../memberModule';

describe('memberModule', () => {
  it('should be as expected when using postFetchMembersRequest', () => {
    const mockStore = createStore();

    mockStore.dispatch(memberModule.actions.postFetchMembersRequest());

    const expected = {
      member: { isLoading: true, members: {}, errorMessage: '' },
    };

    expect(mockStore.getState()).toStrictEqual(expected);
  });

  it('should be as expected when using fetchMembersSuccess', () => {
    const members = [
      {
        githubUserName: 'keitakn',
        githubPicture:
          'https://avatars1.githubusercontent.com/u/11032365?s=460&v=4',
        cvUrl: 'https://github.com/keitakn/cv',
      },
    ];

    const mockStore = createStore();

    mockStore.dispatch(memberModule.actions.fetchMembersSuccess(members));

    const expected = {
      member: { isLoading: false, members, errorMessage: '' },
    };

    expect(mockStore.getState()).toStrictEqual(expected);
  });
});
