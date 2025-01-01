import { exec } from 'child_process';


// This function is used to execute commands
// I will protect it because is a security risk
const commandExecutor = (command: string) => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            if (stderr) {
                reject(stderr);
                return;
            }
            resolve(stdout);
        });
    });
};

const shutdownServer = async () => {
    await commandExecutor('shutdown -now');
};

export { shutdownServer };