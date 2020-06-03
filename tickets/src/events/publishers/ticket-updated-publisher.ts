import {
  Publisher,
  Subjects,
  TicketUpdatedEvent
} from '@asonni-tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
