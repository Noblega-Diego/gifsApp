type JSON = IApiGiftSearch

export interface IApiGiftSearch {
  data: IData[];
  pagination: IPagination;
  meta: IMeta;
}

export interface IData {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: IImages;
  user: IUser;
  analytics_response_payload: string;
  analytics: IAnalytics;
}

export interface IImages {
  original: IOriginal;
  downsized: IDownsized;
  downsized_large: IDownsized_large;
  downsized_medium: IDownsized_medium;
  downsized_small: IDownsized_small;
  downsized_still: IDownsized_still;
  fixed_height: IFixed_height;
  fixed_height_downsampled: IFixed_height_downsampled;
  fixed_height_small: IFixed_height_small;
  fixed_height_small_still: IFixed_height_small_still;
  fixed_height_still: IFixed_height_still;
  fixed_width: IFixed_width;
  fixed_width_downsampled: IFixed_width_downsampled;
  fixed_width_small: IFixed_width_small;
  fixed_width_small_still: IFixed_width_small_still;
  fixed_width_still: IFixed_width_still;
  looping: ILooping;
  original_still: IOriginal_still;
  original_mp4: IOriginal_mp4;
  preview: IPreview;
  preview_gif: IPreview_gif;
  preview_webp: IPreview_webp;
  i480w_still: I480w_still;
}

export interface IOriginal {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
  frames: string;
  hash: string;
}

export interface IDownsized {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface IDownsized_large {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface IDownsized_medium {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface IDownsized_small {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}

export interface IDownsized_still {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface IFixed_height {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
}

export interface IFixed_height_downsampled {
  height: string;
  width: string;
  size: string;
  url: string;
  webp_size: string;
  webp: string;
}

export interface IFixed_height_small {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
}

export interface IFixed_height_small_still {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface IFixed_height_still {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface IFixed_width {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
}

export interface IFixed_width_downsampled {
  height: string;
  width: string;
  size: string;
  url: string;
  webp_size: string;
  webp: string;
}

export interface IFixed_width_small {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
}

export interface IFixed_width_small_still {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface IFixed_width_still {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface ILooping {
  mp4_size: string;
  mp4: string;
}

export interface IOriginal_still {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface IOriginal_mp4 {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}

export interface IPreview {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}

export interface IPreview_gif {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface IPreview_webp {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface I480w_still {
  height: string;
  width: string;
  size: string;
  url: string;
}

export interface IUser {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}

export interface IAnalytics {
  onload: IOnload;
  onclick: IOnclick;
  onsent: IOnsent;
}

export interface IOnload {
  url: string;
}

export interface IOnclick {
  url: string;
}

export interface IOnsent {
  url: string;
}

export interface IPagination {
  total_count: number;
  count: number;
  offset: number;
}

export interface IMeta {
  status: number;
  msg: string;
  response_id: string;
}
