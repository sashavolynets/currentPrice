import { configureStore } from '@reduxjs/toolkit';
import currentPriceSlice from './currentPriceSlice';

export default configureStore({
  reducer: {
    currentPrice: currentPriceSlice
  },
});