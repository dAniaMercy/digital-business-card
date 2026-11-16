import { Injectable } from '@nestjs/common';
import { ProfileRepository } from './profile.repository';
@Injectable()
export class ProfileService {
  constructor(private readonly repository: ProfileRepository) {}
  getProfile() { return this.repository.findProfile(); }
}
