import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type SearchItem = {
  filter: {
    code: number | null;
    name: string;
  };
  items: { [id: number]: { code: number; name: string; remark: string; isValid: boolean } };
};

const initialState: SearchItem = {
  filter: {
    code: null,
    name: '',
  },
  items: {
    1: { code: 100, name: 'test1', remark: '', isValid: true },
    2: { code: 101, name: 'test11', remark: '', isValid: false },
    3: { code: 200, name: 'test2', remark: '', isValid: true },
    4: { code: 201, name: 'test22', remark: '', isValid: false },
    5: { code: 300, name: 'test3', remark: '', isValid: true },
  },
};

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
    itemRemarkModified(state, action: PayloadAction<{ id: number; value: string }>) {
      state.items[action.payload.id].remark = action.payload.value;
    },
    itemIsValidToggled(state, action: PayloadAction<{ id: number; isValid: boolean }>) {
      state.items[action.payload.id].isValid = action.payload.isValid;
    },
    resultFiltered(state) {
      const initialItems = initialState.items;
      const filtered = Object.entries(initialItems).filter(([_id, item]) => {
        if (state.filter.code && !item.code.toString().includes(state.filter.code.toString())) {
          return false;
        }
        if (state.filter.name && !item.name.includes(state.filter.name)) {
          return false;
        }
        return true;
      });
      state.items = Object.fromEntries(filtered);
    },
  },
});

export const { codeFilterModified, nameFilterModified, itemRemarkModified, itemIsValidToggled, resultFiltered } =
  searchItemSlice.actions;

export default searchItemSlice.reducer;
