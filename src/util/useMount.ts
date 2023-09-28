import { useRef } from "react";

export default function useMount(action: () => unknown) {
  const hasInited = useRef(false);

  if (!hasInited.current) {
    hasInited.current = true;
    setTimeout(() => {
      action();
    }, 0);
  }
}
