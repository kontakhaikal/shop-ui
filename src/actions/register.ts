'use server'

import { api } from '@/lib/utils'
import { RedirectType, redirect } from 'next/navigation'

type RegistrationError = {
    username?: string
    password?: string
    name?: string
}

export async function register(
    data: FormData
): Promise<RegistrationError | void> {
    const response = await fetch(api('customers'), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: data.get('username'),
            password: data.get('password'),
            name: data.get('name'),
        }),
    })
    switch (response.status) {
        case 201: {
            console.log({ response: await response.json() })
            redirect('/login', RedirectType.replace)
        }
        case 400: {
            console.log({ response: await response.json() })
            return
        }
        default:
            console.log({ response: await response.json() })
            return
    }
}
