import { useEffect, useRef } from "react";

export function useNuiEvent<T>(
    action: string,
    handler: (data: T) => void,
) {
    const handlerRef = useRef(handler);

    useEffect(() => {
        handlerRef.current = handler;
    }, [handler]);

    useEffect(() => {
        const listener = (event: MessageEvent) => {
            if (event.data?.action !== action) {
                return;
            }

            handlerRef.current(event.data.data as T);
        };

        window.addEventListener("message", listener);

        return () => {
            window.removeEventListener("message", listener);
        };
    }, [action]);
}
