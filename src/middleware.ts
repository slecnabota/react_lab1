import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const token = req.cookies.get('token') || req.headers.get('Authorization')
  if (!token && req.nextUrl.pathname.startsWith('/cars_api')) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/cars_api/:path*'],
}
