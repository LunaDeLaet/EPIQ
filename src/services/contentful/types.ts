export type LinkedEntry = {
    metadata: { tags: string[] }
    sys: {
        space: {
            sys: any
        }
        id: string
        type: string
        createdAt: string,
        updatedAt: string,
        environment: { sys: any },
        revision: 1,
        contentType: { sys: any },
        locale: string
    }
    fields: {
        title: string
        mainText?: { nodeType: any, content: any, data: any }
        buttonText?: string
    }
}