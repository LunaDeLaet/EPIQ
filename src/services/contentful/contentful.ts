export const fetchContentfulEntryLinkedEntries = async (contentType: string, entryTitle: string, include = 10) => {
    const response = await fetch(`https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master/entries?content_type=${contentType}&fields.title=${entryTitle}&include=${include}`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${process.env.CONTENTFUL_ACCESS_KEY}`
        },
    }).then((response) => response.json())

    return response
}