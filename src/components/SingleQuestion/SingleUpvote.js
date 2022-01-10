import React, { useState } from 'react'
import { Downvote, Upvote } from '../../assets/icons/Icons'
import axiosInstance from '../../axios'

export default function SingleUpvote({upvotes,post_id,fetchQues}) {
    const upvote = () => {
        axiosInstance.patch('posts/upvote_count/',{post:post_id,vote_signal:'up'}).then(res=>{
            fetchQues(post_id)
        },err=>{
            
        })
    }
    const downvote = () => {
        axiosInstance.patch('posts/upvote_count/',{post:post_id,vote_signal:'down'}).then(res=>{
            fetchQues(post_id)
        },err=>{
            
        })
    }
    return (
        <div className='col-1 text-center'>
            <button className='btn' onClick={upvote}><Upvote/></button>
            <p className='pt-1 mb-0'>{upvotes}</p>
            <button className='btn'onClick={downvote}><Downvote/></button>
        </div>
    )
}
