import { Publisher, Subjects, OrderCreatedEvent } from '@asonni-tickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
