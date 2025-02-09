import React from 'react'
import { BlogFrag } from './Fragments/ServiceFrag'

const BlogPosts = [
    {
        image: '/images/blog1.webp',
        date: 'June 9, 2019',
        op: 'Admin',
        replies: '3',
        title: 'Scary Thing That You Don’t Get Enough Sleep',
        exerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
        image: '/images/blog2.webp',
        date: 'June 9, 2019',
        op: 'Admin',
        replies: '3',
        title: 'Scary Thing That You Don’t Get Enough Sleep',
        exerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
        image: '/images/blog3.webp',
        date: 'June 9, 2019',
        op: 'Admin',
        replies: '3',
        title: 'Scary Thing That You Don’t Get Enough Sleep',
        exerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
        image: '/images/blog4.webp',
        date: 'June 9, 2019',
        op: 'Admin',
        replies: '3',
        title: 'Scary Thing That You Don’t Get Enough Sleep',
        exerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
        image: '/images/blog5.webp',
        date: 'June 9, 2019',
        op: 'Admin',
        replies: '3',
        title: 'Scary Thing That You Don’t Get Enough Sleep',
        exerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
        image: '/images/blog6.webp',
        date: 'June 9, 2019',
        op: 'Admin',
        replies: '3',
        title: 'Scary Thing That You Don’t Get Enough Sleep',
        exerpt: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
]

export default function Blog() {
  return <>
  
    <div id='Blog' className="bg-gray-200 px-10 py-1 pb-20">
        <div className='flex flex-col items-center gap-10 my-10'>
            <h3 className='text-4xl text-black font-extrabold text-center'>Gets Every Single Updates Here</h3>
            <p className='text-gray-500 text-center text-2xl'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 w-3/4 gap-5 drop-shadow-2xl m-auto">
                    {BlogPosts.map((postMessage, index) => (
                    <BlogFrag key={index}  {...postMessage}/>
                ))}
        </div>
    </div>
  
  </>
}
