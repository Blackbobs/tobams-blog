import { convertDate } from '@/utils/convertDate';

describe('convertDate', () => {
  it('should convert a timestamp to a formatted date string', () => {
    const timestamp = '2025-01-24T08:18:30Z';
    const result = convertDate(timestamp);
    expect(result).toBe('24th January, 2025');
  });

  it('should handle invalid timestamps', () => {
    const timestamp = 'invalid-date';
    const result = convertDate(timestamp);
    expect(result).toBe('invalid-date');
  });
});