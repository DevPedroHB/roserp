on("onResourceStart", (resourceName: string) => {
    if (resourceName !== GetCurrentResourceName()) {
        return;
    }

    console.log(`[RoseRP] Server iniciado: ${resourceName}`);
});
