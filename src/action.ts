import actionCreatorFactory from 'typescript-fsa'
import { EventItem } from './type'

const actionCreator = actionCreatorFactory()

export const actions = {
    updateAddModal: actionCreator<boolean>('ACTION_UPDATE_ADD_MODAL'),
    updateDetailModal: actionCreator<boolean>('ACTION_UPDATE_DETAIL_MODAL'),
    updateEvents: actionCreator<EventItem[]>('ACTION_UPDATE_EVENTS'),
    updateChoosingEvent: actionCreator<EventItem>('ACTION_UPDATE_CHOOSING_EVENT'),
}
