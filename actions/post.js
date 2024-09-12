'use server'

import { revalidateTag } from "next/cache"

export async function create() {
    //---
} 

export async function handleUpdateTag(tag) {
    //---
    revalidateTag(tag)
}