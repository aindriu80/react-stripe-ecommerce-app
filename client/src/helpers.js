export const isInCart = (product, cartItems) => {
  return cartItems.find((item) => item.id === product.id);
};

const API = 'https:/localhost:8080';

export async function fetchFromAPI(endpointURL, opts) {
  const { method, body } = { method: 'POST', body: null, ...opts };

  const res = await fetch(`${API}/${endpointURL}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    header: {
      'Content-Type': 'application/json',
    },
  });

  return res.json();
}