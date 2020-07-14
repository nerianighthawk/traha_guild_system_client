import { reducerWithInitialState } from 'typescript-fsa-reducers'

import { actions } from './action'
import { EventItem } from './type'

export interface State {
    addModal: boolean,
    detailModal: boolean,
    events: EventItem[],
    choosingEvent: EventItem,
}

const initialState: State = {
    addModal: false,
    detailModal: false,
    events: [],
    choosingEvent: {
        id: 0,
        title: '',
        date: new Date(),
        place: '',
        maxPeople: 0,
        remark: '',
        participants: [],
    }
}

export const reducer = reducerWithInitialState(initialState)
    .case(actions.updateAddModal, (state, addModal) => (
        { ...state, addModal }
    ))
    .case(actions.updateDetailModal, (state, detailModal) => (
        { ...state, detailModal }
    ))
    .case(actions.updateChoosingEvent, (state, choosingEvent) => (
        { ...state, choosingEvent }
    ))
    .case(actions.updateEvents, (state, events) => (
        { ...state, events }
    ))
