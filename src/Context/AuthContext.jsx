import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("yoopin-user");

        return savedUser
            ? JSON.parse(savedUser)
            : null;
    });

    const [token, setToken] = useState(() => {
        return localStorage.getItem("yoopin-token");
    });

    const login = (loginData) => {

        setUser(loginData.user);
        setToken(loginData.token);

        localStorage.setItem(
            "yoopin-user",
            JSON.stringify(loginData.user)
        );

        localStorage.setItem(
            "yoopin-token",
            loginData.token
        );
    };

    const logout = () => {

        setUser(null);
        setToken(null);

        localStorage.removeItem("yoopin-user");
        localStorage.removeItem("yoopin-token");
    };

    const isLoggedIn = !!user;

    const isAdmin = user?.role === "admin";

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
                isLoggedIn,
                isAdmin
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}