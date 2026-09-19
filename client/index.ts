const RESOURCE_NAME = GetCurrentResourceName();

type NUIMessage = {
    action: string;
    data?: unknown;
};

function sendNuiMessage(message: NUIMessage) {
    SendNuiMessage(JSON.stringify(message));
}

function showTestToast() {
    sendNuiMessage({
        action: "toast",
        data: {
            title: "RoseRP",
            description: "Integração com o FiveM funcionando.",
            type: "success",
        },
    });
}

RegisterCommand(
    "roserp_test_toast",
    showTestToast,
    false,
);

RegisterKeyMapping(
    "roserp_test_toast",
    "RoseRP: testar Toast",
    "keyboard",
    "OEM_7",
);

on("onClientResourceStart", (resourceName: string) => {
    if (resourceName !== RESOURCE_NAME) {
        return;
    }

    console.log(`[RoseRP] Client iniciado: ${resourceName}`);
});
