import pino from 'pino';

const createLogger = () => {
  const isDev = process.env.NODE_ENV === 'development';
  const logLevel = process.env.LOG_LEVEL;

  return pino({
    level: logLevel || (isDev ? 'debug' : 'info'),
    redact: {
      paths: [
        'req.headers.authorization',
        'req.headers.cookie',
        'res.headers["set-cookie"]',
        'body.password',
        'body.confirmPassword',
        'body.token',
        'body.secret',
        'body.apiKey',
        '*.token',
        '*.secret',
        '*.apiKey',
      ],
      censor: '[REDACTED]',
    },
    transport: isDev
      ? {
          target: 'pino-pretty',
          options: {
            colorize: true,
            ignore: 'pid,hostname',
            translateTime: 'SYS:standard',
          },
        }
      : undefined,
    messageKey: 'msg',
  });
};

export const logger = createLogger()