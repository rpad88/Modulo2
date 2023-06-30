import { createContext, useState } from "react";

export const BannerContext = createContext({
    title: '',
    subTitle: '',
    setTitle: () => {},
    setSubtitle: () => {}

})

export const BannerProvider = ({children}) => {
    const [title, setTitle] = useState('')
    const [subTitle, setSubtitle] = useState('')

    return (
        <BannerContext.Provider value={{title, setTitle, subTitle: subTitle, setSubtitle}}>
            {children}
        </BannerContext.Provider>
    )
}