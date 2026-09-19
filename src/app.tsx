import { useCallback } from "react";
import { Button } from "./components/ui/button";
import { toast } from "./components/ui/toast";
import { useNuiEvent } from "./hooks/use-nui-event";

type ToastMessage = {
    title: string;
    description?: string;
    type: "success" | "info" | "warning" | "error" | "loading";
};

export default function App() {
    const handleNuiToast = useCallback((data: ToastMessage) => {
        toast.add({
            title: data.title,
            description: data.description,
            type: data.type,
        });
    }, []);

    useNuiEvent<ToastMessage>("toast", handleNuiToast);

    function handleOpenToast() {
        toast.add({
            title: "Sucesso",
            description: "Um exemplo de sucesso.",
            type: "success",
        });
    }

    return (
        <main className="place-content-center gap-4 grid p-4 w-full min-h-svh">
            <h1 className="shimmer shimmer-color-primary">RoseRP</h1>
            <Button onClick={handleOpenToast}>Toast</Button>
        </main>
    );
}
