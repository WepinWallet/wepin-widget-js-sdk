import type { ProjectPlatformKind, ProjectPlatformReleaseType } from '@/models/types/ProjectTypes';
import type { IAttributes } from '@wepin/types';
export interface ReadyToWidgetResponse {
    appKey: string;
    domain: string;
    platform: ProjectPlatformKind;
    stage: ProjectPlatformReleaseType;
    attributes: IAttributes;
}
