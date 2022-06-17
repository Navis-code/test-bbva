export const wait = (miliSeconds: number) =>
  new Promise((value) => setTimeout(value, miliSeconds));
