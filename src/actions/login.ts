'use server'

import { api } from '@/lib/utils'
import { cookies } from 'next/headers'
import { RedirectType, redirect } from 'next/navigation'

const SECOND = 1000

const MINUTES = SECOND * 60

const HOUR = MINUTES * 60

const DAY = HOUR * 24

const WEEK = DAY * 7

export async function login(data: FormData) {
    console.log(data.get('username'))
    const response = await fetch(api('credentials'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: data.get('username'),
            password: data.get('password'),
        }),
    })
    switch (response.status) {
        case 200: {
            const { credential } = (await response.json()) as {
                credential: string
            }
            cookies().set('AUTH_KEY', credential, {
                httpOnly: true,
                sameSite: 'strict',
                maxAge: WEEK,
            })
            redirect('/', RedirectType.replace)
        }
        case 400: {
            const error = await response.json()
            console.log({ error })
            return { error }
        }
        default: {
            return
        }
    }
}
