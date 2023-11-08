export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
export const FACEBOOK_CLIENT_ID = process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID;
export const TWITCH_CLIENT_ID = process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID;

export const IS_GOOGLE_ENABLED = Boolean(GOOGLE_CLIENT_ID);
export const IS_FACEBOOK_ENABLED = Boolean(FACEBOOK_CLIENT_ID);
export const IS_TWITCH_ENABLED = Boolean(TWITCH_CLIENT_ID);
