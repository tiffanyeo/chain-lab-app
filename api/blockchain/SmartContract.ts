
// type "constant" (instead of interface)
export type ContractState = "locked" | "confirmed" | "released"

export interface Contract {
    id: string
    from: string
    to: string
    amount: number
    state: ContractState
    createdAt: string | null
    confirmedAt: string | null
    releasedAt: string | null
}

export function lockContract(from: string, to: string, amount: number): Contract {
    // New contract - "locked"
    return {
        id: crypto.randomUUID(),
        from: from,
        to: to,
        amount: amount,
        state: "locked",
        createdAt: new Date().toISOString(),
        confirmedAt: null,
        releasedAt: null
    }
}

export function confirmContract(contract: Contract): Contract {
    // Update relevant fields in contract - "confirmed"
    return {
        ...contract,
        state: "confirmed",
        confirmedAt: new Date().toISOString()
    }
}

export function releaseContract(contract: Contract): Contract {
    // Update relevant fields in contract - "released"
    return {
        ...contract,
        state: "released",
        releasedAt: new Date().toISOString()
    }
}