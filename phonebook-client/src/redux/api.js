import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const req = axios.create({
    baseURL: 'http://localhost:3001/api/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});

export const loadPhonebooks = createAsyncThunk(
    'contacts/loadPhonebooks',
    async ({ keyword, sort }) => {

        const { data } = await req.get('phonebook', { params: { keyword, sort } });
        return data;
    }
);

export const addPhonebooks = createAsyncThunk(
    'contacts/addPhonebooks',
    async (phonebook) => {
        const { data } = await req.post('phonebook', phonebook)
        return data
    }
)

export const updatePhonebooks = createAsyncThunk(
    'contacts/updatePhonebooks',
    async ({ id, contact }) => {
        const { data } = await req.put(`phonebook/${id}`, contact)
        return data
    }
)

export const loadPage = createAsyncThunk(
    'contacts/loadPage',
    async ({ page, keyword, sort }) => {
        const { data } = await req.get('phonebook', { params: { page, keyword, sort } });
        return data;
    }
);

export const updateAvatar = createAsyncThunk(
    'contacts/updateAvatar',
    async ({ id, formData }) => {
        const { data } = await req.put(`phonebook/${id}/avatar`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return data;
    }
)

export const deletePhonebooks = createAsyncThunk(
    'contacts/deletePhonebooks',
    async ({ id }) => {
        const { data } = await req.delete(`phonebook/${id}`);
        return data;
    }
);