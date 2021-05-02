// Core
import { useProfile } from 'src/@hooks'
import { loader } from 'graphql.macro'
import { toast } from 'react-toastify'

// Local
import MenuPresenter from './MenuPresenter'

//Hooks
import React, { FC } from 'react'
import { useMutation } from '@apollo/client'

// Types
import {
    ToggleDrivingMutation,
    ToggleDrivingMutationVariables
} from './../../@types/api'

interface IProps {}

// GraphQL
const MUTATION_TOGGLE_DRIVING = loader('./Menu.graphql')

const MenuContainer: FC<IProps> = () => {
    const {  userData , userDataLoading, getMyProfileQuery } = useProfile()

    const [ _toggleDrivingMode ] = useMutation<
        ToggleDrivingMutation,
        ToggleDrivingMutationVariables
    >(MUTATION_TOGGLE_DRIVING, {
        refetchQueries: [{
            query: getMyProfileQuery 
        }],
        awaitRefetchQueries: true,
        onCompleted	(data) {
            const { ToggleDrivingMode } = data
            if(!ToggleDrivingMode.ok) return toast.error(ToggleDrivingMode.error)
            console.log(userData?.GetMyProfile.user?.isDriving )
            return userData 
                && userData.GetMyProfile.user?.isDriving 
                    ? toast.dark('You start to driving!')
                    : toast.dark('You finished driving!')

            
        } 
    })


    return <MenuPresenter 
        data={userData} 
        loading={userDataLoading} 
        toggleDriving={_toggleDrivingMode} />
}

export default MenuContainer