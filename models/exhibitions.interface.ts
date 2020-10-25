export interface IYears {
  /**
   * パネル展示会の年度
   * ex. 2020
   */
  years: string;

  /**
   * 年度中の展示会
   */
  exhibitions: IExhibition[];
}

export interface IExhibition {
  id: number;
  /**
   * 展示会タイトル
   * ex. Spring Autumn
   */
  title: string;

  /**
   * 展示会に含まれる画像
   */
  images: IImage[];

  /**
   * 公開済みの展示会か否か
   */
  isPublic: boolean;
}

export interface IImage {
  /**
   * 作品ID
   */
  id?: number;
  /**
   * 作品URL
   */
  src: string;
  /**
   * 投稿ユーザ名
   */
  user: string;

  /**
   * 作品タイトル
   */
  title: string;

  /**
   * 作品キャプション
   */
  caption?: string;

  /**
   * 作品が公開済みか否か
   * (検閲機能のため)
   */
  isPublic: boolean;
}

/**
 * DTO
 */
export class AddImagesDTO {
  imageURL: string;
  title: string;
  name: string;
  caption?: string;
  exhibitionsId: number;
}
