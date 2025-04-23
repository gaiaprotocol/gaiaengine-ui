import { Button } from "@commonmodule/app-components";
import { SFXPlayer } from "@gaiaengine/2d";
import GaiaEngineUIConfig from "../GaiaEngineUIConfig.js";
export default class GameButton extends Button {
    constructor(classNamesOrOptions, optionsOrUndefined) {
        let classNames = "";
        let options;
        if (typeof classNamesOrOptions === "string") {
            classNames = classNamesOrOptions;
            options = optionsOrUndefined ?? {};
        }
        else {
            options = classNamesOrOptions;
        }
        super(`.game-button${classNames}`, options);
        this.onDom("click", () => SFXPlayer.play(GaiaEngineUIConfig.buttonPressSound));
    }
}
//# sourceMappingURL=GameButton.js.map