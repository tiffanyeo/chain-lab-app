import { Block } from "./Blockchain";

// SHA-256
export async function SHA256(data: string): Promise<string> {

    // Convert string to bytes (SHA-256 requires bytes)
    const bytes = new TextEncoder().encode(data);

    // Run SHA, returns hashed bytes, then convert hash to nums
    const hashBytes = await crypto.subtle.digest("SHA-256", bytes);
    const numbers = new Uint8Array(hashBytes);

    // Turn nums to HEX and join to a string
    const joinedString = Array.from(numbers)
        .map(currByte => currByte.toString(16))
        .join("");

    return joinedString;
}
