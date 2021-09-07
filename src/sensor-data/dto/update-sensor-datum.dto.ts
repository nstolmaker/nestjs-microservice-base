import { PartialType } from '@nestjs/mapped-types';
import { CreateSensorDatumDto } from './create-sensor-datum.dto';

export class UpdateSensorDatumDto extends PartialType(CreateSensorDatumDto) {}
