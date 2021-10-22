export interface Note {
    id: string,
    title: string,
    description: string,
    position: number,
    score: number | null,
    imageUrl: string | null
}