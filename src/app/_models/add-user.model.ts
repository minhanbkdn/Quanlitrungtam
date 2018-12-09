import {User} from './user.model'

export class AddUser extends User {
    Password: string;
    ConfirmPassword: string;
    IsResetPassword: boolean;
    IdGroup: number[];
}