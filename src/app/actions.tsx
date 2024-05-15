'use server'

import { cookies } from 'next/headers'

export async function createCookie(key: any, value: any) {
  cookies().set(key, value)
  return
}

export async function deleteCookie(key: any) {
  cookies().delete(key)
  return
}
