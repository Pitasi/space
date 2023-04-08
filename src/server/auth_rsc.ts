import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth";
import { cache } from "react";

export const getSessionRSC = cache(() => getServerSession(authOptions));
