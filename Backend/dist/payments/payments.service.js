"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const razorpay_1 = __importDefault(require("razorpay"));
const common_1 = require("@nestjs/common");
let PaymentsService = class PaymentsService {
    constructor() {
        this.razorpay = new razorpay_1.default({
            key_id: process.env.RZP_KEY,
            key_secret: process.env.RZP_SECRET
        });
    }
    async createOrder(caseId, amount) {
        const order = await this.razorpay.orders.create({
            amount: amount * 100,
            currency: 'INR',
            receipt: caseId
        });
        return order;
    }
    verifyPayment(payload) {
        // Signature verify logic here
        return { status: 'SUCCESS' };
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)()
], PaymentsService);
//# sourceMappingURL=payments.service.js.map