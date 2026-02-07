// // src/types/express.d.ts
// import { User } from '@prisma/client';

// declare global {
//   namespace Express {
//     interface Request {
//       user?: {
//         id: string;
//         role?: string;
//         email?: string;
//         mobile?: string;
//       };
//     }
//   }
// }


import { User } from '@prisma/client'; // or your entity

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
