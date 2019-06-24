import {IdentificationTypeEnum} from '../enums/IdentificationTypeEnum';

export class IdentificationRequestMessage {
  login: string;
  password: string;
  id: string;
  type: IdentificationTypeEnum;
}
