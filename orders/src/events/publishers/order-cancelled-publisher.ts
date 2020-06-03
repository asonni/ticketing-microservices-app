import {
  Publisher,
  Subjects,
  OrderCancelledEvent
} from '@asonni-tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
