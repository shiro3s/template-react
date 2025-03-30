import {createSlice} from "@reduxjs/toolkit";

type Todo = {
  id: string;
  title: string;
  content?: string;
  done: boolean;
}

type State = {
  todos: Todo[] 
}

const initialState: State = {
  todos: []
}

export const todoStore = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
})

export default todoStore.reducer
