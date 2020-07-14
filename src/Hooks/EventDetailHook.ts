import { useSelector, useDispatch } from "react-redux"
import { State } from "../state"
import { useState, useCallback } from "react"
import { actions } from "../action"
import axios, { AxiosResponse } from "axios"
import { URI_API_PARTICIPATION, URI_API_EVENT } from "../constant"
import { EventItem } from "../type"

const useEventDetail = () => {
    const { detailModal, choosingEvent } = useSelector((state: State) => state)

    const [name, setName] = useState<string>("")

    const dispatch = useDispatch()

    const handleClose = useCallback(() => {
        dispatch(actions.updateDetailModal(false))
        setName("")
    }, [dispatch])

    const clickParticipation = useCallback(() => {
        const form = {
            name,
            event: choosingEvent.id,
        }
        axios.post(URI_API_PARTICIPATION, form).then(() => {
            dispatch(actions.updateDetailModal(false))
            setName("")
            axios.get(URI_API_EVENT).then((res: AxiosResponse<EventItem>) => {
                const json = JSON.parse(res.request.response)
                const ret = json.map((e: EventItem) => ({ ...e, date: new Date(e.date) }))
                console.log(ret)
                dispatch(actions.updateEvents(ret))
            })
        })
    }, [dispatch, choosingEvent, name])

    return {
        detailModal,
        choosingEvent,
        name,
        setName,
        handleClose,
        clickParticipation,
    }
}

export default useEventDetail