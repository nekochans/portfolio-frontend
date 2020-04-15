import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { Member } from '../../domain/members';

export type MemberState = {
  isLoading: boolean;
  errorMessage: string;
  members?: Member[];
};

export const initialState: MemberState = {
  isLoading: false,
  errorMessage: '',
};

const memberModule = createSlice({
  name: 'member',
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
      action: PayloadAction<Member[]>,
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
  return useSelector((state: { member: MemberState }) => state);
};

export default memberModule;
