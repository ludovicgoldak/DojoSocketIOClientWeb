import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {ChatComponent} from './pages/chat/chat.component';

export const ROUTES = [
  {
    path: 'login',
    component: LoginComponent,
    resolve: {},
    data: {
      roles: ['ROLE_USER'],
    },
  },
  {
    path: 'signup',
    component: SignupComponent,
    resolve: {},
    data: {
      roles: ['ROLE_USER'],
    },
  },
  {
    path: '',
    component: ChatComponent,
    resolve: {},
    data: {
      roles: ['ROLE_USER'],
    },
  }
];
