export const objectHasKey = (object: Object, key: string): boolean => {
    // https://eslint.org/docs/latest/rules/no-prototype-builtins
    return Object.prototype.hasOwnProperty.call(object, key);
};
