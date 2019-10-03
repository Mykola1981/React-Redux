export const INC = () => {
  return { type: "INC" };
};

export const DEC = () => {
  return { type: "DEC" };
};

export const ZERO = (payload) => {
  return { type: "ZERO", payload };
};

export const DOUBLE = (payload) => {
  return { type: "DOUBLE", payload };
};

export const DIVISION = (payload) => {
  return { type: "DIVISION", payload };
};

export const PLUS100 = (payload) => {
  return { type: "PLUS100", payload };
};

export const MINUS200 = (payload) => {
  return { type: "MINUS200", payload };
};