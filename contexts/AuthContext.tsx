"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { updateIsAuthenticated, updateUserInfo } from "../redux/auth/authSlice";
import {
  useLazyGetUserInfoQuery,
  useLoginMutation,
} from "../redux/auth/authActions";
import { getCookie } from "../utils/cookie";
import { Loader } from "../common/ui/CircularLoader";

type AuthContextProps = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  //hooks
  const dispatch = useDispatch();
  const [getUserInfo] = useLazyGetUserInfoQuery();

  //local states
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isLoading = useMemo(() => {
    return !(isAuthenticated && getCookie("accessToken"));
  }, [isAuthenticated]);

  //callbacks
  const fetchUser = useCallback(async () => {
    const { data } = await getUserInfo({});
    if (data?.success) {
      dispatch(updateUserInfo(data?.data));
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    dispatch(updateIsAuthenticated(isAuthenticated));
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated && getCookie("accessToken")) {
      fetchUser();
    }
  }, [fetchUser, isAuthenticated]);

  console.log(isAuthenticated, getCookie("accessToken"), isLoading);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {isLoading ? (
        <div className="h-screen w-full flex flex-row justify-center items-center">
          <Loader />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const values = useContext(AuthContext);
  return values;
};
