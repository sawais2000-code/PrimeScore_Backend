"use strict";
// export class KeywordNormalizer {
//   private static MAP = {
//     WRITTEN_OFF: ['WRITTEN OFF', 'WRITE-OFF', 'WO'],
//     SETTLED: ['SETTLED', 'OTS'],
//     CLOSED: ['CLOSED', 'ACCOUNT CLOSED'],
//     OUTSTANDING: ['OUTSTANDING', 'CURRENT BALANCE'],
//     DPD: ['DPD', 'DAYS PAST DUE'],
//   };
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeywordNormalizer = void 0;
//   static normalize(value: string): string {
//     if (!value) return value;
//     const upper = value.toUpperCase();
//     for (const key in this.MAP) {
//       if (this.MAP[key].some(v => upper.includes(v))) {
//         return key;
//       }
//     }
//     return upper;
//   }
// }
class KeywordNormalizer {
    static normalize(value) {
        if (!value)
            return value;
        const upper = value.toUpperCase();
        for (const key of Object.keys(this.MAP)) {
            if (this.MAP[key].some(v => upper.includes(v))) {
                return key;
            }
        }
        return upper;
    }
}
exports.KeywordNormalizer = KeywordNormalizer;
KeywordNormalizer.MAP = {
    WRITTEN_OFF: ['WRITTEN OFF', 'WRITE-OFF', 'WO'],
    SETTLED: ['SETTLED', 'OTS'],
    CLOSED: ['CLOSED', 'ACCOUNT CLOSED'],
    OUTSTANDING: ['OUTSTANDING', 'CURRENT BALANCE'],
    DPD: ['DPD', 'DAYS PAST DUE'],
};
//# sourceMappingURL=keyword.normalizer.js.map