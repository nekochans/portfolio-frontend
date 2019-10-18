import { createSlice } from 'redux-starter-kit';
import { useSelector } from 'react-redux';
import { Member } from '../../domain/members';

type MemberState = {
  isLoading: boolean;
  errorMessage: string;
  members?: Member[];
};

const initialState: MemberState = {
  isLoading: false,
  errorMessage: '',
};

const memberModule = createSlice({
  slice: 'member',
  initialState,
  reducers: {
    postFetchMembersRequest: (state: MemberState) => {
      return Object.assign(state, {
        members: {},
        isLoading: true,
        errorMessage: '',
      });
    },
    fetchMembersSuccess: (
      state: MemberState,
      action: { payload: Member[] },
    ) => {
      return Object.assign(state, {
        members: action.payload,
        isLoading: false,
        errorMessage: '',
      });
    },
  },
});

export const useMembers = () => {
  return useSelector(
    (state: ReturnType<typeof memberModule.reducer>) => state.members,
  );
};

export default memberModule;
