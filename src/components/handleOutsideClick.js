import { useEffect } from "react";

const handleOutsideClick = (ref, currentState, updater) => {
            useEffect(() => {
            const handler = (event) => {
                if (currentState && ref.current && !ref.current.contains(event.target)) {
                    updater();
                }
            };
            document.addEventListener("mousedown", handler);
            return () => {
                document.removeEventListener("mousedown", handler);
            }

        }, [ref, currentState, updater])
}

export default handleOutsideClick;