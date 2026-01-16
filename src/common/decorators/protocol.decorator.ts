import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Protocol = createParamDecorator(
  (defaultValue: string, ctx: ExecutionContext) => {
    console.log(defaultValue, 'default value');
    const request = ctx.switchToHttp().getRequest();
    return request.protocol;
  },
);
