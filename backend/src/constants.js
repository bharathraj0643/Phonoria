export const getDBName = () => {
  return process.env.DB_ENV === "PROD"
    ? "phonoria-db-production"
    : "phonoria-db-test";
};