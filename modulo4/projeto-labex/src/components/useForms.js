import { useState } from "react";

const useForms = (iniState) => {
    const [form, setForm] = useState(iniState)

    const handleUserInput = (e) => {
        const { name, value } = e.target

        setForm({
            ...form,
            [name]: value
        })
        console.log(form)
    }
    return [ form , handleUserInput ]
}

export default useForms;