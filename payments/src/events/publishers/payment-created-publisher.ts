import {
  Publisher,
  Subjects,
  PaymentCreatedEvent
} from '@asonni-tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
