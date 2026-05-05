
import { readDB, writeDB } from "../repository/db.ts";
import { Block } from "../blockchain/Blockchain.ts"

// GET DB CHAINS
export async function getChain(): Promise<Block> {
    return await readDB("chain")
}


export async function addBlock(block: Block): Promise<void> {
    const chain = await getChain()
    chain.push(block)
    await writeDB("chain", chain)
}