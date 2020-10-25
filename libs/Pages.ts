import { IEnum } from '.';

export class Page implements IEnum<Page> {
  private static _values = new Array<Page>();

  public static readonly TOP = new Page(
    1,
    'トップ',
    'トップ',
    'トップページです。',
    '/',
    []
  );

  public static readonly UPLOAD = new Page(
    2,
    'アップロード',
    'アップロード',
    'アップロード',
    '/upload',
    []
  );
  // public static readonly LOGIN = new Page(
  //   2,
  //   'ログイン',
  //   'ログイン',
  //   'ログインページです',
  //   '/login',
  //   []
  // );
  // public static readonly ACCOUNT_SETTINGS = new Page(
  //   11,
  //   'アカウント設定',
  //   'アカウント設定',
  //   'アカウント設定のページです',
  //   '/settings/account',
  //   []
  // );
  // public static readonly SETTINGS = new Page(
  //   10,
  //   '設定',
  //   '設定',
  //   '',
  //   '/settings',
  //   [Page.ACCOUNT_SETTINGS]
  // );

  /**
   * コンストラクタ
   * @param number ページid
   * @param pageTitle ページタイトル
   * @param title SEO用タイトル
   * @param metaDescription SEO用MetaDescription
   * @param relativeUrl 相対URL
   * @param childrenpages 子ページ
   */
  private constructor(
    public readonly id: number,
    public readonly pageTitle: string,
    public readonly title: string,
    public readonly metaDescription: string,
    public readonly relativeUrl: string,
    public readonly childrenPages: Page[],
    public readonly isMenuListed: boolean = true,
    public parentPage: Page = null
  ) {
    Page._values.push(this);
    this.childrenPages.forEach((child) => {
      child.setParent(this);
    });
  }

  /**
   * ページ定義配列getter
   */
  static get values(): Page[] {
    return this._values;
  }

  /**
   * @inheritdoc
   */
  equals = (target: Page): boolean => this.id === target.id;

  /**
   * @inheritdoc
   */
  toString = (): string => `${this.id}, ${this.pageTitle}`;

  setParent = (page: Page): void => {
    this.parentPage = page;
  };

  public isChild = (): boolean => {
    return Page.values.some((p) => p.childrenPages.indexOf(this) !== -1);
  };
}
