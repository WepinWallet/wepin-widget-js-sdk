import { IProject, ProjectPlatformReleaseType } from '@/models/types/ProjectTypes';
import type APIResponse from '@/api/APIResponse';
export type AppApiInitResponseData = {
    stage: ProjectPlatformReleaseType;
    project: IProject;
    withNetwork?: boolean;
};
export type InitResponse<TAPIRequest> = APIResponse<unknown, AppApiInitResponseData, TAPIRequest>;
