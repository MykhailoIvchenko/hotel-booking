import { ApiMethods, BasicEndpoints, Endpoints } from '@/utils/enums';

export const authService = {
  async refresh() {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}${BasicEndpoints.Auth.slice(1)}${
        Endpoints.Refresh
      }`,
      {
        method: ApiMethods.GET,
        credentials: 'include',
      }
    );

    if (!response.ok) {
      throw new Error('Refresh token failed');
    }

    return response.json();
  },
};
