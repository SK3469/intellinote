'use client'
import { api } from '@/convex/_generated/api'
import { useUser } from '@clerk/nextjs'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { useMutation } from 'convex/react'
import React from 'react'
import { toast } from 'sonner'

const page = () => {
    const { user } = useUser()
    const upgradeUserPlan = useMutation(api.user.userUpgrade);
    const onPaymentSuccess = async () => {
        const result = await upgradeUserPlan({
            userEmail: user?.primaryEmailAddress?.emailAddress
        })
        console.log("upgrade=>", result)
        toast('Plan Upgraded Successfully.')
    }
    return (
        <div className='p-4'>
            <div>
                <h2 className='font-medium text-3xl'>Plans</h2>
                <p>Buy plan to access unlimited pdf upload to making note without hussle.</p>
            </div>
            <div>
                <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
                        <div
                            className="rounded-2xl border border-indigo-600 p-6 ring-1 shadow-xs ring-indigo-600 sm:order-last sm:px-8 lg:p-12"
                        >
                            <div className="text-center">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Free
                                    <span className="sr-only">Plan</span>
                                </h2>

                                <p className="mt-2 sm:mt-4">
                                    <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 0$ </strong>

                                    <span className="text-sm font-medium text-gray-700">/month</span>
                                </p>
                            </div>

                            <ul className="mt-6 space-y-2">
                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> 10 PDF Upload </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Unlimited Notes Making </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Email support </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Help center access </span>
                                </li>



                            </ul>

                            <a
                                href="#"
                                className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:ring-3 focus:outline-hidden cursor-not-allowed"
                            >
                                Current Plan
                            </a>
                        </div>
                        <div
                            className="rounded-2xl border border-indigo-600 p-6 ring-1 shadow-xs ring-indigo-600 sm:order-last sm:px-8 lg:p-12"
                        >
                            <div className="text-center">
                                <h2 className="text-lg font-medium text-gray-900">
                                    Pro
                                    <span className="sr-only">Plan</span>
                                </h2>

                                <p className="mt-2 sm:mt-4">
                                    <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 6.99$ </strong>

                                    <span className="text-sm font-medium text-gray-700">/One TIme</span>
                                </p>
                            </div>

                            <ul className="mt-6 space-y-2">
                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Unlimited PDF Upload </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Unlimited Notes Making </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Email support </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Help center access </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-indigo-700"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span className="text-gray-700"> Phone support </span>
                                </li>

                            </ul>
                            <div className='mt-3'>
                                <PayPalButtons
                                    onApprove={() => onPaymentSuccess()}
                                    onCancel={() => console.log('Payment Cancelled')}
                                    createOrder={(data, actions) => {
                                        return actions?.order?.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        value: 6.99,
                                                        currency_code: 'USD'
                                                    }
                                                }
                                            ]
                                        })
                                    }}
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page