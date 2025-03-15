
import type { Request } from "express";

export function getUserFromRequest(req: Request) {
  const userId = req.header("X-Replit-User-Id");
  const userName = req.header("X-Replit-User-Name");
  const userRoles = req.header("X-Replit-User-Roles");

  if (!userId || !userName) return null;

  return {
    id: userId,
    name: userName,
    roles: userRoles?.split(",") || [],
  };
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const user = getUserFromRequest(req);
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  req.user = user;
  next();
}
