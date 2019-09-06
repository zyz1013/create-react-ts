declare var API_URL: string;

export class DefineService {
  private static instance = new DefineService();
  private constructor() {
    this.logDefines();
  }
  public static get Instance() {
    return this.instance;
  }

  public getApiUrl(): string {
    return API_URL;
  }

  private logDefines(): void {
    console.log("==== log define =====");
    console.log("apiUrl", API_URL);
  }
}
