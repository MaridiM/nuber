// Core
import { loader } from 'graphql.macro'
import React, { FC } from 'react'
import { toast } from 'react-toastify'
import { useMutation } from '@apollo/client'

// Local
import MenuPresenter from './MenuPresenter'

//Hooks
import { useProfile } from './../../@hooks'

// Types
import {
    ToggleDrivingMutation,
    ToggleDrivingMutationVariables
} from './../../@types/api'

interface IProps {}

// GraphQL
const MUTATION_TOGGLE_DRIVING = loader('./Menu.graphql')

const MenuContainer: FC<IProps> = () => {
    const { 
        userData, 
        userDataLoading,
        getMyProfileQuery 
    } = useProfile()

    const [ _toggleDrivingMode ] = useMutation<
        ToggleDrivingMutation,
        ToggleDrivingMutationVariables
    >(MUTATION_TOGGLE_DRIVING, {
        refetchQueries: [{ 
            query: getMyProfileQuery 
        }],
        awaitRefetchQueries: true,   
        async update ( _, { data }) {
            const { ToggleDrivingMode } = data!
            if(!ToggleDrivingMode.ok) return toast.error(ToggleDrivingMode.error)

            userData && await !userData?.GetMyProfile.user?.isDriving  
                    ? toast.success('You start to driving!')
                    : toast.dark('You finished driving!')
            return
        },
    })


    return <MenuPresenter 
        data={userData} 
        loading={userDataLoading} 
        toggleDriving={_toggleDrivingMode} />
}

export default MenuContainer