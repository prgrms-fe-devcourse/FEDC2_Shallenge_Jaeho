import { useEffect, useRef } from "react";

type fnType = () => void;
const useTimeout = (fn: fnType, ms: number) => {
  const timeoutId = useRef(null);
  const callback = useRef(fn);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);
};
export default useTimeout;
