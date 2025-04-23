import { DomChild, DomNode } from "@commonmodule/app";
import { StructuredModal } from "@commonmodule/app-components";
interface GameAlertDialogOptions {
    icon?: DomNode;
    title: string;
    message: string | DomChild | DomChild[];
    confirmButtonTitle?: string;
    onConfirm?: () => any;
}
export default class GameAlertDialog extends StructuredModal {
    constructor(options: GameAlertDialogOptions);
    constructor(classNames: `.${string}`, options: GameAlertDialogOptions);
}
export {};
//# sourceMappingURL=GameAlertDialog.d.ts.map