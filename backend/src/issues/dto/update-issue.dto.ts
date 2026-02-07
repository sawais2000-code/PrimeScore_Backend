export class UpdateIssueDto {
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'ESCALATED';
  ownerId?: string;
}
