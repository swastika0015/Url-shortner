import { ChiselEntity } from "@chiselstrike/api";
export class URLShortener extends ChiselEntity {
    originalUrl: string;
    shortenedUrl: string;
}
