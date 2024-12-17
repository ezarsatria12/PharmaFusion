import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem("token");
        setToken(token);
        if (!!token) {
            fetch('https://dummyjson.com/auth/me', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`, // Pass JWT via Authorization header
                },
            })
                .then(res => res.json())
                .then(data => {
                    setUser(data);
                })
                .catch(err => {
                    console.error(err)
                    setToken(null);
                });
        }
    }, [token]);
    const login = (userToken) => {
        localStorage.setItem("token", userToken);
        setToken(userToken);
    };
    const logout = () => {
        setToken(null);
        localStorage.removeItem("token");
    };
    const isAuthenticated = !!token;
    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};