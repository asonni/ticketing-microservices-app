import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@asonni-tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
