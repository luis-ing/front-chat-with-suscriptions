"use client";

import { ApolloProvider } from "@apollo/client";
import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState
} from "react";
import client from "./apollo-client";

// export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {


    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}

export default AuthContextProvider;