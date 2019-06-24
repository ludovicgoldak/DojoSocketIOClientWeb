// Require
import Debug from 'debug';
import {Dispatcher} from '../events/dispatcher';
import {EventWrapper} from '../events/eventWrapper';

// Log
const log = Debug('dojo:socket');
const logPacket = Debug('dojo:socket');

// Class
export class SocketManager extends Dispatcher {
  // Base settings
  private socket: any = null;
  private connected = false;
  public debug = true;
  public log = false;
  public dispatchers: Dispatcher[] = [];

  constructor(socket: any = null) {
    super();
    if (socket) {
      this.setSocket(socket);
    }
  }

  private setSocket(socket: any) {
    this.socket = socket;
    const wrapper = new EventWrapper(this.socket)
      .on('connect', () => {
        this.connected = true;
        log('Connected to server');
        this.emitToDispatchers('socket::connected');
      })
      .on('data', packet => {
        if (this.debug) {
          logPacket(`RCV %s (%o).`, packet.call, packet.data);
        } else if (this.log) {
          logPacket(`RCV %s.`, packet.data);
        }
        this.emitToDispatchers('packet::all', packet.data);
        this.emitToDispatchers(`packet::${packet.call}`, packet.data);
      })
      .on('error', e => {
        log('An error has occured (%o).', e);
        wrapper.done();
        this.emitToDispatchers('socket::error');
      })
      .on('reconnect', () => {
        log('Reconnecting success ');
        this.emitToDispatchers('socket::reconnected');
      })
      .on('close', () => {
        this.connected = false;
        log('Server\'s connection lost.');
      })
      .on(['end', 'disconnect'], () => {
        log('Socket disconnected.');
        this.emitToDispatchers('socket::disconnected');
      });
  }

  private emitToDispatchers(callName: string, data?: any) {
    this.emit(callName, data);
    for (const elt of this.dispatchers) {
      elt.emit(callName, data);
    }
  }

  public isConnected() {
    return this.connected;
  }

  public disconnect(reason: string) {
    if (this.socket === null) {
      return false;
    }
    log('Disconnected (%o).', {reason});
    this.send('disconnecting', reason);
    this.destroy();
  }

  public destroy() {
    if (this.socket === null) {
      log('Trying to destroy an unexistant socket.');
      return false;
    }
    log('Destroying socket.');
    if (this.socket.destroy) {
      this.socket.destroy();
    }
    this.socket = null;
  }

  public send(callName, data: any = {}) {
    if (this.socket === null) {
      return false;
    }
    if (this.debug) {
      logPacket('SNT %s (%o).', data.type || callName, data);
    } else {
      logPacket('SNT %s.', data.type || callName);
    }
    this.socket.emit('data', {call: callName, data});
  }

  public getIp(): string {
    return this.socket.request.connection.remoteAddress.replace('::ffff:', '');
  }


  public sendToAccount(accountID: number, callName, data: any = {}) {
    log('SNT_FromAccount %s (%o).', data.type || callName, data);
    this.socket.emit('dataToAccount', {call: callName, data, accountID});
  }


}
