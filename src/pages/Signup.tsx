import React from 'react'
import { MuiTelInput } from 'mui-tel-input'

export default function Signup() {
    const [phone, setPhone] = React.useState('')

    const handleChange = (newPhone: string) => {
        setPhone(newPhone)
    }

    return (
        <MuiTelInput value={phone} onChange={handleChange} />
    )
}