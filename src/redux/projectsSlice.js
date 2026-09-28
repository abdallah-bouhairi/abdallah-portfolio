import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


// =========================================
// FETCH GITHUB PROJECTS
// =========================================

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async (_, { rejectWithValue }) => {

    try {

      const response = await fetch(
        'https://api.github.com/users/abdallah-bouhairi/repos?per_page=12&sort=updated'
      );


      if (!response.ok) {
        throw new Error(
          `GitHub API error: ${response.status}`
        );
      }


      const data = await response.json();

      return data;

    } catch (error) {

      return rejectWithValue(
        error.message || 'Unable to load GitHub repositories'
      );

    }

  }
);


// =========================================
// INITIAL STATE
// =========================================

const initialState = {
  items: [],
  status: 'idle',
  error: null,
  filter: 'all',
};


// =========================================
// PROJECTS SLICE
// =========================================

const projectsSlice = createSlice({

  name: 'projects',

  initialState,

  reducers: {

    setFilter: (state, action) => {
      state.filter = action.payload;
    },

  },


  extraReducers: (builder) => {

    builder

      // Loading
      .addCase(
        fetchProjects.pending,
        (state) => {
          state.status = 'loading';
          state.error = null;
        }
      )


      // Success
      .addCase(
        fetchProjects.fulfilled,
        (state, action) => {

          state.status = 'succeeded';

          state.items = action.payload;

          state.error = null;

        }
      )


      // Error
      .addCase(
        fetchProjects.rejected,
        (state, action) => {

          state.status = 'failed';

          state.error =
            action.payload ||
            action.error.message ||
            'Unable to load GitHub repositories';

        }
      );

  },

});


export const {
  setFilter,
} = projectsSlice.actions;


export default projectsSlice.reducer;

