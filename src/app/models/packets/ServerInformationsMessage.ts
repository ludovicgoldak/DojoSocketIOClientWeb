import { UserInformations } from '../types/UserInformations';
import { CustomLog } from '../../features/console/models/custom-log';

export class ServerInformationsMessage {
  users: UserInformations[];
  logs: CustomLog[];
}
