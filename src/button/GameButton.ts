import { Button, ButtonOptions } from "@common-module/app-components";

export interface GameButtonOptions extends ButtonOptions {
  pressSound?: string;
}

export default class GameButton extends Button {
  constructor(options: GameButtonOptions);
  constructor(classNames: `.${string}`, options: GameButtonOptions);
  constructor(
    classNamesOrOptions: `.${string}` | GameButtonOptions,
    optionsOrUndefined?: GameButtonOptions,
  ) {
    super(classNamesOrOptions as any, optionsOrUndefined as any);
    //TODO: Add game-specific button logic here
  }
}
