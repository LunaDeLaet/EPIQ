// @ts-nocheck
export const sortLinkedEntriesById = (array) => {
    array.sort((a, b) => parseFloat(a.fields.id) - parseFloat(b.fields.id))
}