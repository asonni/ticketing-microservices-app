import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent
} from '@asonni-tickets/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  readonly subject = Subjects.ExpirationComplete;
}
