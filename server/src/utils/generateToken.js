import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "adnbfoesrte24fds", {
    expiresIn: "30d",
  });
};

export default generateToken;
