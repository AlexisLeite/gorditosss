import { server } from "../../util/server";
import useMount from "../../util/useMount";
import { useState, useRef, useMemo, useCallback } from "react";
import { possibleGorditos } from "./randomPeople";
import useVelocity from "./useVelocity";

export default function useNextGordito() {
  const [nextGordito, setNextGordito] = useState(possibleGorditos[1]);
  const gordito = useRef<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  const { run, stop } = useVelocity(
    useMemo(
      () => ({
        action: (hasFinished) => {
          if (!hasFinished) {
            const next =
              possibleGorditos[
                Math.floor(Math.random() * possibleGorditos.length)
              ];

            setNextGordito(next);
          } else {
            setNextGordito(gordito.current as string);
            setIsReady(true);
          }
        },
      }),
      [],
    ),
  );

  const fetchGordito = useCallback(() => {
    setIsReady(false);
    run();
    server.get<{ gordito: string }>("gordito").then((r) => {
      gordito.current = r.gordito;
      stop();
      console.log("Got gordito");
    });
  }, [run, stop]);

  useMount(() => {
    fetchGordito();
  });

  return { isReady, nextGordito, fetchGordito };
}
