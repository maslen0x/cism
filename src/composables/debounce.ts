export const useDebounce = () => {
  let timeout: NodeJS.Timeout | null = null;

  return (callback: () => void, delay = 500) => {
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback();
    }, delay);
  };
};
