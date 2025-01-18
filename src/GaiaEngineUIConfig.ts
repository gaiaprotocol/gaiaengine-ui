interface IGaiaEngineUIConfig {
  buttonPressSound: string;
}

class GaiaEngineUIConfig implements IGaiaEngineUIConfig {
  public buttonPressSound!: string;

  public init(config: IGaiaEngineUIConfig): void {
    Object.assign(this, config);
  }
}

export default new GaiaEngineUIConfig();
