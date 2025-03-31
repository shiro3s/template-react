import {createSlice} from "@reduxjs/toolkit";

type Memo = {
  id: string;
  title: string;
  content?: string;
}

type State = {
  memos: Memo[] 
}

const initialState: State = {
  memos: []
}

export const memoStore = createSlice({
  name: "memo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
})

export default memoStore.reducer
