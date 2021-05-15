import React, { useState }  from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({defaultCategories = []}) => {

    const [categories, setCategories] = useState(defaultCategories)
    
    return(
        <>
            <h2>GifExpertApp!</h2>
            <hr/>
            <AddCategory setCategories={setCategories}/>            
            <ol>
                {
                    categories.map((c) => (
                        <GifGrid 
                            key={c} 
                            category={c}
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;