import { el } from "@common-module/app";
import { StructuredModal } from "@common-module/app-components";
import GameButton from "../button/GameButton.js";
export default class GameAlertDialog extends StructuredModal {
    constructor(classNamesOrOptions, optionsOrUndefined) {
        let classNames = "";
        let options;
        if (typeof classNamesOrOptions === "string") {
            classNames = classNamesOrOptions;
            if (optionsOrUndefined === undefined) {
                throw new Error("Expected options to be provided");
            }
            options = optionsOrUndefined;
        }
        else {
            options = classNamesOrOptions;
        }
        super(`.alert-dialog${classNames}`);
        this
            .appendToHeader(el("h1", options.icon, options.title))
            .appendToMain(el("p", ...(Array.isArray(options.message)
            ? options.message
            : [options.message])))
            .appendToFooter(new GameButton(".confirm", {
            title: options.confirmButtonTitle ?? "OK",
            onClick: async () => {
                if (options.onConfirm)
                    await options.onConfirm();
                this.remove();
            },
        }));
    }
}
//# sourceMappingURL=GameAlertDialog.js.map