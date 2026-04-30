// SHA-256


export async function SHA256(data: string): Promise<string> {
    
    // Convert string to bytes (SHA-256 requires bytes)
    const bytes = new TextEncoder().encode(data);
    
    // Run SHA, returns hashed bytes
    const hashBytes = await crypto.subtle.digest("SHA-256", bytes);
    const numbers = new Uint8Array(hashBytes);
    return Array.from(numbers)
        .map(currByte => currByte.toString(16))
        .join("");
}