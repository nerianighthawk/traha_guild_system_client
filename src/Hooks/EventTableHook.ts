import { useSelector, useDispatch } from "react-redux"
import { State } from "../state"
import { useEffect, useCallback } from "react"
import axios, { AxiosResponse } from "axios"
import { URI_API_EVENT } from "../constant"
import { EventItem } from "../type"
import { actions } from "../action"

const useEventTableHook = () => {
    const { events } = useSelector((state: State) => state)

    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(URI_API_EVENT).then((res: AxiosResponse<EventItem>) => {
            const json = JSON.parse(res.request.response)
            console.log(json)
            const ret = json.map((e: EventItem) => ({...e, date: new Date(e.date)}))
            dispatch(actions.updateEvents(ret))
        })
    }, [dispatch])

    const clickItem = useCallback((item: EventItem) => {
        dispatch(actions.updateChoosingEvent(item))
        dispatch(actions.updateDetailModal(true))
    }, [dispatch])

    return {
        events,
        clickItem,
    }
}

export default useEventTableHook
