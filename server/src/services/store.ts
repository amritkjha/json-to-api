import { MockModel } from "../models/Mock.js";

const store = new Map<string, any>();

const expireHours = 6;

async function saveMock(id: string, json: any) {
    return await MockModel.create({ id, payload:json, expiresAt: new Date(Date.now()+expireHours*60*60*1000) });
}

async function getMock(id: string) {
    return await MockModel.findOne({ id });
}

async function deleteMock(id: string) {
    return await MockModel.deleteOne({ id });
}

export { saveMock, getMock, deleteMock }