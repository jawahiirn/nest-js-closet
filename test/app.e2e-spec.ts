import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
<<<<<<< HEAD
import { AppModule } from './../src/app.module';
=======
import { AppModule } from '../src/app.module';
import { DataSource } from 'typeorm';
>>>>>>> 9ba08cacd6e291edf891b54657a1b61264eb2935

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

<<<<<<< HEAD
  beforeEach(async () => {
=======
  beforeAll(async () => {
>>>>>>> 9ba08cacd6e291edf891b54657a1b61264eb2935
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
<<<<<<< HEAD
      .expect(200)
      .expect('Hello World!');
=======
      .set('Authorization', process.env.API_KEY ?? '')
      .expect(200)
      .expect('Hello Nabhan!');
  });

  afterAll(async () => {
    await app.close();
    await (app.get('CONNECTION') as DataSource).destroy();
>>>>>>> 9ba08cacd6e291edf891b54657a1b61264eb2935
  });
});
