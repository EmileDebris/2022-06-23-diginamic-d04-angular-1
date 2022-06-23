import { LikeHate } from './like-hate';
import { Colleague } from './colleague';
export interface Vote {
  colleague:Colleague;
  vote:LikeHate;
}
