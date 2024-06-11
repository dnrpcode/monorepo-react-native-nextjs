import { resolve } from "path";
import { realpathSync } from "fs";
import { include, exclude } from "react-app-rewire-babel-loader";

const appDirectory = realpathSync(process.cwd());
const resolveApp = (relativePath) => resolve(appDirectory, relativePath);

export default function override(config, env) {
  config = include(config, resolveApp("../shared"));
  return config;
}
