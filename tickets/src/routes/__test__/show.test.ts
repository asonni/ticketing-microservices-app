import request from 'supertest';
import mongoose from 'mongoose';

import { app } from '../../app';

it('returns a 400 if ticketId was invalid', async () => {
  const ticketId = 'dfkgnlknglkenglketg';

  await request(app).get(`/api/tickets/${ticketId}`).expect(400);
});

it('returns a 404 if the ticket is not found', async () => {
  const ticketId = new mongoose.Types.ObjectId().toHexString();

  await request(app).get(`/api/tickets/${ticketId}`).expect(404);
});

it('returns the ticket if the ticket is found', async () => {
  const title = 'concert';
  const price = 20;

  const response = await request(app)
    .post('/api/tickets')
    .set('Cookie', global.signin())
    .send({
      title,
      price,
    })
    .expect(201);

  const ticketResponse = await request(app)
    .get(`/api/tickets/${response.body.id}`)
    .expect(200);

  expect(ticketResponse.body.title).toEqual(title);
  expect(ticketResponse.body.price).toEqual(price);
});
