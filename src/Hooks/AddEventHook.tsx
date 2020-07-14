import { useSelector, useDispatch } from "react-redux"
import { State } from "../state"
import { useCallback, useState } from "react"
import { PostEventItem, EventItem } from "../type"
import { actions } from "../action"
import axios, { AxiosResponse } from "axios"
import { URI_API_EVENT } from "../constant"
import { datetimeToString } from "../service"

const useAddEvent = () => {
    const { addModal } = useSelector((state: State) => state)

    const initPostEventItem = {
        title: '',
        date: new Date(),
        place: '',
        max_people: null,
        remark: '',
    }

    const [eventForm, setEventForm] = useState<PostEventItem>(initPostEventItem)

    const dispatch = useDispatch()
    const handleClose = useCallback(() => {
        dispatch(actions.updateAddModal(false))
        setEventForm(initPostEventItem)
    }, [dispatch, initPostEventItem])

    const clickAdd = useCallback(() => {
        const date = typeof eventForm.date === "string" ? eventForm.date : datetimeToString(eventForm.date)
        const form = {...eventForm, date}
        axios.post(URI_API_EVENT, form).then((_) => {
            dispatch(actions.updateAddModal(false))
            setEventForm(initPostEventItem)
            axios.get(URI_API_EVENT).then((res: AxiosResponse<EventItem>) => {
                const json = JSON.parse(res.request.response)
                const ret = json.map((e: EventItem) => ({ ...e, date: new Date(e.date) }))
                console.log(ret)
                dispatch(actions.updateEvents(ret))
            })
        })
    }, [dispatch, eventForm, initPostEventItem])

    return {
        addModal,
        handleClose,
        clickAdd,
        eventForm,
        setEventForm,
    }
}

export default useAddEvent
