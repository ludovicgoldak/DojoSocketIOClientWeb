import { CustomLog } from '../../features/console/models/custom-log';
import { UserInformations } from './UserInformations';

export class ServerInformationsMessage {
  users: UserInformations[];
  logs: CustomLog[];
}
