"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

export default function Options() {
  return (
    <div>
        <button onClick={()=>signOut()}>
            Signout
        </button>
    </div>
  )
}
