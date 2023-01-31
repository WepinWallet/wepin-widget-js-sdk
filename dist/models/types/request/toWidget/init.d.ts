import type { IAttributes } from '@wepin/types';
import type { ProjectPlatformKind, ProjectPlatformReleaseType } from '@/models/types/ProjectTypes';
export interface InitRequest {
    appKey: string;
    domain?: string;
    platform: ProjectPlatformKind;
    stage: ProjectPlatformReleaseType;
    attributes: IAttributes;
}
