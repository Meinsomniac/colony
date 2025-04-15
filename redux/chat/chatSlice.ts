import { createSlice } from "@reduxjs/toolkit";

type InitialStateProps = {
  isAuthenticated: boolean;
};

const initialState = {
  currentConversationId: "",
  conversations: [],
  contacts: [],
};

export const chatSlice = createSlice({
  name: "conversations",
  reducerPath: "chat",
  initialState,
  reducers: {
    updateContacts: (state, { payload }) => {
      state.contacts = payload;
    },
  },
});

export const { updateContacts } = chatSlice.actions;
