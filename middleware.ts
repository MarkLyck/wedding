import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

console.log('🛑 ~ middleware')

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/en', request.url))
}

export const config = {
  matcher: '/',
}
