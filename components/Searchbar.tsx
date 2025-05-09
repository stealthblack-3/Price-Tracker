"use client"
import React , {FormEvent, useState} from 'react';

const isValidAmazonProductURL =(url: string) =>{
    try {
        const parsedURL = new URL(url);
        const hostname = parsedURL.hostname;

        if(hostname.includes('amazon.com') || hostname.includes('amazon.') || hostname.endsWith('amazon')) return true;
    }catch(error){
        return false
    }

    return false
}

const Searchbar = () => {
    const [searchPrompt , setSearchPrompt] = useState('');
    const [isLoading , setIsLoading] = useState(false)

    const handleSubmit =(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()

        const isValidLink = isValidAmazonProductURL(searchPrompt);
        
        if(!isValidLink) return alert('Please Provide a valid Amazon Link')

        try{
            setIsLoading(true)
        }catch(error){
            return false
        }
    }
  return (
    <form action="" className='flex flex-wrap gap-4 mt-12' onSubmit={handleSubmit}>
        <input 
            type="text"
            value={searchPrompt}
            onChange={(e)=> setSearchPrompt(e.target.value)} 
            placeholder="Enter Product Link"
            className='searchbar-input'
          />
        <button className="searchbar-btn" type='submit' disabled={searchPrompt === ""}>
            {isLoading ? "Searching ..." : "Search"}
        </button>
    </form>
  )
}

export default Searchbar