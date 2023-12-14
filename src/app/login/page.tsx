'use client'

import { login } from '@/actions/login'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { EyeOff, Eye, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useFormStatus } from 'react-dom'

export default function Login() {
    return (
        <main className="flex flex-col items-center">
            <Card className="max-w-md w-full flex flex-col mt-28 px-4">
                <CardHeader>
                    <CardTitle className="text-center">Login</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 self-center w-full">
                    <form id="login-form" action={login}>
                        <UsernameInput />
                        <PasswordInput />
                        <SubmitButton />
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}

function UsernameInput() {
    const { pending } = useFormStatus()

    return (
        <div>
            <Label htmlFor="username">Username</Label>
            <Input
                readOnly={pending}
                className="mt-1"
                id="username"
                name="username"
            />
        </div>
    )
}

function PasswordInput() {
    const [isPasswordShowed, setShowPassword] = useState(false)
    const { pending } = useFormStatus()

    return (
        <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative">
                <Input
                    name="password"
                    readOnly={pending}
                    className="mt-1 pr-12"
                    type={isPasswordShowed ? 'text' : 'password'}
                    id="password"
                />
                <Button
                    type="button"
                    disabled={pending}
                    onClick={() => setShowPassword((curent) => !curent)}
                    className="absolute top-1 right-1 p-1 h-min text-gray-700"
                    variant="ghost"
                >
                    {isPasswordShowed ? <EyeOff /> : <Eye />}
                </Button>
            </div>
        </div>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <div className="mt-4">
            <Button
                type="submit"
                disabled={pending}
                form="login-form"
                className="w-full"
            >
                {pending ? <Loader2 className="animate-spin" /> : 'Login'}
            </Button>
        </div>
    )
}
