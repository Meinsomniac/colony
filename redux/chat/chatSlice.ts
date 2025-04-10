const { createSlice } = require("@reduxjs/toolkit");

export const chatSlice = createSlice({
  reducerPath: "chats",
  name: "conversations",
  initialState: {
    currentConversationId: "",
    conversations: [],
  },
});
