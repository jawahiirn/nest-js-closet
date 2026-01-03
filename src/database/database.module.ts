import { DynamicModule, Module } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';

@Module({})
export class DatabaseModule {
  static register(options: DataSourceOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'CONNECTION',
          useValue: new DataSource(options).initialize(),
        },
      ],
    };
  }

  static registerAsync(options: {
    useFactory: (
      ...args: any[]
    ) => Promise<DataSourceOptions> | DataSourceOptions;
    inject?: any[];
    imports?: any[];
  }): DynamicModule {
    return {
      module: DatabaseModule,
      imports: options.imports || [],
      providers: [
        {
          provide: 'CONNECTION',
          useFactory: async (...args: any[]) => {
            const dataSourceOptions = await options.useFactory(...args);
            return new DataSource(dataSourceOptions).initialize();
          },
          inject: options.inject || [],
        },
      ],
    };
  }
}
