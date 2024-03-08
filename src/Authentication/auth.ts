import { sign as jwtSign, verify as jwtVerify } from "jsonwebtoken";
import * as bcrypt from 'bcrypt';
import { AdminEntity } from "../admin/type";
import * as AdminRepository from "../admin/repository";
import "dotenv/config";

const SECRET_WORD = process.env.SECRET_WORD || 'secretword';

const createJwt = (Admin: AdminEntity) => {
    const token = jwtSign({ Admin }, SECRET_WORD, { expiresIn: '1h' });
    return token;
};

// export const jwtGenerator = (Admin: AdminEntity): string => {
//     return jwtSign({ NombreUsuario: Admin.user }, SECRET_WORD);
// };

export const verifyToken = async (token: string) => {
    if (!token || token.split('.').length !== 3) {
        throw new Error('Invalid token');
    }
    const decoded = jwtVerify(token, SECRET_WORD);
    return decoded;
};

export const login = async (UserName: string, Password: string) => {
    const admin: AdminEntity = await AdminRepository.getAdminByUser(UserName);
    if (!admin) {
        throw new Error('User not found');
    }
    const valid = await bcrypt.compare(Password, admin.password);
    if (!valid) {
        throw new Error('Password is incorrect');
    }
    const token = createJwt(admin);
    console.log(token);
    return token;
}