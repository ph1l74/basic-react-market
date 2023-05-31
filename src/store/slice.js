import { createSlice } from '@reduxjs/toolkit';
import {
  getData,
} from './thunks';

const initState = {};

const slice = createSlice({
  name: 'market',
  initialState: initState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    clearFilters(state) {
      state.filters = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWinnersData.pending, (state) => {
        if (!state.isLoading) {
          state.isLoading = true;
        }
      })
      .addCase(getWinnersData.fulfilled, (state, action) => {
        if (state.isLoading) {
          state.isLoading = false;
          state.appendResults = action.payload;
          state.filteredResults = action.payload;
        }
      })
      .addCase(getWinnersData.rejected, (state, action) => {
        if (state.isLoading) {
          state.isLoading = false;
          state.appendResults = [];
          state.filteredResults = [];
          throw new Error(action.error.message);
        }
      })
  },
});

export default slice.reducer;
export const {
  setAppendResults,
  setFilters,
  setManualVoteFilters,
  setManualVoteStage,
  setManualVoteData,
  clearFilters,
  setIsLoading,
  setActiveTab,
  setFilteredResults,
} = slice.actions;