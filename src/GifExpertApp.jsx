import { useState } from 'react'
import { AddCategory, GiftGrid } from './Components'

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon ball'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1> GifExpertApp</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />
                {
                    categories.map(category => (
                        <GiftGrid 
                        key={category} 
                        category={category} />
                    )
                    )
                }
        </>
    )
}
