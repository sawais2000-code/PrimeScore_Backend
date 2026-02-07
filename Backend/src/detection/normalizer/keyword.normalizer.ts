// export class KeywordNormalizer {
//   private static MAP = {
//     WRITTEN_OFF: ['WRITTEN OFF', 'WRITE-OFF', 'WO'],
//     SETTLED: ['SETTLED', 'OTS'],
//     CLOSED: ['CLOSED', 'ACCOUNT CLOSED'],
//     OUTSTANDING: ['OUTSTANDING', 'CURRENT BALANCE'],
//     DPD: ['DPD', 'DAYS PAST DUE'],
//   };

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


export class KeywordNormalizer {
  private static MAP = {
    WRITTEN_OFF: ['WRITTEN OFF', 'WRITE-OFF', 'WO'],
    SETTLED: ['SETTLED', 'OTS'],
    CLOSED: ['CLOSED', 'ACCOUNT CLOSED'],
    OUTSTANDING: ['OUTSTANDING', 'CURRENT BALANCE'],
    DPD: ['DPD', 'DAYS PAST DUE'],
  } as const;

  static normalize(value: string): keyof typeof KeywordNormalizer.MAP | string {
    if (!value) return value;

    const upper = value.toUpperCase();

    for (const key of Object.keys(this.MAP) as Array<keyof typeof this.MAP>) {
      if (this.MAP[key].some(v => upper.includes(v))) {
        return key;
      }
    }

    return upper;
  }
}
