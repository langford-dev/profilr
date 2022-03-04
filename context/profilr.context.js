import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export const ProfilrContext = createContext()

export const ProfilrProvider = ({ children }) => {
    return (
        <ProfilrContext.Provider
            value={{

            }}
        >
            {children}
        </ProfilrContext.Provider>
    )
}
