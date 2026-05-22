const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, LevelFormat,
  BorderStyle, WidthType, ShadingType, VerticalAlign,
  PageNumber, PageBreak, TabStopType, TabStopPosition,
  ExternalHyperlink
} = require('docx');
const fs = require('fs');
const path = require('path');

// ─── COLOR PALETTE ────────────────────────────────────────────────────────────
const C = {
  brand:    '0D6EFD', // blue
  brandDark:'084298',
  accent:   '198754', // green
  warn:     'FFC107', // amber
  light:    'E7F1FF',
  lightGray:'F8F9FA',
  midGray:  'DEE2E6',
  darkGray: '495057',
  white:    'FFFFFF',
  black:    '212529',
  codeBg:   '1E1E2E',
  codeText: 'CDD6F4',
};

// ─── BORDERS ──────────────────────────────────────────────────────────────────
const cell_border = (color = C.midGray) => ({
  top:    { style: BorderStyle.SINGLE, size: 1, color },
  bottom: { style: BorderStyle.SINGLE, size: 1, color },
  left:   { style: BorderStyle.SINGLE, size: 1, color },
  right:  { style: BorderStyle.SINGLE, size: 1, color },
});
const noBorder = {
  top:    { style: BorderStyle.NONE, size: 0, color: C.white },
  bottom: { style: BorderStyle.NONE, size: 0, color: C.white },
  left:   { style: BorderStyle.NONE, size: 0, color: C.white },
  right:  { style: BorderStyle.NONE, size: 0, color: C.white },
};

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const sp = (before=0, after=0) => ({ spacing: { before, after } });
const mono = (text, size=18, color=C.black) =>
  new TextRun({ text, font: 'Courier New', size, color });
const bold = (text, size=22, color=C.black) =>
  new TextRun({ text, bold: true, size, color, font: 'Arial' });
const run = (text, size=22, color=C.black) =>
  new TextRun({ text, size, color, font: 'Arial' });
const br = () => new Paragraph({ children: [], ...sp(0,0) });
const h1 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_1,
  children: [new TextRun({ text, bold: true, size: 36, font: 'Arial', color: C.brandDark })],
  ...sp(320, 160),
  border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: C.brand, space: 4 } }
});
const h2 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_2,
  children: [new TextRun({ text, bold: true, size: 28, font: 'Arial', color: C.brand })],
  ...sp(240, 120),
});
const h3 = (text) => new Paragraph({
  heading: HeadingLevel.HEADING_3,
  children: [new TextRun({ text, bold: true, size: 24, font: 'Arial', color: C.accent })],
  ...sp(180, 80),
});
const para = (text, size=22) => new Paragraph({
  children: [run(text, size)],
  ...sp(80, 80),
});
const note = (text) => new Paragraph({
  children: [
    new TextRun({ text: '  ℹ  ', bold: true, size: 20, color: C.brand, font: 'Arial' }),
    run(text, 20, C.brandDark),
  ],
  ...sp(80, 80),
  shading: { fill: C.light, type: ShadingType.CLEAR },
  border: {
    left: { style: BorderStyle.SINGLE, size: 12, color: C.brand, space: 6 },
  },
  indent: { left: 360 },
});

// Bullet paragraph
const bullet = (text, level=0) => new Paragraph({
  numbering: { reference: 'bullets', level },
  children: [run(text, 22)],
  ...sp(60, 60),
});

// Code block — wrap in a shaded table cell for visual effect
const codeBlock = (lines) => {
  const rows = lines.map(line =>
    new Paragraph({
      children: [mono(line || ' ', 18, C.codeText)],
      spacing: { before: 0, after: 0, line: 240 },
    })
  );
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [9360],
    rows: [
      new TableRow({
        children: [
          new TableCell({
            borders: noBorder,
            shading: { fill: C.codeBg, type: ShadingType.CLEAR },
            margins: { top: 160, bottom: 160, left: 240, right: 240 },
            width: { size: 9360, type: WidthType.DXA },
            children: rows,
          })
        ]
      })
    ]
  });
};

// ─── TABLE BUILDERS ──────────────────────────────────────────────────────────
const makeTable = (headers, rows, colWidths) => {
  const total = colWidths.reduce((a, b) => a + b, 0);
  const headerRow = new TableRow({
    children: headers.map((h, i) =>
      new TableCell({
        borders: cell_border(),
        width: { size: colWidths[i], type: WidthType.DXA },
        shading: { fill: C.brand, type: ShadingType.CLEAR },
        margins: { top: 100, bottom: 100, left: 150, right: 150 },
        verticalAlign: VerticalAlign.CENTER,
        children: [new Paragraph({ children: [bold(h, 20, C.white)], ...sp(0,0) })]
      })
    )
  });
  const dataRows = rows.map((row, ri) =>
    new TableRow({
      children: row.map((cell, ci) =>
        new TableCell({
          borders: cell_border(),
          width: { size: colWidths[ci], type: WidthType.DXA },
          shading: { fill: ri % 2 === 0 ? C.white : C.lightGray, type: ShadingType.CLEAR },
          margins: { top: 80, bottom: 80, left: 150, right: 150 },
          children: [new Paragraph({ children: [run(cell, 20)], ...sp(0,0) })]
        })
      )
    })
  );
  return new Table({
    width: { size: total, type: WidthType.DXA },
    columnWidths: colWidths,
    rows: [headerRow, ...dataRows],
  });
};

// ─── DOCUMENT CONTENT ────────────────────────────────────────────────────────

// COVER PAGE
const coverPage = [
  br(), br(), br(),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [bold('AQUA FLOW SaaS', 72, C.brand)],
    ...sp(0, 120),
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [run('Water Delivery Management Platform', 32, C.darkGray)],
    ...sp(0, 80),
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [run('Technical Architecture & Implementation Document', 26, C.darkGray)],
    ...sp(0, 200),
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({ text: 'Stack:  ', bold: true, size: 24, font: 'Arial', color: C.brand }),
      run('Node.js · Express · MongoDB · Cloudinary · Socket.io', 24, C.black),
    ],
    ...sp(0, 80),
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [run('Version 2.0  ·  Pakistani Market Edition  ·  2025', 22, C.darkGray)],
    ...sp(0, 240),
  }),
  br(), br(),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [bold('CONFIDENTIAL', 22, C.brand)],
  }),
  new Paragraph({ children: [new PageBreak()] }),
];

// SECTION 1 — OVERVIEW
const s1 = [
  h1('1. Project Overview'),
  para('Aqua Flow is a multi-tenant SaaS platform for Pakistan\'s water delivery industry. It enables water suppliers (vendors) to digitally manage end-to-end operations — from customer onboarding and rider assignment, to delivery tracking, invoice generation, and WhatsApp/SMS notifications.'),
  br(),
  note('Goal: Replace paper-based ledgers with a real-time digital system. Built for low-bandwidth environments, Urdu-speaking users, and Pakistani phone number conventions (03XXXXXXXXX).'),
  br(),

  h2('1.1  Core Technology Decisions'),
  makeTable(
    ['Layer', 'Technology', 'Reason'],
    [
      ['Backend / API', 'Node.js + Express.js', 'Fast, non-blocking I/O; huge ecosystem; easy REST API'],
      ['Database', 'MongoDB Atlas (Mongoose)', 'Flexible schema for delivery data; cloud-managed'],
      ['Authentication', 'JWT + Twilio OTP', 'Phone-first OTP; stateless JWT tokens'],
      ['File Storage', 'Cloudinary', 'Image/PDF upload, transformation, CDN delivery'],
      ['Realtime', 'Socket.io', 'Live delivery status pushed to dashboard'],
      ['Web Frontend', 'React + Vite + Tailwind', 'Fast SPA, large ecosystem, reusable components'],
      ['Mobile App', 'React + Capacitor.js', 'Single React codebase wrapped as Android/iOS APK'],
      ['Notifications', 'WhatsApp Cloud API + Twilio SMS', 'Primary customer contact channel in Pakistan'],
      ['PDF Generation', 'Puppeteer / PDFKit', 'Server-side invoice PDF rendering'],
      ['Hosting — Backend', 'Railway / Render', 'Zero-DevOps Node.js deployment'],
      ['Hosting — Frontend', 'Vercel', 'Instant CI/CD, custom domain, auto SSL'],
    ],
    [2400, 3200, 3760]
  ),
  br(),
];

// SECTION 2 — USER ROLES
const s2 = [
  h1('2. User Roles & Access Control'),
  para('The platform has 4 roles managed via JWT middleware + MongoDB-level scoping. Every API request is automatically scoped to the authenticated user\'s role and tenant (supplier_id).'),
  br(),
  h2('2.1  Role Summary'),
  makeTable(
    ['Role', 'Access Scope', 'Platform', 'Auth Method'],
    [
      ['super_admin', 'All tenants / global', 'Web only', 'Email + Password + JWT'],
      ['supplier', 'Own tenant only', 'Web dashboard', 'Phone OTP + JWT'],
      ['delivery_boy', 'Assigned customers only', 'Mobile App (Capacitor)', 'Phone OTP + JWT'],
      ['customer', 'Own records only (future)', 'Mobile App (future)', 'Phone OTP + JWT'],
    ],
    [2000, 2500, 2200, 2660]
  ),
  br(),
  h2('2.2  Pakistani Phone Number Requirement'),
  note('Phone number is MANDATORY for all users. Format: 03XX-XXXXXXX (11 digits). Stored as +92XXXXXXXXXX (E.164). Validated on both frontend (Zod) and backend (Mongoose + custom validator).'),
  br(),
  codeBlock([
    '// Shared phone utility — packages/shared/phoneUtils.ts',
    'export const PK_PHONE_REGEX = /^(\\+92|0)(3[0-9]{2})[0-9]{7}$/;',
    '',
    'export function normalizePhone(input: string): string {',
    '  const digits = input.replace(/[^0-9]/g, \'\');',
    '  if (digits.startsWith(\'92\')) return \'+\' + digits;',
    '  if (digits.startsWith(\'0\'))  return \'+92\' + digits.slice(1);',
    '  return \'+92\' + digits;',
    '}',
    '',
    '// Mongoose validator (backend)',
    'phone: {',
    '  type: String,',
    '  required: true,',
    '  unique: true,',
    '  validate: {',
    '    validator: (v: string) => /^\\+92[0-9]{10}$/.test(v),',
    '    message: \'Phone must be E.164 format: +92XXXXXXXXXX\'',
    '  }',
    '}',
  ]),
  br(),
];

// SECTION 3 — BACKEND
const s3 = [
  h1('3. Node.js + Express Backend Architecture'),
  para('The backend is a RESTful API server built with Node.js and Express. It connects to MongoDB Atlas, integrates Cloudinary for file storage, Twilio for OTP/SMS, WhatsApp Cloud API for notifications, and emits real-time events via Socket.io.'),
  br(),

  h2('3.1  Project Structure'),
  codeBlock([
    'server/',
    '├── src/',
    '│   ├── index.ts              # Express app entry point',
    '│   ├── socket.ts             # Socket.io initialisation',
    '│   ├── config/',
    '│   │   ├── db.ts             # MongoDB Atlas connection',
    '│   │   ├── cloudinary.ts     # Cloudinary SDK config',
    '│   │   └── env.ts            # Zod env validation',
    '│   ├── models/',
    '│   │   ├── User.ts',
    '│   │   ├── Supplier.ts',
    '│   │   ├── Customer.ts',
    '│   │   ├── DeliveryBoy.ts',
    '│   │   ├── Delivery.ts',
    '│   │   ├── Invoice.ts',
    '│   │   ├── NotificationLog.ts',
    '│   │   └── SubscriptionPlan.ts',
    '│   ├── routes/',
    '│   │   ├── auth.routes.ts',
    '│   │   ├── supplier.routes.ts',
    '│   │   ├── customer.routes.ts',
    '│   │   ├── delivery.routes.ts',
    '│   │   ├── invoice.routes.ts',
    '│   │   ├── notification.routes.ts',
    '│   │   └── admin.routes.ts',
    '│   ├── controllers/          # Route handler logic',
    '│   ├── middleware/',
    '│   │   ├── auth.middleware.ts # JWT verify + role guard',
    '│   │   ├── upload.middleware.ts # Multer + Cloudinary',
    '│   │   └── error.middleware.ts',
    '│   ├── services/',
    '│   │   ├── otp.service.ts    # Twilio OTP',
    '│   │   ├── whatsapp.service.ts',
    '│   │   ├── sms.service.ts',
    '│   │   ├── invoice.service.ts # PDF generation',
    '│   │   └── cloudinary.service.ts',
    '│   └── utils/',
    '│       ├── phoneUtils.ts',
    '│       └── apiResponse.ts',
    '├── .env',
    '├── tsconfig.json',
    '└── package.json',
  ]),
  br(),

  h2('3.2  Entry Point & Middleware Stack'),
  codeBlock([
    '// src/index.ts',
    'import express from \'express\';',
    'import cors from \'cors\';',
    'import helmet from \'helmet\';',
    'import rateLimit from \'express-rate-limit\';',
    'import { createServer } from \'http\';',
    'import { initSocket } from \'./socket\';',
    'import { connectDB } from \'./config/db\';',
    'import authRoutes from \'./routes/auth.routes\';',
    'import supplierRoutes from \'./routes/supplier.routes\';',
    'import customerRoutes from \'./routes/customer.routes\';',
    'import deliveryRoutes from \'./routes/delivery.routes\';',
    'import invoiceRoutes from \'./routes/invoice.routes\';',
    'import adminRoutes from \'./routes/admin.routes\';',
    'import { errorHandler } from \'./middleware/error.middleware\';',
    '',
    'const app = express();',
    'const httpServer = createServer(app);',
    '',
    'initSocket(httpServer);   // Socket.io attached to same HTTP server',
    '',
    'app.use(helmet());',
    'app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));',
    'app.use(express.json({ limit: \'10mb\' }));',
    'app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));',
    '',
    'app.use(\'/api/auth\',         authRoutes);',
    'app.use(\'/api/suppliers\',    supplierRoutes);',
    'app.use(\'/api/customers\',    customerRoutes);',
    'app.use(\'/api/deliveries\',   deliveryRoutes);',
    'app.use(\'/api/invoices\',     invoiceRoutes);',
    'app.use(\'/api/admin\',        adminRoutes);',
    '',
    'app.use(errorHandler);',
    '',
    'connectDB().then(() => {',
    '  httpServer.listen(process.env.PORT ?? 5000, () =>',
    '    console.log(`Server running on port ${process.env.PORT}`))',
    '});',
  ]),
  br(),

  h2('3.3  MongoDB Connection (MongoDB Atlas)'),
  codeBlock([
    '// src/config/db.ts',
    'import mongoose from \'mongoose\';',
    '',
    'export async function connectDB() {',
    '  const uri = process.env.MONGODB_URI!;  // Atlas connection string',
    '  await mongoose.connect(uri, {',
    '    dbName: \'aquaflow\',',
    '  });',
    '  console.log(\'MongoDB Atlas connected\');',
    '}',
    '',
    '// .env',
    '// MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/aquaflow?retryWrites=true',
  ]),
  br(),

  h2('3.4  Multi-Tenant Data Isolation Strategy'),
  para('Every document in supplier-scoped collections includes a supplierId field. JWT middleware extracts the authenticated user\'s supplierId and injects it into every query automatically — tenants are fully isolated at the application layer.'),
  codeBlock([
    '// src/middleware/auth.middleware.ts',
    'import jwt from \'jsonwebtoken\';',
    'import { User } from \'../models/User\';',
    '',
    'export const authenticate = async (req, res, next) => {',
    '  const token = req.headers.authorization?.split(\' \')[1];',
    '  if (!token) return res.status(401).json({ message: \'No token\' });',
    '  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any;',
    '  req.user = await User.findById(decoded.userId).select(\'-password\');',
    '  if (!req.user) return res.status(401).json({ message: \'User not found\' });',
    '  next();',
    '};',
    '',
    'export const requireRole = (...roles: string[]) => (req, res, next) => {',
    '  if (!roles.includes(req.user.role))',
    '    return res.status(403).json({ message: \'Forbidden\' });',
    '  next();',
    '};',
    '',
    '// Inject supplierId into every request automatically',
    'export const injectSupplier = async (req, res, next) => {',
    '  if (req.user.role === \'supplier\') {',
    '    const supplier = await Supplier.findOne({ userId: req.user._id });',
    '    req.supplierId = supplier?._id;',
    '  } else if (req.user.role === \'delivery_boy\') {',
    '    const db = await DeliveryBoy.findOne({ userId: req.user._id });',
    '    req.supplierId = db?.supplierId;',
    '    req.deliveryBoyId = db?._id;',
    '  }',
    '  next();',
    '};',
  ]),
  br(),
];

// SECTION 4 — MONGODB SCHEMAS
const s4 = [
  h1('4. MongoDB Schema Definitions (Mongoose)'),

  h2('4.1  User Model'),
  codeBlock([
    '// src/models/User.ts',
    'import mongoose, { Schema } from \'mongoose\';',
    'import bcrypt from \'bcryptjs\';',
    '',
    'const UserSchema = new Schema({',
    '  role: {',
    '    type: String,',
    '    enum: [\'super_admin\', \'supplier\', \'delivery_boy\', \'customer\'],',
    '    required: true',
    '  },',
    '  fullName:  { type: String, required: true, trim: true },',
    '  phone: {',
    '    type: String, required: true, unique: true,',
    '    validate: { validator: v => /^\\+92[0-9]{10}$/.test(v),',
    '                message: \'Invalid PK phone number\' }',
    '  },',
    '  email:     { type: String, lowercase: true },',
    '  password:  { type: String, select: false }, // super_admin only',
    '  avatarUrl: String,',
    '  isActive:  { type: Boolean, default: true },',
    '}, { timestamps: true });',
    '',
    'UserSchema.pre(\'save\', async function() {',
    '  if (this.isModified(\'password\') && this.password)',
    '    this.password = await bcrypt.hash(this.password, 12);',
    '});',
    '',
    'export const User = mongoose.model(\'User\', UserSchema);',
  ]),
  br(),

  h2('4.2  Supplier Model'),
  codeBlock([
    '// src/models/Supplier.ts',
    'const SupplierSchema = new Schema({',
    '  userId:          { type: Schema.Types.ObjectId, ref: \'User\', required: true },',
    '  businessName:    { type: String, required: true },',
    '  address:         { type: String, required: true },',
    '  city:            { type: String, default: \'Rawalpindi\' },',
    '  plan:            { type: String, enum: [\'basic\',\'standard\',\'enterprise\'], default: \'basic\' },',
    '  planExpiresAt:   Date,',
    '  isActive:        { type: Boolean, default: true },',
    '  logoUrl:         String,  // Cloudinary URL',
    '  whatsappToken:   String,  // encrypted at rest',
    '  whatsappPhoneId: String,',
    '  smsEnabled:      { type: Boolean, default: false },',
    '}, { timestamps: true });',
    '',
    'export const Supplier = mongoose.model(\'Supplier\', SupplierSchema);',
  ]),
  br(),

  h2('4.3  Customer Model'),
  codeBlock([
    '// src/models/Customer.ts',
    'const CustomerSchema = new Schema({',
    '  supplierId:     { type: Schema.Types.ObjectId, ref: \'Supplier\', required: true },',
    '  deliveryBoyId:  { type: Schema.Types.ObjectId, ref: \'User\' },',
    '  fullName:       { type: String, required: true },',
    '  phone: {',
    '    type: String, required: true,',
    '    validate: { validator: v => /^\\+92[0-9]{10}$/.test(v) }',
    '  },',
    '  whatsappPhone:  String,',
    '  address:        { type: String, required: true },',
    '  area:           String,   // e.g. "Satellite Town Block B"',
    '  location: {',
    '    type: { type: String, enum: [\'Point\'], default: \'Point\' },',
    '    coordinates: { type: [Number], default: [0, 0] } // [lng, lat]',
    '  },',
    '  monthlyBottles: { type: Number, default: 2 },',
    '  bottlePrice:    { type: Number, required: true },',
    '  billingCycle:   { type: String, default: \'monthly\' },',
    '  status: {',
    '    type: String,',
    '    enum: [\'active\',\'paused\',\'blocked\',\'pending_payment\'],',
    '    default: \'active\'',
    '  },',
    '  advancePaid:    { type: Number, default: 0 },',
    '  notes:          String,',
    '}, { timestamps: true });',
    '',
    'CustomerSchema.index({ location: \'2dsphere\' }); // Geo queries',
    'CustomerSchema.index({ supplierId: 1, status: 1 });',
    'export const Customer = mongoose.model(\'Customer\', CustomerSchema);',
  ]),
  br(),

  h2('4.4  DeliveryBoy Model'),
  codeBlock([
    '// src/models/DeliveryBoy.ts',
    'const DeliveryBoySchema = new Schema({',
    '  supplierId: { type: Schema.Types.ObjectId, ref: \'Supplier\', required: true },',
    '  userId:     { type: Schema.Types.ObjectId, ref: \'User\', required: true },',
    '  areaName:   String,',
    '  isActive:   { type: Boolean, default: true },',
    '}, { timestamps: true });',
    '',
    'export const DeliveryBoy = mongoose.model(\'DeliveryBoy\', DeliveryBoySchema);',
  ]),
  br(),

  h2('4.5  Delivery Model'),
  codeBlock([
    '// src/models/Delivery.ts',
    'const DeliverySchema = new Schema({',
    '  supplierId:       { type: Schema.Types.ObjectId, ref: \'Supplier\', required: true },',
    '  customerId:       { type: Schema.Types.ObjectId, ref: \'Customer\', required: true },',
    '  deliveryBoyId:    { type: Schema.Types.ObjectId, ref: \'User\',     required: true },',
    '  deliveryDate:     { type: Date, default: Date.now },',
    '  bottlesDelivered: { type: Number, default: 0, min: 0 },',
    '  bottlesReturned:  { type: Number, default: 0, min: 0 },',
    '  bottleType:       { type: String, enum: [\'standard\',\'jumbo\',\'small\'], default: \'standard\' },',
    '  status: {',
    '    type: String,',
    '    enum: [\'pending\',\'delivered\',\'missed\',\'partial\',\'extra\'],',
    '    default: \'pending\'',
    '  },',
    '  paymentCollected: { type: Number, default: 0 },',
    '  proofPhotoUrl:    String,  // Cloudinary secure_url',
    '  notes:            String,',
    '  notifiedAt:       Date,',
    '}, { timestamps: true });',
    '',
    'DeliverySchema.index({ customerId: 1 });',
    'DeliverySchema.index({ deliveryDate: -1 });',
    'DeliverySchema.index({ supplierId: 1, deliveryDate: -1 });',
    '',
    '// Post-save hook: update invoice + emit socket event',
    'DeliverySchema.post(\'save\', async function(doc) {',
    '  if (doc.status === \'delivered\') {',
    '    await updateOrCreateInvoice(doc);  // service fn',
    '    getIO().to(doc.supplierId.toString()).emit(\'delivery:new\', doc);',
    '  }',
    '});',
    '',
    'export const Delivery = mongoose.model(\'Delivery\', DeliverySchema);',
  ]),
  br(),

  h2('4.6  Invoice Model'),
  codeBlock([
    '// src/models/Invoice.ts',
    'const InvoiceSchema = new Schema({',
    '  supplierId:    { type: Schema.Types.ObjectId, ref: \'Supplier\', required: true },',
    '  customerId:    { type: Schema.Types.ObjectId, ref: \'Customer\', required: true },',
    '  month:         { type: Number, required: true, min: 1, max: 12 },',
    '  year:          { type: Number, required: true },',
    '  totalBottles:  { type: Number, default: 0 },',
    '  bottlePrice:   { type: Number, required: true },',
    '  previousDues:  { type: Number, default: 0 },',
    '  discounts:     { type: Number, default: 0 },',
    '  paidAmount:    { type: Number, default: 0 },',
    '  paymentStatus: { type: String, enum: [\'unpaid\',\'partial\',\'paid\'], default: \'unpaid\' },',
    '  pdfUrl:        String,  // Cloudinary PDF URL',
    '  sentVia:       { type: String, enum: [\'whatsapp\',\'sms\',\'manual\'] },',
    '  generatedAt:   { type: Date, default: Date.now },',
    '}, { timestamps: true });',
    '',
    '// Computed virtuals',
    'InvoiceSchema.virtual(\'subtotal\').get(function() {',
    '  return this.totalBottles * this.bottlePrice;',
    '});',
    'InvoiceSchema.virtual(\'totalAmount\').get(function() {',
    '  return this.totalBottles * this.bottlePrice + this.previousDues - this.discounts;',
    '});',
    '',
    'InvoiceSchema.index({ customerId: 1, month: 1, year: 1 }, { unique: true });',
    'export const Invoice = mongoose.model(\'Invoice\', InvoiceSchema);',
  ]),
  br(),

  h2('4.7  NotificationLog Model'),
  codeBlock([
    '// src/models/NotificationLog.ts',
    'const NotificationLogSchema = new Schema({',
    '  supplierId:  { type: Schema.Types.ObjectId, ref: \'Supplier\', required: true },',
    '  customerId:  { type: Schema.Types.ObjectId, ref: \'Customer\' },',
    '  deliveryId:  { type: Schema.Types.ObjectId, ref: \'Delivery\' },',
    '  invoiceId:   { type: Schema.Types.ObjectId, ref: \'Invoice\' },',
    '  channel:     { type: String, enum: [\'whatsapp\',\'sms\',\'push\'] },',
    '  status:      { type: String, enum: [\'sent\',\'failed\',\'pending\'] },',
    '  message:     String,',
    '  sentAt:      { type: Date, default: Date.now },',
    '}, { timestamps: true });',
    '',
    'export const NotificationLog = mongoose.model(\'NotificationLog\', NotificationLogSchema);',
  ]),
  br(),

  h2('4.8  SubscriptionPlan Model'),
  codeBlock([
    '// src/models/SubscriptionPlan.ts',
    'const SubscriptionPlanSchema = new Schema({',
    '  name:         { type: String, unique: true, required: true },',
    '  maxCustomers: Number,  // null = unlimited',
    '  maxRiders:    Number,',
    '  pricePkr:     { type: Number, required: true },',
    '  features:     Schema.Types.Mixed,  // { whatsapp: true, ... }',
    '  isActive:     { type: Boolean, default: true },',
    '});',
    '',
    '// Seed',
    'await SubscriptionPlan.insertMany([',
    '  { name: \'basic\',      maxCustomers: 100, maxRiders: 5,    pricePkr: 5000,  features: { whatsapp: false } },',
    '  { name: \'standard\',   maxCustomers: 500, maxRiders: 20,   pricePkr: 12000, features: { whatsapp: true  } },',
    '  { name: \'enterprise\', maxCustomers: null, maxRiders: null, pricePkr: 0,    features: { custom: true   } },',
    ']);',
  ]),
  br(),
];

// SECTION 5 — AUTH
const s5 = [
  h1('5. Authentication — JWT + Twilio OTP'),
  para('Authentication is phone-first. Twilio Verify sends a 6-digit OTP to the user\'s Pakistani mobile number. Upon verification, the server issues a signed JWT (access token + refresh token). Super Admin can also authenticate with email + password.'),
  br(),

  h2('5.1  OTP Service (Twilio Verify)'),
  codeBlock([
    '// src/services/otp.service.ts',
    'import twilio from \'twilio\';',
    '',
    'const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);',
    'const VERIFY_SID = process.env.TWILIO_VERIFY_SID!;',
    '',
    'export async function sendOtp(phone: string) {',
    '  await client.verify.v2.services(VERIFY_SID)',
    '    .verifications.create({ to: phone, channel: \'sms\' });',
    '}',
    '',
    'export async function verifyOtp(phone: string, code: string): Promise<boolean> {',
    '  const result = await client.verify.v2.services(VERIFY_SID)',
    '    .verificationChecks.create({ to: phone, code });',
    '  return result.status === \'approved\';',
    '}',
  ]),
  br(),

  h2('5.2  Auth Routes'),
  codeBlock([
    '// src/routes/auth.routes.ts',
    'import { Router } from \'express\';',
    'import jwt from \'jsonwebtoken\';',
    'import { User } from \'../models/User\';',
    'import { normalizePhone } from \'../utils/phoneUtils\';',
    'import { sendOtp, verifyOtp } from \'../services/otp.service\';',
    '',
    'const router = Router();',
    '',
    '// POST /api/auth/send-otp',
    'router.post(\'/send-otp\', async (req, res) => {',
    '  const phone = normalizePhone(req.body.phone);',
    '  await sendOtp(phone);',
    '  res.json({ message: \'OTP sent\' });',
    '});',
    '',
    '// POST /api/auth/verify-otp',
    'router.post(\'/verify-otp\', async (req, res) => {',
    '  const phone = normalizePhone(req.body.phone);',
    '  const approved = await verifyOtp(phone, req.body.code);',
    '  if (!approved) return res.status(400).json({ message: \'Invalid OTP\' });',
    '',
    '  const user = await User.findOne({ phone });',
    '  if (!user) return res.status(404).json({ message: \'User not registered\' });',
    '',
    '  const accessToken = jwt.sign(',
    '    { userId: user._id, role: user.role },',
    '    process.env.JWT_SECRET!,',
    '    { expiresIn: \'15m\' }',
    '  );',
    '  const refreshToken = jwt.sign(',
    '    { userId: user._id },',
    '    process.env.JWT_REFRESH_SECRET!,',
    '    { expiresIn: \'30d\' }',
    '  );',
    '  res.json({ accessToken, refreshToken, user });',
    '});',
    '',
    '// POST /api/auth/refresh',
    'router.post(\'/refresh\', async (req, res) => {',
    '  const decoded: any = jwt.verify(req.body.refreshToken, process.env.JWT_REFRESH_SECRET!);',
    '  const user = await User.findById(decoded.userId);',
    '  const accessToken = jwt.sign(',
    '    { userId: user!._id, role: user!.role },',
    '    process.env.JWT_SECRET!, { expiresIn: \'15m\' }',
    '  );',
    '  res.json({ accessToken });',
    '});',
    '',
    'export default router;',
  ]),
  br(),
];

// SECTION 6 — CLOUDINARY
const s6 = [
  h1('6. Cloudinary — File Storage'),
  para('Cloudinary replaces Supabase Storage for all media assets: delivery proof photos, supplier logos, and invoice PDFs. It provides a global CDN, automatic image optimisation, and secure signed uploads.'),
  br(),

  h2('6.1  Cloudinary Configuration'),
  codeBlock([
    '// src/config/cloudinary.ts',
    'import { v2 as cloudinary } from \'cloudinary\';',
    '',
    'cloudinary.config({',
    '  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,',
    '  api_key:    process.env.CLOUDINARY_API_KEY!,',
    '  api_secret: process.env.CLOUDINARY_API_SECRET!,',
    '  secure: true,',
    '});',
    '',
    'export { cloudinary };',
  ]),
  br(),

  h2('6.2  Upload Middleware (Multer + Cloudinary)'),
  codeBlock([
    '// src/middleware/upload.middleware.ts',
    'import multer from \'multer\';',
    'import { CloudinaryStorage } from \'multer-storage-cloudinary\';',
    'import { cloudinary } from \'../config/cloudinary\';',
    '',
    '// Delivery proof photos',
    'export const deliveryPhotoUpload = multer({',
    '  storage: new CloudinaryStorage({',
    '    cloudinary,',
    '    params: async (req) => ({',
    '      folder: `aquaflow/${req.supplierId}/delivery-proofs`,',
    '      format: \'webp\',',
    '      transformation: [{ width: 800, quality: \'auto\' }],',
    '      public_id: `delivery_${req.params.id}`,',
    '    }),',
    '  }),',
    '  limits: { fileSize: 5 * 1024 * 1024 },   // 5MB',
    '});',
    '',
    '// Supplier logo',
    'export const logoUpload = multer({',
    '  storage: new CloudinaryStorage({',
    '    cloudinary,',
    '    params: async (req) => ({',
    '      folder: `aquaflow/${req.supplierId}/logos`,',
    '      format: \'png\',',
    '      transformation: [{ width: 200, height: 200, crop: \'fill\' }],',
    '    }),',
    '  }),',
    '});',
  ]),
  br(),

  h2('6.3  Cloudinary Service (Direct API Uploads)'),
  codeBlock([
    '// src/services/cloudinary.service.ts',
    'import { cloudinary } from \'../config/cloudinary\';',
    'import streamifier from \'streamifier\';',
    '',
    'export async function uploadPdfBuffer(buffer: Buffer, folder: string, publicId: string) {',
    '  return new Promise((resolve, reject) => {',
    '    const stream = cloudinary.uploader.upload_stream(',
    '      {',
    '        folder: `aquaflow/${folder}`,',
    '        public_id: publicId,',
    '        resource_type: \'raw\',',
    '        format: \'pdf\',',
    '        overwrite: true,',
    '      },',
    '      (error, result) => error ? reject(error) : resolve(result)',
    '    );',
    '    streamifier.createReadStream(buffer).pipe(stream);',
    '  });',
    '}',
    '',
    'export async function deleteAsset(publicId: string) {',
    '  return cloudinary.uploader.destroy(publicId);',
    '}',
  ]),
  br(),
];

// SECTION 7 — REALTIME
const s7 = [
  h1('7. Real-Time Updates — Socket.io'),
  para('Socket.io replaces Supabase Realtime. When a delivery boy logs a delivery, the Mongoose post-save hook emits a socket event to the supplier\'s room. The React dashboard listens and updates live.'),
  br(),

  h2('7.1  Socket Server Setup'),
  codeBlock([
    '// src/socket.ts',
    'import { Server as SocketServer } from \'socket.io\';',
    'import { Server as HttpServer } from \'http\';',
    'import jwt from \'jsonwebtoken\';',
    '',
    'let io: SocketServer;',
    '',
    'export function initSocket(httpServer: HttpServer) {',
    '  io = new SocketServer(httpServer, {',
    '    cors: { origin: process.env.CORS_ORIGIN, credentials: true },',
    '  });',
    '',
    '  io.use((socket, next) => {',
    '    const token = socket.handshake.auth.token;',
    '    if (!token) return next(new Error(\'Unauthorized\'));',
    '    try {',
    '      const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);',
    '      socket.data.user = decoded;',
    '      next();',
    '    } catch { next(new Error(\'Invalid token\')); }',
    '  });',
    '',
    '  io.on(\'connection\', (socket) => {',
    '    const { userId, role } = socket.data.user;',
    '    // Supplier joins their own room',
    '    if (role === \'supplier\') socket.join(`supplier:${userId}`);',
    '    if (role === \'super_admin\') socket.join(\'admin\');',
    '    console.log(`Socket connected: ${userId} [${role}]`);',
    '  });',
    '}',
    '',
    'export const getIO = () => io;',
  ]),
  br(),

  h2('7.2  Emitting Delivery Events (Mongoose Hook)'),
  codeBlock([
    '// inside Delivery model post-save hook',
    'DeliverySchema.post(\'save\', async function(doc) {',
    '  if (doc.status === \'delivered\') {',
    '    // Update invoice totals',
    '    await updateOrCreateInvoice(doc);',
    '',
    '    // Emit real-time event to supplier\'s socket room',
    '    getIO()',
    '      .to(`supplier:${doc.supplierId}`)',
    '      .emit(\'delivery:new\', {',
    '        deliveryId:  doc._id,',
    '        customerId:  doc.customerId,',
    '        bottles:     doc.bottlesDelivered,',
    '        status:      doc.status,',
    '        timestamp:   doc.createdAt,',
    '      });',
    '',
    '    // Trigger WhatsApp notification',
    '    await sendDeliveryWhatsApp(doc._id.toString());',
    '  }',
    '});',
  ]),
  br(),

  h2('7.3  React Frontend — Socket.io Client'),
  codeBlock([
    '// src/hooks/useRealtimeDeliveries.ts',
    'import { useEffect } from \'react\';',
    'import { io } from \'socket.io-client\';',
    'import { useAuthStore } from \'../stores/authStore\';',
    '',
    'export function useRealtimeDeliveries(onNewDelivery: (d: any) => void) {',
    '  const { accessToken } = useAuthStore();',
    '',
    '  useEffect(() => {',
    '    const socket = io(import.meta.env.VITE_API_URL, {',
    '      auth: { token: accessToken },',
    '    });',
    '',
    '    socket.on(\'delivery:new\', onNewDelivery);',
    '',
    '    return () => { socket.disconnect(); };',
    '  }, [accessToken]);',
    '}',
  ]),
  br(),
];

// SECTION 8 — NOTIFICATIONS
const s8 = [
  h1('8. Notification System (WhatsApp & SMS)'),

  h2('8.1  WhatsApp Cloud API Service'),
  note('WhatsApp has 90%+ penetration in Pakistan. Meta\'s official Cloud API is free for the first 1,000 conversations/month per WABA number.'),
  br(),
  codeBlock([
    '// src/services/whatsapp.service.ts',
    'import axios from \'axios\';',
    'import { Delivery } from \'../models/Delivery\';',
    'import { NotificationLog } from \'../models/NotificationLog\';',
    '',
    'export async function sendDeliveryWhatsApp(deliveryId: string) {',
    '  const delivery = await Delivery.findById(deliveryId)',
    '    .populate(\'customerId supplierId\');',
    '',
    '  const customer = delivery!.customerId as any;',
    '  const supplier = delivery!.supplierId as any;',
    '',
    '  const message =',
    '    `Salam ${customer.fullName},\\n` +',
    '    `Aap ki ${delivery!.bottlesDelivered} bottles deliver ho gayi hain.\\nShukriya! 🚰`;',
    '',
    '  await axios.post(',
    '    `https://graph.facebook.com/v18.0/${supplier.whatsappPhoneId}/messages`,',
    '    {',
    '      messaging_product: \'whatsapp\',',
    '      to: customer.whatsappPhone,',
    '      type: \'text\',',
    '      text: { body: message },',
    '    },',
    '    { headers: { Authorization: `Bearer ${supplier.whatsappToken}` } }',
    '  );',
    '',
    '  await NotificationLog.create({',
    '    supplierId: delivery!.supplierId,',
    '    customerId: delivery!.customerId,',
    '    deliveryId,',
    '    channel: \'whatsapp\', status: \'sent\', message,',
    '  });',
    '',
    '  await Delivery.findByIdAndUpdate(deliveryId, { notifiedAt: new Date() });',
    '}',
  ]),
  br(),

  h2('8.2  SMS Fallback via Twilio'),
  codeBlock([
    '// src/services/sms.service.ts',
    'import twilio from \'twilio\';',
    '',
    'const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);',
    '',
    'export async function sendSms(to: string, body: string) {',
    '  await client.messages.create({',
    '    from: process.env.TWILIO_FROM_NUMBER!,',
    '    to,',
    '    body,',
    '  });',
    '}',
  ]),
  br(),

  h2('8.3  Notification Trigger Flow'),
  codeBlock([
    'Delivery Boy marks delivery → POST /api/deliveries',
    '      ↓',
    'Delivery saved to MongoDB',
    '      ↓',
    'Mongoose post-save hook fires',
    '      ├─→ updateOrCreateInvoice() — updates Invoice document',
    '      ├─→ getIO().emit(\'delivery:new\') — Socket.io to supplier dashboard',
    '      └─→ sendDeliveryWhatsApp() — WhatsApp Cloud API to customer',
    '                ↓',
    '      NotificationLog entry created in MongoDB',
  ]),
  br(),

  h2('8.4  WhatsApp Message Templates'),
  codeBlock([
    '// Templates must be pre-approved by Meta',
    '',
    '// 1. Delivery Confirmation',
    '// Template: delivery_confirmation',
    '// Body: "Assalam-o-Alaikum {{1}}, aap ki {{2}} bottles deliver ho gayi hain. Shukriya!"',
    '',
    '// 2. Monthly Invoice',
    '// Template: monthly_invoice',
    '// Body: "Dear {{1}}, aap ka {{2}} ka bill PKR {{3}} hai. Total bottles: {{4}}. JazakAllah!"',
    '',
    '// 3. Payment Reminder',
    '// Template: payment_reminder',
    '// Body: "Reminder: {{1}}, aap ka PKR {{2}} outstanding hai."',
  ]),
  br(),
];

// SECTION 9 — INVOICE PDF
const s9 = [
  h1('9. Invoice Generation (PDF)'),
  para('Invoices are generated server-side using PDFKit (a Node.js PDF library) and uploaded to Cloudinary. The PDF URL is stored in the Invoice document and shared with customers via WhatsApp.'),
  br(),

  h2('9.1  PDFKit Service'),
  codeBlock([
    '// src/services/invoice.service.ts',
    'import PDFDocument from \'pdfkit\';',
    'import { uploadPdfBuffer } from \'./cloudinary.service\';',
    'import { Invoice } from \'../models/Invoice\';',
    'import { Customer } from \'../models/Customer\';',
    'import { Supplier } from \'../models/Supplier\';',
    '',
    'export async function generateInvoicePdf(invoiceId: string): Promise<string> {',
    '  const invoice  = await Invoice.findById(invoiceId);',
    '  const customer = await Customer.findById(invoice!.customerId);',
    '  const supplier = await Supplier.findById(invoice!.supplierId);',
    '',
    '  const doc = new PDFDocument({ size: \'A4\', margin: 50 });',
    '  const buffers: Buffer[] = [];',
    '  doc.on(\'data\', (chunk) => buffers.push(chunk));',
    '',
    '  // Header',
    '  doc.fontSize(24).fillColor(\'#1E40AF\')',
    '     .text(supplier!.businessName, 50, 50);',
    '  doc.fontSize(12).fillColor(\'#475569\')',
    '     .text(`Invoice: ${invoice!.month}/${invoice!.year}`, 50, 85);',
    '',
    '  // Customer Details',
    '  doc.moveDown(2);',
    '  const rows = [',
    '    [\'Customer Name\', customer!.fullName],',
    '    [\'Phone\',         customer!.phone],',
    '    [\'Address\',       customer!.address],',
    '    [\'Total Bottles\', String(invoice!.totalBottles)],',
    '    [\'Rate/Bottle\',   `PKR ${invoice!.bottlePrice}`],',
    '    [\'Previous Dues\', `PKR ${invoice!.previousDues}`],',
    '    [\'Discounts\',     `PKR ${invoice!.discounts}`],',
    '    [\'Total Amount\',  `PKR ${invoice!.totalBottles * invoice!.bottlePrice + invoice!.previousDues - invoice!.discounts}`],',
    '  ];',
    '',
    '  rows.forEach(([label, value]) => {',
    '    doc.fontSize(11).fillColor(\'#475569\').text(label, 50, doc.y, { width: 200 })',
    '       .fontSize(11).fillColor(\'#1E293B\').text(value, 260, doc.y - 14);',
    '    doc.moveDown(0.5);',
    '  });',
    '',
    '  doc.end();',
    '',
    '  await new Promise(r => doc.on(\'end\', r));',
    '  const buffer = Buffer.concat(buffers);',
    '',
    '  // Upload to Cloudinary',
    '  const result: any = await uploadPdfBuffer(',
    '    buffer,',
    '    `${supplier!._id}/invoices`,',
    '    `invoice_${customer!._id}_${invoice!.year}_${invoice!.month}`',
    '  );',
    '',
    '  // Save URL back to Invoice',
    '  await Invoice.findByIdAndUpdate(invoiceId, { pdfUrl: result.secure_url });',
    '  return result.secure_url;',
    '}',
  ]),
  br(),
];

// SECTION 10 — REACT WEB APP
const s10 = [
  h1('10. React Web Application'),
  para('The web application serves both Super Admin and Supplier dashboards. Built with React + Vite + Tailwind CSS, it connects to the Node.js API via Axios and receives real-time updates via Socket.io-client.'),
  br(),

  h2('10.1  Project Structure'),
  codeBlock([
    'apps/web/src/',
    '├── main.tsx',
    '├── App.tsx',
    '├── api/                    # Axios API client',
    '│   ├── axios.ts            # Base instance with JWT interceptors',
    '│   ├── auth.api.ts',
    '│   ├── customers.api.ts',
    '│   ├── deliveries.api.ts',
    '│   └── invoices.api.ts',
    '├── hooks/',
    '│   ├── useAuth.ts',
    '│   ├── useCustomers.ts',
    '│   ├── useDeliveries.ts',
    '│   └── useRealtimeDeliveries.ts',
    '├── stores/                  # Zustand state',
    '│   ├── authStore.ts',
    '│   └── deliveryStore.ts',
    '├── pages/',
    '│   ├── auth/               LoginPage.tsx  OtpVerifyPage.tsx',
    '│   ├── super-admin/        SADashboard.tsx  SASuppliers.tsx  SARevenue.tsx',
    '│   └── supplier/           Dashboard.tsx  Customers.tsx  DeliveryBoys.tsx',
    '│                           Deliveries.tsx  Invoices.tsx  Reports.tsx  Settings.tsx',
    '├── components/',
    '│   ├── ui/                  Button Input Modal Table',
    '│   ├── PhoneInput.tsx',
    '│   └── DeliveryStatusBadge.tsx',
    '└── utils/',
    '    ├── phoneUtils.ts',
    '    └── formatters.ts',
  ]),
  br(),

  h2('10.2  Axios Client with JWT Interceptors'),
  codeBlock([
    '// src/api/axios.ts',
    'import axios from \'axios\';',
    'import { useAuthStore } from \'../stores/authStore\';',
    '',
    'export const api = axios.create({',
    '  baseURL: import.meta.env.VITE_API_URL + \'/api\',',
    '  withCredentials: true,',
    '});',
    '',
    '// Attach access token to every request',
    'api.interceptors.request.use((config) => {',
    '  const token = useAuthStore.getState().accessToken;',
    '  if (token) config.headers.Authorization = `Bearer ${token}`;',
    '  return config;',
    '});',
    '',
    '// Auto-refresh on 401',
    'api.interceptors.response.use(',
    '  r => r,',
    '  async (error) => {',
    '    if (error.response?.status === 401) {',
    '      const { refreshToken, setTokens } = useAuthStore.getState();',
    '      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/refresh`,',
    '        { refreshToken }',
    '      );',
    '      setTokens(data.accessToken, refreshToken);',
    '      error.config.headers.Authorization = `Bearer ${data.accessToken}`;',
    '      return axios(error.config);',
    '    }',
    '    return Promise.reject(error);',
    '  }',
    ');',
  ]),
  br(),

  h2('10.3  Key Web Pages'),
  makeTable(
    ['Page / Route', 'Role', 'Key Features'],
    [
      ['/login', 'All', 'Phone input, OTP verify, role-based redirect'],
      ['/admin/dashboard', 'super_admin', 'All suppliers, platform revenue, active plans'],
      ['/admin/suppliers', 'super_admin', 'Activate/deactivate, plan management'],
      ['/dashboard', 'supplier', 'Today\'s deliveries, revenue, pending invoices'],
      ['/customers', 'supplier', 'Add/edit/block customers, assign riders'],
      ['/riders', 'supplier', 'Add delivery boys, area assignment'],
      ['/deliveries', 'supplier', 'Date-wise delivery log, status filters'],
      ['/invoices', 'supplier', 'Monthly invoices, PDF download, WhatsApp send'],
      ['/reports', 'supplier', 'Revenue charts, bottle stats, customer ranking'],
      ['/settings', 'supplier', 'WhatsApp API config, Cloudinary logo upload, pricing'],
    ],
    [2200, 1600, 5560]
  ),
  br(),
];

// SECTION 11 — MOBILE APP
const s11 = [
  h1('11. Mobile App — React + Capacitor'),
  para('The delivery boy mobile app reuses the same React codebase wrapped with Capacitor.js to produce native Android and iOS applications. A separate mobile-optimised routing/UI is used for the rider experience.'),
  br(),

  h2('11.1  Capacitor Setup'),
  codeBlock([
    '# Install Capacitor',
    'npm install @capacitor/core @capacitor/cli',
    'npm install @capacitor/android @capacitor/ios',
    'npm install @capacitor/camera @capacitor/geolocation',
    'npm install @capacitor/push-notifications @capacitor/network',
    '',
    'npx cap init "AquaFlow Rider" "pk.aquaflow.rider"',
    'npx cap add android',
    'npx cap add ios',
    '',
    '# Build and sync',
    'npm run build && npx cap sync',
    'npx cap open android   # Opens Android Studio',
  ]),
  br(),

  h2('11.2  Camera Plugin — Delivery Proof Photo'),
  codeBlock([
    '// src/mobile/captureProof.ts',
    'import { Camera, CameraResultType, CameraSource } from \'@capacitor/camera\';',
    'import { api } from \'../api/axios\';',
    '',
    'export async function captureAndUploadProof(deliveryId: string): Promise<string> {',
    '  const photo = await Camera.getPhoto({',
    '    quality: 70,',
    '    resultType: CameraResultType.Blob,',
    '    source: CameraSource.Camera,',
    '    width: 800,',
    '  });',
    '',
    '  const formData = new FormData();',
    '  formData.append(\'proof\', photo.blob!, `proof_${deliveryId}.jpg`);',
    '',
    '  // POST to Node.js → Multer → Cloudinary',
    '  const { data } = await api.patch(',
    '    `/deliveries/${deliveryId}/proof`,',
    '    formData,',
    '    { headers: { \'Content-Type\': \'multipart/form-data\' } }',
    '  );',
    '',
    '  return data.proofPhotoUrl;  // Cloudinary CDN URL',
    '}',
  ]),
  br(),

  h2('11.3  Rider App Screens'),
  makeTable(
    ['Screen', 'Route', 'Description'],
    [
      ['Login', '/rider/login', 'Phone + OTP login; persist JWT in Capacitor Preferences'],
      ['Today\'s Route', '/rider/route', 'List of assigned customers for today'],
      ['Delivery Form', '/rider/deliver/:id', 'Bottle count, Cloudinary photo upload, notes, one-tap submit'],
      ['History', '/rider/history', 'Past 7-day delivery log from MongoDB'],
      ['Customer Info', '/rider/customer/:id', 'Address, phone, daily bottle count'],
    ],
    [2000, 2200, 5160]
  ),
  br(),
];

// SECTION 12 — DEPLOYMENT
const s12 = [
  h1('12. Deployment Architecture'),

  h2('12.1  Infrastructure Overview'),
  makeTable(
    ['Component', 'Service', 'Cost (USD)', 'Notes'],
    [
      ['Node.js API',           'Railway / Render',      '$0–$5/mo',        'Auto-deploy from GitHub; 512MB RAM free tier'],
      ['Database',              'MongoDB Atlas (M0)',     '$0/mo',           '512MB storage free; M2 = $9/mo for production'],
      ['Database (prod)',       'MongoDB Atlas (M10)',    '$57/mo',          '2GB RAM, dedicated cluster, backups'],
      ['File Storage',          'Cloudinary Free',        '$0/mo',           '25GB storage + 25GB bandwidth/month'],
      ['File Storage (pro)',    'Cloudinary Plus',        '$89/mo',          '225GB storage, advanced transformations'],
      ['Web Frontend',          'Vercel Hobby',           '$0/mo',           'Custom domain, auto SSL, unlimited deploys'],
      ['Web Frontend (pro)',    'Vercel Pro',             '$20/mo',          'Team access, analytics, faster builds'],
      ['SMS OTP',               'Twilio Verify',          '~$0.05/verification', 'PK SMS delivery'],
      ['WhatsApp API',          'Meta Cloud API',         'Free (1K/month)', 'Template messages; $0.0058/msg after'],
      ['Android APK',           'Google Play Store',      '$25 one-time',    'Developer account'],
    ],
    [2200, 2200, 1760, 3200]
  ),
  br(),

  h2('12.2  Environment Variables'),
  codeBlock([
    '# server/.env',
    'PORT=5000',
    'NODE_ENV=production',
    '',
    '# MongoDB Atlas',
    'MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.mongodb.net/aquaflow',
    '',
    '# JWT',
    'JWT_SECRET=<strong-secret-256-bit>',
    'JWT_REFRESH_SECRET=<another-strong-secret>',
    '',
    '# Twilio',
    'TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    'TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    'TWILIO_FROM_NUMBER=+1415xxxxxxx',
    'TWILIO_VERIFY_SID=VAxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    '',
    '# Cloudinary',
    'CLOUDINARY_CLOUD_NAME=aquaflow',
    'CLOUDINARY_API_KEY=xxxxxxxxxxxx',
    'CLOUDINARY_API_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    '',
    '# WhatsApp (Meta)',
    'WHATSAPP_VERIFY_TOKEN=my_secure_webhook_token',
    '',
    '# CORS',
    'CORS_ORIGIN=https://app.aquaflow.pk',
    '',
    '# apps/web/.env',
    'VITE_API_URL=https://api.aquaflow.pk',
  ]),
  br(),

  h2('12.3  CI/CD Pipeline'),
  codeBlock([
    '# .github/workflows/deploy.yml',
    'name: Deploy AquaFlow',
    'on:',
    '  push:',
    '    branches: [main]',
    '',
    'jobs:',
    '  deploy-api:',
    '    runs-on: ubuntu-latest',
    '    steps:',
    '      - uses: actions/checkout@v4',
    '      - uses: actions/setup-node@v4',
    '        with: { node-version: 20 }',
    '      - run: cd server && npm ci && npm run build',
    '      - name: Deploy to Railway',
    '        run: railway up --service api',
    '        env: { RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }} }',
    '',
    '  deploy-web:',
    '    runs-on: ubuntu-latest',
    '    steps:',
    '      - uses: actions/checkout@v4',
    '      - uses: actions/setup-node@v4',
    '        with: { node-version: 20 }',
    '      - run: cd apps/web && npm ci && npm run build',
    '      - uses: amondnet/vercel-action@v25',
    '        with:',
    '          vercel-token: ${{ secrets.VERCEL_TOKEN }}',
    '          vercel-org-id: ${{ secrets.ORG_ID }}',
    '          vercel-project-id: ${{ secrets.PROJECT_ID }}',
    '          vercel-args: \'--prod\'',
    '',
    '  build-android:',
    '    runs-on: ubuntu-latest',
    '    steps:',
    '      - uses: actions/checkout@v4',
    '      - run: cd apps/web && npm ci && npm run build && npx cap sync android',
    '      - run: cd apps/web/android && ./gradlew assembleRelease',
  ]),
  br(),
];

// SECTION 13 — SECURITY
const s13 = [
  h1('13. Security Considerations'),
  makeTable(
    ['Area', 'Implementation'],
    [
      ['Authentication', 'Stateless JWT (15min access + 30d refresh); Phone OTP via Twilio Verify'],
      ['Authorisation', 'Role-based middleware; supplierId injected into all queries — no cross-tenant leakage'],
      ['API Keys', 'WhatsApp/Twilio/Cloudinary secrets in .env only; never exposed to frontend'],
      ['Tenant Isolation', 'Every MongoDB query filtered by supplierId in middleware; no app-level bypasses'],
      ['Input Validation', 'Zod on frontend; express-validator + Mongoose validators on backend'],
      ['File Security', 'Cloudinary signed uploads; private delivery photos require signed URL'],
      ['Rate Limiting', 'express-rate-limit (100 req/15min); stricter on /auth endpoints (10 req/15min)'],
      ['HTTPS', 'Enforced by Railway (backend) and Vercel (frontend) — no HTTP allowed'],
      ['Mobile APK', 'Certificate pinning via Capacitor; obfuscated release build via ProGuard'],
      ['Passwords', 'bcryptjs with 12 rounds (super_admin only); no passwords for OTP users'],
    ],
    [2400, 6960]
  ),
  br(),
];

// SECTION 14 — PHASES
const s14 = [
  h1('14. Development Phases & MVP Scope'),
  note('MVP Goal: Get first paying supplier onboarded and delivering with digital tracking within 10 weeks.'),
  br(),

  h2('Phase 1 — MVP (Weeks 1–10)'),
  makeTable(
    ['Week', 'Deliverable', 'Platform', 'Status'],
    [
      ['1–2', 'MongoDB Atlas setup, Mongoose schemas, seed data', 'Backend', 'Foundation'],
      ['3',   'Auth: Phone OTP (Twilio) + JWT tokens', 'Both', 'Core'],
      ['4',   'Supplier dashboard + Customer CRUD API', 'Web', 'Core'],
      ['5',   'Delivery boy management + assignment', 'Web', 'Core'],
      ['6',   'Rider mobile app (Capacitor) — route + delivery form', 'Mobile', 'Core'],
      ['7',   'Cloudinary integration: photos + invoice PDFs', 'Backend', 'Storage'],
      ['8',   'Invoice auto-generation + PDFKit + Cloudinary upload', 'Backend', 'Billing'],
      ['9',   'WhatsApp + SMS notification services + Socket.io realtime', 'Backend', 'Notify'],
      ['10',  'Super Admin panel + subscription plans + Android APK build', 'Web/Mobile', 'Launch'],
    ],
    [600, 4400, 1800, 1560]
  ),
  br(),

  h2('Phase 2 — Growth (Weeks 11–18)'),
  bullet('Billing automation: auto-generate invoices on 1st of month via node-cron'),
  bullet('Advanced reports: revenue trends, area-wise performance, top customers (MongoDB aggregation pipeline)'),
  bullet('Customer self-service portal (read-only: view invoices, delivery history)'),
  bullet('Bulk WhatsApp invoice sharing (send to all customers in one click)'),
  bullet('Multi-bottle type pricing: standard, jumbo, small cans'),
  br(),

  h2('Phase 3 — Scale (Weeks 19+)'),
  bullet('GPS live tracking with Capacitor Geolocation + Socket.io position streaming'),
  bullet('Route optimisation (Google Maps Directions API)'),
  bullet('JazzCash / EasyPaisa payment integration for online bill payment'),
  bullet('AI demand prediction (suggest bottle quantities based on MongoDB history)'),
  bullet('Inventory management for water plant operations'),
  bullet('Franchise multi-branch management'),
  br(),
];

// SECTION 15 — REPO STRUCTURE
const s15 = [
  h1('15. Complete Repository Structure'),
  codeBlock([
    'aquaflow/',
    '├── apps/',
    '│   ├── web/                    # React + Vite (web dashboard)',
    '│   │   ├── src/',
    '│   │   │   ├── api/',
    '│   │   │   ├── pages/',
    '│   │   │   ├── components/',
    '│   │   │   ├── hooks/',
    '│   │   │   ├── stores/',
    '│   │   │   └── utils/',
    '│   │   ├── index.html',
    '│   │   └── vite.config.ts',
    '│   └── mobile/                 # Capacitor wrapper',
    '│       ├── android/',
    '│       ├── ios/',
    '│       └── capacitor.config.ts',
    '├── server/                     # Node.js + Express API',
    '│   ├── src/',
    '│   │   ├── index.ts',
    '│   │   ├── socket.ts',
    '│   │   ├── config/',
    '│   │   ├── models/',
    '│   │   ├── routes/',
    '│   │   ├── controllers/',
    '│   │   ├── middleware/',
    '│   │   ├── services/',
    '│   │   └── utils/',
    '│   ├── .env',
    '│   └── package.json',
    '├── packages/',
    '│   └── shared/                 # Shared types, validators',
    '│       ├── phoneUtils.ts',
    '│       ├── validators.ts',
    '│       └── types/',
    '├── .github/',
    '│   └── workflows/deploy.yml',
    '├── package.json                # NPM workspaces root',
    '└── README.md',
  ]),
  br(),
];

// SECTION 16 — DEPENDENCIES
const s16 = [
  h1('16. Key Dependencies'),

  h2('16.1  Backend (server/package.json)'),
  makeTable(
    ['Package', 'Version', 'Purpose'],
    [
      ['express',                '^4.x',  'HTTP server + REST routing'],
      ['mongoose',               '^8.x',  'MongoDB ODM with schema validation'],
      ['jsonwebtoken',           '^9.x',  'JWT access + refresh tokens'],
      ['bcryptjs',               '^2.x',  'Password hashing (super_admin)'],
      ['twilio',                 '^4.x',  'Phone OTP via Twilio Verify + SMS'],
      ['cloudinary',             '^2.x',  'File upload: photos + PDFs'],
      ['multer',                 '^1.x',  'Multipart form data handling'],
      ['multer-storage-cloudinary', '^4.x', 'Direct Multer → Cloudinary pipeline'],
      ['socket.io',              '^4.x',  'Real-time delivery events'],
      ['pdfkit',                 '^0.x',  'Server-side invoice PDF generation'],
      ['axios',                  '^1.x',  'WhatsApp Cloud API HTTP calls'],
      ['zod',                    '^3.x',  'Environment variable + input validation'],
      ['express-rate-limit',     '^7.x',  'API rate limiting'],
      ['helmet',                 '^7.x',  'Security HTTP headers'],
      ['cors',                   '^2.x',  'Cross-origin resource sharing'],
      ['node-cron',              '^3.x',  'Monthly invoice auto-generation'],
    ],
    [2800, 1200, 5360]
  ),
  br(),

  h2('16.2  Frontend (apps/web/package.json)'),
  makeTable(
    ['Package', 'Version', 'Purpose'],
    [
      ['react + react-dom',      '^18.x', 'Core UI framework'],
      ['react-router-dom',       '^6.x',  'Client-side routing'],
      ['axios',                  '^1.x',  'API calls with JWT interceptors'],
      ['socket.io-client',       '^4.x',  'Receive real-time delivery updates'],
      ['zustand',                '^4.x',  'Lightweight global state (auth, deliveries)'],
      ['@tanstack/react-query',  '^5.x',  'Server state caching + invalidation'],
      ['zod',                    '^3.x',  'Form + phone number validation'],
      ['tailwindcss',            '^3.x',  'Utility-first CSS'],
      ['recharts',               '^2.x',  'Dashboard charts'],
      ['react-hot-toast',        '^2.x',  'Toast notifications'],
      ['date-fns',               '^3.x',  'Date formatting'],
      ['@capacitor/core',        '^6.x',  'Mobile wrapper (shared codebase)'],
      ['@capacitor/camera',      '^6.x',  'Delivery proof photos'],
      ['@capacitor/geolocation', '^6.x',  'GPS coordinates'],
    ],
    [2800, 1200, 5360]
  ),
  br(),
];

// SECTION 17 — COST ESTIMATES
const s17 = [
  h1('17. Monthly Cost Estimates (PKR)'),
  note('At MVP stage with 5–10 suppliers, total monthly infrastructure cost stays under PKR 12,000 (~$43 USD). Fully covered by just 2–3 paying Basic plan subscribers.'),
  br(),
  makeTable(
    ['Service', 'Free Tier', 'Paid Tier', 'PKR/month (approx)'],
    [
      ['MongoDB Atlas',        '512MB / shared',  'M10: $57/mo',      'Free → 15,960'],
      ['Railway (Node.js)',    '500 hrs/mo',       'Starter: $5/mo',   'Free → 1,400'],
      ['Cloudinary',           '25GB storage',     'Plus: $89/mo',     'Free → 24,920'],
      ['Vercel (Frontend)',    'Unlimited deploys', 'Pro: $20/mo',     'Free → 5,600'],
      ['Twilio SMS / OTP',     '$0',               '$0.05/verification', '500–2,000'],
      ['WhatsApp Cloud API',   '1K msgs/month',    '$0.0058/msg',      '0–1,500'],
      ['Domain (.pk)',         '—',                '~$15/year',         '~350'],
      ['Total (estimated)',    '—',                '—',                 'PKR 500 – 16,000'],
    ],
    [2400, 2200, 2200, 2560]
  ),
  br(),
];

// ─── DOCUMENT ASSEMBLY ───────────────────────────────────────────────────────
const allChildren = [
  ...coverPage,
  ...s1, ...s2, ...s3, ...s4, ...s5,
  ...s6, ...s7, ...s8, ...s9, ...s10,
  ...s11, ...s12, ...s13, ...s14, ...s15,
  ...s16, ...s17,
];

const doc = new Document({
  numbering: {
    config: [
      {
        reference: 'bullets',
        levels: [{
          level: 0, format: LevelFormat.BULLET, text: '•',
          alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } }
        }]
      }
    ]
  },
  styles: {
    default: {
      document: { run: { font: 'Arial', size: 22 } }
    },
    paragraphStyles: [
      {
        id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run:       { size: 36, bold: true, font: 'Arial', color: C.brandDark },
        paragraph: { spacing: { before: 320, after: 160 }, outlineLevel: 0 }
      },
      {
        id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run:       { size: 28, bold: true, font: 'Arial', color: C.brand },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 }
      },
      {
        id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run:       { size: 24, bold: true, font: 'Arial', color: C.accent },
        paragraph: { spacing: { before: 180, after: 80 }, outlineLevel: 2 }
      },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1260, bottom: 1440, left: 1260 }
      }
    },
    headers: {
      default: new Header({
        children: [
          new Paragraph({
            children: [
              bold('AQUA FLOW SaaS', 18, C.brand),
              run('  ·  Technical Architecture Document  ·  Confidential', 18, C.darkGray),
            ],
            border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: C.brand, space: 4 } },
            ...sp(0, 80),
          })
        ]
      })
    },
    footers: {
      default: new Footer({
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            border: { top: { style: BorderStyle.SINGLE, size: 4, color: C.midGray, space: 4 } },
            children: [
              run('Node.js  ·  Express  ·  MongoDB  ·  Cloudinary  ·  Socket.io    ', 18, C.darkGray),
              new TextRun({ children: ['Page ', PageNumber.CURRENT, ' of ', PageNumber.TOTAL_PAGES], size: 18, font: 'Arial', color: C.darkGray }),
            ],
            ...sp(80, 0),
          })
        ]
      })
    },
    children: allChildren,
  }]
});

Packer.toBuffer(doc).then(buf => {
  const outputDir = path.join(__dirname, 'outputs');
  const outputFile = path.join(outputDir, 'AquaFlow_NodeJS_MongoDB_Technical_Document.docx');
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(outputFile, buf);
  console.log('Done!');
}).catch(console.error);