import { Role } from '../../users/enums/roles.enum';
import { PermissionType } from '../authentication/permission.type';

export interface ActiveUserData {
  // The "subject" of the token, The value of this property is the user ID that granted the token
  sub: number;

  // *
  // The subject's {user} email
  // *
  email: string;

  // *
  // The subject's {user} role
  // *
  role: Role;

  permissions: PermissionType[];
}
