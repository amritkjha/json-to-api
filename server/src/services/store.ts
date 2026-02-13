const store = new Map<string, any>();

function saveMock(id: string, json: any) {
    store.set(id, json);
}

function getMock(id: string) {
    return store.get(id);
}

function deleteMock(id: string) {
    return store.delete(id);
}

export { saveMock, getMock, deleteMock }