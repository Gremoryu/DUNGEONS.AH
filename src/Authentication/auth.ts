import { sign as jwtSign, verify as jwtVerify } from "jsonwebtoken";
import * as bcrypt from 'bcrypt';
import { AdminEntity } from "../admin/type";
import * as AdminRepository from "../admin/repository";

const SECRET_WORD  = 'secretword';

const createJwt = (Admin: AdminEntity) => {
    const token = jwtSign({ Admin }, SECRET_WORD, { expiresIn: '1h' });
    return token;
};

export const jwtGenerator = (Admin: AdminEntity): string => {
    return jwtSign({ NombreUsuario: Admin.user }, SECRET_WORD);
  };

  export const verifyToken = async (token: string) => {
    try {
        const decoded = jwtVerify(token, SECRET_WORD);
        return decoded;
    } catch (err) {
        throw new Error('Invalid token');
    }
};

export const login = async (UserName: string, Password: string) => {
    const admin = await AdminRepository.getAdminByUser(UserName);
    if (!admin) {
        throw new Error('User not found');
    }
    const valid = await bcrypt.compare(Password, admin.password);
    if (!valid) {
        throw new Error('Password is incorrect');
    }
    const token = createJwt(admin);
    return token;
}