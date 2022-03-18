declare namespace browserslist {
  /** statistics from `Browserslist` files */
  type MyStats = 'my stats';
  /**
   * Which statistics should be used.
   * Country code or custom statistics.
   * Pass `"my stats"` to load statistics
   * from `Browserslist` files
   */
  type StatsOptions = string | MyStats | Stats;

  interface Browserslist {
    (queries?: string | ReadonlyArray<string>, opts?: Options): string[];

    /** Return browsers market coverage */
    coverage: (browsers: ReadonlyArray<string>, stats?: StatsOptions) => number;

    clearCaches: () => void;
  }

  interface Stats {
    [browser: string]: {
      [version: string]: number;
    };
  }

  interface Options {
    /** file or a directory path to look for config file */
    path?: string;
    /** what environment section use from config */
    env?: string;
    /** custom usage statistics data */
    stats?: Stats;
    /** path to config if you want to set it manually */
    config?: string;
    /** do not throw on direct query (like ie 12). */
    ignoreUnknownVersions?: boolean;
    /** Disable security checks for extend query.  */
    dangerousExtend?: boolean;
    /** Use desktop browsers if Can I Use doesn’t have data about this mobile version */
    mobileToDesktop?: boolean;
  }
}

declare var browserslist: browserslist.Browserslist;

export = browserslist;
