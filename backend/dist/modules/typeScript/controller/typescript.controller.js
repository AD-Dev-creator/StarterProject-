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
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeScriptController = exports.TypeScriptController = void 0;
const typescipt_services_1 = require("../typescipt.services");
class TypeScriptController {
    constructor() {
        this.createTypeScriptAPI = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { projectName } = req.body;
                if (!projectName) {
                    res.status(400).json({ message: "Project name is required" });
                    return;
                }
                const result = yield (0, typescipt_services_1.initializeTypeScriptAPI)(projectName);
                if (!result) {
                    res.status(500).json({ message: "Project TypeScript not created" });
                    return;
                }
                res
                    .status(201)
                    .json({ result, message: "TypeScript API created successfully" });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.TypeScriptController = TypeScriptController;
exports.typeScriptController = new TypeScriptController();
