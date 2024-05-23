import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type RequestDto = {
	email: string;
	password: string;
};

type ResponseDto = {
	id: string;
	email: string;
	isActivated: boolean;
};

type Token = {
	token: string;
};

const baseUrl: string = import.meta.env.VITE_BASE_URL || "";

export const authApi = createApi({
	reducerPath: "auth/api",
	baseQuery: fetchBaseQuery({
		baseUrl: baseUrl,
	}),
	refetchOnFocus: true,
	endpoints: (build) => ({
		login: build.mutation({
			query: (body: RequestDto) => ({
				url: "login",
				method: "POST",
				body,
			}),
		}),
		loginWithGoogle: build.mutation<ResponseDto, Token>({
			query: (body: Token) => ({
				url: "google/login",
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useLoginMutation, useLoginWithGoogleMutation } = authApi;
