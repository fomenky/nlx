export type chunkCardDataType = {
  id: number;
  title: string;
  description: string;
};

export const chunkCards = (
  services: chunkCardDataType[],
  size: number
): chunkCardDataType[][] =>
  Array.from({ length: Math.ceil(services.length / size) }, (v, i) =>
    services.slice(i * size, i * size + size)
  );
