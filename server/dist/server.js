"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3001; // Port for the server
app.use((0, cors_1.default)()); // Enable CORS if needed
app.use(express_1.default.json()); // Parse incoming JSON requests
// Define API routes here
app.get('/api/data', (_, res) => {
    res.json({ message: 'Hello from the backend!' });
});
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
//# sourceMappingURL=server.js.map