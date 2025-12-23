export const buildQueryParams = (
  params: Record<string, string | undefined | null>
): Record<string, string> => {
  const queryParams: Record<string, string> = {};

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      queryParams[key] = String(value);
    }
  });

  return queryParams;
};
