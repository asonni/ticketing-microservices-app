import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@asonni-tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
