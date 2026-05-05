
//readDB("entity") - db/{entity}.json
//writeDB("entity", data) - db/{entity}.json

import { join } from "https://deno.land/std/path/mod.ts"
const DB_PATH = new URL("./db", import.meta.url).pathname


// READ DB
export async function readDB(filename: string): Promise<T> {
    const filePath = join(DB_PATH, `${filename}.json`)
    const fileContent = await Deno.readTextFile(filePath)
    return JSON.parse(fileContent) as T
}

// WRITE TO DB
export async function writeDB(filename: string, content: unknown) {
    const filePath = join(DB_PATH, `${filename}.json`)
    const text = JSON.stringify(content, null, 2)
    await Deno.writeTextFile(filePath, text)
}