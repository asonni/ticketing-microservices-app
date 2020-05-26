import {
  Publisher,
  Subjects,
  OrderCancelledEvent
} from '@asonni-tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
