import { ILogger } from "./types/logger.types";
import chalk from 'chalk';

class Logger implements ILogger {
  public log(messages: string[]): void {
    console.log(...messages);
  }

  public error(e: Error | string): Error {
    if (typeof e === 'string') {
      throw new Error(chalk.bold.red(e.trim()));
    }

    throw new Error(`
      ${chalk.bold.red(e.message)}.

      Stack: ${e.stack}
      \n
    `)
  }

  public wrongFormatError(key: string, errMessage: string): void {
    this.error(
      `Wrong <project.types.json> config format, for project type: ${key} \n`
      + `${errMessage}`
      + `Please read README.md`
    );
  }

  public warn(warning: string): void {
    console.log('\n', chalk.bold.yellow('WARNING: '), warning, '\n')
  }
}

export default new Logger();