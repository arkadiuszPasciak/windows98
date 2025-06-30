import { PulpitItem } from '../../../domain/models';
export interface PulpitItemProps extends PulpitItem {
}
export type UsePulpitItem = Pick<PulpitItemProps, "name">;
