export const objectHasKey = (object: Object, key: string): boolean => {
    // https://eslint.org/docs/latest/rules/no-prototype-builtins
    return Object.prototype.hasOwnProperty.call(object, key);
};

export const primitiveEncode = (text: string): number[] => {
    let result = [];
    for (let i = 0; i < text.length; i++) {
        result.push(text.charCodeAt(i));
    }
    return result;
};

export const primitiveDecode = (cipherText: number[]) => {
    let result = "";
    for (let i = 0; i < cipherText.length; i++) {
        result += String.fromCharCode(cipherText[i]);
    }
    return result;
};
