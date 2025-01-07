import { execaCommand } from "execa";

class NextRepository {
  createNextAppTypeScript = async (appName: string) => {
    // await execaCommand(`npx create-next-app@latest ${appName} --ts`);
  };

  createNextApp = async (appName: string) => {
    // await execaCommand(`npx create-next-app@latest ${appName}`);
  };
}

export default new NextRepository();
