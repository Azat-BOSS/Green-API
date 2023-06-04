import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActiveModal: false
}

const ModalSlice = createSlice({
  name: "modal/slice",
  initialState: initialState,
  reducers: {
    changeModalState(state, action) {
      state.isActiveModal = action.payload
    }
  }
})

export const {changeModalState} = ModalSlice.actions
export default ModalSlice.reducer