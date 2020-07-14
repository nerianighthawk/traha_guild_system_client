import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { actions } from '../action'

const useAppBar = () => {
    const dispatch = useDispatch()
    const clickAdd = useCallback(() => {
        dispatch(actions.updateAddModal(true))
    }, [dispatch])

    return {
        clickAdd
    }
}

export default useAppBar