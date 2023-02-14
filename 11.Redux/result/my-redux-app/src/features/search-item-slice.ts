import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { store } from '../app/store';

type SearchItem = {
  filter: {
    code: number | null;
    name: string;
    isValid: boolean;
  };
  items: { [id: number]: { code: number; name: string; remark: string; isValid: boolean } };
};

const initialState: SearchItem = {
  filter: {
    code: null,
    name: '',
    isValid: false,
  },
  items: {},
};

// 非同期処理
export const fetchItems = createAsyncThunk<
  Pick<SearchItem, 'items'>,
  undefined,
  { state: ReturnType<typeof store.getState> }
>('fetchItems', async (_, { getState }) => {
  // 本来はここでFetch処理
  const filter = getState().searchItem.filter;
  const mockData = {
    1: { code: 100, name: 'test1', remark: '', isValid: true },
    2: { code: 101, name: 'test11', remark: '', isValid: false },
    3: { code: 200, name: 'test2', remark: '', isValid: true },
    4: { code: 201, name: 'test22', remark: '', isValid: false },
    5: { code: 300, name: 'test3', remark: '', isValid: true },
  };
  const filtered = Object.entries(mockData).filter(([_id, item]) => {
    if (filter.code && !item.code.toString().includes(filter.code.toString())) {
      return false;
    }
    if (filter.name && !item.name.includes(filter.name)) {
      return false;
    }
    if (filter.isValid && !item.isValid) {
      return false;
    }
    return true;
  });
  const result = Object.fromEntries(filtered);

  // Fetch処理で取得した値を返す
  return { items: result };
});

const searchItemSlice = createSlice({
  name: 'searchItem',
  initialState: initialState,
  reducers: {
    codeFilterModified(state, action: PayloadAction<number>) {
      state.filter.code = action.payload;
    },
    nameFilterModified(state, action: PayloadAction<string>) {
      state.filter.name = action.payload;
    },
    validFilterModified(state, action: PayloadAction<boolean>) {
      state.filter.isValid = action.payload;
    },
    itemRemarkModified(state, action: PayloadAction<{ id: number; value: string }>) {
      state.items[action.payload.id].remark = action.payload.value;
    },
    itemIsValidToggled(state, action: PayloadAction<{ id: number; isValid: boolean }>) {
      state.items[action.payload.id].isValid = action.payload.isValid;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action: PayloadAction<Pick<SearchItem, 'items'>>) => {
      state.items = action.payload.items;
    });
  },
});

export const { codeFilterModified, nameFilterModified, validFilterModified, itemRemarkModified, itemIsValidToggled } =
  searchItemSlice.actions;

export default searchItemSlice.reducer;
