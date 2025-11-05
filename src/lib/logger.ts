/**
 * Logging utility - Only logs in development mode
 * Prevents console pollution in production
 */

type LogLevel = 'log' | 'warn' | 'error' | 'info';

class Logger {
  private isDevelopment = process.env.NODE_ENV === 'development';

  private logMessage(level: LogLevel, ...args: unknown[]): void {
    if (this.isDevelopment) {
      console[level](...args);
    }
  }

  log(...args: unknown[]): void {
    this.logMessage('log', ...args);
  }

  warn(...args: unknown[]): void {
    this.logMessage('warn', ...args);
  }

  error(...args: unknown[]): void {
    // Always log errors, even in production
    console.error(...args);
  }

  info(...args: unknown[]): void {
    this.logMessage('info', ...args);
  }

  group(label: string): void {
    if (this.isDevelopment && console.group) {
      console.group(label);
    }
  }

  groupEnd(): void {
    if (this.isDevelopment && console.groupEnd) {
      console.groupEnd();
    }
  }
}

export const logger = new Logger();
