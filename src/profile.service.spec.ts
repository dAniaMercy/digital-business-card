import { ProfileService } from './profile.service';
import { ProfileRepository } from './profile.repository';

describe('ProfileService', () => {
  it('возвращает профиль из хранилища', async () => {
    const profile = { id: 1, name: 'Даниил' };
    const repository = { findProfile: jest.fn().mockResolvedValue(profile) };
    const service = new ProfileService(repository as unknown as ProfileRepository);
    await expect(service.getProfile()).resolves.toEqual(profile);
    expect(repository.findProfile).toHaveBeenCalledTimes(1);
  });
  it('возвращает null, если профиль отсутствует', async () => {
    const repository = { findProfile: jest.fn().mockResolvedValue(null) };
    await expect(new ProfileService(repository as unknown as ProfileRepository).getProfile()).resolves.toBeNull();
  });
});
