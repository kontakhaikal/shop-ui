'use client'

import { register } from '@/actions/register'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOff, Loader } from 'lucide-react'
import { useState } from 'react'
import { useFormStatus } from 'react-dom'

export default function Page() {
    return (
        <main className="flex flex-col items-center">
            <Card className="max-w-md w-full flex flex-col mt-28 px-4">
                <CardHeader>
                    <CardTitle className="text-center">Daftar</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 self-center w-full">
                    <form action={register}>
                        <NameInput />
                        <UsernameInput />
                        <PasswordInput />
                        <SubmitButton />
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}

function NameInput() {
    return (
        <div>
            <Label htmlFor="name">Nama Lengkap</Label>
            <Input id="name" name="name" className="mt-1" />
        </div>
    )
}

function UsernameInput() {
    return (
        <div>
            <Label htmlFor="username">Username</Label>
            <Input className="mt-1" id="username" name="username" />
        </div>
    )
}

function PasswordInput() {
    const [isPasswordShowed, setShowPassword] = useState(false)
    return (
        <div>
            <Label htmlFor="password">Kata sandi</Label>
            <div className="relative">
                <Input
                    className="mt-1 pr-12"
                    type={isPasswordShowed ? 'text' : 'password'}
                    id="password"
                    name="password"
                />
                <Button
                    type="button"
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
        <Button type="submit" className="w-full mt-8">
            {pending ? <Loader className="animate-spin" /> : 'Daftar'}
        </Button>
    )
}
