import { Workout } from '../workouts/workout';

export const WORKOUTS_MOCK: Workout[] = [
  {
    id: 'w-1',
    title: 'Утренняя зарядка',
    durationMinutes: 15,
    createdAt: '2026-05-30T07:00:00.000Z',
  },
  {
    id: 'w-2',
    title: 'Кардио',
    durationMinutes: 30,
    createdAt: '2026-05-31T18:30:00.000Z',
  },
  {
    id: 'w-3',
    title: 'Растяжка',
    durationMinutes: 20,
    createdAt: '2026-06-01T08:15:00.000Z',
  },
];
