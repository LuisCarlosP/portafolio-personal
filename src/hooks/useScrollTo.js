import { useCallback } from 'react'

export const useScrollTo = () => {
    const scrollTo = useCallback((id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }, [])

    return scrollTo
}
