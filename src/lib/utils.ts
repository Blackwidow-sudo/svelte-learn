function capitalizeFirstChar(str: string) {
    if (str.length === 0) {
        return str;
    }
    const s = str.slice();
    s[0].toUpperCase();

    return s;
}

export { capitalizeFirstChar };
