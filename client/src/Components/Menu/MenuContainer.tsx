// Core
import { useProfile } from 'src/@hooks'

// Local
import MenuPresenter from './MenuPresenter'

//Hooks
import React, { FC } from 'react'

// Types
interface IProps {}

const MenuContainer: FC<IProps> = () => {
    
    const { data, loading } = useProfile()

    return <MenuPresenter data={data} loading={loading}/>
}

export default MenuContainer