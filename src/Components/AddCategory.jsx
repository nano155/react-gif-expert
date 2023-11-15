import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target})=>{
        setInputValue(target.value)
    }
    const onSubmit =(e)=>{
        e.preventDefault()
        const value = inputValue.trim()
        if (value.length <= 1) return;
        // setCategories((categories)=> [inputValue, ...categories])
        onNewCategory(value)
        setInputValue('')

    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='Search gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
