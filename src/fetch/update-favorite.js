import { API_CONFIG } from "./config";
export const updateFavoriteForDog = ({ dogId, isFavorite }) => {
  return fetch(`${API_CONFIG.baseUrl}/${dogId}`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({
      isFavorite,
    }),
  });
};
