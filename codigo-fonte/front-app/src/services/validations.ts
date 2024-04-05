export const notNullValidation = (value: any) : boolean => {
    return value == '';
}

export const rangeValidation = (value: any, {start, end}: any) : boolean => {
    const n = parseFloat(value);
    return !(!isNaN(n) && n >= start && n <= end)
}