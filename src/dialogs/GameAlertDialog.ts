import { DomChild, DomNode, el } from "@commonmodule/app";
import { StructuredModal } from "@commonmodule/app-components";
import GameButton from "../button/GameButton.js";

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
  constructor(
    classNamesOrOptions: `.${string}` | GameAlertDialogOptions,
    optionsOrUndefined?: GameAlertDialogOptions,
  ) {
    let classNames: "" | `.${string}` = "";
    let options: GameAlertDialogOptions;

    if (typeof classNamesOrOptions === "string") {
      classNames = classNamesOrOptions;
      if (optionsOrUndefined === undefined) {
        throw new Error("Expected options to be provided");
      }
      options = optionsOrUndefined;
    } else {
      options = classNamesOrOptions;
    }

    super(`.alert-dialog${classNames}`);
    this
      .appendToHeader(el("h1", options.icon, options.title))
      .appendToMain(
        el(
          "p",
          ...(Array.isArray(options.message)
            ? options.message
            : [options.message]),
        ),
      )
      .appendToFooter(
        new GameButton(".confirm", {
          title: options.confirmButtonTitle ?? "OK",
          onClick: async () => {
            if (options.onConfirm) await options.onConfirm();
            this.remove();
          },
        }),
      );
  }
}
