import { Controller, Post, Get, Param, Body, UseGuards, Req } from '@nestjs/common';
import { DocumentsService } from './documents.service';
import { RbacGuard } from '../rbac/rbac.guard';
import { Roles } from '../rbac/roles.decorator';
import { Role } from '../rbac/roles.enum';
import { Request } from 'express';

// JWT payload type (example)
interface JwtRequest extends Request {
  user: {
    id: string;
    role: Role;
    email?: string;
  };
}

@Controller('documents')
@UseGuards(RbacGuard)
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  // Upload document (only OPS/Admin)
  @Post('upload')
  @Roles(Role.OPS, Role.ADMIN)
  async upload(
    @Body('issueId') issueId: string,
    @Body('url') url: string,
    @Req() req: JwtRequest, // ✅ typed request
  ) {
    const role = req.user.role; // safe access
    return this.documentsService.upload(issueId, url, role);
  }

  // Get all documents for an issue (any authenticated user)
  @Get('issue/:issueId')
  async getDocuments(@Param('issueId') issueId: string) {
    return this.documentsService.getDocumentsByIssue(issueId);
  }
}
