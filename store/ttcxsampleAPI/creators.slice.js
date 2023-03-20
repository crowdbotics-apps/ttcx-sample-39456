import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_creator_list = createAsyncThunk(
  "creators/api_v1_creator_list",
  async payload => {
    const response = await apiService.api_v1_creator_list(payload)
    return response.data
  }
)
export const api_v1_creator_create = createAsyncThunk(
  "creators/api_v1_creator_create",
  async payload => {
    const response = await apiService.api_v1_creator_create(payload)
    return response.data
  }
)
export const api_v1_creator_retrieve = createAsyncThunk(
  "creators/api_v1_creator_retrieve",
  async payload => {
    const response = await apiService.api_v1_creator_retrieve(payload)
    return response.data
  }
)
export const api_v1_creator_update = createAsyncThunk(
  "creators/api_v1_creator_update",
  async payload => {
    const response = await apiService.api_v1_creator_update(payload)
    return response.data
  }
)
export const api_v1_creator_partial_update = createAsyncThunk(
  "creators/api_v1_creator_partial_update",
  async payload => {
    const response = await apiService.api_v1_creator_partial_update(payload)
    return response.data
  }
)
export const api_v1_creator_destroy = createAsyncThunk(
  "creators/api_v1_creator_destroy",
  async payload => {
    const response = await apiService.api_v1_creator_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const creatorsSlice = createSlice({
  name: "creators",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_creator_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_creator_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_creator_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_creator_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_creator_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_creator_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_creator_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_creator_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_creator_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_creator_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_creator_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_creator_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_creator_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_creator_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_creator_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_creator_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_creator_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_creator_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_creator_list,
  api_v1_creator_create,
  api_v1_creator_retrieve,
  api_v1_creator_update,
  api_v1_creator_partial_update,
  api_v1_creator_destroy,
  slice: creatorsSlice
}
