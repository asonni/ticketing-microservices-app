import {
  Publisher,
  Subjects,
  PaymentCreatedEvent
} from '@asonni-tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
