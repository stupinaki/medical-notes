

export default function delay(fn, ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const result = fn();
                resolve(result);
            } catch (e) {
                reject(e);
            }
        }, ms);
    })
}