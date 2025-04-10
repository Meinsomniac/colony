import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateIsAuthenticated } from "../redux/auth/authSlice";

type AuthContextProps = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log(isAuthenticated);
  console.log("rendered", "AuthContext");

  useEffect(() => {
    dispatch(updateIsAuthenticated(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const values = useContext(AuthContext);
  return values;
};
