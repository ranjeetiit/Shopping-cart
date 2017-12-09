const path = require("path");
const fs = require("fs");

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => (path.resolve(appDirectory, relativePath));

const nodePaths = (process.env.NODE_PATH || "")
  .split(process.platform === "win32" ? ";" : ":")
  .filter(Boolean)
  .filter(folder => !path.isAbsolute(folder))
  .map(resolveApp);

module.exports = {
  appRoot: resolveApp(""),
  appBuildRoot: resolveApp("build"),
  devAppBuild: resolveApp("build/dev"),
  appPublic: resolveApp("public"),
  appHtml: resolveApp("public/index.html"),
  appIndexJs: resolveApp("src/index.jsx"),
  appPackageJson: resolveApp("package.json"),
  appSrc: resolveApp("src"),
  yarnLockFile: resolveApp("yarn.lock"),
  appNodeModules: resolveApp("node_modules"),
  ownNodeModules: resolveApp("node_modules"),
  nodePaths
};