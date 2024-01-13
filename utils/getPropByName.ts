export const getPropByName = (values: (any | undefined)[], prop: string) =>
   values
      ? values.reduce((acc, curr) => {
           if (!curr) return acc;

           return `${acc}${curr[prop]}\n`;
        }, '')
      : '';
