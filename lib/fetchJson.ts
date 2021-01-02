// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function fetcher(input: RequestInfo, init?: RequestInit) {
  try {
    const response = await fetch(input, init);

    // if the server replies, there's always some data in json
    // if there's a network error, it will throw at the previous line
    const data = await response.json();

    if (response.ok) {
      return data;
    }

    const error = new Error(response.statusText);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    error.response = response;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    error.data = data;
    throw error;
  } catch (error) {
    if (!error.data) {
      error.data = { message: error.message };
    }
    throw error;
  }
}
