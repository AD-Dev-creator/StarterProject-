import { exec } from "child_process";
import path from "path";

export const initializeSymfonyProject = async (projectName: string) => {
  return new Promise((resolve, reject) => {
    const scryptPath = path.join(__dirname, "../../bin/create-symfony-app.sh");
    const command = `bash ${scryptPath} ${projectName}`;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return reject(stderr || error.message);
      }
      console.log(`stdout: ${stdout}`);
      resolve(stdout);
    });
  });
};
