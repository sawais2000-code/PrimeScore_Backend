// src/cases/dto/create-case.dto.ts
export class CreateCaseDto {
  reportId: string;
  selectedIssueIds: string[];
  consent: boolean;
}
