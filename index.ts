import * as path from "path";
import * as os from "os";

let folder: string = "";

switch (os.type()) {
  case "Darwin":
    folder = path.join(
      os.homedir(),
      "/Library",
      "Application Support",
      "minecraft"
    );
    break;
  case "win32":
  case "Windows_NT":
    folder = path.join(
      process.env.APPDATA || path.join(
        os.homedir(), "AppData", "Roaming"
      ),
      ".minecraft"
    );
    break;
  default:
    folder = path.join(os.homedir(), ".minecraft");
    break;
}

export default folder;
