function flatDeep(arr: any[], d: number = 1): any[] {
  return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
               : arr.slice();
}

const slugify = function(text: any): string {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w-]+/g, '') // Remove all non-word chars
      .replace(/--+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, '') // Trim - from end of text
}

function containsObject(obj: any, list: any[]): number {
  let i: number;
  for (i = 0; i < list.length; i++) {
      if (list[i].slug === obj.slug) {
          return i;
      }
  }

  return -1;
}

export { flatDeep, slugify, containsObject };
