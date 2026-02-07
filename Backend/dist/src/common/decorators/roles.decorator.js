"use strict";
// import { SetMetadata } from '@nestjs/common';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.ROLES_KEY = void 0;
// export const ROLES_KEY = 'roles';
// export const Roles = (...roles: string[]) =>
//   SetMetadata(ROLES_KEY, roles);
const common_1 = require("@nestjs/common");
exports.ROLES_KEY = 'roles';
const Roles = (...roles) => (0, common_1.SetMetadata)(exports.ROLES_KEY, roles);
exports.Roles = Roles;
//# sourceMappingURL=roles.decorator.js.map