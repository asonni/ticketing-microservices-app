import express, { Request, Response } from 'express';
import { NotFoundError, BadRequestError } from '@asonni-tickets/common';
import mongoose from 'mongoose';

import { Ticket } from '../models/ticket';

const router = express.Router();

router.get('/api/tickets/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new BadRequestError('tickedId was invalid');
  }

  const ticket = await Ticket.findById(req.params.id);

  if (!ticket) {
    throw new NotFoundError();
  }

  res.send(ticket);
});

export { router as showTicketRouter };
