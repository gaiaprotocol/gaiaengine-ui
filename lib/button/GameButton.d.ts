import { Button, ButtonOptions } from "@common-module/app-components";
export interface GameButtonOptions extends ButtonOptions {
    pressSound?: string;
}
export default class GameButton extends Button {
    constructor(options: GameButtonOptions);
    constructor(classNames: `.${string}`, options: GameButtonOptions);
}
//# sourceMappingURL=GameButton.d.ts.map