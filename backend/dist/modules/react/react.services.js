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
exports.initializeReactProject = void 0;
const child_process_1 = require("child_process");
const path_1 = __importDefault(require("path"));
const initializeReactProject = (projectName) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const scryptPath = path_1.default.join(__dirname, "../../bin/create-react-app.sh");
        const command = `bash ${scryptPath} ${projectName}`;
        (0, child_process_1.exec)(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return reject(stderr || error.message);
            }
            console.log(`stdout: ${stdout}`);
            resolve(stdout);
        });
    });
});
exports.initializeReactProject = initializeReactProject;
