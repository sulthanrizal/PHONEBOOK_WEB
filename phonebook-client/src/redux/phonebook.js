import { createSlice, current } from '@reduxjs/toolkit';
import { loadPhonebooks, loadPage, addPhonebooks, deletePhonebooks, updatePhonebooks, updateAvatar } from './api';


const initialState = {
    phonebook: [],
    page: 1,
    pages: 1,
    limit: 30,
    total: 31,
    status: 'idle',
    error: null
};



const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        resetContacts: (state) => {
            state.phonebook = [];
            state.page = 1;
            state.pages = 1;
            state.limit = 30;
            state.total = 31;
            state.status = 'idle';
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadPhonebooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadPhonebooks.fulfilled, (state, action) => {
                state = { ...state, ...action.payload, status: 'succeeded' }
                return state
            })
            .addCase(loadPhonebooks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
            .addCase(addPhonebooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updatePhonebooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updatePhonebooks.fulfilled, (state, action) => {
                state.phonebook = state.phonebook.map((item) => {
                    if (item.id === action.payload.id) {
                        item.name = action.payload.name;
                        item.phone = action.payload.phone;
                    }
                    return item;
                })
                state.status = 'succeeded';
            })
            .addCase(updatePhonebooks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
            .addCase(addPhonebooks.fulfilled, (state, action) => {
                state = {
                    ...state, phonebooks: [
                        {
                            id: action.payload.id,
                            name: action.payload.name,
                            phone: action.payload.phone
                        }, ...state.phonebook.filter(data => data.id !== action.payload.id)], status: 'succeeded'
                }
                return state
            })
            .addCase(addPhonebooks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
            .addCase(updateAvatar.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateAvatar.fulfilled, (state, action) => {
                state.phonebook = state.phonebook.map((item) => {
                    if (item.id === action.payload.id) {
                        item.avatar = action.payload.avatar;
                    }
                    return item;
                });
                state.status = 'succeeded';
            })
            .addCase(updateAvatar.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
            .addCase(loadPage.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(loadPage.fulfilled, (state, action) => {
                state = { ...state, phonebook: [...state.phonebook, ...action.payload.phonebook], status: 'succeeded' }
                state.page = action.payload.page;
                state.status = 'succeeded';
                return state
            })
            .addCase(loadPage.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
            .addCase(deletePhonebooks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deletePhonebooks.fulfilled, (state, action) => {
                state.phonebook = state.phonebook.filter(
                    (data) => data.id !== action.payload.id
                );
                state.status = 'succeeded';
            })
            .addCase(deletePhonebooks.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error;
            })
    }
})
export const selectPhonebooks = (state) => {
    return state.phonebook
}

export default contactsSlice.reducer;