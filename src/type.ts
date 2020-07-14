export type Participant = {
    id: number,
    name: string,
}

export type EventItem = {
    id: number,
    title: string,
    date: Date,
    place: string,
    maxPeople: number | null,
    remark: string,
    participants: Participant[]
}

export type PostEventItem = {
    title: string,
    date: Date | string,
    place: string,
    max_people: number | null,
    remark: string,
}