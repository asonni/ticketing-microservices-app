import mongoose from 'mongoose';

import { Ticket } from '../ticket';

it('implements optimistic concurrency control', async done => {
  const userId = new mongoose.Types.ObjectId().toHexString();
  // Create an instance of a ticket
  const ticket = Ticket.build({
    userId,
    price: 5,
    title: 'concert'
  });

  // Save the ticket to the database
  await ticket.save();

  // fetch the ticket twice
  const firstInstance = await Ticket.findById(ticket.id);
  const secondInstance = await Ticket.findById(ticket.id);

  // make two separate changes to the tickets we fetched
  firstInstance!.set({ price: 10 });
  secondInstance!.set({ price: 15 });

  // save the first fetched ticket
  await firstInstance!.save();

  // save the second fetched ticket and expect an error
  try {
    await secondInstance!.save();
  } catch (error) {
    return done();
  }

  throw new Error('Should not reach this point');
});

it('increments the version number on multiple saves', async () => {
  const userId = new mongoose.Types.ObjectId().toHexString();
  const ticket = Ticket.build({
    userId,
    price: 5,
    title: 'concert'
  });

  await ticket.save();
  expect(ticket.version).toEqual(0);

  await ticket.save();
  expect(ticket.version).toEqual(1);

  await ticket.save();
  expect(ticket.version).toEqual(2);
});
