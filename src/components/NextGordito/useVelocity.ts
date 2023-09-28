import { useCallback, useRef } from "react";

export default function useVelocity({
  action,
  maxTimes = 100,
  maxVelocity = 400,
}: {
  action: (finished: boolean) => unknown;
  maxTimes?: number;
  maxVelocity?: number;
}) {
  const rolling = useRef(true);
  const runTimes = useRef(0);
  const timeout = useRef(-1);

  const getVelocity = useCallback(() => {
    const progress = runTimes.current / maxTimes;
    const currentVelocity = maxVelocity * progress ** 5;

    return currentVelocity;
  }, [maxTimes, maxVelocity]);

  const run = useCallback(() => {
    rolling.current = true;
    runTimes.current = 0;

    clearTimeout(timeout.current);

    function run() {
      if (rolling.current || runTimes.current++ <= maxTimes) {
        const hasFinished = runTimes.current >= maxTimes;
        action(hasFinished);
        if (hasFinished) {
          rolling.current = false;
        }

        window.requestAnimationFrame(() => {
          timeout.current = setTimeout(run, getVelocity()) as unknown as number;
        });
      }
    }

    timeout.current = setTimeout(run, 0) as unknown as number;
  }, [action, getVelocity, maxTimes]);

  const stop = useCallback(() => {
    rolling.current = false;
  }, []);

  return { run, stop };
}
