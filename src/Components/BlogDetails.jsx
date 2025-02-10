import React from 'react'
import { BlogPosts } from './Blog'
import { BlogPost } from './Fragments/ServiceFrag'

export default function BlogDetails() {
    return <>
        <div className="w-3/5 flex flex-col gap-10 px-10">
            {BlogPosts.map( (Blog, index)=> (
                <BlogPost key={index} {...Blog} />
            ))} 

        </div>
        
    </>
}
