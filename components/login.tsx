'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Mail, Github } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Signup from '@/components/Signup';

export default function Login() {
    const [formInput, setFormInput] = useState({
        email: "",
        password: "",
    });
    const [formErrors, setFormErrors] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleUserInput = (name: string, value: string) => {
        setFormInput({
            ...formInput,
            [name]: value,
        })
    }
    const validateFormInput = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        let inputError = {
            email: "",
            password: "",
        };

        if (!formInput.email && !formInput.password) {
            setFormErrors({
                ...inputError,
                email: 'Email is required',
                password: 'Password is required',
            });
            return;
        }
        if (!formInput.email) {
            setFormErrors({
                ...inputError,
                email: 'Email is required',
            });
            return;
        }
        if (!formInput.password) {
            setFormErrors({
                ...inputError,
                password: 'Password is required',
            });
            return;
        }
        if (formInput.password.length < 6) {
            setFormErrors({
                ...inputError,
                password: 'Password must be at least 6 characters long',
            });
            return;
        }
        if (!/\S+@\S+\.\S+/.test(formInput.email)) {
            setFormErrors({
                ...inputError,
                email: 'Email is invalid',
            });
            return;
        }
        setFormErrors(inputError);
        setFormInput((prevState) => ({
            ...prevState,
            successMsg: 'Login successful',
        }));
    }

    return (
        <div className=" bg-gradient-to-br from-primary-50 to-primary-100 flex items-center align-center justify-center p-10 ">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-nd"
            >
                <div className="bg-white rounded-2xl shadow-xl p-5 space-y-6">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter">Login</h1>
                        <p className="text-muted-foreground">Enter your credentials</p>
                    </div>
                    <form className="space-y-4" onSubmit={validateFormInput}>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                name="email"
                                type="text"
                                className="input"
                                placeholder="Enter your email"
                                value={formInput.email}
                                onChange={({ target }) => { handleUserInput(target.name, target.value) }}
                                required />
                            <p className="text-sm text-muted-foreground">{formErrors.email}</p>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    name="password"
                                    type="password"
                                    className="input"
                                    placeholder="Enter your password"
                                    value={formInput.password}
                                    onChange={({ target }) => { handleUserInput(target.name, target.value) }}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 @text-gray-500 [hover:text-gray-700]"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                                <p className="text-sm text-muted-foreground color:green">{formErrors.password}</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="remember" />
                                <Label htmlFor="remember">Remenber me</Label>
                            </div>
                            <a
                                href="g"
                                className="text-sm text-primary-500 hover:text-primary-600">
                                Forgot password?
                            </a>
                        </div>
                        <Button type="submit" className="w-full" value="submit">
                            Login
                        </Button>
                    </form>
                    <div className="relative">
                        <div className="absolute inset-0 flex itens-center">
                            <span className="w-full bordect" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}