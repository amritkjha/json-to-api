const store = new Map<string, any>();

function saveMock(id: string, json: any) {
    const mock = {
        id,
        data: json,
        createdAt: Date.now()
    }
    store.set(id, mock);
}

function getMock(id: string) {
    return store.get(id);
}

function deleteMock(id: string) {
    return store.delete(id);
}

export { saveMock, getMock, deleteMock }