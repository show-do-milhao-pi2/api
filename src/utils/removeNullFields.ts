function removeNullFields(object: any): Object {
    Object.keys(object).forEach(key => {
        if (object[key] === null && object[key] !== undefined) {
            delete object[key];
        }
    });

    return object;
}

export { removeNullFields };