import express, { Request, Response } from 'express';
import { NotFoundError, BadRequestError } from '@asonni-tickets/common';
import mongoose from 'mongoose';

import { Ticket } from '../models/ticket';

const router = express.Router();

router.get('/api/tickets/:ticketId', async (req: Request, res: Response) => {
  const { ticketId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(ticketId)) {
    throw new BadRequestError('TickedId was invalid');
  }

  const ticket = await Ticket.findById(ticketId);

  if (!ticket) {
    throw new NotFoundError();
  }

  res.send(ticket);
});

export { router as showTicketRouter };
