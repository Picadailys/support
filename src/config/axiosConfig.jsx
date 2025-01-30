import { useNavigate } from "react-router";
import axios from "axios";
import { SWRConfig } from "swr";
import { API_URL } from "../../globals.json";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getTokens = () => {
  const storedTokens = sessionStorage.getItem("tokens");
  return storedTokens ? JSON.parse(storedTokens) : null;
};

export const setTokens = (tokens) => {
  sessionStorage.setItem("tokens", JSON.stringify(tokens));
};

export function clearTokens() {
  window.localStorage.removeItem("tokens");
}

export const getSupportRole = () => {
  const supportRole = sessionStorage.getItem("supportRole");
  return supportRole ? JSON.parse(supportRole) : null;
};

export const setSupportRole = (supportRole) => {
  sessionStorage.setItem("supportRole", JSON.stringify(supportRole));
};

export const refreshToken = async () => {
  const tokens = getTokens();
  if (!tokens?.refresh) return null;

  try {
    const response = await axios.post(`${API_URL}/accounts/token/refresh`, {
      refresh: tokens.refresh,
    });

    const newTokens = response.data;
    setTokens(newTokens);
    return newTokens;
  } catch (error) {
    console.error("Error refreshing token", error);
    return null;
  }
};

// ** Request Interceptor **
api.interceptors.request.use(
  (config) => {
    const tokens = getTokens();
    if (tokens?.access) {
      config.headers.Authorization = `Bearer ${tokens.access}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ** Response Interceptor **
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If access token expires, try refreshing it
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newTokens = await refreshToken();
        if (newTokens) {
          api.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${newTokens.access}`;
          originalRequest.headers[
            "Authorization"
          ] = `Bearer ${newTokens.access}`;
          return api(originalRequest); // Retry original request
        }
      } catch (refreshError) {
        console.error("Token refresh failed", refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export function useLogout() {
  const navigate = useNavigate();
  return () => {
    clearTokens();
    navigate("/login");
  };
}

const CustomSWR = ({ children }) => {
  const logout = useLogout();

  const handleError = (error) => {
    if (error.response && error.response.status === 401) {
      logout();
    } else {
      console.log(error);
    }
  };

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: true,
        refreshInterval: 5000,
        onError: (error) => handleError(error),
        fetcher: (url) => api.get(url).then((res) => res.data),
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default CustomSWR;
