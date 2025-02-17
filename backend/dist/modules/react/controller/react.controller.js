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
exports.reactController = void 0;
const react_services_1 = require("../react.services");
class ReactController {
    constructor() {
        this.createReactApp = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { projectName } = req.body;
                if (!projectName) {
                    res.status(400).json({ message: "Project name is required" });
                    return;
                }
                const result = yield (0, react_services_1.initializeReactProject)(projectName);
                if (!result) {
                    res.status(500).json({ message: "Project React.js not created" });
                    return;
                }
                res
                    .status(201)
                    .json({ result, message: "React App created successfully" });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.reactController = new ReactController();
