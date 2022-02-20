export interface CollectionModel {
  slug: string;
  name: string;
  bannerImageUrl?: string;
  imageUrl?: string;

  stats?: {
    floorPrice: string;
  }
}
export interface AssetModel {
  imagePreviewUrl?: string;
  imageThumbnailUrl?: string;
  imageUrl?: string;
}
