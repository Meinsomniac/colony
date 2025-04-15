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
import {
  resetUserInfo,
  updateIsAuthenticated,
  updateUserInfo,
} from "../redux/auth/authSlice";
import {
  useLazyGetUserInfoQuery,
  useLoginMutation,
} from "../redux/auth/authActions";
import { deleteCookie, getCookie, setCookie } from "../utils/cookie";
import { Loader } from "../common/ui/CircularLoader";
import { Icon } from "@iconify/react";
import clsx from "clsx";
import { updateContacts } from "../redux/chat/chatSlice";

type AuthContextProps = {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  logout: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  //hooks
  const dispatch = useDispatch();
  const [getUserInfo] = useLazyGetUserInfoQuery();

  //local states
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  //callbacks
  const fetchUser = useCallback(async () => {
    const { data } = await getUserInfo({});

    if (data?.success) {
      dispatch(updateUserInfo(data?.data));
      setIsAuthenticated(true);
    } else {
      dispatch(updateUserInfo({}));
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    deleteCookie("accessToken");
    deleteCookie("refreshToken");
    dispatch(resetUserInfo({}));
  }, []);

  useEffect(() => {
    dispatch(updateIsAuthenticated(isAuthenticated));
    if (!isAuthenticated && getCookie("accessToken")) {
      fetchUser();
    } else {
      setIsLoading(false);
    }
  }, [fetchUser, isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        logout,
      }}
    >
      {!isLoading ? children : <AuthLoader show={isLoading} />}
    </AuthContext.Provider>
  );
}

export function AuthLoader({ show }: { show?: boolean }) {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Icon
        icon="svg-spinners:bars-scale-middle"
        width="48"
        height="48"
        color="#000"
      />
    </div>
  );
}

export const useAuth = () => {
  const values = useContext(AuthContext);
  return values;
};
