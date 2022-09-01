// Function that will prevent the debounce action of the button input
export const debounce = (func, delay = 300) => {
    let debounceTimer;
    return () => {
        const context = this;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context), delay)
    }
}