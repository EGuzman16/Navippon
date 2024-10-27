import { verify } from "jsonwebtoken";
import User from "../models/User";

export const authGuard = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const { id } = verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(id).select("-password");
      if (!req.user) {
        let err = new Error("No autorizado, Usuario no encontrado");
        err.statusCode = 401;
        return next(err);
      }
      next();
    } catch (error) {
      let err = new Error("No autorizado, Token falló");
      err.statusCode = 401;
      next(err);
    }
  } else {
    let error = new Error("No autorizado, No token");
    error.statusCode = 401;
    next(error);
  }
};

export const adminGuard = (req, res, next) => {
  if (req.user && req.user.admin) {
    next();
  } else {
    let error = new Error("No autorizado como administrador");
    error.statusCode = 401;
    next(error);
  }
};