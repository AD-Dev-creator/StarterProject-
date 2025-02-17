"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = __importDefault(require("./../main"));
const supertest_1 = __importDefault(require("supertest"));
describe("NextController", () => {
    describe("POST /api/next", () => {
        it("should create a Next.js app", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(main_1.default)
                .post("/api/next")
                .send({ appName: "my-next-app" });
            expect(response.status).toBe(201);
            expect(response.body).toEqual({
                message: "Next.js app created successfully",
            });
        }));
        it("should create a Next.js app with TypeScript", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(main_1.default)
                .post("/api/next/typescript")
                .send({ appName: "my-next-app" });
            expect(response.status).toBe(201);
            expect(response.body).toEqual({
                message: "Next.js app created successfully",
            });
        }));
    });
});
