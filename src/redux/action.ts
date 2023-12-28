// actions.ts
import { createAction } from '@reduxjs/toolkit';

export const setUploadProgress = createAction<number>('SET_UPLOAD_PROGRESS');
