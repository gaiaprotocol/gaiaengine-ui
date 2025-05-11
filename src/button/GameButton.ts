import { SoundEffectPlayer } from "@commonmodule/app";
import { Button, ButtonOptions } from "@commonmodule/app-components";
import GaiaEngineUIConfig from "../GaiaEngineUIConfig.js";

export default class GameButton extends Button {
  constructor(options: ButtonOptions);
  constructor(classNames: `.${string}`, options: ButtonOptions);
  constructor(
    classNamesOrOptions: `.${string}` | ButtonOptions,
    optionsOrUndefined?: ButtonOptions,
  ) {
    let classNames: "" | `.${string}` = "";
    let options: ButtonOptions;

    if (typeof classNamesOrOptions === "string") {
      classNames = classNamesOrOptions;
      options = optionsOrUndefined ?? {};
    } else {
      options = classNamesOrOptions;
    }

    super(`.game-button${classNames}`, options);
    this.on(
      "click",
      () => SoundEffectPlayer.play(GaiaEngineUIConfig.buttonPressSound),
    );
  }
}
