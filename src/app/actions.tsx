'use server'

import { cookies } from 'next/headers'

export async function createCookie(data: any) {
  cookies().set('colour', data)
  return
}

export async function deleteCookie(data: any) {
  cookies().delete('name')
  return
}
