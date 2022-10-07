import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchCurrentPrice = createAsyncThunk(
  'current/fetchCurrentPrice',
  async () => {
    const response = await fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
    return await response.json()
  }
)

const currentPriceSlice = createSlice({
    name: 'current',
    initialState: {
      current: [],
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCurrentPrice.fulfilled, (state, action) => {
            console.log(action.payload)
            state.current = action.payload
        })
    },
  })

export default currentPriceSlice.reducer;