
import { SHA256 } from "./Hash";

export interface Transaction {
    id: string,
    from: string,
    to: string,
    amount: number
}

export interface Block {
    index: number,
    timestamp: string,
    data: { transactions: Transaction[] },
    previousHash: string,
    hash: string,
    nonce: number
}

export async function createBlock(
    index: number,
    data: Block["data"],
    previousHash: string
): Promise<Block> {

    // Header components
    let nonce = 0
    let hash = ""
    const timestamp = Date.now()
    const txString = data.transactions
        .map(tx => `${tx.id}${tx.from}${tx.to}${tx.amount}`)
        .join("")
    
    // PoW-loop 
    while (!hash.startsWith("0")) {
        nonce++;
        const blockHeaderHash = `${index}${timestamp}${txString}${previousHash}${nonce}`
        hash = await SHA256(blockHeaderHash)
    }

    // Created block
    const block = {
        index,
        timestamp: String(timestamp),
        data,
        previousHash,
        hash,
        nonce
    }
    return block
    
}