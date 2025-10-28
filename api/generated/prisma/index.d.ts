
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TvShows
 * 
 */
export type TvShows = $Result.DefaultSelection<Prisma.$TvShowsPayload>
/**
 * Model Genres
 * 
 */
export type Genres = $Result.DefaultSelection<Prisma.$GenresPayload>
/**
 * Model TvShowGenres
 * 
 */
export type TvShowGenres = $Result.DefaultSelection<Prisma.$TvShowGenresPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model ListTvShow
 * 
 */
export type ListTvShow = $Result.DefaultSelection<Prisma.$ListTvShowPayload>
/**
 * Model Lists
 * 
 */
export type Lists = $Result.DefaultSelection<Prisma.$ListsPayload>
/**
 * Model RatingScale
 * 
 */
export type RatingScale = $Result.DefaultSelection<Prisma.$RatingScalePayload>
/**
 * Model Ratings
 * 
 */
export type Ratings = $Result.DefaultSelection<Prisma.$RatingsPayload>
/**
 * Model ActorsOnTvShows
 * 
 */
export type ActorsOnTvShows = $Result.DefaultSelection<Prisma.$ActorsOnTvShowsPayload>
/**
 * Model Actors
 * 
 */
export type Actors = $Result.DefaultSelection<Prisma.$ActorsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TvShows
 * const tvShows = await prisma.tvShows.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TvShows
   * const tvShows = await prisma.tvShows.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tvShows`: Exposes CRUD operations for the **TvShows** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TvShows
    * const tvShows = await prisma.tvShows.findMany()
    * ```
    */
  get tvShows(): Prisma.TvShowsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genres`: Exposes CRUD operations for the **Genres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genres.findMany()
    * ```
    */
  get genres(): Prisma.GenresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tvShowGenres`: Exposes CRUD operations for the **TvShowGenres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TvShowGenres
    * const tvShowGenres = await prisma.tvShowGenres.findMany()
    * ```
    */
  get tvShowGenres(): Prisma.TvShowGenresDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listTvShow`: Exposes CRUD operations for the **ListTvShow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListTvShows
    * const listTvShows = await prisma.listTvShow.findMany()
    * ```
    */
  get listTvShow(): Prisma.ListTvShowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lists`: Exposes CRUD operations for the **Lists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lists
    * const lists = await prisma.lists.findMany()
    * ```
    */
  get lists(): Prisma.ListsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ratingScale`: Exposes CRUD operations for the **RatingScale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RatingScales
    * const ratingScales = await prisma.ratingScale.findMany()
    * ```
    */
  get ratingScale(): Prisma.RatingScaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ratings`: Exposes CRUD operations for the **Ratings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.ratings.findMany()
    * ```
    */
  get ratings(): Prisma.RatingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actorsOnTvShows`: Exposes CRUD operations for the **ActorsOnTvShows** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActorsOnTvShows
    * const actorsOnTvShows = await prisma.actorsOnTvShows.findMany()
    * ```
    */
  get actorsOnTvShows(): Prisma.ActorsOnTvShowsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.actors`: Exposes CRUD operations for the **Actors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actors
    * const actors = await prisma.actors.findMany()
    * ```
    */
  get actors(): Prisma.ActorsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TvShows: 'TvShows',
    Genres: 'Genres',
    TvShowGenres: 'TvShowGenres',
    Users: 'Users',
    ListTvShow: 'ListTvShow',
    Lists: 'Lists',
    RatingScale: 'RatingScale',
    Ratings: 'Ratings',
    ActorsOnTvShows: 'ActorsOnTvShows',
    Actors: 'Actors'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tvShows" | "genres" | "tvShowGenres" | "users" | "listTvShow" | "lists" | "ratingScale" | "ratings" | "actorsOnTvShows" | "actors"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TvShows: {
        payload: Prisma.$TvShowsPayload<ExtArgs>
        fields: Prisma.TvShowsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TvShowsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TvShowsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowsPayload>
          }
          findFirst: {
            args: Prisma.TvShowsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TvShowsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowsPayload>
          }
          findMany: {
            args: Prisma.TvShowsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowsPayload>[]
          }
          create: {
            args: Prisma.TvShowsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowsPayload>
          }
          createMany: {
            args: Prisma.TvShowsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TvShowsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowsPayload>[]
          }
          delete: {
            args: Prisma.TvShowsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowsPayload>
          }
          update: {
            args: Prisma.TvShowsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowsPayload>
          }
          deleteMany: {
            args: Prisma.TvShowsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TvShowsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TvShowsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowsPayload>[]
          }
          upsert: {
            args: Prisma.TvShowsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowsPayload>
          }
          aggregate: {
            args: Prisma.TvShowsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTvShows>
          }
          groupBy: {
            args: Prisma.TvShowsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TvShowsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TvShowsCountArgs<ExtArgs>
            result: $Utils.Optional<TvShowsCountAggregateOutputType> | number
          }
        }
      }
      Genres: {
        payload: Prisma.$GenresPayload<ExtArgs>
        fields: Prisma.GenresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          findFirst: {
            args: Prisma.GenresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          findMany: {
            args: Prisma.GenresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>[]
          }
          create: {
            args: Prisma.GenresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          createMany: {
            args: Prisma.GenresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>[]
          }
          delete: {
            args: Prisma.GenresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          update: {
            args: Prisma.GenresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          deleteMany: {
            args: Prisma.GenresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>[]
          }
          upsert: {
            args: Prisma.GenresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          aggregate: {
            args: Prisma.GenresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenres>
          }
          groupBy: {
            args: Prisma.GenresGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenresGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenresCountArgs<ExtArgs>
            result: $Utils.Optional<GenresCountAggregateOutputType> | number
          }
        }
      }
      TvShowGenres: {
        payload: Prisma.$TvShowGenresPayload<ExtArgs>
        fields: Prisma.TvShowGenresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TvShowGenresFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowGenresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TvShowGenresFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowGenresPayload>
          }
          findFirst: {
            args: Prisma.TvShowGenresFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowGenresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TvShowGenresFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowGenresPayload>
          }
          findMany: {
            args: Prisma.TvShowGenresFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowGenresPayload>[]
          }
          create: {
            args: Prisma.TvShowGenresCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowGenresPayload>
          }
          createMany: {
            args: Prisma.TvShowGenresCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TvShowGenresCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowGenresPayload>[]
          }
          delete: {
            args: Prisma.TvShowGenresDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowGenresPayload>
          }
          update: {
            args: Prisma.TvShowGenresUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowGenresPayload>
          }
          deleteMany: {
            args: Prisma.TvShowGenresDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TvShowGenresUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TvShowGenresUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowGenresPayload>[]
          }
          upsert: {
            args: Prisma.TvShowGenresUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TvShowGenresPayload>
          }
          aggregate: {
            args: Prisma.TvShowGenresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTvShowGenres>
          }
          groupBy: {
            args: Prisma.TvShowGenresGroupByArgs<ExtArgs>
            result: $Utils.Optional<TvShowGenresGroupByOutputType>[]
          }
          count: {
            args: Prisma.TvShowGenresCountArgs<ExtArgs>
            result: $Utils.Optional<TvShowGenresCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      ListTvShow: {
        payload: Prisma.$ListTvShowPayload<ExtArgs>
        fields: Prisma.ListTvShowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListTvShowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListTvShowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListTvShowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListTvShowPayload>
          }
          findFirst: {
            args: Prisma.ListTvShowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListTvShowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListTvShowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListTvShowPayload>
          }
          findMany: {
            args: Prisma.ListTvShowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListTvShowPayload>[]
          }
          create: {
            args: Prisma.ListTvShowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListTvShowPayload>
          }
          createMany: {
            args: Prisma.ListTvShowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListTvShowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListTvShowPayload>[]
          }
          delete: {
            args: Prisma.ListTvShowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListTvShowPayload>
          }
          update: {
            args: Prisma.ListTvShowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListTvShowPayload>
          }
          deleteMany: {
            args: Prisma.ListTvShowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListTvShowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListTvShowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListTvShowPayload>[]
          }
          upsert: {
            args: Prisma.ListTvShowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListTvShowPayload>
          }
          aggregate: {
            args: Prisma.ListTvShowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListTvShow>
          }
          groupBy: {
            args: Prisma.ListTvShowGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListTvShowGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListTvShowCountArgs<ExtArgs>
            result: $Utils.Optional<ListTvShowCountAggregateOutputType> | number
          }
        }
      }
      Lists: {
        payload: Prisma.$ListsPayload<ExtArgs>
        fields: Prisma.ListsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListsPayload>
          }
          findFirst: {
            args: Prisma.ListsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListsPayload>
          }
          findMany: {
            args: Prisma.ListsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListsPayload>[]
          }
          create: {
            args: Prisma.ListsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListsPayload>
          }
          createMany: {
            args: Prisma.ListsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListsPayload>[]
          }
          delete: {
            args: Prisma.ListsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListsPayload>
          }
          update: {
            args: Prisma.ListsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListsPayload>
          }
          deleteMany: {
            args: Prisma.ListsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListsPayload>[]
          }
          upsert: {
            args: Prisma.ListsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListsPayload>
          }
          aggregate: {
            args: Prisma.ListsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLists>
          }
          groupBy: {
            args: Prisma.ListsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListsCountArgs<ExtArgs>
            result: $Utils.Optional<ListsCountAggregateOutputType> | number
          }
        }
      }
      RatingScale: {
        payload: Prisma.$RatingScalePayload<ExtArgs>
        fields: Prisma.RatingScaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingScaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingScalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingScaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingScalePayload>
          }
          findFirst: {
            args: Prisma.RatingScaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingScalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingScaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingScalePayload>
          }
          findMany: {
            args: Prisma.RatingScaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingScalePayload>[]
          }
          create: {
            args: Prisma.RatingScaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingScalePayload>
          }
          createMany: {
            args: Prisma.RatingScaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingScaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingScalePayload>[]
          }
          delete: {
            args: Prisma.RatingScaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingScalePayload>
          }
          update: {
            args: Prisma.RatingScaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingScalePayload>
          }
          deleteMany: {
            args: Prisma.RatingScaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingScaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingScaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingScalePayload>[]
          }
          upsert: {
            args: Prisma.RatingScaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingScalePayload>
          }
          aggregate: {
            args: Prisma.RatingScaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRatingScale>
          }
          groupBy: {
            args: Prisma.RatingScaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingScaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingScaleCountArgs<ExtArgs>
            result: $Utils.Optional<RatingScaleCountAggregateOutputType> | number
          }
        }
      }
      Ratings: {
        payload: Prisma.$RatingsPayload<ExtArgs>
        fields: Prisma.RatingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload>
          }
          findFirst: {
            args: Prisma.RatingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload>
          }
          findMany: {
            args: Prisma.RatingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload>[]
          }
          create: {
            args: Prisma.RatingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload>
          }
          createMany: {
            args: Prisma.RatingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload>[]
          }
          delete: {
            args: Prisma.RatingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload>
          }
          update: {
            args: Prisma.RatingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload>
          }
          deleteMany: {
            args: Prisma.RatingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload>[]
          }
          upsert: {
            args: Prisma.RatingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingsPayload>
          }
          aggregate: {
            args: Prisma.RatingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRatings>
          }
          groupBy: {
            args: Prisma.RatingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingsCountArgs<ExtArgs>
            result: $Utils.Optional<RatingsCountAggregateOutputType> | number
          }
        }
      }
      ActorsOnTvShows: {
        payload: Prisma.$ActorsOnTvShowsPayload<ExtArgs>
        fields: Prisma.ActorsOnTvShowsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActorsOnTvShowsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsOnTvShowsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActorsOnTvShowsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsOnTvShowsPayload>
          }
          findFirst: {
            args: Prisma.ActorsOnTvShowsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsOnTvShowsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActorsOnTvShowsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsOnTvShowsPayload>
          }
          findMany: {
            args: Prisma.ActorsOnTvShowsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsOnTvShowsPayload>[]
          }
          create: {
            args: Prisma.ActorsOnTvShowsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsOnTvShowsPayload>
          }
          createMany: {
            args: Prisma.ActorsOnTvShowsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActorsOnTvShowsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsOnTvShowsPayload>[]
          }
          delete: {
            args: Prisma.ActorsOnTvShowsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsOnTvShowsPayload>
          }
          update: {
            args: Prisma.ActorsOnTvShowsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsOnTvShowsPayload>
          }
          deleteMany: {
            args: Prisma.ActorsOnTvShowsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActorsOnTvShowsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActorsOnTvShowsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsOnTvShowsPayload>[]
          }
          upsert: {
            args: Prisma.ActorsOnTvShowsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsOnTvShowsPayload>
          }
          aggregate: {
            args: Prisma.ActorsOnTvShowsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActorsOnTvShows>
          }
          groupBy: {
            args: Prisma.ActorsOnTvShowsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActorsOnTvShowsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActorsOnTvShowsCountArgs<ExtArgs>
            result: $Utils.Optional<ActorsOnTvShowsCountAggregateOutputType> | number
          }
        }
      }
      Actors: {
        payload: Prisma.$ActorsPayload<ExtArgs>
        fields: Prisma.ActorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsPayload>
          }
          findFirst: {
            args: Prisma.ActorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsPayload>
          }
          findMany: {
            args: Prisma.ActorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsPayload>[]
          }
          create: {
            args: Prisma.ActorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsPayload>
          }
          createMany: {
            args: Prisma.ActorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsPayload>[]
          }
          delete: {
            args: Prisma.ActorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsPayload>
          }
          update: {
            args: Prisma.ActorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsPayload>
          }
          deleteMany: {
            args: Prisma.ActorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsPayload>[]
          }
          upsert: {
            args: Prisma.ActorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActorsPayload>
          }
          aggregate: {
            args: Prisma.ActorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActors>
          }
          groupBy: {
            args: Prisma.ActorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActorsCountArgs<ExtArgs>
            result: $Utils.Optional<ActorsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tvShows?: TvShowsOmit
    genres?: GenresOmit
    tvShowGenres?: TvShowGenresOmit
    users?: UsersOmit
    listTvShow?: ListTvShowOmit
    lists?: ListsOmit
    ratingScale?: RatingScaleOmit
    ratings?: RatingsOmit
    actorsOnTvShows?: ActorsOnTvShowsOmit
    actors?: ActorsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TvShowsCountOutputType
   */

  export type TvShowsCountOutputType = {
    tvshowGenres: number
    lists: number
    ratings: number
    actors: number
  }

  export type TvShowsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tvshowGenres?: boolean | TvShowsCountOutputTypeCountTvshowGenresArgs
    lists?: boolean | TvShowsCountOutputTypeCountListsArgs
    ratings?: boolean | TvShowsCountOutputTypeCountRatingsArgs
    actors?: boolean | TvShowsCountOutputTypeCountActorsArgs
  }

  // Custom InputTypes
  /**
   * TvShowsCountOutputType without action
   */
  export type TvShowsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShowsCountOutputType
     */
    select?: TvShowsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TvShowsCountOutputType without action
   */
  export type TvShowsCountOutputTypeCountTvshowGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TvShowGenresWhereInput
  }

  /**
   * TvShowsCountOutputType without action
   */
  export type TvShowsCountOutputTypeCountListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListTvShowWhereInput
  }

  /**
   * TvShowsCountOutputType without action
   */
  export type TvShowsCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingsWhereInput
  }

  /**
   * TvShowsCountOutputType without action
   */
  export type TvShowsCountOutputTypeCountActorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActorsOnTvShowsWhereInput
  }


  /**
   * Count Type GenresCountOutputType
   */

  export type GenresCountOutputType = {
    tvshowGenres: number
  }

  export type GenresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tvshowGenres?: boolean | GenresCountOutputTypeCountTvshowGenresArgs
  }

  // Custom InputTypes
  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenresCountOutputType
     */
    select?: GenresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeCountTvshowGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TvShowGenresWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    list: number
    ratings: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | UsersCountOutputTypeCountListArgs
    ratings?: boolean | UsersCountOutputTypeCountRatingsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingsWhereInput
  }


  /**
   * Count Type ListsCountOutputType
   */

  export type ListsCountOutputType = {
    tvShows: number
  }

  export type ListsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tvShows?: boolean | ListsCountOutputTypeCountTvShowsArgs
  }

  // Custom InputTypes
  /**
   * ListsCountOutputType without action
   */
  export type ListsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListsCountOutputType
     */
    select?: ListsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListsCountOutputType without action
   */
  export type ListsCountOutputTypeCountTvShowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListTvShowWhereInput
  }


  /**
   * Count Type RatingScaleCountOutputType
   */

  export type RatingScaleCountOutputType = {
    ratings: number
  }

  export type RatingScaleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ratings?: boolean | RatingScaleCountOutputTypeCountRatingsArgs
  }

  // Custom InputTypes
  /**
   * RatingScaleCountOutputType without action
   */
  export type RatingScaleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingScaleCountOutputType
     */
    select?: RatingScaleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RatingScaleCountOutputType without action
   */
  export type RatingScaleCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingsWhereInput
  }


  /**
   * Count Type ActorsCountOutputType
   */

  export type ActorsCountOutputType = {
    tvShows: number
  }

  export type ActorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tvShows?: boolean | ActorsCountOutputTypeCountTvShowsArgs
  }

  // Custom InputTypes
  /**
   * ActorsCountOutputType without action
   */
  export type ActorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActorsCountOutputType
     */
    select?: ActorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActorsCountOutputType without action
   */
  export type ActorsCountOutputTypeCountTvShowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActorsOnTvShowsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TvShows
   */

  export type AggregateTvShows = {
    _count: TvShowsCountAggregateOutputType | null
    _min: TvShowsMinAggregateOutputType | null
    _max: TvShowsMaxAggregateOutputType | null
  }

  export type TvShowsMinAggregateOutputType = {
    id: string | null
    title: string | null
    synopsis: string | null
    cast: string | null
    poster: string | null
    premiereDate: Date | null
    originalName: string | null
    createdAt: Date | null
  }

  export type TvShowsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    synopsis: string | null
    cast: string | null
    poster: string | null
    premiereDate: Date | null
    originalName: string | null
    createdAt: Date | null
  }

  export type TvShowsCountAggregateOutputType = {
    id: number
    title: number
    synopsis: number
    cast: number
    poster: number
    premiereDate: number
    originalName: number
    createdAt: number
    _all: number
  }


  export type TvShowsMinAggregateInputType = {
    id?: true
    title?: true
    synopsis?: true
    cast?: true
    poster?: true
    premiereDate?: true
    originalName?: true
    createdAt?: true
  }

  export type TvShowsMaxAggregateInputType = {
    id?: true
    title?: true
    synopsis?: true
    cast?: true
    poster?: true
    premiereDate?: true
    originalName?: true
    createdAt?: true
  }

  export type TvShowsCountAggregateInputType = {
    id?: true
    title?: true
    synopsis?: true
    cast?: true
    poster?: true
    premiereDate?: true
    originalName?: true
    createdAt?: true
    _all?: true
  }

  export type TvShowsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TvShows to aggregate.
     */
    where?: TvShowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TvShows to fetch.
     */
    orderBy?: TvShowsOrderByWithRelationInput | TvShowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TvShowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TvShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TvShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TvShows
    **/
    _count?: true | TvShowsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TvShowsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TvShowsMaxAggregateInputType
  }

  export type GetTvShowsAggregateType<T extends TvShowsAggregateArgs> = {
        [P in keyof T & keyof AggregateTvShows]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTvShows[P]>
      : GetScalarType<T[P], AggregateTvShows[P]>
  }




  export type TvShowsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TvShowsWhereInput
    orderBy?: TvShowsOrderByWithAggregationInput | TvShowsOrderByWithAggregationInput[]
    by: TvShowsScalarFieldEnum[] | TvShowsScalarFieldEnum
    having?: TvShowsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TvShowsCountAggregateInputType | true
    _min?: TvShowsMinAggregateInputType
    _max?: TvShowsMaxAggregateInputType
  }

  export type TvShowsGroupByOutputType = {
    id: string
    title: string
    synopsis: string
    cast: string
    poster: string
    premiereDate: Date
    originalName: string
    createdAt: Date
    _count: TvShowsCountAggregateOutputType | null
    _min: TvShowsMinAggregateOutputType | null
    _max: TvShowsMaxAggregateOutputType | null
  }

  type GetTvShowsGroupByPayload<T extends TvShowsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TvShowsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TvShowsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TvShowsGroupByOutputType[P]>
            : GetScalarType<T[P], TvShowsGroupByOutputType[P]>
        }
      >
    >


  export type TvShowsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    synopsis?: boolean
    cast?: boolean
    poster?: boolean
    premiereDate?: boolean
    originalName?: boolean
    createdAt?: boolean
    tvshowGenres?: boolean | TvShows$tvshowGenresArgs<ExtArgs>
    lists?: boolean | TvShows$listsArgs<ExtArgs>
    ratings?: boolean | TvShows$ratingsArgs<ExtArgs>
    actors?: boolean | TvShows$actorsArgs<ExtArgs>
    _count?: boolean | TvShowsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tvShows"]>

  export type TvShowsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    synopsis?: boolean
    cast?: boolean
    poster?: boolean
    premiereDate?: boolean
    originalName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tvShows"]>

  export type TvShowsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    synopsis?: boolean
    cast?: boolean
    poster?: boolean
    premiereDate?: boolean
    originalName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tvShows"]>

  export type TvShowsSelectScalar = {
    id?: boolean
    title?: boolean
    synopsis?: boolean
    cast?: boolean
    poster?: boolean
    premiereDate?: boolean
    originalName?: boolean
    createdAt?: boolean
  }

  export type TvShowsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "synopsis" | "cast" | "poster" | "premiereDate" | "originalName" | "createdAt", ExtArgs["result"]["tvShows"]>
  export type TvShowsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tvshowGenres?: boolean | TvShows$tvshowGenresArgs<ExtArgs>
    lists?: boolean | TvShows$listsArgs<ExtArgs>
    ratings?: boolean | TvShows$ratingsArgs<ExtArgs>
    actors?: boolean | TvShows$actorsArgs<ExtArgs>
    _count?: boolean | TvShowsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TvShowsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TvShowsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TvShowsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TvShows"
    objects: {
      tvshowGenres: Prisma.$TvShowGenresPayload<ExtArgs>[]
      lists: Prisma.$ListTvShowPayload<ExtArgs>[]
      ratings: Prisma.$RatingsPayload<ExtArgs>[]
      actors: Prisma.$ActorsOnTvShowsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      synopsis: string
      cast: string
      poster: string
      premiereDate: Date
      originalName: string
      createdAt: Date
    }, ExtArgs["result"]["tvShows"]>
    composites: {}
  }

  type TvShowsGetPayload<S extends boolean | null | undefined | TvShowsDefaultArgs> = $Result.GetResult<Prisma.$TvShowsPayload, S>

  type TvShowsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TvShowsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TvShowsCountAggregateInputType | true
    }

  export interface TvShowsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TvShows'], meta: { name: 'TvShows' } }
    /**
     * Find zero or one TvShows that matches the filter.
     * @param {TvShowsFindUniqueArgs} args - Arguments to find a TvShows
     * @example
     * // Get one TvShows
     * const tvShows = await prisma.tvShows.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TvShowsFindUniqueArgs>(args: SelectSubset<T, TvShowsFindUniqueArgs<ExtArgs>>): Prisma__TvShowsClient<$Result.GetResult<Prisma.$TvShowsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TvShows that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TvShowsFindUniqueOrThrowArgs} args - Arguments to find a TvShows
     * @example
     * // Get one TvShows
     * const tvShows = await prisma.tvShows.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TvShowsFindUniqueOrThrowArgs>(args: SelectSubset<T, TvShowsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TvShowsClient<$Result.GetResult<Prisma.$TvShowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TvShows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvShowsFindFirstArgs} args - Arguments to find a TvShows
     * @example
     * // Get one TvShows
     * const tvShows = await prisma.tvShows.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TvShowsFindFirstArgs>(args?: SelectSubset<T, TvShowsFindFirstArgs<ExtArgs>>): Prisma__TvShowsClient<$Result.GetResult<Prisma.$TvShowsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TvShows that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvShowsFindFirstOrThrowArgs} args - Arguments to find a TvShows
     * @example
     * // Get one TvShows
     * const tvShows = await prisma.tvShows.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TvShowsFindFirstOrThrowArgs>(args?: SelectSubset<T, TvShowsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TvShowsClient<$Result.GetResult<Prisma.$TvShowsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TvShows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvShowsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TvShows
     * const tvShows = await prisma.tvShows.findMany()
     * 
     * // Get first 10 TvShows
     * const tvShows = await prisma.tvShows.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tvShowsWithIdOnly = await prisma.tvShows.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TvShowsFindManyArgs>(args?: SelectSubset<T, TvShowsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TvShowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TvShows.
     * @param {TvShowsCreateArgs} args - Arguments to create a TvShows.
     * @example
     * // Create one TvShows
     * const TvShows = await prisma.tvShows.create({
     *   data: {
     *     // ... data to create a TvShows
     *   }
     * })
     * 
     */
    create<T extends TvShowsCreateArgs>(args: SelectSubset<T, TvShowsCreateArgs<ExtArgs>>): Prisma__TvShowsClient<$Result.GetResult<Prisma.$TvShowsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TvShows.
     * @param {TvShowsCreateManyArgs} args - Arguments to create many TvShows.
     * @example
     * // Create many TvShows
     * const tvShows = await prisma.tvShows.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TvShowsCreateManyArgs>(args?: SelectSubset<T, TvShowsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TvShows and returns the data saved in the database.
     * @param {TvShowsCreateManyAndReturnArgs} args - Arguments to create many TvShows.
     * @example
     * // Create many TvShows
     * const tvShows = await prisma.tvShows.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TvShows and only return the `id`
     * const tvShowsWithIdOnly = await prisma.tvShows.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TvShowsCreateManyAndReturnArgs>(args?: SelectSubset<T, TvShowsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TvShowsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TvShows.
     * @param {TvShowsDeleteArgs} args - Arguments to delete one TvShows.
     * @example
     * // Delete one TvShows
     * const TvShows = await prisma.tvShows.delete({
     *   where: {
     *     // ... filter to delete one TvShows
     *   }
     * })
     * 
     */
    delete<T extends TvShowsDeleteArgs>(args: SelectSubset<T, TvShowsDeleteArgs<ExtArgs>>): Prisma__TvShowsClient<$Result.GetResult<Prisma.$TvShowsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TvShows.
     * @param {TvShowsUpdateArgs} args - Arguments to update one TvShows.
     * @example
     * // Update one TvShows
     * const tvShows = await prisma.tvShows.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TvShowsUpdateArgs>(args: SelectSubset<T, TvShowsUpdateArgs<ExtArgs>>): Prisma__TvShowsClient<$Result.GetResult<Prisma.$TvShowsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TvShows.
     * @param {TvShowsDeleteManyArgs} args - Arguments to filter TvShows to delete.
     * @example
     * // Delete a few TvShows
     * const { count } = await prisma.tvShows.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TvShowsDeleteManyArgs>(args?: SelectSubset<T, TvShowsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TvShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvShowsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TvShows
     * const tvShows = await prisma.tvShows.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TvShowsUpdateManyArgs>(args: SelectSubset<T, TvShowsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TvShows and returns the data updated in the database.
     * @param {TvShowsUpdateManyAndReturnArgs} args - Arguments to update many TvShows.
     * @example
     * // Update many TvShows
     * const tvShows = await prisma.tvShows.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TvShows and only return the `id`
     * const tvShowsWithIdOnly = await prisma.tvShows.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TvShowsUpdateManyAndReturnArgs>(args: SelectSubset<T, TvShowsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TvShowsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TvShows.
     * @param {TvShowsUpsertArgs} args - Arguments to update or create a TvShows.
     * @example
     * // Update or create a TvShows
     * const tvShows = await prisma.tvShows.upsert({
     *   create: {
     *     // ... data to create a TvShows
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TvShows we want to update
     *   }
     * })
     */
    upsert<T extends TvShowsUpsertArgs>(args: SelectSubset<T, TvShowsUpsertArgs<ExtArgs>>): Prisma__TvShowsClient<$Result.GetResult<Prisma.$TvShowsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TvShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvShowsCountArgs} args - Arguments to filter TvShows to count.
     * @example
     * // Count the number of TvShows
     * const count = await prisma.tvShows.count({
     *   where: {
     *     // ... the filter for the TvShows we want to count
     *   }
     * })
    **/
    count<T extends TvShowsCountArgs>(
      args?: Subset<T, TvShowsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TvShowsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TvShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvShowsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TvShowsAggregateArgs>(args: Subset<T, TvShowsAggregateArgs>): Prisma.PrismaPromise<GetTvShowsAggregateType<T>>

    /**
     * Group by TvShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvShowsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TvShowsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TvShowsGroupByArgs['orderBy'] }
        : { orderBy?: TvShowsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TvShowsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTvShowsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TvShows model
   */
  readonly fields: TvShowsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TvShows.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TvShowsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tvshowGenres<T extends TvShows$tvshowGenresArgs<ExtArgs> = {}>(args?: Subset<T, TvShows$tvshowGenresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TvShowGenresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lists<T extends TvShows$listsArgs<ExtArgs> = {}>(args?: Subset<T, TvShows$listsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListTvShowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends TvShows$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, TvShows$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    actors<T extends TvShows$actorsArgs<ExtArgs> = {}>(args?: Subset<T, TvShows$actorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActorsOnTvShowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TvShows model
   */
  interface TvShowsFieldRefs {
    readonly id: FieldRef<"TvShows", 'String'>
    readonly title: FieldRef<"TvShows", 'String'>
    readonly synopsis: FieldRef<"TvShows", 'String'>
    readonly cast: FieldRef<"TvShows", 'String'>
    readonly poster: FieldRef<"TvShows", 'String'>
    readonly premiereDate: FieldRef<"TvShows", 'DateTime'>
    readonly originalName: FieldRef<"TvShows", 'String'>
    readonly createdAt: FieldRef<"TvShows", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TvShows findUnique
   */
  export type TvShowsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShows
     */
    select?: TvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShows
     */
    omit?: TvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowsInclude<ExtArgs> | null
    /**
     * Filter, which TvShows to fetch.
     */
    where: TvShowsWhereUniqueInput
  }

  /**
   * TvShows findUniqueOrThrow
   */
  export type TvShowsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShows
     */
    select?: TvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShows
     */
    omit?: TvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowsInclude<ExtArgs> | null
    /**
     * Filter, which TvShows to fetch.
     */
    where: TvShowsWhereUniqueInput
  }

  /**
   * TvShows findFirst
   */
  export type TvShowsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShows
     */
    select?: TvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShows
     */
    omit?: TvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowsInclude<ExtArgs> | null
    /**
     * Filter, which TvShows to fetch.
     */
    where?: TvShowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TvShows to fetch.
     */
    orderBy?: TvShowsOrderByWithRelationInput | TvShowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TvShows.
     */
    cursor?: TvShowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TvShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TvShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TvShows.
     */
    distinct?: TvShowsScalarFieldEnum | TvShowsScalarFieldEnum[]
  }

  /**
   * TvShows findFirstOrThrow
   */
  export type TvShowsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShows
     */
    select?: TvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShows
     */
    omit?: TvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowsInclude<ExtArgs> | null
    /**
     * Filter, which TvShows to fetch.
     */
    where?: TvShowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TvShows to fetch.
     */
    orderBy?: TvShowsOrderByWithRelationInput | TvShowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TvShows.
     */
    cursor?: TvShowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TvShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TvShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TvShows.
     */
    distinct?: TvShowsScalarFieldEnum | TvShowsScalarFieldEnum[]
  }

  /**
   * TvShows findMany
   */
  export type TvShowsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShows
     */
    select?: TvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShows
     */
    omit?: TvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowsInclude<ExtArgs> | null
    /**
     * Filter, which TvShows to fetch.
     */
    where?: TvShowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TvShows to fetch.
     */
    orderBy?: TvShowsOrderByWithRelationInput | TvShowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TvShows.
     */
    cursor?: TvShowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TvShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TvShows.
     */
    skip?: number
    distinct?: TvShowsScalarFieldEnum | TvShowsScalarFieldEnum[]
  }

  /**
   * TvShows create
   */
  export type TvShowsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShows
     */
    select?: TvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShows
     */
    omit?: TvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowsInclude<ExtArgs> | null
    /**
     * The data needed to create a TvShows.
     */
    data: XOR<TvShowsCreateInput, TvShowsUncheckedCreateInput>
  }

  /**
   * TvShows createMany
   */
  export type TvShowsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TvShows.
     */
    data: TvShowsCreateManyInput | TvShowsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TvShows createManyAndReturn
   */
  export type TvShowsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShows
     */
    select?: TvShowsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TvShows
     */
    omit?: TvShowsOmit<ExtArgs> | null
    /**
     * The data used to create many TvShows.
     */
    data: TvShowsCreateManyInput | TvShowsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TvShows update
   */
  export type TvShowsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShows
     */
    select?: TvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShows
     */
    omit?: TvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowsInclude<ExtArgs> | null
    /**
     * The data needed to update a TvShows.
     */
    data: XOR<TvShowsUpdateInput, TvShowsUncheckedUpdateInput>
    /**
     * Choose, which TvShows to update.
     */
    where: TvShowsWhereUniqueInput
  }

  /**
   * TvShows updateMany
   */
  export type TvShowsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TvShows.
     */
    data: XOR<TvShowsUpdateManyMutationInput, TvShowsUncheckedUpdateManyInput>
    /**
     * Filter which TvShows to update
     */
    where?: TvShowsWhereInput
    /**
     * Limit how many TvShows to update.
     */
    limit?: number
  }

  /**
   * TvShows updateManyAndReturn
   */
  export type TvShowsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShows
     */
    select?: TvShowsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TvShows
     */
    omit?: TvShowsOmit<ExtArgs> | null
    /**
     * The data used to update TvShows.
     */
    data: XOR<TvShowsUpdateManyMutationInput, TvShowsUncheckedUpdateManyInput>
    /**
     * Filter which TvShows to update
     */
    where?: TvShowsWhereInput
    /**
     * Limit how many TvShows to update.
     */
    limit?: number
  }

  /**
   * TvShows upsert
   */
  export type TvShowsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShows
     */
    select?: TvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShows
     */
    omit?: TvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowsInclude<ExtArgs> | null
    /**
     * The filter to search for the TvShows to update in case it exists.
     */
    where: TvShowsWhereUniqueInput
    /**
     * In case the TvShows found by the `where` argument doesn't exist, create a new TvShows with this data.
     */
    create: XOR<TvShowsCreateInput, TvShowsUncheckedCreateInput>
    /**
     * In case the TvShows was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TvShowsUpdateInput, TvShowsUncheckedUpdateInput>
  }

  /**
   * TvShows delete
   */
  export type TvShowsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShows
     */
    select?: TvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShows
     */
    omit?: TvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowsInclude<ExtArgs> | null
    /**
     * Filter which TvShows to delete.
     */
    where: TvShowsWhereUniqueInput
  }

  /**
   * TvShows deleteMany
   */
  export type TvShowsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TvShows to delete
     */
    where?: TvShowsWhereInput
    /**
     * Limit how many TvShows to delete.
     */
    limit?: number
  }

  /**
   * TvShows.tvshowGenres
   */
  export type TvShows$tvshowGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShowGenres
     */
    select?: TvShowGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShowGenres
     */
    omit?: TvShowGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowGenresInclude<ExtArgs> | null
    where?: TvShowGenresWhereInput
    orderBy?: TvShowGenresOrderByWithRelationInput | TvShowGenresOrderByWithRelationInput[]
    cursor?: TvShowGenresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TvShowGenresScalarFieldEnum | TvShowGenresScalarFieldEnum[]
  }

  /**
   * TvShows.lists
   */
  export type TvShows$listsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListTvShow
     */
    select?: ListTvShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListTvShow
     */
    omit?: ListTvShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListTvShowInclude<ExtArgs> | null
    where?: ListTvShowWhereInput
    orderBy?: ListTvShowOrderByWithRelationInput | ListTvShowOrderByWithRelationInput[]
    cursor?: ListTvShowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListTvShowScalarFieldEnum | ListTvShowScalarFieldEnum[]
  }

  /**
   * TvShows.ratings
   */
  export type TvShows$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    where?: RatingsWhereInput
    orderBy?: RatingsOrderByWithRelationInput | RatingsOrderByWithRelationInput[]
    cursor?: RatingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * TvShows.actors
   */
  export type TvShows$actorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActorsOnTvShows
     */
    select?: ActorsOnTvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActorsOnTvShows
     */
    omit?: ActorsOnTvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsOnTvShowsInclude<ExtArgs> | null
    where?: ActorsOnTvShowsWhereInput
    orderBy?: ActorsOnTvShowsOrderByWithRelationInput | ActorsOnTvShowsOrderByWithRelationInput[]
    cursor?: ActorsOnTvShowsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActorsOnTvShowsScalarFieldEnum | ActorsOnTvShowsScalarFieldEnum[]
  }

  /**
   * TvShows without action
   */
  export type TvShowsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShows
     */
    select?: TvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShows
     */
    omit?: TvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowsInclude<ExtArgs> | null
  }


  /**
   * Model Genres
   */

  export type AggregateGenres = {
    _count: GenresCountAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  export type GenresMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type GenresMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type GenresCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GenresMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenresMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenresCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GenresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to aggregate.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenresMaxAggregateInputType
  }

  export type GetGenresAggregateType<T extends GenresAggregateArgs> = {
        [P in keyof T & keyof AggregateGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenres[P]>
      : GetScalarType<T[P], AggregateGenres[P]>
  }




  export type GenresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenresWhereInput
    orderBy?: GenresOrderByWithAggregationInput | GenresOrderByWithAggregationInput[]
    by: GenresScalarFieldEnum[] | GenresScalarFieldEnum
    having?: GenresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenresCountAggregateInputType | true
    _min?: GenresMinAggregateInputType
    _max?: GenresMaxAggregateInputType
  }

  export type GenresGroupByOutputType = {
    id: string
    name: string
    _count: GenresCountAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  type GetGenresGroupByPayload<T extends GenresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenresGroupByOutputType[P]>
            : GetScalarType<T[P], GenresGroupByOutputType[P]>
        }
      >
    >


  export type GenresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tvshowGenres?: boolean | Genres$tvshowGenresArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genres"]>

  export type GenresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["genres"]>

  export type GenresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["genres"]>

  export type GenresSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GenresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["genres"]>
  export type GenresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tvshowGenres?: boolean | Genres$tvshowGenresArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GenresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genres"
    objects: {
      tvshowGenres: Prisma.$TvShowGenresPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["genres"]>
    composites: {}
  }

  type GenresGetPayload<S extends boolean | null | undefined | GenresDefaultArgs> = $Result.GetResult<Prisma.$GenresPayload, S>

  type GenresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenresCountAggregateInputType | true
    }

  export interface GenresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genres'], meta: { name: 'Genres' } }
    /**
     * Find zero or one Genres that matches the filter.
     * @param {GenresFindUniqueArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenresFindUniqueArgs>(args: SelectSubset<T, GenresFindUniqueArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genres that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenresFindUniqueOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenresFindUniqueOrThrowArgs>(args: SelectSubset<T, GenresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindFirstArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenresFindFirstArgs>(args?: SelectSubset<T, GenresFindFirstArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindFirstOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenresFindFirstOrThrowArgs>(args?: SelectSubset<T, GenresFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genres.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genresWithIdOnly = await prisma.genres.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenresFindManyArgs>(args?: SelectSubset<T, GenresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genres.
     * @param {GenresCreateArgs} args - Arguments to create a Genres.
     * @example
     * // Create one Genres
     * const Genres = await prisma.genres.create({
     *   data: {
     *     // ... data to create a Genres
     *   }
     * })
     * 
     */
    create<T extends GenresCreateArgs>(args: SelectSubset<T, GenresCreateArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenresCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenresCreateManyArgs>(args?: SelectSubset<T, GenresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenresCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genres = await prisma.genres.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genresWithIdOnly = await prisma.genres.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenresCreateManyAndReturnArgs>(args?: SelectSubset<T, GenresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genres.
     * @param {GenresDeleteArgs} args - Arguments to delete one Genres.
     * @example
     * // Delete one Genres
     * const Genres = await prisma.genres.delete({
     *   where: {
     *     // ... filter to delete one Genres
     *   }
     * })
     * 
     */
    delete<T extends GenresDeleteArgs>(args: SelectSubset<T, GenresDeleteArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genres.
     * @param {GenresUpdateArgs} args - Arguments to update one Genres.
     * @example
     * // Update one Genres
     * const genres = await prisma.genres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenresUpdateArgs>(args: SelectSubset<T, GenresUpdateArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenresDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenresDeleteManyArgs>(args?: SelectSubset<T, GenresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenresUpdateManyArgs>(args: SelectSubset<T, GenresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {GenresUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genresWithIdOnly = await prisma.genres.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GenresUpdateManyAndReturnArgs>(args: SelectSubset<T, GenresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genres.
     * @param {GenresUpsertArgs} args - Arguments to update or create a Genres.
     * @example
     * // Update or create a Genres
     * const genres = await prisma.genres.upsert({
     *   create: {
     *     // ... data to create a Genres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genres we want to update
     *   }
     * })
     */
    upsert<T extends GenresUpsertArgs>(args: SelectSubset<T, GenresUpsertArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genres.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenresCountArgs>(
      args?: Subset<T, GenresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenresAggregateArgs>(args: Subset<T, GenresAggregateArgs>): Prisma.PrismaPromise<GetGenresAggregateType<T>>

    /**
     * Group by Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenresGroupByArgs['orderBy'] }
        : { orderBy?: GenresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genres model
   */
  readonly fields: GenresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tvshowGenres<T extends Genres$tvshowGenresArgs<ExtArgs> = {}>(args?: Subset<T, Genres$tvshowGenresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TvShowGenresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Genres model
   */
  interface GenresFieldRefs {
    readonly id: FieldRef<"Genres", 'String'>
    readonly name: FieldRef<"Genres", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genres findUnique
   */
  export type GenresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where: GenresWhereUniqueInput
  }

  /**
   * Genres findUniqueOrThrow
   */
  export type GenresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where: GenresWhereUniqueInput
  }

  /**
   * Genres findFirst
   */
  export type GenresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * Genres findFirstOrThrow
   */
  export type GenresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * Genres findMany
   */
  export type GenresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }

  /**
   * Genres create
   */
  export type GenresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The data needed to create a Genres.
     */
    data: XOR<GenresCreateInput, GenresUncheckedCreateInput>
  }

  /**
   * Genres createMany
   */
  export type GenresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenresCreateManyInput | GenresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genres createManyAndReturn
   */
  export type GenresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenresCreateManyInput | GenresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genres update
   */
  export type GenresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The data needed to update a Genres.
     */
    data: XOR<GenresUpdateInput, GenresUncheckedUpdateInput>
    /**
     * Choose, which Genres to update.
     */
    where: GenresWhereUniqueInput
  }

  /**
   * Genres updateMany
   */
  export type GenresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenresUpdateManyMutationInput, GenresUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenresWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genres updateManyAndReturn
   */
  export type GenresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * The data used to update Genres.
     */
    data: XOR<GenresUpdateManyMutationInput, GenresUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenresWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genres upsert
   */
  export type GenresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The filter to search for the Genres to update in case it exists.
     */
    where: GenresWhereUniqueInput
    /**
     * In case the Genres found by the `where` argument doesn't exist, create a new Genres with this data.
     */
    create: XOR<GenresCreateInput, GenresUncheckedCreateInput>
    /**
     * In case the Genres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenresUpdateInput, GenresUncheckedUpdateInput>
  }

  /**
   * Genres delete
   */
  export type GenresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter which Genres to delete.
     */
    where: GenresWhereUniqueInput
  }

  /**
   * Genres deleteMany
   */
  export type GenresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenresWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genres.tvshowGenres
   */
  export type Genres$tvshowGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShowGenres
     */
    select?: TvShowGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShowGenres
     */
    omit?: TvShowGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowGenresInclude<ExtArgs> | null
    where?: TvShowGenresWhereInput
    orderBy?: TvShowGenresOrderByWithRelationInput | TvShowGenresOrderByWithRelationInput[]
    cursor?: TvShowGenresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TvShowGenresScalarFieldEnum | TvShowGenresScalarFieldEnum[]
  }

  /**
   * Genres without action
   */
  export type GenresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genres
     */
    omit?: GenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenresInclude<ExtArgs> | null
  }


  /**
   * Model TvShowGenres
   */

  export type AggregateTvShowGenres = {
    _count: TvShowGenresCountAggregateOutputType | null
    _min: TvShowGenresMinAggregateOutputType | null
    _max: TvShowGenresMaxAggregateOutputType | null
  }

  export type TvShowGenresMinAggregateOutputType = {
    id: string | null
    tvShowId: string | null
    genreId: string | null
  }

  export type TvShowGenresMaxAggregateOutputType = {
    id: string | null
    tvShowId: string | null
    genreId: string | null
  }

  export type TvShowGenresCountAggregateOutputType = {
    id: number
    tvShowId: number
    genreId: number
    _all: number
  }


  export type TvShowGenresMinAggregateInputType = {
    id?: true
    tvShowId?: true
    genreId?: true
  }

  export type TvShowGenresMaxAggregateInputType = {
    id?: true
    tvShowId?: true
    genreId?: true
  }

  export type TvShowGenresCountAggregateInputType = {
    id?: true
    tvShowId?: true
    genreId?: true
    _all?: true
  }

  export type TvShowGenresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TvShowGenres to aggregate.
     */
    where?: TvShowGenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TvShowGenres to fetch.
     */
    orderBy?: TvShowGenresOrderByWithRelationInput | TvShowGenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TvShowGenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TvShowGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TvShowGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TvShowGenres
    **/
    _count?: true | TvShowGenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TvShowGenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TvShowGenresMaxAggregateInputType
  }

  export type GetTvShowGenresAggregateType<T extends TvShowGenresAggregateArgs> = {
        [P in keyof T & keyof AggregateTvShowGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTvShowGenres[P]>
      : GetScalarType<T[P], AggregateTvShowGenres[P]>
  }




  export type TvShowGenresGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TvShowGenresWhereInput
    orderBy?: TvShowGenresOrderByWithAggregationInput | TvShowGenresOrderByWithAggregationInput[]
    by: TvShowGenresScalarFieldEnum[] | TvShowGenresScalarFieldEnum
    having?: TvShowGenresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TvShowGenresCountAggregateInputType | true
    _min?: TvShowGenresMinAggregateInputType
    _max?: TvShowGenresMaxAggregateInputType
  }

  export type TvShowGenresGroupByOutputType = {
    id: string
    tvShowId: string
    genreId: string
    _count: TvShowGenresCountAggregateOutputType | null
    _min: TvShowGenresMinAggregateOutputType | null
    _max: TvShowGenresMaxAggregateOutputType | null
  }

  type GetTvShowGenresGroupByPayload<T extends TvShowGenresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TvShowGenresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TvShowGenresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TvShowGenresGroupByOutputType[P]>
            : GetScalarType<T[P], TvShowGenresGroupByOutputType[P]>
        }
      >
    >


  export type TvShowGenresSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tvShowId?: boolean
    genreId?: boolean
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
    genre?: boolean | GenresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tvShowGenres"]>

  export type TvShowGenresSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tvShowId?: boolean
    genreId?: boolean
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
    genre?: boolean | GenresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tvShowGenres"]>

  export type TvShowGenresSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tvShowId?: boolean
    genreId?: boolean
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
    genre?: boolean | GenresDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tvShowGenres"]>

  export type TvShowGenresSelectScalar = {
    id?: boolean
    tvShowId?: boolean
    genreId?: boolean
  }

  export type TvShowGenresOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tvShowId" | "genreId", ExtArgs["result"]["tvShowGenres"]>
  export type TvShowGenresInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
    genre?: boolean | GenresDefaultArgs<ExtArgs>
  }
  export type TvShowGenresIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
    genre?: boolean | GenresDefaultArgs<ExtArgs>
  }
  export type TvShowGenresIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
    genre?: boolean | GenresDefaultArgs<ExtArgs>
  }

  export type $TvShowGenresPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TvShowGenres"
    objects: {
      tvShow: Prisma.$TvShowsPayload<ExtArgs>
      genre: Prisma.$GenresPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tvShowId: string
      genreId: string
    }, ExtArgs["result"]["tvShowGenres"]>
    composites: {}
  }

  type TvShowGenresGetPayload<S extends boolean | null | undefined | TvShowGenresDefaultArgs> = $Result.GetResult<Prisma.$TvShowGenresPayload, S>

  type TvShowGenresCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TvShowGenresFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TvShowGenresCountAggregateInputType | true
    }

  export interface TvShowGenresDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TvShowGenres'], meta: { name: 'TvShowGenres' } }
    /**
     * Find zero or one TvShowGenres that matches the filter.
     * @param {TvShowGenresFindUniqueArgs} args - Arguments to find a TvShowGenres
     * @example
     * // Get one TvShowGenres
     * const tvShowGenres = await prisma.tvShowGenres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TvShowGenresFindUniqueArgs>(args: SelectSubset<T, TvShowGenresFindUniqueArgs<ExtArgs>>): Prisma__TvShowGenresClient<$Result.GetResult<Prisma.$TvShowGenresPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TvShowGenres that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TvShowGenresFindUniqueOrThrowArgs} args - Arguments to find a TvShowGenres
     * @example
     * // Get one TvShowGenres
     * const tvShowGenres = await prisma.tvShowGenres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TvShowGenresFindUniqueOrThrowArgs>(args: SelectSubset<T, TvShowGenresFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TvShowGenresClient<$Result.GetResult<Prisma.$TvShowGenresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TvShowGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvShowGenresFindFirstArgs} args - Arguments to find a TvShowGenres
     * @example
     * // Get one TvShowGenres
     * const tvShowGenres = await prisma.tvShowGenres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TvShowGenresFindFirstArgs>(args?: SelectSubset<T, TvShowGenresFindFirstArgs<ExtArgs>>): Prisma__TvShowGenresClient<$Result.GetResult<Prisma.$TvShowGenresPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TvShowGenres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvShowGenresFindFirstOrThrowArgs} args - Arguments to find a TvShowGenres
     * @example
     * // Get one TvShowGenres
     * const tvShowGenres = await prisma.tvShowGenres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TvShowGenresFindFirstOrThrowArgs>(args?: SelectSubset<T, TvShowGenresFindFirstOrThrowArgs<ExtArgs>>): Prisma__TvShowGenresClient<$Result.GetResult<Prisma.$TvShowGenresPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TvShowGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvShowGenresFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TvShowGenres
     * const tvShowGenres = await prisma.tvShowGenres.findMany()
     * 
     * // Get first 10 TvShowGenres
     * const tvShowGenres = await prisma.tvShowGenres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tvShowGenresWithIdOnly = await prisma.tvShowGenres.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TvShowGenresFindManyArgs>(args?: SelectSubset<T, TvShowGenresFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TvShowGenresPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TvShowGenres.
     * @param {TvShowGenresCreateArgs} args - Arguments to create a TvShowGenres.
     * @example
     * // Create one TvShowGenres
     * const TvShowGenres = await prisma.tvShowGenres.create({
     *   data: {
     *     // ... data to create a TvShowGenres
     *   }
     * })
     * 
     */
    create<T extends TvShowGenresCreateArgs>(args: SelectSubset<T, TvShowGenresCreateArgs<ExtArgs>>): Prisma__TvShowGenresClient<$Result.GetResult<Prisma.$TvShowGenresPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TvShowGenres.
     * @param {TvShowGenresCreateManyArgs} args - Arguments to create many TvShowGenres.
     * @example
     * // Create many TvShowGenres
     * const tvShowGenres = await prisma.tvShowGenres.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TvShowGenresCreateManyArgs>(args?: SelectSubset<T, TvShowGenresCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TvShowGenres and returns the data saved in the database.
     * @param {TvShowGenresCreateManyAndReturnArgs} args - Arguments to create many TvShowGenres.
     * @example
     * // Create many TvShowGenres
     * const tvShowGenres = await prisma.tvShowGenres.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TvShowGenres and only return the `id`
     * const tvShowGenresWithIdOnly = await prisma.tvShowGenres.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TvShowGenresCreateManyAndReturnArgs>(args?: SelectSubset<T, TvShowGenresCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TvShowGenresPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TvShowGenres.
     * @param {TvShowGenresDeleteArgs} args - Arguments to delete one TvShowGenres.
     * @example
     * // Delete one TvShowGenres
     * const TvShowGenres = await prisma.tvShowGenres.delete({
     *   where: {
     *     // ... filter to delete one TvShowGenres
     *   }
     * })
     * 
     */
    delete<T extends TvShowGenresDeleteArgs>(args: SelectSubset<T, TvShowGenresDeleteArgs<ExtArgs>>): Prisma__TvShowGenresClient<$Result.GetResult<Prisma.$TvShowGenresPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TvShowGenres.
     * @param {TvShowGenresUpdateArgs} args - Arguments to update one TvShowGenres.
     * @example
     * // Update one TvShowGenres
     * const tvShowGenres = await prisma.tvShowGenres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TvShowGenresUpdateArgs>(args: SelectSubset<T, TvShowGenresUpdateArgs<ExtArgs>>): Prisma__TvShowGenresClient<$Result.GetResult<Prisma.$TvShowGenresPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TvShowGenres.
     * @param {TvShowGenresDeleteManyArgs} args - Arguments to filter TvShowGenres to delete.
     * @example
     * // Delete a few TvShowGenres
     * const { count } = await prisma.tvShowGenres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TvShowGenresDeleteManyArgs>(args?: SelectSubset<T, TvShowGenresDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TvShowGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvShowGenresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TvShowGenres
     * const tvShowGenres = await prisma.tvShowGenres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TvShowGenresUpdateManyArgs>(args: SelectSubset<T, TvShowGenresUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TvShowGenres and returns the data updated in the database.
     * @param {TvShowGenresUpdateManyAndReturnArgs} args - Arguments to update many TvShowGenres.
     * @example
     * // Update many TvShowGenres
     * const tvShowGenres = await prisma.tvShowGenres.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TvShowGenres and only return the `id`
     * const tvShowGenresWithIdOnly = await prisma.tvShowGenres.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TvShowGenresUpdateManyAndReturnArgs>(args: SelectSubset<T, TvShowGenresUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TvShowGenresPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TvShowGenres.
     * @param {TvShowGenresUpsertArgs} args - Arguments to update or create a TvShowGenres.
     * @example
     * // Update or create a TvShowGenres
     * const tvShowGenres = await prisma.tvShowGenres.upsert({
     *   create: {
     *     // ... data to create a TvShowGenres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TvShowGenres we want to update
     *   }
     * })
     */
    upsert<T extends TvShowGenresUpsertArgs>(args: SelectSubset<T, TvShowGenresUpsertArgs<ExtArgs>>): Prisma__TvShowGenresClient<$Result.GetResult<Prisma.$TvShowGenresPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TvShowGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvShowGenresCountArgs} args - Arguments to filter TvShowGenres to count.
     * @example
     * // Count the number of TvShowGenres
     * const count = await prisma.tvShowGenres.count({
     *   where: {
     *     // ... the filter for the TvShowGenres we want to count
     *   }
     * })
    **/
    count<T extends TvShowGenresCountArgs>(
      args?: Subset<T, TvShowGenresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TvShowGenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TvShowGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvShowGenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TvShowGenresAggregateArgs>(args: Subset<T, TvShowGenresAggregateArgs>): Prisma.PrismaPromise<GetTvShowGenresAggregateType<T>>

    /**
     * Group by TvShowGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TvShowGenresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TvShowGenresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TvShowGenresGroupByArgs['orderBy'] }
        : { orderBy?: TvShowGenresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TvShowGenresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTvShowGenresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TvShowGenres model
   */
  readonly fields: TvShowGenresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TvShowGenres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TvShowGenresClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tvShow<T extends TvShowsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TvShowsDefaultArgs<ExtArgs>>): Prisma__TvShowsClient<$Result.GetResult<Prisma.$TvShowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genre<T extends GenresDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenresDefaultArgs<ExtArgs>>): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TvShowGenres model
   */
  interface TvShowGenresFieldRefs {
    readonly id: FieldRef<"TvShowGenres", 'String'>
    readonly tvShowId: FieldRef<"TvShowGenres", 'String'>
    readonly genreId: FieldRef<"TvShowGenres", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TvShowGenres findUnique
   */
  export type TvShowGenresFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShowGenres
     */
    select?: TvShowGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShowGenres
     */
    omit?: TvShowGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowGenresInclude<ExtArgs> | null
    /**
     * Filter, which TvShowGenres to fetch.
     */
    where: TvShowGenresWhereUniqueInput
  }

  /**
   * TvShowGenres findUniqueOrThrow
   */
  export type TvShowGenresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShowGenres
     */
    select?: TvShowGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShowGenres
     */
    omit?: TvShowGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowGenresInclude<ExtArgs> | null
    /**
     * Filter, which TvShowGenres to fetch.
     */
    where: TvShowGenresWhereUniqueInput
  }

  /**
   * TvShowGenres findFirst
   */
  export type TvShowGenresFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShowGenres
     */
    select?: TvShowGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShowGenres
     */
    omit?: TvShowGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowGenresInclude<ExtArgs> | null
    /**
     * Filter, which TvShowGenres to fetch.
     */
    where?: TvShowGenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TvShowGenres to fetch.
     */
    orderBy?: TvShowGenresOrderByWithRelationInput | TvShowGenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TvShowGenres.
     */
    cursor?: TvShowGenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TvShowGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TvShowGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TvShowGenres.
     */
    distinct?: TvShowGenresScalarFieldEnum | TvShowGenresScalarFieldEnum[]
  }

  /**
   * TvShowGenres findFirstOrThrow
   */
  export type TvShowGenresFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShowGenres
     */
    select?: TvShowGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShowGenres
     */
    omit?: TvShowGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowGenresInclude<ExtArgs> | null
    /**
     * Filter, which TvShowGenres to fetch.
     */
    where?: TvShowGenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TvShowGenres to fetch.
     */
    orderBy?: TvShowGenresOrderByWithRelationInput | TvShowGenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TvShowGenres.
     */
    cursor?: TvShowGenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TvShowGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TvShowGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TvShowGenres.
     */
    distinct?: TvShowGenresScalarFieldEnum | TvShowGenresScalarFieldEnum[]
  }

  /**
   * TvShowGenres findMany
   */
  export type TvShowGenresFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShowGenres
     */
    select?: TvShowGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShowGenres
     */
    omit?: TvShowGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowGenresInclude<ExtArgs> | null
    /**
     * Filter, which TvShowGenres to fetch.
     */
    where?: TvShowGenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TvShowGenres to fetch.
     */
    orderBy?: TvShowGenresOrderByWithRelationInput | TvShowGenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TvShowGenres.
     */
    cursor?: TvShowGenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TvShowGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TvShowGenres.
     */
    skip?: number
    distinct?: TvShowGenresScalarFieldEnum | TvShowGenresScalarFieldEnum[]
  }

  /**
   * TvShowGenres create
   */
  export type TvShowGenresCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShowGenres
     */
    select?: TvShowGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShowGenres
     */
    omit?: TvShowGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowGenresInclude<ExtArgs> | null
    /**
     * The data needed to create a TvShowGenres.
     */
    data: XOR<TvShowGenresCreateInput, TvShowGenresUncheckedCreateInput>
  }

  /**
   * TvShowGenres createMany
   */
  export type TvShowGenresCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TvShowGenres.
     */
    data: TvShowGenresCreateManyInput | TvShowGenresCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TvShowGenres createManyAndReturn
   */
  export type TvShowGenresCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShowGenres
     */
    select?: TvShowGenresSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TvShowGenres
     */
    omit?: TvShowGenresOmit<ExtArgs> | null
    /**
     * The data used to create many TvShowGenres.
     */
    data: TvShowGenresCreateManyInput | TvShowGenresCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowGenresIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TvShowGenres update
   */
  export type TvShowGenresUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShowGenres
     */
    select?: TvShowGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShowGenres
     */
    omit?: TvShowGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowGenresInclude<ExtArgs> | null
    /**
     * The data needed to update a TvShowGenres.
     */
    data: XOR<TvShowGenresUpdateInput, TvShowGenresUncheckedUpdateInput>
    /**
     * Choose, which TvShowGenres to update.
     */
    where: TvShowGenresWhereUniqueInput
  }

  /**
   * TvShowGenres updateMany
   */
  export type TvShowGenresUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TvShowGenres.
     */
    data: XOR<TvShowGenresUpdateManyMutationInput, TvShowGenresUncheckedUpdateManyInput>
    /**
     * Filter which TvShowGenres to update
     */
    where?: TvShowGenresWhereInput
    /**
     * Limit how many TvShowGenres to update.
     */
    limit?: number
  }

  /**
   * TvShowGenres updateManyAndReturn
   */
  export type TvShowGenresUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShowGenres
     */
    select?: TvShowGenresSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TvShowGenres
     */
    omit?: TvShowGenresOmit<ExtArgs> | null
    /**
     * The data used to update TvShowGenres.
     */
    data: XOR<TvShowGenresUpdateManyMutationInput, TvShowGenresUncheckedUpdateManyInput>
    /**
     * Filter which TvShowGenres to update
     */
    where?: TvShowGenresWhereInput
    /**
     * Limit how many TvShowGenres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowGenresIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TvShowGenres upsert
   */
  export type TvShowGenresUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShowGenres
     */
    select?: TvShowGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShowGenres
     */
    omit?: TvShowGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowGenresInclude<ExtArgs> | null
    /**
     * The filter to search for the TvShowGenres to update in case it exists.
     */
    where: TvShowGenresWhereUniqueInput
    /**
     * In case the TvShowGenres found by the `where` argument doesn't exist, create a new TvShowGenres with this data.
     */
    create: XOR<TvShowGenresCreateInput, TvShowGenresUncheckedCreateInput>
    /**
     * In case the TvShowGenres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TvShowGenresUpdateInput, TvShowGenresUncheckedUpdateInput>
  }

  /**
   * TvShowGenres delete
   */
  export type TvShowGenresDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShowGenres
     */
    select?: TvShowGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShowGenres
     */
    omit?: TvShowGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowGenresInclude<ExtArgs> | null
    /**
     * Filter which TvShowGenres to delete.
     */
    where: TvShowGenresWhereUniqueInput
  }

  /**
   * TvShowGenres deleteMany
   */
  export type TvShowGenresDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TvShowGenres to delete
     */
    where?: TvShowGenresWhereInput
    /**
     * Limit how many TvShowGenres to delete.
     */
    limit?: number
  }

  /**
   * TvShowGenres without action
   */
  export type TvShowGenresDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TvShowGenres
     */
    select?: TvShowGenresSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TvShowGenres
     */
    omit?: TvShowGenresOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TvShowGenresInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    email: string
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    list?: boolean | Users$listArgs<ExtArgs>
    ratings?: boolean | Users$ratingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "username" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | Users$listArgs<ExtArgs>
    ratings?: boolean | Users$ratingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      list: Prisma.$ListsPayload<ExtArgs>[]
      ratings: Prisma.$RatingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    list<T extends Users$listArgs<ExtArgs> = {}>(args?: Subset<T, Users$listArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends Users$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Users$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.list
   */
  export type Users$listArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lists
     */
    select?: ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lists
     */
    omit?: ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListsInclude<ExtArgs> | null
    where?: ListsWhereInput
    orderBy?: ListsOrderByWithRelationInput | ListsOrderByWithRelationInput[]
    cursor?: ListsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListsScalarFieldEnum | ListsScalarFieldEnum[]
  }

  /**
   * Users.ratings
   */
  export type Users$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    where?: RatingsWhereInput
    orderBy?: RatingsOrderByWithRelationInput | RatingsOrderByWithRelationInput[]
    cursor?: RatingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model ListTvShow
   */

  export type AggregateListTvShow = {
    _count: ListTvShowCountAggregateOutputType | null
    _avg: ListTvShowAvgAggregateOutputType | null
    _sum: ListTvShowSumAggregateOutputType | null
    _min: ListTvShowMinAggregateOutputType | null
    _max: ListTvShowMaxAggregateOutputType | null
  }

  export type ListTvShowAvgAggregateOutputType = {
    order: number | null
  }

  export type ListTvShowSumAggregateOutputType = {
    order: number | null
  }

  export type ListTvShowMinAggregateOutputType = {
    id: string | null
    listId: string | null
    tvShowId: string | null
    addedAt: Date | null
    order: number | null
  }

  export type ListTvShowMaxAggregateOutputType = {
    id: string | null
    listId: string | null
    tvShowId: string | null
    addedAt: Date | null
    order: number | null
  }

  export type ListTvShowCountAggregateOutputType = {
    id: number
    listId: number
    tvShowId: number
    addedAt: number
    order: number
    _all: number
  }


  export type ListTvShowAvgAggregateInputType = {
    order?: true
  }

  export type ListTvShowSumAggregateInputType = {
    order?: true
  }

  export type ListTvShowMinAggregateInputType = {
    id?: true
    listId?: true
    tvShowId?: true
    addedAt?: true
    order?: true
  }

  export type ListTvShowMaxAggregateInputType = {
    id?: true
    listId?: true
    tvShowId?: true
    addedAt?: true
    order?: true
  }

  export type ListTvShowCountAggregateInputType = {
    id?: true
    listId?: true
    tvShowId?: true
    addedAt?: true
    order?: true
    _all?: true
  }

  export type ListTvShowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListTvShow to aggregate.
     */
    where?: ListTvShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListTvShows to fetch.
     */
    orderBy?: ListTvShowOrderByWithRelationInput | ListTvShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListTvShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListTvShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListTvShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ListTvShows
    **/
    _count?: true | ListTvShowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListTvShowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListTvShowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListTvShowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListTvShowMaxAggregateInputType
  }

  export type GetListTvShowAggregateType<T extends ListTvShowAggregateArgs> = {
        [P in keyof T & keyof AggregateListTvShow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListTvShow[P]>
      : GetScalarType<T[P], AggregateListTvShow[P]>
  }




  export type ListTvShowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListTvShowWhereInput
    orderBy?: ListTvShowOrderByWithAggregationInput | ListTvShowOrderByWithAggregationInput[]
    by: ListTvShowScalarFieldEnum[] | ListTvShowScalarFieldEnum
    having?: ListTvShowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListTvShowCountAggregateInputType | true
    _avg?: ListTvShowAvgAggregateInputType
    _sum?: ListTvShowSumAggregateInputType
    _min?: ListTvShowMinAggregateInputType
    _max?: ListTvShowMaxAggregateInputType
  }

  export type ListTvShowGroupByOutputType = {
    id: string
    listId: string
    tvShowId: string
    addedAt: Date
    order: number
    _count: ListTvShowCountAggregateOutputType | null
    _avg: ListTvShowAvgAggregateOutputType | null
    _sum: ListTvShowSumAggregateOutputType | null
    _min: ListTvShowMinAggregateOutputType | null
    _max: ListTvShowMaxAggregateOutputType | null
  }

  type GetListTvShowGroupByPayload<T extends ListTvShowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListTvShowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListTvShowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListTvShowGroupByOutputType[P]>
            : GetScalarType<T[P], ListTvShowGroupByOutputType[P]>
        }
      >
    >


  export type ListTvShowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listId?: boolean
    tvShowId?: boolean
    addedAt?: boolean
    order?: boolean
    list?: boolean | ListsDefaultArgs<ExtArgs>
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listTvShow"]>

  export type ListTvShowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listId?: boolean
    tvShowId?: boolean
    addedAt?: boolean
    order?: boolean
    list?: boolean | ListsDefaultArgs<ExtArgs>
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listTvShow"]>

  export type ListTvShowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    listId?: boolean
    tvShowId?: boolean
    addedAt?: boolean
    order?: boolean
    list?: boolean | ListsDefaultArgs<ExtArgs>
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listTvShow"]>

  export type ListTvShowSelectScalar = {
    id?: boolean
    listId?: boolean
    tvShowId?: boolean
    addedAt?: boolean
    order?: boolean
  }

  export type ListTvShowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "listId" | "tvShowId" | "addedAt" | "order", ExtArgs["result"]["listTvShow"]>
  export type ListTvShowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListsDefaultArgs<ExtArgs>
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
  }
  export type ListTvShowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListsDefaultArgs<ExtArgs>
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
  }
  export type ListTvShowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListsDefaultArgs<ExtArgs>
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
  }

  export type $ListTvShowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ListTvShow"
    objects: {
      list: Prisma.$ListsPayload<ExtArgs>
      tvShow: Prisma.$TvShowsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      listId: string
      tvShowId: string
      addedAt: Date
      order: number
    }, ExtArgs["result"]["listTvShow"]>
    composites: {}
  }

  type ListTvShowGetPayload<S extends boolean | null | undefined | ListTvShowDefaultArgs> = $Result.GetResult<Prisma.$ListTvShowPayload, S>

  type ListTvShowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListTvShowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListTvShowCountAggregateInputType | true
    }

  export interface ListTvShowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ListTvShow'], meta: { name: 'ListTvShow' } }
    /**
     * Find zero or one ListTvShow that matches the filter.
     * @param {ListTvShowFindUniqueArgs} args - Arguments to find a ListTvShow
     * @example
     * // Get one ListTvShow
     * const listTvShow = await prisma.listTvShow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListTvShowFindUniqueArgs>(args: SelectSubset<T, ListTvShowFindUniqueArgs<ExtArgs>>): Prisma__ListTvShowClient<$Result.GetResult<Prisma.$ListTvShowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ListTvShow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListTvShowFindUniqueOrThrowArgs} args - Arguments to find a ListTvShow
     * @example
     * // Get one ListTvShow
     * const listTvShow = await prisma.listTvShow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListTvShowFindUniqueOrThrowArgs>(args: SelectSubset<T, ListTvShowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListTvShowClient<$Result.GetResult<Prisma.$ListTvShowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListTvShow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListTvShowFindFirstArgs} args - Arguments to find a ListTvShow
     * @example
     * // Get one ListTvShow
     * const listTvShow = await prisma.listTvShow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListTvShowFindFirstArgs>(args?: SelectSubset<T, ListTvShowFindFirstArgs<ExtArgs>>): Prisma__ListTvShowClient<$Result.GetResult<Prisma.$ListTvShowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ListTvShow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListTvShowFindFirstOrThrowArgs} args - Arguments to find a ListTvShow
     * @example
     * // Get one ListTvShow
     * const listTvShow = await prisma.listTvShow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListTvShowFindFirstOrThrowArgs>(args?: SelectSubset<T, ListTvShowFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListTvShowClient<$Result.GetResult<Prisma.$ListTvShowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ListTvShows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListTvShowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListTvShows
     * const listTvShows = await prisma.listTvShow.findMany()
     * 
     * // Get first 10 ListTvShows
     * const listTvShows = await prisma.listTvShow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listTvShowWithIdOnly = await prisma.listTvShow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListTvShowFindManyArgs>(args?: SelectSubset<T, ListTvShowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListTvShowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ListTvShow.
     * @param {ListTvShowCreateArgs} args - Arguments to create a ListTvShow.
     * @example
     * // Create one ListTvShow
     * const ListTvShow = await prisma.listTvShow.create({
     *   data: {
     *     // ... data to create a ListTvShow
     *   }
     * })
     * 
     */
    create<T extends ListTvShowCreateArgs>(args: SelectSubset<T, ListTvShowCreateArgs<ExtArgs>>): Prisma__ListTvShowClient<$Result.GetResult<Prisma.$ListTvShowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ListTvShows.
     * @param {ListTvShowCreateManyArgs} args - Arguments to create many ListTvShows.
     * @example
     * // Create many ListTvShows
     * const listTvShow = await prisma.listTvShow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListTvShowCreateManyArgs>(args?: SelectSubset<T, ListTvShowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListTvShows and returns the data saved in the database.
     * @param {ListTvShowCreateManyAndReturnArgs} args - Arguments to create many ListTvShows.
     * @example
     * // Create many ListTvShows
     * const listTvShow = await prisma.listTvShow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListTvShows and only return the `id`
     * const listTvShowWithIdOnly = await prisma.listTvShow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListTvShowCreateManyAndReturnArgs>(args?: SelectSubset<T, ListTvShowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListTvShowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ListTvShow.
     * @param {ListTvShowDeleteArgs} args - Arguments to delete one ListTvShow.
     * @example
     * // Delete one ListTvShow
     * const ListTvShow = await prisma.listTvShow.delete({
     *   where: {
     *     // ... filter to delete one ListTvShow
     *   }
     * })
     * 
     */
    delete<T extends ListTvShowDeleteArgs>(args: SelectSubset<T, ListTvShowDeleteArgs<ExtArgs>>): Prisma__ListTvShowClient<$Result.GetResult<Prisma.$ListTvShowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ListTvShow.
     * @param {ListTvShowUpdateArgs} args - Arguments to update one ListTvShow.
     * @example
     * // Update one ListTvShow
     * const listTvShow = await prisma.listTvShow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListTvShowUpdateArgs>(args: SelectSubset<T, ListTvShowUpdateArgs<ExtArgs>>): Prisma__ListTvShowClient<$Result.GetResult<Prisma.$ListTvShowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ListTvShows.
     * @param {ListTvShowDeleteManyArgs} args - Arguments to filter ListTvShows to delete.
     * @example
     * // Delete a few ListTvShows
     * const { count } = await prisma.listTvShow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListTvShowDeleteManyArgs>(args?: SelectSubset<T, ListTvShowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListTvShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListTvShowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListTvShows
     * const listTvShow = await prisma.listTvShow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListTvShowUpdateManyArgs>(args: SelectSubset<T, ListTvShowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListTvShows and returns the data updated in the database.
     * @param {ListTvShowUpdateManyAndReturnArgs} args - Arguments to update many ListTvShows.
     * @example
     * // Update many ListTvShows
     * const listTvShow = await prisma.listTvShow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ListTvShows and only return the `id`
     * const listTvShowWithIdOnly = await prisma.listTvShow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListTvShowUpdateManyAndReturnArgs>(args: SelectSubset<T, ListTvShowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListTvShowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ListTvShow.
     * @param {ListTvShowUpsertArgs} args - Arguments to update or create a ListTvShow.
     * @example
     * // Update or create a ListTvShow
     * const listTvShow = await prisma.listTvShow.upsert({
     *   create: {
     *     // ... data to create a ListTvShow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListTvShow we want to update
     *   }
     * })
     */
    upsert<T extends ListTvShowUpsertArgs>(args: SelectSubset<T, ListTvShowUpsertArgs<ExtArgs>>): Prisma__ListTvShowClient<$Result.GetResult<Prisma.$ListTvShowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ListTvShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListTvShowCountArgs} args - Arguments to filter ListTvShows to count.
     * @example
     * // Count the number of ListTvShows
     * const count = await prisma.listTvShow.count({
     *   where: {
     *     // ... the filter for the ListTvShows we want to count
     *   }
     * })
    **/
    count<T extends ListTvShowCountArgs>(
      args?: Subset<T, ListTvShowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListTvShowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListTvShow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListTvShowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListTvShowAggregateArgs>(args: Subset<T, ListTvShowAggregateArgs>): Prisma.PrismaPromise<GetListTvShowAggregateType<T>>

    /**
     * Group by ListTvShow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListTvShowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListTvShowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListTvShowGroupByArgs['orderBy'] }
        : { orderBy?: ListTvShowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListTvShowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListTvShowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ListTvShow model
   */
  readonly fields: ListTvShowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ListTvShow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListTvShowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    list<T extends ListsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListsDefaultArgs<ExtArgs>>): Prisma__ListsClient<$Result.GetResult<Prisma.$ListsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tvShow<T extends TvShowsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TvShowsDefaultArgs<ExtArgs>>): Prisma__TvShowsClient<$Result.GetResult<Prisma.$TvShowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ListTvShow model
   */
  interface ListTvShowFieldRefs {
    readonly id: FieldRef<"ListTvShow", 'String'>
    readonly listId: FieldRef<"ListTvShow", 'String'>
    readonly tvShowId: FieldRef<"ListTvShow", 'String'>
    readonly addedAt: FieldRef<"ListTvShow", 'DateTime'>
    readonly order: FieldRef<"ListTvShow", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ListTvShow findUnique
   */
  export type ListTvShowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListTvShow
     */
    select?: ListTvShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListTvShow
     */
    omit?: ListTvShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListTvShowInclude<ExtArgs> | null
    /**
     * Filter, which ListTvShow to fetch.
     */
    where: ListTvShowWhereUniqueInput
  }

  /**
   * ListTvShow findUniqueOrThrow
   */
  export type ListTvShowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListTvShow
     */
    select?: ListTvShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListTvShow
     */
    omit?: ListTvShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListTvShowInclude<ExtArgs> | null
    /**
     * Filter, which ListTvShow to fetch.
     */
    where: ListTvShowWhereUniqueInput
  }

  /**
   * ListTvShow findFirst
   */
  export type ListTvShowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListTvShow
     */
    select?: ListTvShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListTvShow
     */
    omit?: ListTvShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListTvShowInclude<ExtArgs> | null
    /**
     * Filter, which ListTvShow to fetch.
     */
    where?: ListTvShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListTvShows to fetch.
     */
    orderBy?: ListTvShowOrderByWithRelationInput | ListTvShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListTvShows.
     */
    cursor?: ListTvShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListTvShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListTvShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListTvShows.
     */
    distinct?: ListTvShowScalarFieldEnum | ListTvShowScalarFieldEnum[]
  }

  /**
   * ListTvShow findFirstOrThrow
   */
  export type ListTvShowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListTvShow
     */
    select?: ListTvShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListTvShow
     */
    omit?: ListTvShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListTvShowInclude<ExtArgs> | null
    /**
     * Filter, which ListTvShow to fetch.
     */
    where?: ListTvShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListTvShows to fetch.
     */
    orderBy?: ListTvShowOrderByWithRelationInput | ListTvShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ListTvShows.
     */
    cursor?: ListTvShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListTvShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListTvShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ListTvShows.
     */
    distinct?: ListTvShowScalarFieldEnum | ListTvShowScalarFieldEnum[]
  }

  /**
   * ListTvShow findMany
   */
  export type ListTvShowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListTvShow
     */
    select?: ListTvShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListTvShow
     */
    omit?: ListTvShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListTvShowInclude<ExtArgs> | null
    /**
     * Filter, which ListTvShows to fetch.
     */
    where?: ListTvShowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ListTvShows to fetch.
     */
    orderBy?: ListTvShowOrderByWithRelationInput | ListTvShowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ListTvShows.
     */
    cursor?: ListTvShowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ListTvShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ListTvShows.
     */
    skip?: number
    distinct?: ListTvShowScalarFieldEnum | ListTvShowScalarFieldEnum[]
  }

  /**
   * ListTvShow create
   */
  export type ListTvShowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListTvShow
     */
    select?: ListTvShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListTvShow
     */
    omit?: ListTvShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListTvShowInclude<ExtArgs> | null
    /**
     * The data needed to create a ListTvShow.
     */
    data: XOR<ListTvShowCreateInput, ListTvShowUncheckedCreateInput>
  }

  /**
   * ListTvShow createMany
   */
  export type ListTvShowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ListTvShows.
     */
    data: ListTvShowCreateManyInput | ListTvShowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ListTvShow createManyAndReturn
   */
  export type ListTvShowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListTvShow
     */
    select?: ListTvShowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListTvShow
     */
    omit?: ListTvShowOmit<ExtArgs> | null
    /**
     * The data used to create many ListTvShows.
     */
    data: ListTvShowCreateManyInput | ListTvShowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListTvShowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListTvShow update
   */
  export type ListTvShowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListTvShow
     */
    select?: ListTvShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListTvShow
     */
    omit?: ListTvShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListTvShowInclude<ExtArgs> | null
    /**
     * The data needed to update a ListTvShow.
     */
    data: XOR<ListTvShowUpdateInput, ListTvShowUncheckedUpdateInput>
    /**
     * Choose, which ListTvShow to update.
     */
    where: ListTvShowWhereUniqueInput
  }

  /**
   * ListTvShow updateMany
   */
  export type ListTvShowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ListTvShows.
     */
    data: XOR<ListTvShowUpdateManyMutationInput, ListTvShowUncheckedUpdateManyInput>
    /**
     * Filter which ListTvShows to update
     */
    where?: ListTvShowWhereInput
    /**
     * Limit how many ListTvShows to update.
     */
    limit?: number
  }

  /**
   * ListTvShow updateManyAndReturn
   */
  export type ListTvShowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListTvShow
     */
    select?: ListTvShowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ListTvShow
     */
    omit?: ListTvShowOmit<ExtArgs> | null
    /**
     * The data used to update ListTvShows.
     */
    data: XOR<ListTvShowUpdateManyMutationInput, ListTvShowUncheckedUpdateManyInput>
    /**
     * Filter which ListTvShows to update
     */
    where?: ListTvShowWhereInput
    /**
     * Limit how many ListTvShows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListTvShowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ListTvShow upsert
   */
  export type ListTvShowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListTvShow
     */
    select?: ListTvShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListTvShow
     */
    omit?: ListTvShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListTvShowInclude<ExtArgs> | null
    /**
     * The filter to search for the ListTvShow to update in case it exists.
     */
    where: ListTvShowWhereUniqueInput
    /**
     * In case the ListTvShow found by the `where` argument doesn't exist, create a new ListTvShow with this data.
     */
    create: XOR<ListTvShowCreateInput, ListTvShowUncheckedCreateInput>
    /**
     * In case the ListTvShow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListTvShowUpdateInput, ListTvShowUncheckedUpdateInput>
  }

  /**
   * ListTvShow delete
   */
  export type ListTvShowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListTvShow
     */
    select?: ListTvShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListTvShow
     */
    omit?: ListTvShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListTvShowInclude<ExtArgs> | null
    /**
     * Filter which ListTvShow to delete.
     */
    where: ListTvShowWhereUniqueInput
  }

  /**
   * ListTvShow deleteMany
   */
  export type ListTvShowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ListTvShows to delete
     */
    where?: ListTvShowWhereInput
    /**
     * Limit how many ListTvShows to delete.
     */
    limit?: number
  }

  /**
   * ListTvShow without action
   */
  export type ListTvShowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListTvShow
     */
    select?: ListTvShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListTvShow
     */
    omit?: ListTvShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListTvShowInclude<ExtArgs> | null
  }


  /**
   * Model Lists
   */

  export type AggregateLists = {
    _count: ListsCountAggregateOutputType | null
    _min: ListsMinAggregateOutputType | null
    _max: ListsMaxAggregateOutputType | null
  }

  export type ListsMinAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ListsCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ListsMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListsMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ListsCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ListsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lists to aggregate.
     */
    where?: ListsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListsOrderByWithRelationInput | ListsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lists
    **/
    _count?: true | ListsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListsMaxAggregateInputType
  }

  export type GetListsAggregateType<T extends ListsAggregateArgs> = {
        [P in keyof T & keyof AggregateLists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLists[P]>
      : GetScalarType<T[P], AggregateLists[P]>
  }




  export type ListsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListsWhereInput
    orderBy?: ListsOrderByWithAggregationInput | ListsOrderByWithAggregationInput[]
    by: ListsScalarFieldEnum[] | ListsScalarFieldEnum
    having?: ListsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListsCountAggregateInputType | true
    _min?: ListsMinAggregateInputType
    _max?: ListsMaxAggregateInputType
  }

  export type ListsGroupByOutputType = {
    id: string
    name: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: ListsCountAggregateOutputType | null
    _min: ListsMinAggregateOutputType | null
    _max: ListsMaxAggregateOutputType | null
  }

  type GetListsGroupByPayload<T extends ListsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListsGroupByOutputType[P]>
            : GetScalarType<T[P], ListsGroupByOutputType[P]>
        }
      >
    >


  export type ListsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    tvShows?: boolean | Lists$tvShowsArgs<ExtArgs>
    _count?: boolean | ListsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lists"]>

  export type ListsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lists"]>

  export type ListsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lists"]>

  export type ListsSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ListsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["lists"]>
  export type ListsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    tvShows?: boolean | Lists$tvShowsArgs<ExtArgs>
    _count?: boolean | ListsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ListsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ListsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ListsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lists"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      tvShows: Prisma.$ListTvShowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lists"]>
    composites: {}
  }

  type ListsGetPayload<S extends boolean | null | undefined | ListsDefaultArgs> = $Result.GetResult<Prisma.$ListsPayload, S>

  type ListsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListsCountAggregateInputType | true
    }

  export interface ListsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lists'], meta: { name: 'Lists' } }
    /**
     * Find zero or one Lists that matches the filter.
     * @param {ListsFindUniqueArgs} args - Arguments to find a Lists
     * @example
     * // Get one Lists
     * const lists = await prisma.lists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListsFindUniqueArgs>(args: SelectSubset<T, ListsFindUniqueArgs<ExtArgs>>): Prisma__ListsClient<$Result.GetResult<Prisma.$ListsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lists that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListsFindUniqueOrThrowArgs} args - Arguments to find a Lists
     * @example
     * // Get one Lists
     * const lists = await prisma.lists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListsFindUniqueOrThrowArgs>(args: SelectSubset<T, ListsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListsClient<$Result.GetResult<Prisma.$ListsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListsFindFirstArgs} args - Arguments to find a Lists
     * @example
     * // Get one Lists
     * const lists = await prisma.lists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListsFindFirstArgs>(args?: SelectSubset<T, ListsFindFirstArgs<ExtArgs>>): Prisma__ListsClient<$Result.GetResult<Prisma.$ListsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListsFindFirstOrThrowArgs} args - Arguments to find a Lists
     * @example
     * // Get one Lists
     * const lists = await prisma.lists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListsFindFirstOrThrowArgs>(args?: SelectSubset<T, ListsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListsClient<$Result.GetResult<Prisma.$ListsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lists
     * const lists = await prisma.lists.findMany()
     * 
     * // Get first 10 Lists
     * const lists = await prisma.lists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listsWithIdOnly = await prisma.lists.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListsFindManyArgs>(args?: SelectSubset<T, ListsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lists.
     * @param {ListsCreateArgs} args - Arguments to create a Lists.
     * @example
     * // Create one Lists
     * const Lists = await prisma.lists.create({
     *   data: {
     *     // ... data to create a Lists
     *   }
     * })
     * 
     */
    create<T extends ListsCreateArgs>(args: SelectSubset<T, ListsCreateArgs<ExtArgs>>): Prisma__ListsClient<$Result.GetResult<Prisma.$ListsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lists.
     * @param {ListsCreateManyArgs} args - Arguments to create many Lists.
     * @example
     * // Create many Lists
     * const lists = await prisma.lists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListsCreateManyArgs>(args?: SelectSubset<T, ListsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lists and returns the data saved in the database.
     * @param {ListsCreateManyAndReturnArgs} args - Arguments to create many Lists.
     * @example
     * // Create many Lists
     * const lists = await prisma.lists.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lists and only return the `id`
     * const listsWithIdOnly = await prisma.lists.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListsCreateManyAndReturnArgs>(args?: SelectSubset<T, ListsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lists.
     * @param {ListsDeleteArgs} args - Arguments to delete one Lists.
     * @example
     * // Delete one Lists
     * const Lists = await prisma.lists.delete({
     *   where: {
     *     // ... filter to delete one Lists
     *   }
     * })
     * 
     */
    delete<T extends ListsDeleteArgs>(args: SelectSubset<T, ListsDeleteArgs<ExtArgs>>): Prisma__ListsClient<$Result.GetResult<Prisma.$ListsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lists.
     * @param {ListsUpdateArgs} args - Arguments to update one Lists.
     * @example
     * // Update one Lists
     * const lists = await prisma.lists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListsUpdateArgs>(args: SelectSubset<T, ListsUpdateArgs<ExtArgs>>): Prisma__ListsClient<$Result.GetResult<Prisma.$ListsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lists.
     * @param {ListsDeleteManyArgs} args - Arguments to filter Lists to delete.
     * @example
     * // Delete a few Lists
     * const { count } = await prisma.lists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListsDeleteManyArgs>(args?: SelectSubset<T, ListsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lists
     * const lists = await prisma.lists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListsUpdateManyArgs>(args: SelectSubset<T, ListsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lists and returns the data updated in the database.
     * @param {ListsUpdateManyAndReturnArgs} args - Arguments to update many Lists.
     * @example
     * // Update many Lists
     * const lists = await prisma.lists.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lists and only return the `id`
     * const listsWithIdOnly = await prisma.lists.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListsUpdateManyAndReturnArgs>(args: SelectSubset<T, ListsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lists.
     * @param {ListsUpsertArgs} args - Arguments to update or create a Lists.
     * @example
     * // Update or create a Lists
     * const lists = await prisma.lists.upsert({
     *   create: {
     *     // ... data to create a Lists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lists we want to update
     *   }
     * })
     */
    upsert<T extends ListsUpsertArgs>(args: SelectSubset<T, ListsUpsertArgs<ExtArgs>>): Prisma__ListsClient<$Result.GetResult<Prisma.$ListsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListsCountArgs} args - Arguments to filter Lists to count.
     * @example
     * // Count the number of Lists
     * const count = await prisma.lists.count({
     *   where: {
     *     // ... the filter for the Lists we want to count
     *   }
     * })
    **/
    count<T extends ListsCountArgs>(
      args?: Subset<T, ListsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListsAggregateArgs>(args: Subset<T, ListsAggregateArgs>): Prisma.PrismaPromise<GetListsAggregateType<T>>

    /**
     * Group by Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListsGroupByArgs['orderBy'] }
        : { orderBy?: ListsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lists model
   */
  readonly fields: ListsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tvShows<T extends Lists$tvShowsArgs<ExtArgs> = {}>(args?: Subset<T, Lists$tvShowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListTvShowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lists model
   */
  interface ListsFieldRefs {
    readonly id: FieldRef<"Lists", 'String'>
    readonly name: FieldRef<"Lists", 'String'>
    readonly userId: FieldRef<"Lists", 'String'>
    readonly createdAt: FieldRef<"Lists", 'DateTime'>
    readonly updatedAt: FieldRef<"Lists", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lists findUnique
   */
  export type ListsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lists
     */
    select?: ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lists
     */
    omit?: ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListsInclude<ExtArgs> | null
    /**
     * Filter, which Lists to fetch.
     */
    where: ListsWhereUniqueInput
  }

  /**
   * Lists findUniqueOrThrow
   */
  export type ListsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lists
     */
    select?: ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lists
     */
    omit?: ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListsInclude<ExtArgs> | null
    /**
     * Filter, which Lists to fetch.
     */
    where: ListsWhereUniqueInput
  }

  /**
   * Lists findFirst
   */
  export type ListsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lists
     */
    select?: ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lists
     */
    omit?: ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListsInclude<ExtArgs> | null
    /**
     * Filter, which Lists to fetch.
     */
    where?: ListsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListsOrderByWithRelationInput | ListsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lists.
     */
    cursor?: ListsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lists.
     */
    distinct?: ListsScalarFieldEnum | ListsScalarFieldEnum[]
  }

  /**
   * Lists findFirstOrThrow
   */
  export type ListsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lists
     */
    select?: ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lists
     */
    omit?: ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListsInclude<ExtArgs> | null
    /**
     * Filter, which Lists to fetch.
     */
    where?: ListsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListsOrderByWithRelationInput | ListsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lists.
     */
    cursor?: ListsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lists.
     */
    distinct?: ListsScalarFieldEnum | ListsScalarFieldEnum[]
  }

  /**
   * Lists findMany
   */
  export type ListsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lists
     */
    select?: ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lists
     */
    omit?: ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListsInclude<ExtArgs> | null
    /**
     * Filter, which Lists to fetch.
     */
    where?: ListsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListsOrderByWithRelationInput | ListsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lists.
     */
    cursor?: ListsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    distinct?: ListsScalarFieldEnum | ListsScalarFieldEnum[]
  }

  /**
   * Lists create
   */
  export type ListsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lists
     */
    select?: ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lists
     */
    omit?: ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListsInclude<ExtArgs> | null
    /**
     * The data needed to create a Lists.
     */
    data: XOR<ListsCreateInput, ListsUncheckedCreateInput>
  }

  /**
   * Lists createMany
   */
  export type ListsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lists.
     */
    data: ListsCreateManyInput | ListsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lists createManyAndReturn
   */
  export type ListsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lists
     */
    select?: ListsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lists
     */
    omit?: ListsOmit<ExtArgs> | null
    /**
     * The data used to create many Lists.
     */
    data: ListsCreateManyInput | ListsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lists update
   */
  export type ListsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lists
     */
    select?: ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lists
     */
    omit?: ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListsInclude<ExtArgs> | null
    /**
     * The data needed to update a Lists.
     */
    data: XOR<ListsUpdateInput, ListsUncheckedUpdateInput>
    /**
     * Choose, which Lists to update.
     */
    where: ListsWhereUniqueInput
  }

  /**
   * Lists updateMany
   */
  export type ListsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lists.
     */
    data: XOR<ListsUpdateManyMutationInput, ListsUncheckedUpdateManyInput>
    /**
     * Filter which Lists to update
     */
    where?: ListsWhereInput
    /**
     * Limit how many Lists to update.
     */
    limit?: number
  }

  /**
   * Lists updateManyAndReturn
   */
  export type ListsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lists
     */
    select?: ListsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lists
     */
    omit?: ListsOmit<ExtArgs> | null
    /**
     * The data used to update Lists.
     */
    data: XOR<ListsUpdateManyMutationInput, ListsUncheckedUpdateManyInput>
    /**
     * Filter which Lists to update
     */
    where?: ListsWhereInput
    /**
     * Limit how many Lists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lists upsert
   */
  export type ListsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lists
     */
    select?: ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lists
     */
    omit?: ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListsInclude<ExtArgs> | null
    /**
     * The filter to search for the Lists to update in case it exists.
     */
    where: ListsWhereUniqueInput
    /**
     * In case the Lists found by the `where` argument doesn't exist, create a new Lists with this data.
     */
    create: XOR<ListsCreateInput, ListsUncheckedCreateInput>
    /**
     * In case the Lists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListsUpdateInput, ListsUncheckedUpdateInput>
  }

  /**
   * Lists delete
   */
  export type ListsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lists
     */
    select?: ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lists
     */
    omit?: ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListsInclude<ExtArgs> | null
    /**
     * Filter which Lists to delete.
     */
    where: ListsWhereUniqueInput
  }

  /**
   * Lists deleteMany
   */
  export type ListsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lists to delete
     */
    where?: ListsWhereInput
    /**
     * Limit how many Lists to delete.
     */
    limit?: number
  }

  /**
   * Lists.tvShows
   */
  export type Lists$tvShowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListTvShow
     */
    select?: ListTvShowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ListTvShow
     */
    omit?: ListTvShowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListTvShowInclude<ExtArgs> | null
    where?: ListTvShowWhereInput
    orderBy?: ListTvShowOrderByWithRelationInput | ListTvShowOrderByWithRelationInput[]
    cursor?: ListTvShowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListTvShowScalarFieldEnum | ListTvShowScalarFieldEnum[]
  }

  /**
   * Lists without action
   */
  export type ListsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lists
     */
    select?: ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lists
     */
    omit?: ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListsInclude<ExtArgs> | null
  }


  /**
   * Model RatingScale
   */

  export type AggregateRatingScale = {
    _count: RatingScaleCountAggregateOutputType | null
    _avg: RatingScaleAvgAggregateOutputType | null
    _sum: RatingScaleSumAggregateOutputType | null
    _min: RatingScaleMinAggregateOutputType | null
    _max: RatingScaleMaxAggregateOutputType | null
  }

  export type RatingScaleAvgAggregateOutputType = {
    id: number | null
  }

  export type RatingScaleSumAggregateOutputType = {
    id: number | null
  }

  export type RatingScaleMinAggregateOutputType = {
    id: number | null
    label: string | null
  }

  export type RatingScaleMaxAggregateOutputType = {
    id: number | null
    label: string | null
  }

  export type RatingScaleCountAggregateOutputType = {
    id: number
    label: number
    _all: number
  }


  export type RatingScaleAvgAggregateInputType = {
    id?: true
  }

  export type RatingScaleSumAggregateInputType = {
    id?: true
  }

  export type RatingScaleMinAggregateInputType = {
    id?: true
    label?: true
  }

  export type RatingScaleMaxAggregateInputType = {
    id?: true
    label?: true
  }

  export type RatingScaleCountAggregateInputType = {
    id?: true
    label?: true
    _all?: true
  }

  export type RatingScaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RatingScale to aggregate.
     */
    where?: RatingScaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingScales to fetch.
     */
    orderBy?: RatingScaleOrderByWithRelationInput | RatingScaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingScaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingScales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingScales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RatingScales
    **/
    _count?: true | RatingScaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingScaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingScaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingScaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingScaleMaxAggregateInputType
  }

  export type GetRatingScaleAggregateType<T extends RatingScaleAggregateArgs> = {
        [P in keyof T & keyof AggregateRatingScale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRatingScale[P]>
      : GetScalarType<T[P], AggregateRatingScale[P]>
  }




  export type RatingScaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingScaleWhereInput
    orderBy?: RatingScaleOrderByWithAggregationInput | RatingScaleOrderByWithAggregationInput[]
    by: RatingScaleScalarFieldEnum[] | RatingScaleScalarFieldEnum
    having?: RatingScaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingScaleCountAggregateInputType | true
    _avg?: RatingScaleAvgAggregateInputType
    _sum?: RatingScaleSumAggregateInputType
    _min?: RatingScaleMinAggregateInputType
    _max?: RatingScaleMaxAggregateInputType
  }

  export type RatingScaleGroupByOutputType = {
    id: number
    label: string
    _count: RatingScaleCountAggregateOutputType | null
    _avg: RatingScaleAvgAggregateOutputType | null
    _sum: RatingScaleSumAggregateOutputType | null
    _min: RatingScaleMinAggregateOutputType | null
    _max: RatingScaleMaxAggregateOutputType | null
  }

  type GetRatingScaleGroupByPayload<T extends RatingScaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingScaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingScaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingScaleGroupByOutputType[P]>
            : GetScalarType<T[P], RatingScaleGroupByOutputType[P]>
        }
      >
    >


  export type RatingScaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
    ratings?: boolean | RatingScale$ratingsArgs<ExtArgs>
    _count?: boolean | RatingScaleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratingScale"]>

  export type RatingScaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
  }, ExtArgs["result"]["ratingScale"]>

  export type RatingScaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    label?: boolean
  }, ExtArgs["result"]["ratingScale"]>

  export type RatingScaleSelectScalar = {
    id?: boolean
    label?: boolean
  }

  export type RatingScaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "label", ExtArgs["result"]["ratingScale"]>
  export type RatingScaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ratings?: boolean | RatingScale$ratingsArgs<ExtArgs>
    _count?: boolean | RatingScaleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RatingScaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RatingScaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RatingScalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RatingScale"
    objects: {
      ratings: Prisma.$RatingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      label: string
    }, ExtArgs["result"]["ratingScale"]>
    composites: {}
  }

  type RatingScaleGetPayload<S extends boolean | null | undefined | RatingScaleDefaultArgs> = $Result.GetResult<Prisma.$RatingScalePayload, S>

  type RatingScaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingScaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingScaleCountAggregateInputType | true
    }

  export interface RatingScaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RatingScale'], meta: { name: 'RatingScale' } }
    /**
     * Find zero or one RatingScale that matches the filter.
     * @param {RatingScaleFindUniqueArgs} args - Arguments to find a RatingScale
     * @example
     * // Get one RatingScale
     * const ratingScale = await prisma.ratingScale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingScaleFindUniqueArgs>(args: SelectSubset<T, RatingScaleFindUniqueArgs<ExtArgs>>): Prisma__RatingScaleClient<$Result.GetResult<Prisma.$RatingScalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RatingScale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingScaleFindUniqueOrThrowArgs} args - Arguments to find a RatingScale
     * @example
     * // Get one RatingScale
     * const ratingScale = await prisma.ratingScale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingScaleFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingScaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingScaleClient<$Result.GetResult<Prisma.$RatingScalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RatingScale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingScaleFindFirstArgs} args - Arguments to find a RatingScale
     * @example
     * // Get one RatingScale
     * const ratingScale = await prisma.ratingScale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingScaleFindFirstArgs>(args?: SelectSubset<T, RatingScaleFindFirstArgs<ExtArgs>>): Prisma__RatingScaleClient<$Result.GetResult<Prisma.$RatingScalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RatingScale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingScaleFindFirstOrThrowArgs} args - Arguments to find a RatingScale
     * @example
     * // Get one RatingScale
     * const ratingScale = await prisma.ratingScale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingScaleFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingScaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingScaleClient<$Result.GetResult<Prisma.$RatingScalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RatingScales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingScaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RatingScales
     * const ratingScales = await prisma.ratingScale.findMany()
     * 
     * // Get first 10 RatingScales
     * const ratingScales = await prisma.ratingScale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingScaleWithIdOnly = await prisma.ratingScale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingScaleFindManyArgs>(args?: SelectSubset<T, RatingScaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingScalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RatingScale.
     * @param {RatingScaleCreateArgs} args - Arguments to create a RatingScale.
     * @example
     * // Create one RatingScale
     * const RatingScale = await prisma.ratingScale.create({
     *   data: {
     *     // ... data to create a RatingScale
     *   }
     * })
     * 
     */
    create<T extends RatingScaleCreateArgs>(args: SelectSubset<T, RatingScaleCreateArgs<ExtArgs>>): Prisma__RatingScaleClient<$Result.GetResult<Prisma.$RatingScalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RatingScales.
     * @param {RatingScaleCreateManyArgs} args - Arguments to create many RatingScales.
     * @example
     * // Create many RatingScales
     * const ratingScale = await prisma.ratingScale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingScaleCreateManyArgs>(args?: SelectSubset<T, RatingScaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RatingScales and returns the data saved in the database.
     * @param {RatingScaleCreateManyAndReturnArgs} args - Arguments to create many RatingScales.
     * @example
     * // Create many RatingScales
     * const ratingScale = await prisma.ratingScale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RatingScales and only return the `id`
     * const ratingScaleWithIdOnly = await prisma.ratingScale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingScaleCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingScaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingScalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RatingScale.
     * @param {RatingScaleDeleteArgs} args - Arguments to delete one RatingScale.
     * @example
     * // Delete one RatingScale
     * const RatingScale = await prisma.ratingScale.delete({
     *   where: {
     *     // ... filter to delete one RatingScale
     *   }
     * })
     * 
     */
    delete<T extends RatingScaleDeleteArgs>(args: SelectSubset<T, RatingScaleDeleteArgs<ExtArgs>>): Prisma__RatingScaleClient<$Result.GetResult<Prisma.$RatingScalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RatingScale.
     * @param {RatingScaleUpdateArgs} args - Arguments to update one RatingScale.
     * @example
     * // Update one RatingScale
     * const ratingScale = await prisma.ratingScale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingScaleUpdateArgs>(args: SelectSubset<T, RatingScaleUpdateArgs<ExtArgs>>): Prisma__RatingScaleClient<$Result.GetResult<Prisma.$RatingScalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RatingScales.
     * @param {RatingScaleDeleteManyArgs} args - Arguments to filter RatingScales to delete.
     * @example
     * // Delete a few RatingScales
     * const { count } = await prisma.ratingScale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingScaleDeleteManyArgs>(args?: SelectSubset<T, RatingScaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RatingScales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingScaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RatingScales
     * const ratingScale = await prisma.ratingScale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingScaleUpdateManyArgs>(args: SelectSubset<T, RatingScaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RatingScales and returns the data updated in the database.
     * @param {RatingScaleUpdateManyAndReturnArgs} args - Arguments to update many RatingScales.
     * @example
     * // Update many RatingScales
     * const ratingScale = await prisma.ratingScale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RatingScales and only return the `id`
     * const ratingScaleWithIdOnly = await prisma.ratingScale.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RatingScaleUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingScaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingScalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RatingScale.
     * @param {RatingScaleUpsertArgs} args - Arguments to update or create a RatingScale.
     * @example
     * // Update or create a RatingScale
     * const ratingScale = await prisma.ratingScale.upsert({
     *   create: {
     *     // ... data to create a RatingScale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RatingScale we want to update
     *   }
     * })
     */
    upsert<T extends RatingScaleUpsertArgs>(args: SelectSubset<T, RatingScaleUpsertArgs<ExtArgs>>): Prisma__RatingScaleClient<$Result.GetResult<Prisma.$RatingScalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RatingScales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingScaleCountArgs} args - Arguments to filter RatingScales to count.
     * @example
     * // Count the number of RatingScales
     * const count = await prisma.ratingScale.count({
     *   where: {
     *     // ... the filter for the RatingScales we want to count
     *   }
     * })
    **/
    count<T extends RatingScaleCountArgs>(
      args?: Subset<T, RatingScaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingScaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RatingScale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingScaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RatingScaleAggregateArgs>(args: Subset<T, RatingScaleAggregateArgs>): Prisma.PrismaPromise<GetRatingScaleAggregateType<T>>

    /**
     * Group by RatingScale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingScaleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RatingScaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingScaleGroupByArgs['orderBy'] }
        : { orderBy?: RatingScaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RatingScaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingScaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RatingScale model
   */
  readonly fields: RatingScaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RatingScale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingScaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ratings<T extends RatingScale$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, RatingScale$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RatingScale model
   */
  interface RatingScaleFieldRefs {
    readonly id: FieldRef<"RatingScale", 'Int'>
    readonly label: FieldRef<"RatingScale", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RatingScale findUnique
   */
  export type RatingScaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingScale
     */
    select?: RatingScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingScale
     */
    omit?: RatingScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingScaleInclude<ExtArgs> | null
    /**
     * Filter, which RatingScale to fetch.
     */
    where: RatingScaleWhereUniqueInput
  }

  /**
   * RatingScale findUniqueOrThrow
   */
  export type RatingScaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingScale
     */
    select?: RatingScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingScale
     */
    omit?: RatingScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingScaleInclude<ExtArgs> | null
    /**
     * Filter, which RatingScale to fetch.
     */
    where: RatingScaleWhereUniqueInput
  }

  /**
   * RatingScale findFirst
   */
  export type RatingScaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingScale
     */
    select?: RatingScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingScale
     */
    omit?: RatingScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingScaleInclude<ExtArgs> | null
    /**
     * Filter, which RatingScale to fetch.
     */
    where?: RatingScaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingScales to fetch.
     */
    orderBy?: RatingScaleOrderByWithRelationInput | RatingScaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RatingScales.
     */
    cursor?: RatingScaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingScales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingScales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RatingScales.
     */
    distinct?: RatingScaleScalarFieldEnum | RatingScaleScalarFieldEnum[]
  }

  /**
   * RatingScale findFirstOrThrow
   */
  export type RatingScaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingScale
     */
    select?: RatingScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingScale
     */
    omit?: RatingScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingScaleInclude<ExtArgs> | null
    /**
     * Filter, which RatingScale to fetch.
     */
    where?: RatingScaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingScales to fetch.
     */
    orderBy?: RatingScaleOrderByWithRelationInput | RatingScaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RatingScales.
     */
    cursor?: RatingScaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingScales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingScales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RatingScales.
     */
    distinct?: RatingScaleScalarFieldEnum | RatingScaleScalarFieldEnum[]
  }

  /**
   * RatingScale findMany
   */
  export type RatingScaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingScale
     */
    select?: RatingScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingScale
     */
    omit?: RatingScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingScaleInclude<ExtArgs> | null
    /**
     * Filter, which RatingScales to fetch.
     */
    where?: RatingScaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatingScales to fetch.
     */
    orderBy?: RatingScaleOrderByWithRelationInput | RatingScaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RatingScales.
     */
    cursor?: RatingScaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatingScales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatingScales.
     */
    skip?: number
    distinct?: RatingScaleScalarFieldEnum | RatingScaleScalarFieldEnum[]
  }

  /**
   * RatingScale create
   */
  export type RatingScaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingScale
     */
    select?: RatingScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingScale
     */
    omit?: RatingScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingScaleInclude<ExtArgs> | null
    /**
     * The data needed to create a RatingScale.
     */
    data: XOR<RatingScaleCreateInput, RatingScaleUncheckedCreateInput>
  }

  /**
   * RatingScale createMany
   */
  export type RatingScaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RatingScales.
     */
    data: RatingScaleCreateManyInput | RatingScaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RatingScale createManyAndReturn
   */
  export type RatingScaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingScale
     */
    select?: RatingScaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RatingScale
     */
    omit?: RatingScaleOmit<ExtArgs> | null
    /**
     * The data used to create many RatingScales.
     */
    data: RatingScaleCreateManyInput | RatingScaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RatingScale update
   */
  export type RatingScaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingScale
     */
    select?: RatingScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingScale
     */
    omit?: RatingScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingScaleInclude<ExtArgs> | null
    /**
     * The data needed to update a RatingScale.
     */
    data: XOR<RatingScaleUpdateInput, RatingScaleUncheckedUpdateInput>
    /**
     * Choose, which RatingScale to update.
     */
    where: RatingScaleWhereUniqueInput
  }

  /**
   * RatingScale updateMany
   */
  export type RatingScaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RatingScales.
     */
    data: XOR<RatingScaleUpdateManyMutationInput, RatingScaleUncheckedUpdateManyInput>
    /**
     * Filter which RatingScales to update
     */
    where?: RatingScaleWhereInput
    /**
     * Limit how many RatingScales to update.
     */
    limit?: number
  }

  /**
   * RatingScale updateManyAndReturn
   */
  export type RatingScaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingScale
     */
    select?: RatingScaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RatingScale
     */
    omit?: RatingScaleOmit<ExtArgs> | null
    /**
     * The data used to update RatingScales.
     */
    data: XOR<RatingScaleUpdateManyMutationInput, RatingScaleUncheckedUpdateManyInput>
    /**
     * Filter which RatingScales to update
     */
    where?: RatingScaleWhereInput
    /**
     * Limit how many RatingScales to update.
     */
    limit?: number
  }

  /**
   * RatingScale upsert
   */
  export type RatingScaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingScale
     */
    select?: RatingScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingScale
     */
    omit?: RatingScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingScaleInclude<ExtArgs> | null
    /**
     * The filter to search for the RatingScale to update in case it exists.
     */
    where: RatingScaleWhereUniqueInput
    /**
     * In case the RatingScale found by the `where` argument doesn't exist, create a new RatingScale with this data.
     */
    create: XOR<RatingScaleCreateInput, RatingScaleUncheckedCreateInput>
    /**
     * In case the RatingScale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingScaleUpdateInput, RatingScaleUncheckedUpdateInput>
  }

  /**
   * RatingScale delete
   */
  export type RatingScaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingScale
     */
    select?: RatingScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingScale
     */
    omit?: RatingScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingScaleInclude<ExtArgs> | null
    /**
     * Filter which RatingScale to delete.
     */
    where: RatingScaleWhereUniqueInput
  }

  /**
   * RatingScale deleteMany
   */
  export type RatingScaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RatingScales to delete
     */
    where?: RatingScaleWhereInput
    /**
     * Limit how many RatingScales to delete.
     */
    limit?: number
  }

  /**
   * RatingScale.ratings
   */
  export type RatingScale$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    where?: RatingsWhereInput
    orderBy?: RatingsOrderByWithRelationInput | RatingsOrderByWithRelationInput[]
    cursor?: RatingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * RatingScale without action
   */
  export type RatingScaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatingScale
     */
    select?: RatingScaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatingScale
     */
    omit?: RatingScaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingScaleInclude<ExtArgs> | null
  }


  /**
   * Model Ratings
   */

  export type AggregateRatings = {
    _count: RatingsCountAggregateOutputType | null
    _avg: RatingsAvgAggregateOutputType | null
    _sum: RatingsSumAggregateOutputType | null
    _min: RatingsMinAggregateOutputType | null
    _max: RatingsMaxAggregateOutputType | null
  }

  export type RatingsAvgAggregateOutputType = {
    scaleId: number | null
  }

  export type RatingsSumAggregateOutputType = {
    scaleId: number | null
  }

  export type RatingsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    tvShowId: string | null
    scaleId: number | null
    comment: string | null
  }

  export type RatingsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    tvShowId: string | null
    scaleId: number | null
    comment: string | null
  }

  export type RatingsCountAggregateOutputType = {
    id: number
    userId: number
    tvShowId: number
    scaleId: number
    comment: number
    _all: number
  }


  export type RatingsAvgAggregateInputType = {
    scaleId?: true
  }

  export type RatingsSumAggregateInputType = {
    scaleId?: true
  }

  export type RatingsMinAggregateInputType = {
    id?: true
    userId?: true
    tvShowId?: true
    scaleId?: true
    comment?: true
  }

  export type RatingsMaxAggregateInputType = {
    id?: true
    userId?: true
    tvShowId?: true
    scaleId?: true
    comment?: true
  }

  export type RatingsCountAggregateInputType = {
    id?: true
    userId?: true
    tvShowId?: true
    scaleId?: true
    comment?: true
    _all?: true
  }

  export type RatingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to aggregate.
     */
    where?: RatingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingsOrderByWithRelationInput | RatingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingsMaxAggregateInputType
  }

  export type GetRatingsAggregateType<T extends RatingsAggregateArgs> = {
        [P in keyof T & keyof AggregateRatings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRatings[P]>
      : GetScalarType<T[P], AggregateRatings[P]>
  }




  export type RatingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingsWhereInput
    orderBy?: RatingsOrderByWithAggregationInput | RatingsOrderByWithAggregationInput[]
    by: RatingsScalarFieldEnum[] | RatingsScalarFieldEnum
    having?: RatingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingsCountAggregateInputType | true
    _avg?: RatingsAvgAggregateInputType
    _sum?: RatingsSumAggregateInputType
    _min?: RatingsMinAggregateInputType
    _max?: RatingsMaxAggregateInputType
  }

  export type RatingsGroupByOutputType = {
    id: string
    userId: string
    tvShowId: string
    scaleId: number
    comment: string | null
    _count: RatingsCountAggregateOutputType | null
    _avg: RatingsAvgAggregateOutputType | null
    _sum: RatingsSumAggregateOutputType | null
    _min: RatingsMinAggregateOutputType | null
    _max: RatingsMaxAggregateOutputType | null
  }

  type GetRatingsGroupByPayload<T extends RatingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingsGroupByOutputType[P]>
            : GetScalarType<T[P], RatingsGroupByOutputType[P]>
        }
      >
    >


  export type RatingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tvShowId?: boolean
    scaleId?: boolean
    comment?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
    scale?: boolean | RatingScaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratings"]>

  export type RatingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tvShowId?: boolean
    scaleId?: boolean
    comment?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
    scale?: boolean | RatingScaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratings"]>

  export type RatingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    tvShowId?: boolean
    scaleId?: boolean
    comment?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
    scale?: boolean | RatingScaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratings"]>

  export type RatingsSelectScalar = {
    id?: boolean
    userId?: boolean
    tvShowId?: boolean
    scaleId?: boolean
    comment?: boolean
  }

  export type RatingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "tvShowId" | "scaleId" | "comment", ExtArgs["result"]["ratings"]>
  export type RatingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
    scale?: boolean | RatingScaleDefaultArgs<ExtArgs>
  }
  export type RatingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
    scale?: boolean | RatingScaleDefaultArgs<ExtArgs>
  }
  export type RatingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
    scale?: boolean | RatingScaleDefaultArgs<ExtArgs>
  }

  export type $RatingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ratings"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      tvShow: Prisma.$TvShowsPayload<ExtArgs>
      scale: Prisma.$RatingScalePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      tvShowId: string
      scaleId: number
      comment: string | null
    }, ExtArgs["result"]["ratings"]>
    composites: {}
  }

  type RatingsGetPayload<S extends boolean | null | undefined | RatingsDefaultArgs> = $Result.GetResult<Prisma.$RatingsPayload, S>

  type RatingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingsCountAggregateInputType | true
    }

  export interface RatingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ratings'], meta: { name: 'Ratings' } }
    /**
     * Find zero or one Ratings that matches the filter.
     * @param {RatingsFindUniqueArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingsFindUniqueArgs>(args: SelectSubset<T, RatingsFindUniqueArgs<ExtArgs>>): Prisma__RatingsClient<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ratings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingsFindUniqueOrThrowArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingsFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingsClient<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingsFindFirstArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingsFindFirstArgs>(args?: SelectSubset<T, RatingsFindFirstArgs<ExtArgs>>): Prisma__RatingsClient<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ratings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingsFindFirstOrThrowArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingsFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingsClient<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.ratings.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.ratings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingsWithIdOnly = await prisma.ratings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingsFindManyArgs>(args?: SelectSubset<T, RatingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ratings.
     * @param {RatingsCreateArgs} args - Arguments to create a Ratings.
     * @example
     * // Create one Ratings
     * const Ratings = await prisma.ratings.create({
     *   data: {
     *     // ... data to create a Ratings
     *   }
     * })
     * 
     */
    create<T extends RatingsCreateArgs>(args: SelectSubset<T, RatingsCreateArgs<ExtArgs>>): Prisma__RatingsClient<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingsCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const ratings = await prisma.ratings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingsCreateManyArgs>(args?: SelectSubset<T, RatingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {RatingsCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const ratings = await prisma.ratings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `id`
     * const ratingsWithIdOnly = await prisma.ratings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingsCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ratings.
     * @param {RatingsDeleteArgs} args - Arguments to delete one Ratings.
     * @example
     * // Delete one Ratings
     * const Ratings = await prisma.ratings.delete({
     *   where: {
     *     // ... filter to delete one Ratings
     *   }
     * })
     * 
     */
    delete<T extends RatingsDeleteArgs>(args: SelectSubset<T, RatingsDeleteArgs<ExtArgs>>): Prisma__RatingsClient<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ratings.
     * @param {RatingsUpdateArgs} args - Arguments to update one Ratings.
     * @example
     * // Update one Ratings
     * const ratings = await prisma.ratings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingsUpdateArgs>(args: SelectSubset<T, RatingsUpdateArgs<ExtArgs>>): Prisma__RatingsClient<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingsDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.ratings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingsDeleteManyArgs>(args?: SelectSubset<T, RatingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const ratings = await prisma.ratings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingsUpdateManyArgs>(args: SelectSubset<T, RatingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {RatingsUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const ratings = await prisma.ratings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `id`
     * const ratingsWithIdOnly = await prisma.ratings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RatingsUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ratings.
     * @param {RatingsUpsertArgs} args - Arguments to update or create a Ratings.
     * @example
     * // Update or create a Ratings
     * const ratings = await prisma.ratings.upsert({
     *   create: {
     *     // ... data to create a Ratings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ratings we want to update
     *   }
     * })
     */
    upsert<T extends RatingsUpsertArgs>(args: SelectSubset<T, RatingsUpsertArgs<ExtArgs>>): Prisma__RatingsClient<$Result.GetResult<Prisma.$RatingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingsCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.ratings.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingsCountArgs>(
      args?: Subset<T, RatingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RatingsAggregateArgs>(args: Subset<T, RatingsAggregateArgs>): Prisma.PrismaPromise<GetRatingsAggregateType<T>>

    /**
     * Group by Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RatingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingsGroupByArgs['orderBy'] }
        : { orderBy?: RatingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RatingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ratings model
   */
  readonly fields: RatingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ratings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tvShow<T extends TvShowsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TvShowsDefaultArgs<ExtArgs>>): Prisma__TvShowsClient<$Result.GetResult<Prisma.$TvShowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scale<T extends RatingScaleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RatingScaleDefaultArgs<ExtArgs>>): Prisma__RatingScaleClient<$Result.GetResult<Prisma.$RatingScalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ratings model
   */
  interface RatingsFieldRefs {
    readonly id: FieldRef<"Ratings", 'String'>
    readonly userId: FieldRef<"Ratings", 'String'>
    readonly tvShowId: FieldRef<"Ratings", 'String'>
    readonly scaleId: FieldRef<"Ratings", 'Int'>
    readonly comment: FieldRef<"Ratings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ratings findUnique
   */
  export type RatingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where: RatingsWhereUniqueInput
  }

  /**
   * Ratings findUniqueOrThrow
   */
  export type RatingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where: RatingsWhereUniqueInput
  }

  /**
   * Ratings findFirst
   */
  export type RatingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingsOrderByWithRelationInput | RatingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * Ratings findFirstOrThrow
   */
  export type RatingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingsOrderByWithRelationInput | RatingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * Ratings findMany
   */
  export type RatingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingsOrderByWithRelationInput | RatingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * Ratings create
   */
  export type RatingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    /**
     * The data needed to create a Ratings.
     */
    data: XOR<RatingsCreateInput, RatingsUncheckedCreateInput>
  }

  /**
   * Ratings createMany
   */
  export type RatingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingsCreateManyInput | RatingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ratings createManyAndReturn
   */
  export type RatingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * The data used to create many Ratings.
     */
    data: RatingsCreateManyInput | RatingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ratings update
   */
  export type RatingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    /**
     * The data needed to update a Ratings.
     */
    data: XOR<RatingsUpdateInput, RatingsUncheckedUpdateInput>
    /**
     * Choose, which Ratings to update.
     */
    where: RatingsWhereUniqueInput
  }

  /**
   * Ratings updateMany
   */
  export type RatingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingsUpdateManyMutationInput, RatingsUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingsWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Ratings updateManyAndReturn
   */
  export type RatingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingsUpdateManyMutationInput, RatingsUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingsWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ratings upsert
   */
  export type RatingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    /**
     * The filter to search for the Ratings to update in case it exists.
     */
    where: RatingsWhereUniqueInput
    /**
     * In case the Ratings found by the `where` argument doesn't exist, create a new Ratings with this data.
     */
    create: XOR<RatingsCreateInput, RatingsUncheckedCreateInput>
    /**
     * In case the Ratings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingsUpdateInput, RatingsUncheckedUpdateInput>
  }

  /**
   * Ratings delete
   */
  export type RatingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
    /**
     * Filter which Ratings to delete.
     */
    where: RatingsWhereUniqueInput
  }

  /**
   * Ratings deleteMany
   */
  export type RatingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingsWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Ratings without action
   */
  export type RatingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ratings
     */
    select?: RatingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ratings
     */
    omit?: RatingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingsInclude<ExtArgs> | null
  }


  /**
   * Model ActorsOnTvShows
   */

  export type AggregateActorsOnTvShows = {
    _count: ActorsOnTvShowsCountAggregateOutputType | null
    _min: ActorsOnTvShowsMinAggregateOutputType | null
    _max: ActorsOnTvShowsMaxAggregateOutputType | null
  }

  export type ActorsOnTvShowsMinAggregateOutputType = {
    id: string | null
    tvShowId: string | null
    actorId: string | null
  }

  export type ActorsOnTvShowsMaxAggregateOutputType = {
    id: string | null
    tvShowId: string | null
    actorId: string | null
  }

  export type ActorsOnTvShowsCountAggregateOutputType = {
    id: number
    tvShowId: number
    actorId: number
    _all: number
  }


  export type ActorsOnTvShowsMinAggregateInputType = {
    id?: true
    tvShowId?: true
    actorId?: true
  }

  export type ActorsOnTvShowsMaxAggregateInputType = {
    id?: true
    tvShowId?: true
    actorId?: true
  }

  export type ActorsOnTvShowsCountAggregateInputType = {
    id?: true
    tvShowId?: true
    actorId?: true
    _all?: true
  }

  export type ActorsOnTvShowsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActorsOnTvShows to aggregate.
     */
    where?: ActorsOnTvShowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActorsOnTvShows to fetch.
     */
    orderBy?: ActorsOnTvShowsOrderByWithRelationInput | ActorsOnTvShowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActorsOnTvShowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActorsOnTvShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActorsOnTvShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActorsOnTvShows
    **/
    _count?: true | ActorsOnTvShowsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActorsOnTvShowsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActorsOnTvShowsMaxAggregateInputType
  }

  export type GetActorsOnTvShowsAggregateType<T extends ActorsOnTvShowsAggregateArgs> = {
        [P in keyof T & keyof AggregateActorsOnTvShows]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActorsOnTvShows[P]>
      : GetScalarType<T[P], AggregateActorsOnTvShows[P]>
  }




  export type ActorsOnTvShowsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActorsOnTvShowsWhereInput
    orderBy?: ActorsOnTvShowsOrderByWithAggregationInput | ActorsOnTvShowsOrderByWithAggregationInput[]
    by: ActorsOnTvShowsScalarFieldEnum[] | ActorsOnTvShowsScalarFieldEnum
    having?: ActorsOnTvShowsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActorsOnTvShowsCountAggregateInputType | true
    _min?: ActorsOnTvShowsMinAggregateInputType
    _max?: ActorsOnTvShowsMaxAggregateInputType
  }

  export type ActorsOnTvShowsGroupByOutputType = {
    id: string
    tvShowId: string
    actorId: string
    _count: ActorsOnTvShowsCountAggregateOutputType | null
    _min: ActorsOnTvShowsMinAggregateOutputType | null
    _max: ActorsOnTvShowsMaxAggregateOutputType | null
  }

  type GetActorsOnTvShowsGroupByPayload<T extends ActorsOnTvShowsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActorsOnTvShowsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActorsOnTvShowsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActorsOnTvShowsGroupByOutputType[P]>
            : GetScalarType<T[P], ActorsOnTvShowsGroupByOutputType[P]>
        }
      >
    >


  export type ActorsOnTvShowsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tvShowId?: boolean
    actorId?: boolean
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
    actor?: boolean | ActorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actorsOnTvShows"]>

  export type ActorsOnTvShowsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tvShowId?: boolean
    actorId?: boolean
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
    actor?: boolean | ActorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actorsOnTvShows"]>

  export type ActorsOnTvShowsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tvShowId?: boolean
    actorId?: boolean
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
    actor?: boolean | ActorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actorsOnTvShows"]>

  export type ActorsOnTvShowsSelectScalar = {
    id?: boolean
    tvShowId?: boolean
    actorId?: boolean
  }

  export type ActorsOnTvShowsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tvShowId" | "actorId", ExtArgs["result"]["actorsOnTvShows"]>
  export type ActorsOnTvShowsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
    actor?: boolean | ActorsDefaultArgs<ExtArgs>
  }
  export type ActorsOnTvShowsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
    actor?: boolean | ActorsDefaultArgs<ExtArgs>
  }
  export type ActorsOnTvShowsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tvShow?: boolean | TvShowsDefaultArgs<ExtArgs>
    actor?: boolean | ActorsDefaultArgs<ExtArgs>
  }

  export type $ActorsOnTvShowsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActorsOnTvShows"
    objects: {
      tvShow: Prisma.$TvShowsPayload<ExtArgs>
      actor: Prisma.$ActorsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tvShowId: string
      actorId: string
    }, ExtArgs["result"]["actorsOnTvShows"]>
    composites: {}
  }

  type ActorsOnTvShowsGetPayload<S extends boolean | null | undefined | ActorsOnTvShowsDefaultArgs> = $Result.GetResult<Prisma.$ActorsOnTvShowsPayload, S>

  type ActorsOnTvShowsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActorsOnTvShowsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActorsOnTvShowsCountAggregateInputType | true
    }

  export interface ActorsOnTvShowsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActorsOnTvShows'], meta: { name: 'ActorsOnTvShows' } }
    /**
     * Find zero or one ActorsOnTvShows that matches the filter.
     * @param {ActorsOnTvShowsFindUniqueArgs} args - Arguments to find a ActorsOnTvShows
     * @example
     * // Get one ActorsOnTvShows
     * const actorsOnTvShows = await prisma.actorsOnTvShows.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActorsOnTvShowsFindUniqueArgs>(args: SelectSubset<T, ActorsOnTvShowsFindUniqueArgs<ExtArgs>>): Prisma__ActorsOnTvShowsClient<$Result.GetResult<Prisma.$ActorsOnTvShowsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActorsOnTvShows that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActorsOnTvShowsFindUniqueOrThrowArgs} args - Arguments to find a ActorsOnTvShows
     * @example
     * // Get one ActorsOnTvShows
     * const actorsOnTvShows = await prisma.actorsOnTvShows.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActorsOnTvShowsFindUniqueOrThrowArgs>(args: SelectSubset<T, ActorsOnTvShowsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActorsOnTvShowsClient<$Result.GetResult<Prisma.$ActorsOnTvShowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActorsOnTvShows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsOnTvShowsFindFirstArgs} args - Arguments to find a ActorsOnTvShows
     * @example
     * // Get one ActorsOnTvShows
     * const actorsOnTvShows = await prisma.actorsOnTvShows.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActorsOnTvShowsFindFirstArgs>(args?: SelectSubset<T, ActorsOnTvShowsFindFirstArgs<ExtArgs>>): Prisma__ActorsOnTvShowsClient<$Result.GetResult<Prisma.$ActorsOnTvShowsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActorsOnTvShows that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsOnTvShowsFindFirstOrThrowArgs} args - Arguments to find a ActorsOnTvShows
     * @example
     * // Get one ActorsOnTvShows
     * const actorsOnTvShows = await prisma.actorsOnTvShows.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActorsOnTvShowsFindFirstOrThrowArgs>(args?: SelectSubset<T, ActorsOnTvShowsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActorsOnTvShowsClient<$Result.GetResult<Prisma.$ActorsOnTvShowsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActorsOnTvShows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsOnTvShowsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActorsOnTvShows
     * const actorsOnTvShows = await prisma.actorsOnTvShows.findMany()
     * 
     * // Get first 10 ActorsOnTvShows
     * const actorsOnTvShows = await prisma.actorsOnTvShows.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actorsOnTvShowsWithIdOnly = await prisma.actorsOnTvShows.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActorsOnTvShowsFindManyArgs>(args?: SelectSubset<T, ActorsOnTvShowsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActorsOnTvShowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActorsOnTvShows.
     * @param {ActorsOnTvShowsCreateArgs} args - Arguments to create a ActorsOnTvShows.
     * @example
     * // Create one ActorsOnTvShows
     * const ActorsOnTvShows = await prisma.actorsOnTvShows.create({
     *   data: {
     *     // ... data to create a ActorsOnTvShows
     *   }
     * })
     * 
     */
    create<T extends ActorsOnTvShowsCreateArgs>(args: SelectSubset<T, ActorsOnTvShowsCreateArgs<ExtArgs>>): Prisma__ActorsOnTvShowsClient<$Result.GetResult<Prisma.$ActorsOnTvShowsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActorsOnTvShows.
     * @param {ActorsOnTvShowsCreateManyArgs} args - Arguments to create many ActorsOnTvShows.
     * @example
     * // Create many ActorsOnTvShows
     * const actorsOnTvShows = await prisma.actorsOnTvShows.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActorsOnTvShowsCreateManyArgs>(args?: SelectSubset<T, ActorsOnTvShowsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActorsOnTvShows and returns the data saved in the database.
     * @param {ActorsOnTvShowsCreateManyAndReturnArgs} args - Arguments to create many ActorsOnTvShows.
     * @example
     * // Create many ActorsOnTvShows
     * const actorsOnTvShows = await prisma.actorsOnTvShows.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActorsOnTvShows and only return the `id`
     * const actorsOnTvShowsWithIdOnly = await prisma.actorsOnTvShows.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActorsOnTvShowsCreateManyAndReturnArgs>(args?: SelectSubset<T, ActorsOnTvShowsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActorsOnTvShowsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActorsOnTvShows.
     * @param {ActorsOnTvShowsDeleteArgs} args - Arguments to delete one ActorsOnTvShows.
     * @example
     * // Delete one ActorsOnTvShows
     * const ActorsOnTvShows = await prisma.actorsOnTvShows.delete({
     *   where: {
     *     // ... filter to delete one ActorsOnTvShows
     *   }
     * })
     * 
     */
    delete<T extends ActorsOnTvShowsDeleteArgs>(args: SelectSubset<T, ActorsOnTvShowsDeleteArgs<ExtArgs>>): Prisma__ActorsOnTvShowsClient<$Result.GetResult<Prisma.$ActorsOnTvShowsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActorsOnTvShows.
     * @param {ActorsOnTvShowsUpdateArgs} args - Arguments to update one ActorsOnTvShows.
     * @example
     * // Update one ActorsOnTvShows
     * const actorsOnTvShows = await prisma.actorsOnTvShows.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActorsOnTvShowsUpdateArgs>(args: SelectSubset<T, ActorsOnTvShowsUpdateArgs<ExtArgs>>): Prisma__ActorsOnTvShowsClient<$Result.GetResult<Prisma.$ActorsOnTvShowsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActorsOnTvShows.
     * @param {ActorsOnTvShowsDeleteManyArgs} args - Arguments to filter ActorsOnTvShows to delete.
     * @example
     * // Delete a few ActorsOnTvShows
     * const { count } = await prisma.actorsOnTvShows.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActorsOnTvShowsDeleteManyArgs>(args?: SelectSubset<T, ActorsOnTvShowsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActorsOnTvShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsOnTvShowsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActorsOnTvShows
     * const actorsOnTvShows = await prisma.actorsOnTvShows.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActorsOnTvShowsUpdateManyArgs>(args: SelectSubset<T, ActorsOnTvShowsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActorsOnTvShows and returns the data updated in the database.
     * @param {ActorsOnTvShowsUpdateManyAndReturnArgs} args - Arguments to update many ActorsOnTvShows.
     * @example
     * // Update many ActorsOnTvShows
     * const actorsOnTvShows = await prisma.actorsOnTvShows.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActorsOnTvShows and only return the `id`
     * const actorsOnTvShowsWithIdOnly = await prisma.actorsOnTvShows.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActorsOnTvShowsUpdateManyAndReturnArgs>(args: SelectSubset<T, ActorsOnTvShowsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActorsOnTvShowsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActorsOnTvShows.
     * @param {ActorsOnTvShowsUpsertArgs} args - Arguments to update or create a ActorsOnTvShows.
     * @example
     * // Update or create a ActorsOnTvShows
     * const actorsOnTvShows = await prisma.actorsOnTvShows.upsert({
     *   create: {
     *     // ... data to create a ActorsOnTvShows
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActorsOnTvShows we want to update
     *   }
     * })
     */
    upsert<T extends ActorsOnTvShowsUpsertArgs>(args: SelectSubset<T, ActorsOnTvShowsUpsertArgs<ExtArgs>>): Prisma__ActorsOnTvShowsClient<$Result.GetResult<Prisma.$ActorsOnTvShowsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActorsOnTvShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsOnTvShowsCountArgs} args - Arguments to filter ActorsOnTvShows to count.
     * @example
     * // Count the number of ActorsOnTvShows
     * const count = await prisma.actorsOnTvShows.count({
     *   where: {
     *     // ... the filter for the ActorsOnTvShows we want to count
     *   }
     * })
    **/
    count<T extends ActorsOnTvShowsCountArgs>(
      args?: Subset<T, ActorsOnTvShowsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActorsOnTvShowsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActorsOnTvShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsOnTvShowsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActorsOnTvShowsAggregateArgs>(args: Subset<T, ActorsOnTvShowsAggregateArgs>): Prisma.PrismaPromise<GetActorsOnTvShowsAggregateType<T>>

    /**
     * Group by ActorsOnTvShows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsOnTvShowsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActorsOnTvShowsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActorsOnTvShowsGroupByArgs['orderBy'] }
        : { orderBy?: ActorsOnTvShowsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActorsOnTvShowsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActorsOnTvShowsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActorsOnTvShows model
   */
  readonly fields: ActorsOnTvShowsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActorsOnTvShows.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActorsOnTvShowsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tvShow<T extends TvShowsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TvShowsDefaultArgs<ExtArgs>>): Prisma__TvShowsClient<$Result.GetResult<Prisma.$TvShowsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actor<T extends ActorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ActorsDefaultArgs<ExtArgs>>): Prisma__ActorsClient<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActorsOnTvShows model
   */
  interface ActorsOnTvShowsFieldRefs {
    readonly id: FieldRef<"ActorsOnTvShows", 'String'>
    readonly tvShowId: FieldRef<"ActorsOnTvShows", 'String'>
    readonly actorId: FieldRef<"ActorsOnTvShows", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ActorsOnTvShows findUnique
   */
  export type ActorsOnTvShowsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActorsOnTvShows
     */
    select?: ActorsOnTvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActorsOnTvShows
     */
    omit?: ActorsOnTvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsOnTvShowsInclude<ExtArgs> | null
    /**
     * Filter, which ActorsOnTvShows to fetch.
     */
    where: ActorsOnTvShowsWhereUniqueInput
  }

  /**
   * ActorsOnTvShows findUniqueOrThrow
   */
  export type ActorsOnTvShowsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActorsOnTvShows
     */
    select?: ActorsOnTvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActorsOnTvShows
     */
    omit?: ActorsOnTvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsOnTvShowsInclude<ExtArgs> | null
    /**
     * Filter, which ActorsOnTvShows to fetch.
     */
    where: ActorsOnTvShowsWhereUniqueInput
  }

  /**
   * ActorsOnTvShows findFirst
   */
  export type ActorsOnTvShowsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActorsOnTvShows
     */
    select?: ActorsOnTvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActorsOnTvShows
     */
    omit?: ActorsOnTvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsOnTvShowsInclude<ExtArgs> | null
    /**
     * Filter, which ActorsOnTvShows to fetch.
     */
    where?: ActorsOnTvShowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActorsOnTvShows to fetch.
     */
    orderBy?: ActorsOnTvShowsOrderByWithRelationInput | ActorsOnTvShowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActorsOnTvShows.
     */
    cursor?: ActorsOnTvShowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActorsOnTvShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActorsOnTvShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActorsOnTvShows.
     */
    distinct?: ActorsOnTvShowsScalarFieldEnum | ActorsOnTvShowsScalarFieldEnum[]
  }

  /**
   * ActorsOnTvShows findFirstOrThrow
   */
  export type ActorsOnTvShowsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActorsOnTvShows
     */
    select?: ActorsOnTvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActorsOnTvShows
     */
    omit?: ActorsOnTvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsOnTvShowsInclude<ExtArgs> | null
    /**
     * Filter, which ActorsOnTvShows to fetch.
     */
    where?: ActorsOnTvShowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActorsOnTvShows to fetch.
     */
    orderBy?: ActorsOnTvShowsOrderByWithRelationInput | ActorsOnTvShowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActorsOnTvShows.
     */
    cursor?: ActorsOnTvShowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActorsOnTvShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActorsOnTvShows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActorsOnTvShows.
     */
    distinct?: ActorsOnTvShowsScalarFieldEnum | ActorsOnTvShowsScalarFieldEnum[]
  }

  /**
   * ActorsOnTvShows findMany
   */
  export type ActorsOnTvShowsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActorsOnTvShows
     */
    select?: ActorsOnTvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActorsOnTvShows
     */
    omit?: ActorsOnTvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsOnTvShowsInclude<ExtArgs> | null
    /**
     * Filter, which ActorsOnTvShows to fetch.
     */
    where?: ActorsOnTvShowsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActorsOnTvShows to fetch.
     */
    orderBy?: ActorsOnTvShowsOrderByWithRelationInput | ActorsOnTvShowsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActorsOnTvShows.
     */
    cursor?: ActorsOnTvShowsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActorsOnTvShows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActorsOnTvShows.
     */
    skip?: number
    distinct?: ActorsOnTvShowsScalarFieldEnum | ActorsOnTvShowsScalarFieldEnum[]
  }

  /**
   * ActorsOnTvShows create
   */
  export type ActorsOnTvShowsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActorsOnTvShows
     */
    select?: ActorsOnTvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActorsOnTvShows
     */
    omit?: ActorsOnTvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsOnTvShowsInclude<ExtArgs> | null
    /**
     * The data needed to create a ActorsOnTvShows.
     */
    data: XOR<ActorsOnTvShowsCreateInput, ActorsOnTvShowsUncheckedCreateInput>
  }

  /**
   * ActorsOnTvShows createMany
   */
  export type ActorsOnTvShowsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActorsOnTvShows.
     */
    data: ActorsOnTvShowsCreateManyInput | ActorsOnTvShowsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActorsOnTvShows createManyAndReturn
   */
  export type ActorsOnTvShowsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActorsOnTvShows
     */
    select?: ActorsOnTvShowsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActorsOnTvShows
     */
    omit?: ActorsOnTvShowsOmit<ExtArgs> | null
    /**
     * The data used to create many ActorsOnTvShows.
     */
    data: ActorsOnTvShowsCreateManyInput | ActorsOnTvShowsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsOnTvShowsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActorsOnTvShows update
   */
  export type ActorsOnTvShowsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActorsOnTvShows
     */
    select?: ActorsOnTvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActorsOnTvShows
     */
    omit?: ActorsOnTvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsOnTvShowsInclude<ExtArgs> | null
    /**
     * The data needed to update a ActorsOnTvShows.
     */
    data: XOR<ActorsOnTvShowsUpdateInput, ActorsOnTvShowsUncheckedUpdateInput>
    /**
     * Choose, which ActorsOnTvShows to update.
     */
    where: ActorsOnTvShowsWhereUniqueInput
  }

  /**
   * ActorsOnTvShows updateMany
   */
  export type ActorsOnTvShowsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActorsOnTvShows.
     */
    data: XOR<ActorsOnTvShowsUpdateManyMutationInput, ActorsOnTvShowsUncheckedUpdateManyInput>
    /**
     * Filter which ActorsOnTvShows to update
     */
    where?: ActorsOnTvShowsWhereInput
    /**
     * Limit how many ActorsOnTvShows to update.
     */
    limit?: number
  }

  /**
   * ActorsOnTvShows updateManyAndReturn
   */
  export type ActorsOnTvShowsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActorsOnTvShows
     */
    select?: ActorsOnTvShowsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActorsOnTvShows
     */
    omit?: ActorsOnTvShowsOmit<ExtArgs> | null
    /**
     * The data used to update ActorsOnTvShows.
     */
    data: XOR<ActorsOnTvShowsUpdateManyMutationInput, ActorsOnTvShowsUncheckedUpdateManyInput>
    /**
     * Filter which ActorsOnTvShows to update
     */
    where?: ActorsOnTvShowsWhereInput
    /**
     * Limit how many ActorsOnTvShows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsOnTvShowsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActorsOnTvShows upsert
   */
  export type ActorsOnTvShowsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActorsOnTvShows
     */
    select?: ActorsOnTvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActorsOnTvShows
     */
    omit?: ActorsOnTvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsOnTvShowsInclude<ExtArgs> | null
    /**
     * The filter to search for the ActorsOnTvShows to update in case it exists.
     */
    where: ActorsOnTvShowsWhereUniqueInput
    /**
     * In case the ActorsOnTvShows found by the `where` argument doesn't exist, create a new ActorsOnTvShows with this data.
     */
    create: XOR<ActorsOnTvShowsCreateInput, ActorsOnTvShowsUncheckedCreateInput>
    /**
     * In case the ActorsOnTvShows was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActorsOnTvShowsUpdateInput, ActorsOnTvShowsUncheckedUpdateInput>
  }

  /**
   * ActorsOnTvShows delete
   */
  export type ActorsOnTvShowsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActorsOnTvShows
     */
    select?: ActorsOnTvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActorsOnTvShows
     */
    omit?: ActorsOnTvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsOnTvShowsInclude<ExtArgs> | null
    /**
     * Filter which ActorsOnTvShows to delete.
     */
    where: ActorsOnTvShowsWhereUniqueInput
  }

  /**
   * ActorsOnTvShows deleteMany
   */
  export type ActorsOnTvShowsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActorsOnTvShows to delete
     */
    where?: ActorsOnTvShowsWhereInput
    /**
     * Limit how many ActorsOnTvShows to delete.
     */
    limit?: number
  }

  /**
   * ActorsOnTvShows without action
   */
  export type ActorsOnTvShowsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActorsOnTvShows
     */
    select?: ActorsOnTvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActorsOnTvShows
     */
    omit?: ActorsOnTvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsOnTvShowsInclude<ExtArgs> | null
  }


  /**
   * Model Actors
   */

  export type AggregateActors = {
    _count: ActorsCountAggregateOutputType | null
    _min: ActorsMinAggregateOutputType | null
    _max: ActorsMaxAggregateOutputType | null
  }

  export type ActorsMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ActorsMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type ActorsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type ActorsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type ActorsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type ActorsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type ActorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actors to aggregate.
     */
    where?: ActorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorsOrderByWithRelationInput | ActorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actors
    **/
    _count?: true | ActorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActorsMaxAggregateInputType
  }

  export type GetActorsAggregateType<T extends ActorsAggregateArgs> = {
        [P in keyof T & keyof AggregateActors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActors[P]>
      : GetScalarType<T[P], AggregateActors[P]>
  }




  export type ActorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActorsWhereInput
    orderBy?: ActorsOrderByWithAggregationInput | ActorsOrderByWithAggregationInput[]
    by: ActorsScalarFieldEnum[] | ActorsScalarFieldEnum
    having?: ActorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActorsCountAggregateInputType | true
    _min?: ActorsMinAggregateInputType
    _max?: ActorsMaxAggregateInputType
  }

  export type ActorsGroupByOutputType = {
    id: string
    name: string
    _count: ActorsCountAggregateOutputType | null
    _min: ActorsMinAggregateOutputType | null
    _max: ActorsMaxAggregateOutputType | null
  }

  type GetActorsGroupByPayload<T extends ActorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActorsGroupByOutputType[P]>
            : GetScalarType<T[P], ActorsGroupByOutputType[P]>
        }
      >
    >


  export type ActorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    tvShows?: boolean | Actors$tvShowsArgs<ExtArgs>
    _count?: boolean | ActorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actors"]>

  export type ActorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["actors"]>

  export type ActorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["actors"]>

  export type ActorsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type ActorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["actors"]>
  export type ActorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tvShows?: boolean | Actors$tvShowsArgs<ExtArgs>
    _count?: boolean | ActorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ActorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ActorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ActorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Actors"
    objects: {
      tvShows: Prisma.$ActorsOnTvShowsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["actors"]>
    composites: {}
  }

  type ActorsGetPayload<S extends boolean | null | undefined | ActorsDefaultArgs> = $Result.GetResult<Prisma.$ActorsPayload, S>

  type ActorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActorsCountAggregateInputType | true
    }

  export interface ActorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Actors'], meta: { name: 'Actors' } }
    /**
     * Find zero or one Actors that matches the filter.
     * @param {ActorsFindUniqueArgs} args - Arguments to find a Actors
     * @example
     * // Get one Actors
     * const actors = await prisma.actors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActorsFindUniqueArgs>(args: SelectSubset<T, ActorsFindUniqueArgs<ExtArgs>>): Prisma__ActorsClient<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Actors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActorsFindUniqueOrThrowArgs} args - Arguments to find a Actors
     * @example
     * // Get one Actors
     * const actors = await prisma.actors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActorsFindUniqueOrThrowArgs>(args: SelectSubset<T, ActorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActorsClient<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsFindFirstArgs} args - Arguments to find a Actors
     * @example
     * // Get one Actors
     * const actors = await prisma.actors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActorsFindFirstArgs>(args?: SelectSubset<T, ActorsFindFirstArgs<ExtArgs>>): Prisma__ActorsClient<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsFindFirstOrThrowArgs} args - Arguments to find a Actors
     * @example
     * // Get one Actors
     * const actors = await prisma.actors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActorsFindFirstOrThrowArgs>(args?: SelectSubset<T, ActorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActorsClient<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actors
     * const actors = await prisma.actors.findMany()
     * 
     * // Get first 10 Actors
     * const actors = await prisma.actors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actorsWithIdOnly = await prisma.actors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActorsFindManyArgs>(args?: SelectSubset<T, ActorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Actors.
     * @param {ActorsCreateArgs} args - Arguments to create a Actors.
     * @example
     * // Create one Actors
     * const Actors = await prisma.actors.create({
     *   data: {
     *     // ... data to create a Actors
     *   }
     * })
     * 
     */
    create<T extends ActorsCreateArgs>(args: SelectSubset<T, ActorsCreateArgs<ExtArgs>>): Prisma__ActorsClient<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actors.
     * @param {ActorsCreateManyArgs} args - Arguments to create many Actors.
     * @example
     * // Create many Actors
     * const actors = await prisma.actors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActorsCreateManyArgs>(args?: SelectSubset<T, ActorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Actors and returns the data saved in the database.
     * @param {ActorsCreateManyAndReturnArgs} args - Arguments to create many Actors.
     * @example
     * // Create many Actors
     * const actors = await prisma.actors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Actors and only return the `id`
     * const actorsWithIdOnly = await prisma.actors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActorsCreateManyAndReturnArgs>(args?: SelectSubset<T, ActorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Actors.
     * @param {ActorsDeleteArgs} args - Arguments to delete one Actors.
     * @example
     * // Delete one Actors
     * const Actors = await prisma.actors.delete({
     *   where: {
     *     // ... filter to delete one Actors
     *   }
     * })
     * 
     */
    delete<T extends ActorsDeleteArgs>(args: SelectSubset<T, ActorsDeleteArgs<ExtArgs>>): Prisma__ActorsClient<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Actors.
     * @param {ActorsUpdateArgs} args - Arguments to update one Actors.
     * @example
     * // Update one Actors
     * const actors = await prisma.actors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActorsUpdateArgs>(args: SelectSubset<T, ActorsUpdateArgs<ExtArgs>>): Prisma__ActorsClient<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actors.
     * @param {ActorsDeleteManyArgs} args - Arguments to filter Actors to delete.
     * @example
     * // Delete a few Actors
     * const { count } = await prisma.actors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActorsDeleteManyArgs>(args?: SelectSubset<T, ActorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actors
     * const actors = await prisma.actors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActorsUpdateManyArgs>(args: SelectSubset<T, ActorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actors and returns the data updated in the database.
     * @param {ActorsUpdateManyAndReturnArgs} args - Arguments to update many Actors.
     * @example
     * // Update many Actors
     * const actors = await prisma.actors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Actors and only return the `id`
     * const actorsWithIdOnly = await prisma.actors.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActorsUpdateManyAndReturnArgs>(args: SelectSubset<T, ActorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Actors.
     * @param {ActorsUpsertArgs} args - Arguments to update or create a Actors.
     * @example
     * // Update or create a Actors
     * const actors = await prisma.actors.upsert({
     *   create: {
     *     // ... data to create a Actors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actors we want to update
     *   }
     * })
     */
    upsert<T extends ActorsUpsertArgs>(args: SelectSubset<T, ActorsUpsertArgs<ExtArgs>>): Prisma__ActorsClient<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsCountArgs} args - Arguments to filter Actors to count.
     * @example
     * // Count the number of Actors
     * const count = await prisma.actors.count({
     *   where: {
     *     // ... the filter for the Actors we want to count
     *   }
     * })
    **/
    count<T extends ActorsCountArgs>(
      args?: Subset<T, ActorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActorsAggregateArgs>(args: Subset<T, ActorsAggregateArgs>): Prisma.PrismaPromise<GetActorsAggregateType<T>>

    /**
     * Group by Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActorsGroupByArgs['orderBy'] }
        : { orderBy?: ActorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Actors model
   */
  readonly fields: ActorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Actors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tvShows<T extends Actors$tvShowsArgs<ExtArgs> = {}>(args?: Subset<T, Actors$tvShowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActorsOnTvShowsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Actors model
   */
  interface ActorsFieldRefs {
    readonly id: FieldRef<"Actors", 'String'>
    readonly name: FieldRef<"Actors", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Actors findUnique
   */
  export type ActorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actors
     */
    omit?: ActorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
    /**
     * Filter, which Actors to fetch.
     */
    where: ActorsWhereUniqueInput
  }

  /**
   * Actors findUniqueOrThrow
   */
  export type ActorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actors
     */
    omit?: ActorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
    /**
     * Filter, which Actors to fetch.
     */
    where: ActorsWhereUniqueInput
  }

  /**
   * Actors findFirst
   */
  export type ActorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actors
     */
    omit?: ActorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
    /**
     * Filter, which Actors to fetch.
     */
    where?: ActorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorsOrderByWithRelationInput | ActorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actors.
     */
    cursor?: ActorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actors.
     */
    distinct?: ActorsScalarFieldEnum | ActorsScalarFieldEnum[]
  }

  /**
   * Actors findFirstOrThrow
   */
  export type ActorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actors
     */
    omit?: ActorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
    /**
     * Filter, which Actors to fetch.
     */
    where?: ActorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorsOrderByWithRelationInput | ActorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actors.
     */
    cursor?: ActorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actors.
     */
    distinct?: ActorsScalarFieldEnum | ActorsScalarFieldEnum[]
  }

  /**
   * Actors findMany
   */
  export type ActorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actors
     */
    omit?: ActorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
    /**
     * Filter, which Actors to fetch.
     */
    where?: ActorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorsOrderByWithRelationInput | ActorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actors.
     */
    cursor?: ActorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     */
    skip?: number
    distinct?: ActorsScalarFieldEnum | ActorsScalarFieldEnum[]
  }

  /**
   * Actors create
   */
  export type ActorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actors
     */
    omit?: ActorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
    /**
     * The data needed to create a Actors.
     */
    data: XOR<ActorsCreateInput, ActorsUncheckedCreateInput>
  }

  /**
   * Actors createMany
   */
  export type ActorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actors.
     */
    data: ActorsCreateManyInput | ActorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Actors createManyAndReturn
   */
  export type ActorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actors
     */
    omit?: ActorsOmit<ExtArgs> | null
    /**
     * The data used to create many Actors.
     */
    data: ActorsCreateManyInput | ActorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Actors update
   */
  export type ActorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actors
     */
    omit?: ActorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
    /**
     * The data needed to update a Actors.
     */
    data: XOR<ActorsUpdateInput, ActorsUncheckedUpdateInput>
    /**
     * Choose, which Actors to update.
     */
    where: ActorsWhereUniqueInput
  }

  /**
   * Actors updateMany
   */
  export type ActorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actors.
     */
    data: XOR<ActorsUpdateManyMutationInput, ActorsUncheckedUpdateManyInput>
    /**
     * Filter which Actors to update
     */
    where?: ActorsWhereInput
    /**
     * Limit how many Actors to update.
     */
    limit?: number
  }

  /**
   * Actors updateManyAndReturn
   */
  export type ActorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Actors
     */
    omit?: ActorsOmit<ExtArgs> | null
    /**
     * The data used to update Actors.
     */
    data: XOR<ActorsUpdateManyMutationInput, ActorsUncheckedUpdateManyInput>
    /**
     * Filter which Actors to update
     */
    where?: ActorsWhereInput
    /**
     * Limit how many Actors to update.
     */
    limit?: number
  }

  /**
   * Actors upsert
   */
  export type ActorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actors
     */
    omit?: ActorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
    /**
     * The filter to search for the Actors to update in case it exists.
     */
    where: ActorsWhereUniqueInput
    /**
     * In case the Actors found by the `where` argument doesn't exist, create a new Actors with this data.
     */
    create: XOR<ActorsCreateInput, ActorsUncheckedCreateInput>
    /**
     * In case the Actors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActorsUpdateInput, ActorsUncheckedUpdateInput>
  }

  /**
   * Actors delete
   */
  export type ActorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actors
     */
    omit?: ActorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
    /**
     * Filter which Actors to delete.
     */
    where: ActorsWhereUniqueInput
  }

  /**
   * Actors deleteMany
   */
  export type ActorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actors to delete
     */
    where?: ActorsWhereInput
    /**
     * Limit how many Actors to delete.
     */
    limit?: number
  }

  /**
   * Actors.tvShows
   */
  export type Actors$tvShowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActorsOnTvShows
     */
    select?: ActorsOnTvShowsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActorsOnTvShows
     */
    omit?: ActorsOnTvShowsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsOnTvShowsInclude<ExtArgs> | null
    where?: ActorsOnTvShowsWhereInput
    orderBy?: ActorsOnTvShowsOrderByWithRelationInput | ActorsOnTvShowsOrderByWithRelationInput[]
    cursor?: ActorsOnTvShowsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActorsOnTvShowsScalarFieldEnum | ActorsOnTvShowsScalarFieldEnum[]
  }

  /**
   * Actors without action
   */
  export type ActorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Actors
     */
    omit?: ActorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TvShowsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    synopsis: 'synopsis',
    cast: 'cast',
    poster: 'poster',
    premiereDate: 'premiereDate',
    originalName: 'originalName',
    createdAt: 'createdAt'
  };

  export type TvShowsScalarFieldEnum = (typeof TvShowsScalarFieldEnum)[keyof typeof TvShowsScalarFieldEnum]


  export const GenresScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenresScalarFieldEnum = (typeof GenresScalarFieldEnum)[keyof typeof GenresScalarFieldEnum]


  export const TvShowGenresScalarFieldEnum: {
    id: 'id',
    tvShowId: 'tvShowId',
    genreId: 'genreId'
  };

  export type TvShowGenresScalarFieldEnum = (typeof TvShowGenresScalarFieldEnum)[keyof typeof TvShowGenresScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const ListTvShowScalarFieldEnum: {
    id: 'id',
    listId: 'listId',
    tvShowId: 'tvShowId',
    addedAt: 'addedAt',
    order: 'order'
  };

  export type ListTvShowScalarFieldEnum = (typeof ListTvShowScalarFieldEnum)[keyof typeof ListTvShowScalarFieldEnum]


  export const ListsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ListsScalarFieldEnum = (typeof ListsScalarFieldEnum)[keyof typeof ListsScalarFieldEnum]


  export const RatingScaleScalarFieldEnum: {
    id: 'id',
    label: 'label'
  };

  export type RatingScaleScalarFieldEnum = (typeof RatingScaleScalarFieldEnum)[keyof typeof RatingScaleScalarFieldEnum]


  export const RatingsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    tvShowId: 'tvShowId',
    scaleId: 'scaleId',
    comment: 'comment'
  };

  export type RatingsScalarFieldEnum = (typeof RatingsScalarFieldEnum)[keyof typeof RatingsScalarFieldEnum]


  export const ActorsOnTvShowsScalarFieldEnum: {
    id: 'id',
    tvShowId: 'tvShowId',
    actorId: 'actorId'
  };

  export type ActorsOnTvShowsScalarFieldEnum = (typeof ActorsOnTvShowsScalarFieldEnum)[keyof typeof ActorsOnTvShowsScalarFieldEnum]


  export const ActorsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type ActorsScalarFieldEnum = (typeof ActorsScalarFieldEnum)[keyof typeof ActorsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TvShowsWhereInput = {
    AND?: TvShowsWhereInput | TvShowsWhereInput[]
    OR?: TvShowsWhereInput[]
    NOT?: TvShowsWhereInput | TvShowsWhereInput[]
    id?: StringFilter<"TvShows"> | string
    title?: StringFilter<"TvShows"> | string
    synopsis?: StringFilter<"TvShows"> | string
    cast?: StringFilter<"TvShows"> | string
    poster?: StringFilter<"TvShows"> | string
    premiereDate?: DateTimeFilter<"TvShows"> | Date | string
    originalName?: StringFilter<"TvShows"> | string
    createdAt?: DateTimeFilter<"TvShows"> | Date | string
    tvshowGenres?: TvShowGenresListRelationFilter
    lists?: ListTvShowListRelationFilter
    ratings?: RatingsListRelationFilter
    actors?: ActorsOnTvShowsListRelationFilter
  }

  export type TvShowsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    cast?: SortOrder
    poster?: SortOrder
    premiereDate?: SortOrder
    originalName?: SortOrder
    createdAt?: SortOrder
    tvshowGenres?: TvShowGenresOrderByRelationAggregateInput
    lists?: ListTvShowOrderByRelationAggregateInput
    ratings?: RatingsOrderByRelationAggregateInput
    actors?: ActorsOnTvShowsOrderByRelationAggregateInput
  }

  export type TvShowsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TvShowsWhereInput | TvShowsWhereInput[]
    OR?: TvShowsWhereInput[]
    NOT?: TvShowsWhereInput | TvShowsWhereInput[]
    title?: StringFilter<"TvShows"> | string
    synopsis?: StringFilter<"TvShows"> | string
    cast?: StringFilter<"TvShows"> | string
    poster?: StringFilter<"TvShows"> | string
    premiereDate?: DateTimeFilter<"TvShows"> | Date | string
    originalName?: StringFilter<"TvShows"> | string
    createdAt?: DateTimeFilter<"TvShows"> | Date | string
    tvshowGenres?: TvShowGenresListRelationFilter
    lists?: ListTvShowListRelationFilter
    ratings?: RatingsListRelationFilter
    actors?: ActorsOnTvShowsListRelationFilter
  }, "id">

  export type TvShowsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    cast?: SortOrder
    poster?: SortOrder
    premiereDate?: SortOrder
    originalName?: SortOrder
    createdAt?: SortOrder
    _count?: TvShowsCountOrderByAggregateInput
    _max?: TvShowsMaxOrderByAggregateInput
    _min?: TvShowsMinOrderByAggregateInput
  }

  export type TvShowsScalarWhereWithAggregatesInput = {
    AND?: TvShowsScalarWhereWithAggregatesInput | TvShowsScalarWhereWithAggregatesInput[]
    OR?: TvShowsScalarWhereWithAggregatesInput[]
    NOT?: TvShowsScalarWhereWithAggregatesInput | TvShowsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TvShows"> | string
    title?: StringWithAggregatesFilter<"TvShows"> | string
    synopsis?: StringWithAggregatesFilter<"TvShows"> | string
    cast?: StringWithAggregatesFilter<"TvShows"> | string
    poster?: StringWithAggregatesFilter<"TvShows"> | string
    premiereDate?: DateTimeWithAggregatesFilter<"TvShows"> | Date | string
    originalName?: StringWithAggregatesFilter<"TvShows"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TvShows"> | Date | string
  }

  export type GenresWhereInput = {
    AND?: GenresWhereInput | GenresWhereInput[]
    OR?: GenresWhereInput[]
    NOT?: GenresWhereInput | GenresWhereInput[]
    id?: StringFilter<"Genres"> | string
    name?: StringFilter<"Genres"> | string
    tvshowGenres?: TvShowGenresListRelationFilter
  }

  export type GenresOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tvshowGenres?: TvShowGenresOrderByRelationAggregateInput
  }

  export type GenresWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GenresWhereInput | GenresWhereInput[]
    OR?: GenresWhereInput[]
    NOT?: GenresWhereInput | GenresWhereInput[]
    name?: StringFilter<"Genres"> | string
    tvshowGenres?: TvShowGenresListRelationFilter
  }, "id">

  export type GenresOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GenresCountOrderByAggregateInput
    _max?: GenresMaxOrderByAggregateInput
    _min?: GenresMinOrderByAggregateInput
  }

  export type GenresScalarWhereWithAggregatesInput = {
    AND?: GenresScalarWhereWithAggregatesInput | GenresScalarWhereWithAggregatesInput[]
    OR?: GenresScalarWhereWithAggregatesInput[]
    NOT?: GenresScalarWhereWithAggregatesInput | GenresScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Genres"> | string
    name?: StringWithAggregatesFilter<"Genres"> | string
  }

  export type TvShowGenresWhereInput = {
    AND?: TvShowGenresWhereInput | TvShowGenresWhereInput[]
    OR?: TvShowGenresWhereInput[]
    NOT?: TvShowGenresWhereInput | TvShowGenresWhereInput[]
    id?: StringFilter<"TvShowGenres"> | string
    tvShowId?: StringFilter<"TvShowGenres"> | string
    genreId?: StringFilter<"TvShowGenres"> | string
    tvShow?: XOR<TvShowsScalarRelationFilter, TvShowsWhereInput>
    genre?: XOR<GenresScalarRelationFilter, GenresWhereInput>
  }

  export type TvShowGenresOrderByWithRelationInput = {
    id?: SortOrder
    tvShowId?: SortOrder
    genreId?: SortOrder
    tvShow?: TvShowsOrderByWithRelationInput
    genre?: GenresOrderByWithRelationInput
  }

  export type TvShowGenresWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TvShowGenresWhereInput | TvShowGenresWhereInput[]
    OR?: TvShowGenresWhereInput[]
    NOT?: TvShowGenresWhereInput | TvShowGenresWhereInput[]
    tvShowId?: StringFilter<"TvShowGenres"> | string
    genreId?: StringFilter<"TvShowGenres"> | string
    tvShow?: XOR<TvShowsScalarRelationFilter, TvShowsWhereInput>
    genre?: XOR<GenresScalarRelationFilter, GenresWhereInput>
  }, "id">

  export type TvShowGenresOrderByWithAggregationInput = {
    id?: SortOrder
    tvShowId?: SortOrder
    genreId?: SortOrder
    _count?: TvShowGenresCountOrderByAggregateInput
    _max?: TvShowGenresMaxOrderByAggregateInput
    _min?: TvShowGenresMinOrderByAggregateInput
  }

  export type TvShowGenresScalarWhereWithAggregatesInput = {
    AND?: TvShowGenresScalarWhereWithAggregatesInput | TvShowGenresScalarWhereWithAggregatesInput[]
    OR?: TvShowGenresScalarWhereWithAggregatesInput[]
    NOT?: TvShowGenresScalarWhereWithAggregatesInput | TvShowGenresScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TvShowGenres"> | string
    tvShowId?: StringWithAggregatesFilter<"TvShowGenres"> | string
    genreId?: StringWithAggregatesFilter<"TvShowGenres"> | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    list?: ListsListRelationFilter
    ratings?: RatingsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    list?: ListsOrderByRelationAggregateInput
    ratings?: RatingsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    list?: ListsListRelationFilter
    ratings?: RatingsListRelationFilter
  }, "id" | "email" | "username">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type ListTvShowWhereInput = {
    AND?: ListTvShowWhereInput | ListTvShowWhereInput[]
    OR?: ListTvShowWhereInput[]
    NOT?: ListTvShowWhereInput | ListTvShowWhereInput[]
    id?: StringFilter<"ListTvShow"> | string
    listId?: StringFilter<"ListTvShow"> | string
    tvShowId?: StringFilter<"ListTvShow"> | string
    addedAt?: DateTimeFilter<"ListTvShow"> | Date | string
    order?: IntFilter<"ListTvShow"> | number
    list?: XOR<ListsScalarRelationFilter, ListsWhereInput>
    tvShow?: XOR<TvShowsScalarRelationFilter, TvShowsWhereInput>
  }

  export type ListTvShowOrderByWithRelationInput = {
    id?: SortOrder
    listId?: SortOrder
    tvShowId?: SortOrder
    addedAt?: SortOrder
    order?: SortOrder
    list?: ListsOrderByWithRelationInput
    tvShow?: TvShowsOrderByWithRelationInput
  }

  export type ListTvShowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListTvShowWhereInput | ListTvShowWhereInput[]
    OR?: ListTvShowWhereInput[]
    NOT?: ListTvShowWhereInput | ListTvShowWhereInput[]
    listId?: StringFilter<"ListTvShow"> | string
    tvShowId?: StringFilter<"ListTvShow"> | string
    addedAt?: DateTimeFilter<"ListTvShow"> | Date | string
    order?: IntFilter<"ListTvShow"> | number
    list?: XOR<ListsScalarRelationFilter, ListsWhereInput>
    tvShow?: XOR<TvShowsScalarRelationFilter, TvShowsWhereInput>
  }, "id">

  export type ListTvShowOrderByWithAggregationInput = {
    id?: SortOrder
    listId?: SortOrder
    tvShowId?: SortOrder
    addedAt?: SortOrder
    order?: SortOrder
    _count?: ListTvShowCountOrderByAggregateInput
    _avg?: ListTvShowAvgOrderByAggregateInput
    _max?: ListTvShowMaxOrderByAggregateInput
    _min?: ListTvShowMinOrderByAggregateInput
    _sum?: ListTvShowSumOrderByAggregateInput
  }

  export type ListTvShowScalarWhereWithAggregatesInput = {
    AND?: ListTvShowScalarWhereWithAggregatesInput | ListTvShowScalarWhereWithAggregatesInput[]
    OR?: ListTvShowScalarWhereWithAggregatesInput[]
    NOT?: ListTvShowScalarWhereWithAggregatesInput | ListTvShowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ListTvShow"> | string
    listId?: StringWithAggregatesFilter<"ListTvShow"> | string
    tvShowId?: StringWithAggregatesFilter<"ListTvShow"> | string
    addedAt?: DateTimeWithAggregatesFilter<"ListTvShow"> | Date | string
    order?: IntWithAggregatesFilter<"ListTvShow"> | number
  }

  export type ListsWhereInput = {
    AND?: ListsWhereInput | ListsWhereInput[]
    OR?: ListsWhereInput[]
    NOT?: ListsWhereInput | ListsWhereInput[]
    id?: StringFilter<"Lists"> | string
    name?: StringFilter<"Lists"> | string
    userId?: StringFilter<"Lists"> | string
    createdAt?: DateTimeFilter<"Lists"> | Date | string
    updatedAt?: DateTimeFilter<"Lists"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    tvShows?: ListTvShowListRelationFilter
  }

  export type ListsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    tvShows?: ListTvShowOrderByRelationAggregateInput
  }

  export type ListsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ListsWhereInput | ListsWhereInput[]
    OR?: ListsWhereInput[]
    NOT?: ListsWhereInput | ListsWhereInput[]
    name?: StringFilter<"Lists"> | string
    userId?: StringFilter<"Lists"> | string
    createdAt?: DateTimeFilter<"Lists"> | Date | string
    updatedAt?: DateTimeFilter<"Lists"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    tvShows?: ListTvShowListRelationFilter
  }, "id">

  export type ListsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ListsCountOrderByAggregateInput
    _max?: ListsMaxOrderByAggregateInput
    _min?: ListsMinOrderByAggregateInput
  }

  export type ListsScalarWhereWithAggregatesInput = {
    AND?: ListsScalarWhereWithAggregatesInput | ListsScalarWhereWithAggregatesInput[]
    OR?: ListsScalarWhereWithAggregatesInput[]
    NOT?: ListsScalarWhereWithAggregatesInput | ListsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lists"> | string
    name?: StringWithAggregatesFilter<"Lists"> | string
    userId?: StringWithAggregatesFilter<"Lists"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Lists"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lists"> | Date | string
  }

  export type RatingScaleWhereInput = {
    AND?: RatingScaleWhereInput | RatingScaleWhereInput[]
    OR?: RatingScaleWhereInput[]
    NOT?: RatingScaleWhereInput | RatingScaleWhereInput[]
    id?: IntFilter<"RatingScale"> | number
    label?: StringFilter<"RatingScale"> | string
    ratings?: RatingsListRelationFilter
  }

  export type RatingScaleOrderByWithRelationInput = {
    id?: SortOrder
    label?: SortOrder
    ratings?: RatingsOrderByRelationAggregateInput
  }

  export type RatingScaleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RatingScaleWhereInput | RatingScaleWhereInput[]
    OR?: RatingScaleWhereInput[]
    NOT?: RatingScaleWhereInput | RatingScaleWhereInput[]
    label?: StringFilter<"RatingScale"> | string
    ratings?: RatingsListRelationFilter
  }, "id">

  export type RatingScaleOrderByWithAggregationInput = {
    id?: SortOrder
    label?: SortOrder
    _count?: RatingScaleCountOrderByAggregateInput
    _avg?: RatingScaleAvgOrderByAggregateInput
    _max?: RatingScaleMaxOrderByAggregateInput
    _min?: RatingScaleMinOrderByAggregateInput
    _sum?: RatingScaleSumOrderByAggregateInput
  }

  export type RatingScaleScalarWhereWithAggregatesInput = {
    AND?: RatingScaleScalarWhereWithAggregatesInput | RatingScaleScalarWhereWithAggregatesInput[]
    OR?: RatingScaleScalarWhereWithAggregatesInput[]
    NOT?: RatingScaleScalarWhereWithAggregatesInput | RatingScaleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RatingScale"> | number
    label?: StringWithAggregatesFilter<"RatingScale"> | string
  }

  export type RatingsWhereInput = {
    AND?: RatingsWhereInput | RatingsWhereInput[]
    OR?: RatingsWhereInput[]
    NOT?: RatingsWhereInput | RatingsWhereInput[]
    id?: StringFilter<"Ratings"> | string
    userId?: StringFilter<"Ratings"> | string
    tvShowId?: StringFilter<"Ratings"> | string
    scaleId?: IntFilter<"Ratings"> | number
    comment?: StringNullableFilter<"Ratings"> | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    tvShow?: XOR<TvShowsScalarRelationFilter, TvShowsWhereInput>
    scale?: XOR<RatingScaleScalarRelationFilter, RatingScaleWhereInput>
  }

  export type RatingsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    tvShowId?: SortOrder
    scaleId?: SortOrder
    comment?: SortOrderInput | SortOrder
    user?: UsersOrderByWithRelationInput
    tvShow?: TvShowsOrderByWithRelationInput
    scale?: RatingScaleOrderByWithRelationInput
  }

  export type RatingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RatingsWhereInput | RatingsWhereInput[]
    OR?: RatingsWhereInput[]
    NOT?: RatingsWhereInput | RatingsWhereInput[]
    userId?: StringFilter<"Ratings"> | string
    tvShowId?: StringFilter<"Ratings"> | string
    scaleId?: IntFilter<"Ratings"> | number
    comment?: StringNullableFilter<"Ratings"> | string | null
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    tvShow?: XOR<TvShowsScalarRelationFilter, TvShowsWhereInput>
    scale?: XOR<RatingScaleScalarRelationFilter, RatingScaleWhereInput>
  }, "id">

  export type RatingsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    tvShowId?: SortOrder
    scaleId?: SortOrder
    comment?: SortOrderInput | SortOrder
    _count?: RatingsCountOrderByAggregateInput
    _avg?: RatingsAvgOrderByAggregateInput
    _max?: RatingsMaxOrderByAggregateInput
    _min?: RatingsMinOrderByAggregateInput
    _sum?: RatingsSumOrderByAggregateInput
  }

  export type RatingsScalarWhereWithAggregatesInput = {
    AND?: RatingsScalarWhereWithAggregatesInput | RatingsScalarWhereWithAggregatesInput[]
    OR?: RatingsScalarWhereWithAggregatesInput[]
    NOT?: RatingsScalarWhereWithAggregatesInput | RatingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ratings"> | string
    userId?: StringWithAggregatesFilter<"Ratings"> | string
    tvShowId?: StringWithAggregatesFilter<"Ratings"> | string
    scaleId?: IntWithAggregatesFilter<"Ratings"> | number
    comment?: StringNullableWithAggregatesFilter<"Ratings"> | string | null
  }

  export type ActorsOnTvShowsWhereInput = {
    AND?: ActorsOnTvShowsWhereInput | ActorsOnTvShowsWhereInput[]
    OR?: ActorsOnTvShowsWhereInput[]
    NOT?: ActorsOnTvShowsWhereInput | ActorsOnTvShowsWhereInput[]
    id?: StringFilter<"ActorsOnTvShows"> | string
    tvShowId?: StringFilter<"ActorsOnTvShows"> | string
    actorId?: StringFilter<"ActorsOnTvShows"> | string
    tvShow?: XOR<TvShowsScalarRelationFilter, TvShowsWhereInput>
    actor?: XOR<ActorsScalarRelationFilter, ActorsWhereInput>
  }

  export type ActorsOnTvShowsOrderByWithRelationInput = {
    id?: SortOrder
    tvShowId?: SortOrder
    actorId?: SortOrder
    tvShow?: TvShowsOrderByWithRelationInput
    actor?: ActorsOrderByWithRelationInput
  }

  export type ActorsOnTvShowsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActorsOnTvShowsWhereInput | ActorsOnTvShowsWhereInput[]
    OR?: ActorsOnTvShowsWhereInput[]
    NOT?: ActorsOnTvShowsWhereInput | ActorsOnTvShowsWhereInput[]
    tvShowId?: StringFilter<"ActorsOnTvShows"> | string
    actorId?: StringFilter<"ActorsOnTvShows"> | string
    tvShow?: XOR<TvShowsScalarRelationFilter, TvShowsWhereInput>
    actor?: XOR<ActorsScalarRelationFilter, ActorsWhereInput>
  }, "id">

  export type ActorsOnTvShowsOrderByWithAggregationInput = {
    id?: SortOrder
    tvShowId?: SortOrder
    actorId?: SortOrder
    _count?: ActorsOnTvShowsCountOrderByAggregateInput
    _max?: ActorsOnTvShowsMaxOrderByAggregateInput
    _min?: ActorsOnTvShowsMinOrderByAggregateInput
  }

  export type ActorsOnTvShowsScalarWhereWithAggregatesInput = {
    AND?: ActorsOnTvShowsScalarWhereWithAggregatesInput | ActorsOnTvShowsScalarWhereWithAggregatesInput[]
    OR?: ActorsOnTvShowsScalarWhereWithAggregatesInput[]
    NOT?: ActorsOnTvShowsScalarWhereWithAggregatesInput | ActorsOnTvShowsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActorsOnTvShows"> | string
    tvShowId?: StringWithAggregatesFilter<"ActorsOnTvShows"> | string
    actorId?: StringWithAggregatesFilter<"ActorsOnTvShows"> | string
  }

  export type ActorsWhereInput = {
    AND?: ActorsWhereInput | ActorsWhereInput[]
    OR?: ActorsWhereInput[]
    NOT?: ActorsWhereInput | ActorsWhereInput[]
    id?: StringFilter<"Actors"> | string
    name?: StringFilter<"Actors"> | string
    tvShows?: ActorsOnTvShowsListRelationFilter
  }

  export type ActorsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    tvShows?: ActorsOnTvShowsOrderByRelationAggregateInput
  }

  export type ActorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActorsWhereInput | ActorsWhereInput[]
    OR?: ActorsWhereInput[]
    NOT?: ActorsWhereInput | ActorsWhereInput[]
    name?: StringFilter<"Actors"> | string
    tvShows?: ActorsOnTvShowsListRelationFilter
  }, "id">

  export type ActorsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: ActorsCountOrderByAggregateInput
    _max?: ActorsMaxOrderByAggregateInput
    _min?: ActorsMinOrderByAggregateInput
  }

  export type ActorsScalarWhereWithAggregatesInput = {
    AND?: ActorsScalarWhereWithAggregatesInput | ActorsScalarWhereWithAggregatesInput[]
    OR?: ActorsScalarWhereWithAggregatesInput[]
    NOT?: ActorsScalarWhereWithAggregatesInput | ActorsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Actors"> | string
    name?: StringWithAggregatesFilter<"Actors"> | string
  }

  export type TvShowsCreateInput = {
    id?: string
    title: string
    synopsis: string
    cast: string
    poster: string
    premiereDate: Date | string
    originalName: string
    createdAt?: Date | string
    tvshowGenres?: TvShowGenresCreateNestedManyWithoutTvShowInput
    lists?: ListTvShowCreateNestedManyWithoutTvShowInput
    ratings?: RatingsCreateNestedManyWithoutTvShowInput
    actors?: ActorsOnTvShowsCreateNestedManyWithoutTvShowInput
  }

  export type TvShowsUncheckedCreateInput = {
    id?: string
    title: string
    synopsis: string
    cast: string
    poster: string
    premiereDate: Date | string
    originalName: string
    createdAt?: Date | string
    tvshowGenres?: TvShowGenresUncheckedCreateNestedManyWithoutTvShowInput
    lists?: ListTvShowUncheckedCreateNestedManyWithoutTvShowInput
    ratings?: RatingsUncheckedCreateNestedManyWithoutTvShowInput
    actors?: ActorsOnTvShowsUncheckedCreateNestedManyWithoutTvShowInput
  }

  export type TvShowsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    premiereDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tvshowGenres?: TvShowGenresUpdateManyWithoutTvShowNestedInput
    lists?: ListTvShowUpdateManyWithoutTvShowNestedInput
    ratings?: RatingsUpdateManyWithoutTvShowNestedInput
    actors?: ActorsOnTvShowsUpdateManyWithoutTvShowNestedInput
  }

  export type TvShowsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    premiereDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tvshowGenres?: TvShowGenresUncheckedUpdateManyWithoutTvShowNestedInput
    lists?: ListTvShowUncheckedUpdateManyWithoutTvShowNestedInput
    ratings?: RatingsUncheckedUpdateManyWithoutTvShowNestedInput
    actors?: ActorsOnTvShowsUncheckedUpdateManyWithoutTvShowNestedInput
  }

  export type TvShowsCreateManyInput = {
    id?: string
    title: string
    synopsis: string
    cast: string
    poster: string
    premiereDate: Date | string
    originalName: string
    createdAt?: Date | string
  }

  export type TvShowsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    premiereDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TvShowsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    premiereDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenresCreateInput = {
    id?: string
    name: string
    tvshowGenres?: TvShowGenresCreateNestedManyWithoutGenreInput
  }

  export type GenresUncheckedCreateInput = {
    id?: string
    name: string
    tvshowGenres?: TvShowGenresUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenresUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tvshowGenres?: TvShowGenresUpdateManyWithoutGenreNestedInput
  }

  export type GenresUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tvshowGenres?: TvShowGenresUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenresCreateManyInput = {
    id?: string
    name: string
  }

  export type GenresUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenresUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TvShowGenresCreateInput = {
    id?: string
    tvShow: TvShowsCreateNestedOneWithoutTvshowGenresInput
    genre: GenresCreateNestedOneWithoutTvshowGenresInput
  }

  export type TvShowGenresUncheckedCreateInput = {
    id?: string
    tvShowId: string
    genreId: string
  }

  export type TvShowGenresUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvShow?: TvShowsUpdateOneRequiredWithoutTvshowGenresNestedInput
    genre?: GenresUpdateOneRequiredWithoutTvshowGenresNestedInput
  }

  export type TvShowGenresUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvShowId?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type TvShowGenresCreateManyInput = {
    id?: string
    tvShowId: string
    genreId: string
  }

  export type TvShowGenresUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type TvShowGenresUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvShowId?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateInput = {
    id?: string
    name: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    list?: ListsCreateNestedManyWithoutUserInput
    ratings?: RatingsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    list?: ListsUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ListsUpdateManyWithoutUserNestedInput
    ratings?: RatingsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ListsUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    name: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListTvShowCreateInput = {
    id?: string
    addedAt?: Date | string
    order?: number
    list: ListsCreateNestedOneWithoutTvShowsInput
    tvShow: TvShowsCreateNestedOneWithoutListsInput
  }

  export type ListTvShowUncheckedCreateInput = {
    id?: string
    listId: string
    tvShowId: string
    addedAt?: Date | string
    order?: number
  }

  export type ListTvShowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    list?: ListsUpdateOneRequiredWithoutTvShowsNestedInput
    tvShow?: TvShowsUpdateOneRequiredWithoutListsNestedInput
  }

  export type ListTvShowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    tvShowId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ListTvShowCreateManyInput = {
    id?: string
    listId: string
    tvShowId: string
    addedAt?: Date | string
    order?: number
  }

  export type ListTvShowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ListTvShowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    tvShowId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ListsCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutListInput
    tvShows?: ListTvShowCreateNestedManyWithoutListInput
  }

  export type ListsUncheckedCreateInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tvShows?: ListTvShowUncheckedCreateNestedManyWithoutListInput
  }

  export type ListsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutListNestedInput
    tvShows?: ListTvShowUpdateManyWithoutListNestedInput
  }

  export type ListsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tvShows?: ListTvShowUncheckedUpdateManyWithoutListNestedInput
  }

  export type ListsCreateManyInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ListsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingScaleCreateInput = {
    label: string
    ratings?: RatingsCreateNestedManyWithoutScaleInput
  }

  export type RatingScaleUncheckedCreateInput = {
    id?: number
    label: string
    ratings?: RatingsUncheckedCreateNestedManyWithoutScaleInput
  }

  export type RatingScaleUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    ratings?: RatingsUpdateManyWithoutScaleNestedInput
  }

  export type RatingScaleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    ratings?: RatingsUncheckedUpdateManyWithoutScaleNestedInput
  }

  export type RatingScaleCreateManyInput = {
    id?: number
    label: string
  }

  export type RatingScaleUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type RatingScaleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type RatingsCreateInput = {
    id?: string
    comment?: string | null
    user: UsersCreateNestedOneWithoutRatingsInput
    tvShow: TvShowsCreateNestedOneWithoutRatingsInput
    scale: RatingScaleCreateNestedOneWithoutRatingsInput
  }

  export type RatingsUncheckedCreateInput = {
    id?: string
    userId: string
    tvShowId: string
    scaleId: number
    comment?: string | null
  }

  export type RatingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutRatingsNestedInput
    tvShow?: TvShowsUpdateOneRequiredWithoutRatingsNestedInput
    scale?: RatingScaleUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tvShowId?: StringFieldUpdateOperationsInput | string
    scaleId?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingsCreateManyInput = {
    id?: string
    userId: string
    tvShowId: string
    scaleId: number
    comment?: string | null
  }

  export type RatingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tvShowId?: StringFieldUpdateOperationsInput | string
    scaleId?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActorsOnTvShowsCreateInput = {
    id?: string
    tvShow: TvShowsCreateNestedOneWithoutActorsInput
    actor: ActorsCreateNestedOneWithoutTvShowsInput
  }

  export type ActorsOnTvShowsUncheckedCreateInput = {
    id?: string
    tvShowId: string
    actorId: string
  }

  export type ActorsOnTvShowsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvShow?: TvShowsUpdateOneRequiredWithoutActorsNestedInput
    actor?: ActorsUpdateOneRequiredWithoutTvShowsNestedInput
  }

  export type ActorsOnTvShowsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvShowId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
  }

  export type ActorsOnTvShowsCreateManyInput = {
    id?: string
    tvShowId: string
    actorId: string
  }

  export type ActorsOnTvShowsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ActorsOnTvShowsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvShowId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
  }

  export type ActorsCreateInput = {
    id?: string
    name: string
    tvShows?: ActorsOnTvShowsCreateNestedManyWithoutActorInput
  }

  export type ActorsUncheckedCreateInput = {
    id?: string
    name: string
    tvShows?: ActorsOnTvShowsUncheckedCreateNestedManyWithoutActorInput
  }

  export type ActorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tvShows?: ActorsOnTvShowsUpdateManyWithoutActorNestedInput
  }

  export type ActorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    tvShows?: ActorsOnTvShowsUncheckedUpdateManyWithoutActorNestedInput
  }

  export type ActorsCreateManyInput = {
    id?: string
    name: string
  }

  export type ActorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ActorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TvShowGenresListRelationFilter = {
    every?: TvShowGenresWhereInput
    some?: TvShowGenresWhereInput
    none?: TvShowGenresWhereInput
  }

  export type ListTvShowListRelationFilter = {
    every?: ListTvShowWhereInput
    some?: ListTvShowWhereInput
    none?: ListTvShowWhereInput
  }

  export type RatingsListRelationFilter = {
    every?: RatingsWhereInput
    some?: RatingsWhereInput
    none?: RatingsWhereInput
  }

  export type ActorsOnTvShowsListRelationFilter = {
    every?: ActorsOnTvShowsWhereInput
    some?: ActorsOnTvShowsWhereInput
    none?: ActorsOnTvShowsWhereInput
  }

  export type TvShowGenresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListTvShowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActorsOnTvShowsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TvShowsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    cast?: SortOrder
    poster?: SortOrder
    premiereDate?: SortOrder
    originalName?: SortOrder
    createdAt?: SortOrder
  }

  export type TvShowsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    cast?: SortOrder
    poster?: SortOrder
    premiereDate?: SortOrder
    originalName?: SortOrder
    createdAt?: SortOrder
  }

  export type TvShowsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    synopsis?: SortOrder
    cast?: SortOrder
    poster?: SortOrder
    premiereDate?: SortOrder
    originalName?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GenresCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenresMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenresMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TvShowsScalarRelationFilter = {
    is?: TvShowsWhereInput
    isNot?: TvShowsWhereInput
  }

  export type GenresScalarRelationFilter = {
    is?: GenresWhereInput
    isNot?: GenresWhereInput
  }

  export type TvShowGenresCountOrderByAggregateInput = {
    id?: SortOrder
    tvShowId?: SortOrder
    genreId?: SortOrder
  }

  export type TvShowGenresMaxOrderByAggregateInput = {
    id?: SortOrder
    tvShowId?: SortOrder
    genreId?: SortOrder
  }

  export type TvShowGenresMinOrderByAggregateInput = {
    id?: SortOrder
    tvShowId?: SortOrder
    genreId?: SortOrder
  }

  export type ListsListRelationFilter = {
    every?: ListsWhereInput
    some?: ListsWhereInput
    none?: ListsWhereInput
  }

  export type ListsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ListsScalarRelationFilter = {
    is?: ListsWhereInput
    isNot?: ListsWhereInput
  }

  export type ListTvShowCountOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
    tvShowId?: SortOrder
    addedAt?: SortOrder
    order?: SortOrder
  }

  export type ListTvShowAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ListTvShowMaxOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
    tvShowId?: SortOrder
    addedAt?: SortOrder
    order?: SortOrder
  }

  export type ListTvShowMinOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
    tvShowId?: SortOrder
    addedAt?: SortOrder
    order?: SortOrder
  }

  export type ListTvShowSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type ListsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ListsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatingScaleCountOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type RatingScaleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RatingScaleMaxOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type RatingScaleMinOrderByAggregateInput = {
    id?: SortOrder
    label?: SortOrder
  }

  export type RatingScaleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RatingScaleScalarRelationFilter = {
    is?: RatingScaleWhereInput
    isNot?: RatingScaleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RatingsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tvShowId?: SortOrder
    scaleId?: SortOrder
    comment?: SortOrder
  }

  export type RatingsAvgOrderByAggregateInput = {
    scaleId?: SortOrder
  }

  export type RatingsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tvShowId?: SortOrder
    scaleId?: SortOrder
    comment?: SortOrder
  }

  export type RatingsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    tvShowId?: SortOrder
    scaleId?: SortOrder
    comment?: SortOrder
  }

  export type RatingsSumOrderByAggregateInput = {
    scaleId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ActorsScalarRelationFilter = {
    is?: ActorsWhereInput
    isNot?: ActorsWhereInput
  }

  export type ActorsOnTvShowsCountOrderByAggregateInput = {
    id?: SortOrder
    tvShowId?: SortOrder
    actorId?: SortOrder
  }

  export type ActorsOnTvShowsMaxOrderByAggregateInput = {
    id?: SortOrder
    tvShowId?: SortOrder
    actorId?: SortOrder
  }

  export type ActorsOnTvShowsMinOrderByAggregateInput = {
    id?: SortOrder
    tvShowId?: SortOrder
    actorId?: SortOrder
  }

  export type ActorsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ActorsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ActorsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TvShowGenresCreateNestedManyWithoutTvShowInput = {
    create?: XOR<TvShowGenresCreateWithoutTvShowInput, TvShowGenresUncheckedCreateWithoutTvShowInput> | TvShowGenresCreateWithoutTvShowInput[] | TvShowGenresUncheckedCreateWithoutTvShowInput[]
    connectOrCreate?: TvShowGenresCreateOrConnectWithoutTvShowInput | TvShowGenresCreateOrConnectWithoutTvShowInput[]
    createMany?: TvShowGenresCreateManyTvShowInputEnvelope
    connect?: TvShowGenresWhereUniqueInput | TvShowGenresWhereUniqueInput[]
  }

  export type ListTvShowCreateNestedManyWithoutTvShowInput = {
    create?: XOR<ListTvShowCreateWithoutTvShowInput, ListTvShowUncheckedCreateWithoutTvShowInput> | ListTvShowCreateWithoutTvShowInput[] | ListTvShowUncheckedCreateWithoutTvShowInput[]
    connectOrCreate?: ListTvShowCreateOrConnectWithoutTvShowInput | ListTvShowCreateOrConnectWithoutTvShowInput[]
    createMany?: ListTvShowCreateManyTvShowInputEnvelope
    connect?: ListTvShowWhereUniqueInput | ListTvShowWhereUniqueInput[]
  }

  export type RatingsCreateNestedManyWithoutTvShowInput = {
    create?: XOR<RatingsCreateWithoutTvShowInput, RatingsUncheckedCreateWithoutTvShowInput> | RatingsCreateWithoutTvShowInput[] | RatingsUncheckedCreateWithoutTvShowInput[]
    connectOrCreate?: RatingsCreateOrConnectWithoutTvShowInput | RatingsCreateOrConnectWithoutTvShowInput[]
    createMany?: RatingsCreateManyTvShowInputEnvelope
    connect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
  }

  export type ActorsOnTvShowsCreateNestedManyWithoutTvShowInput = {
    create?: XOR<ActorsOnTvShowsCreateWithoutTvShowInput, ActorsOnTvShowsUncheckedCreateWithoutTvShowInput> | ActorsOnTvShowsCreateWithoutTvShowInput[] | ActorsOnTvShowsUncheckedCreateWithoutTvShowInput[]
    connectOrCreate?: ActorsOnTvShowsCreateOrConnectWithoutTvShowInput | ActorsOnTvShowsCreateOrConnectWithoutTvShowInput[]
    createMany?: ActorsOnTvShowsCreateManyTvShowInputEnvelope
    connect?: ActorsOnTvShowsWhereUniqueInput | ActorsOnTvShowsWhereUniqueInput[]
  }

  export type TvShowGenresUncheckedCreateNestedManyWithoutTvShowInput = {
    create?: XOR<TvShowGenresCreateWithoutTvShowInput, TvShowGenresUncheckedCreateWithoutTvShowInput> | TvShowGenresCreateWithoutTvShowInput[] | TvShowGenresUncheckedCreateWithoutTvShowInput[]
    connectOrCreate?: TvShowGenresCreateOrConnectWithoutTvShowInput | TvShowGenresCreateOrConnectWithoutTvShowInput[]
    createMany?: TvShowGenresCreateManyTvShowInputEnvelope
    connect?: TvShowGenresWhereUniqueInput | TvShowGenresWhereUniqueInput[]
  }

  export type ListTvShowUncheckedCreateNestedManyWithoutTvShowInput = {
    create?: XOR<ListTvShowCreateWithoutTvShowInput, ListTvShowUncheckedCreateWithoutTvShowInput> | ListTvShowCreateWithoutTvShowInput[] | ListTvShowUncheckedCreateWithoutTvShowInput[]
    connectOrCreate?: ListTvShowCreateOrConnectWithoutTvShowInput | ListTvShowCreateOrConnectWithoutTvShowInput[]
    createMany?: ListTvShowCreateManyTvShowInputEnvelope
    connect?: ListTvShowWhereUniqueInput | ListTvShowWhereUniqueInput[]
  }

  export type RatingsUncheckedCreateNestedManyWithoutTvShowInput = {
    create?: XOR<RatingsCreateWithoutTvShowInput, RatingsUncheckedCreateWithoutTvShowInput> | RatingsCreateWithoutTvShowInput[] | RatingsUncheckedCreateWithoutTvShowInput[]
    connectOrCreate?: RatingsCreateOrConnectWithoutTvShowInput | RatingsCreateOrConnectWithoutTvShowInput[]
    createMany?: RatingsCreateManyTvShowInputEnvelope
    connect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
  }

  export type ActorsOnTvShowsUncheckedCreateNestedManyWithoutTvShowInput = {
    create?: XOR<ActorsOnTvShowsCreateWithoutTvShowInput, ActorsOnTvShowsUncheckedCreateWithoutTvShowInput> | ActorsOnTvShowsCreateWithoutTvShowInput[] | ActorsOnTvShowsUncheckedCreateWithoutTvShowInput[]
    connectOrCreate?: ActorsOnTvShowsCreateOrConnectWithoutTvShowInput | ActorsOnTvShowsCreateOrConnectWithoutTvShowInput[]
    createMany?: ActorsOnTvShowsCreateManyTvShowInputEnvelope
    connect?: ActorsOnTvShowsWhereUniqueInput | ActorsOnTvShowsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TvShowGenresUpdateManyWithoutTvShowNestedInput = {
    create?: XOR<TvShowGenresCreateWithoutTvShowInput, TvShowGenresUncheckedCreateWithoutTvShowInput> | TvShowGenresCreateWithoutTvShowInput[] | TvShowGenresUncheckedCreateWithoutTvShowInput[]
    connectOrCreate?: TvShowGenresCreateOrConnectWithoutTvShowInput | TvShowGenresCreateOrConnectWithoutTvShowInput[]
    upsert?: TvShowGenresUpsertWithWhereUniqueWithoutTvShowInput | TvShowGenresUpsertWithWhereUniqueWithoutTvShowInput[]
    createMany?: TvShowGenresCreateManyTvShowInputEnvelope
    set?: TvShowGenresWhereUniqueInput | TvShowGenresWhereUniqueInput[]
    disconnect?: TvShowGenresWhereUniqueInput | TvShowGenresWhereUniqueInput[]
    delete?: TvShowGenresWhereUniqueInput | TvShowGenresWhereUniqueInput[]
    connect?: TvShowGenresWhereUniqueInput | TvShowGenresWhereUniqueInput[]
    update?: TvShowGenresUpdateWithWhereUniqueWithoutTvShowInput | TvShowGenresUpdateWithWhereUniqueWithoutTvShowInput[]
    updateMany?: TvShowGenresUpdateManyWithWhereWithoutTvShowInput | TvShowGenresUpdateManyWithWhereWithoutTvShowInput[]
    deleteMany?: TvShowGenresScalarWhereInput | TvShowGenresScalarWhereInput[]
  }

  export type ListTvShowUpdateManyWithoutTvShowNestedInput = {
    create?: XOR<ListTvShowCreateWithoutTvShowInput, ListTvShowUncheckedCreateWithoutTvShowInput> | ListTvShowCreateWithoutTvShowInput[] | ListTvShowUncheckedCreateWithoutTvShowInput[]
    connectOrCreate?: ListTvShowCreateOrConnectWithoutTvShowInput | ListTvShowCreateOrConnectWithoutTvShowInput[]
    upsert?: ListTvShowUpsertWithWhereUniqueWithoutTvShowInput | ListTvShowUpsertWithWhereUniqueWithoutTvShowInput[]
    createMany?: ListTvShowCreateManyTvShowInputEnvelope
    set?: ListTvShowWhereUniqueInput | ListTvShowWhereUniqueInput[]
    disconnect?: ListTvShowWhereUniqueInput | ListTvShowWhereUniqueInput[]
    delete?: ListTvShowWhereUniqueInput | ListTvShowWhereUniqueInput[]
    connect?: ListTvShowWhereUniqueInput | ListTvShowWhereUniqueInput[]
    update?: ListTvShowUpdateWithWhereUniqueWithoutTvShowInput | ListTvShowUpdateWithWhereUniqueWithoutTvShowInput[]
    updateMany?: ListTvShowUpdateManyWithWhereWithoutTvShowInput | ListTvShowUpdateManyWithWhereWithoutTvShowInput[]
    deleteMany?: ListTvShowScalarWhereInput | ListTvShowScalarWhereInput[]
  }

  export type RatingsUpdateManyWithoutTvShowNestedInput = {
    create?: XOR<RatingsCreateWithoutTvShowInput, RatingsUncheckedCreateWithoutTvShowInput> | RatingsCreateWithoutTvShowInput[] | RatingsUncheckedCreateWithoutTvShowInput[]
    connectOrCreate?: RatingsCreateOrConnectWithoutTvShowInput | RatingsCreateOrConnectWithoutTvShowInput[]
    upsert?: RatingsUpsertWithWhereUniqueWithoutTvShowInput | RatingsUpsertWithWhereUniqueWithoutTvShowInput[]
    createMany?: RatingsCreateManyTvShowInputEnvelope
    set?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    disconnect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    delete?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    connect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    update?: RatingsUpdateWithWhereUniqueWithoutTvShowInput | RatingsUpdateWithWhereUniqueWithoutTvShowInput[]
    updateMany?: RatingsUpdateManyWithWhereWithoutTvShowInput | RatingsUpdateManyWithWhereWithoutTvShowInput[]
    deleteMany?: RatingsScalarWhereInput | RatingsScalarWhereInput[]
  }

  export type ActorsOnTvShowsUpdateManyWithoutTvShowNestedInput = {
    create?: XOR<ActorsOnTvShowsCreateWithoutTvShowInput, ActorsOnTvShowsUncheckedCreateWithoutTvShowInput> | ActorsOnTvShowsCreateWithoutTvShowInput[] | ActorsOnTvShowsUncheckedCreateWithoutTvShowInput[]
    connectOrCreate?: ActorsOnTvShowsCreateOrConnectWithoutTvShowInput | ActorsOnTvShowsCreateOrConnectWithoutTvShowInput[]
    upsert?: ActorsOnTvShowsUpsertWithWhereUniqueWithoutTvShowInput | ActorsOnTvShowsUpsertWithWhereUniqueWithoutTvShowInput[]
    createMany?: ActorsOnTvShowsCreateManyTvShowInputEnvelope
    set?: ActorsOnTvShowsWhereUniqueInput | ActorsOnTvShowsWhereUniqueInput[]
    disconnect?: ActorsOnTvShowsWhereUniqueInput | ActorsOnTvShowsWhereUniqueInput[]
    delete?: ActorsOnTvShowsWhereUniqueInput | ActorsOnTvShowsWhereUniqueInput[]
    connect?: ActorsOnTvShowsWhereUniqueInput | ActorsOnTvShowsWhereUniqueInput[]
    update?: ActorsOnTvShowsUpdateWithWhereUniqueWithoutTvShowInput | ActorsOnTvShowsUpdateWithWhereUniqueWithoutTvShowInput[]
    updateMany?: ActorsOnTvShowsUpdateManyWithWhereWithoutTvShowInput | ActorsOnTvShowsUpdateManyWithWhereWithoutTvShowInput[]
    deleteMany?: ActorsOnTvShowsScalarWhereInput | ActorsOnTvShowsScalarWhereInput[]
  }

  export type TvShowGenresUncheckedUpdateManyWithoutTvShowNestedInput = {
    create?: XOR<TvShowGenresCreateWithoutTvShowInput, TvShowGenresUncheckedCreateWithoutTvShowInput> | TvShowGenresCreateWithoutTvShowInput[] | TvShowGenresUncheckedCreateWithoutTvShowInput[]
    connectOrCreate?: TvShowGenresCreateOrConnectWithoutTvShowInput | TvShowGenresCreateOrConnectWithoutTvShowInput[]
    upsert?: TvShowGenresUpsertWithWhereUniqueWithoutTvShowInput | TvShowGenresUpsertWithWhereUniqueWithoutTvShowInput[]
    createMany?: TvShowGenresCreateManyTvShowInputEnvelope
    set?: TvShowGenresWhereUniqueInput | TvShowGenresWhereUniqueInput[]
    disconnect?: TvShowGenresWhereUniqueInput | TvShowGenresWhereUniqueInput[]
    delete?: TvShowGenresWhereUniqueInput | TvShowGenresWhereUniqueInput[]
    connect?: TvShowGenresWhereUniqueInput | TvShowGenresWhereUniqueInput[]
    update?: TvShowGenresUpdateWithWhereUniqueWithoutTvShowInput | TvShowGenresUpdateWithWhereUniqueWithoutTvShowInput[]
    updateMany?: TvShowGenresUpdateManyWithWhereWithoutTvShowInput | TvShowGenresUpdateManyWithWhereWithoutTvShowInput[]
    deleteMany?: TvShowGenresScalarWhereInput | TvShowGenresScalarWhereInput[]
  }

  export type ListTvShowUncheckedUpdateManyWithoutTvShowNestedInput = {
    create?: XOR<ListTvShowCreateWithoutTvShowInput, ListTvShowUncheckedCreateWithoutTvShowInput> | ListTvShowCreateWithoutTvShowInput[] | ListTvShowUncheckedCreateWithoutTvShowInput[]
    connectOrCreate?: ListTvShowCreateOrConnectWithoutTvShowInput | ListTvShowCreateOrConnectWithoutTvShowInput[]
    upsert?: ListTvShowUpsertWithWhereUniqueWithoutTvShowInput | ListTvShowUpsertWithWhereUniqueWithoutTvShowInput[]
    createMany?: ListTvShowCreateManyTvShowInputEnvelope
    set?: ListTvShowWhereUniqueInput | ListTvShowWhereUniqueInput[]
    disconnect?: ListTvShowWhereUniqueInput | ListTvShowWhereUniqueInput[]
    delete?: ListTvShowWhereUniqueInput | ListTvShowWhereUniqueInput[]
    connect?: ListTvShowWhereUniqueInput | ListTvShowWhereUniqueInput[]
    update?: ListTvShowUpdateWithWhereUniqueWithoutTvShowInput | ListTvShowUpdateWithWhereUniqueWithoutTvShowInput[]
    updateMany?: ListTvShowUpdateManyWithWhereWithoutTvShowInput | ListTvShowUpdateManyWithWhereWithoutTvShowInput[]
    deleteMany?: ListTvShowScalarWhereInput | ListTvShowScalarWhereInput[]
  }

  export type RatingsUncheckedUpdateManyWithoutTvShowNestedInput = {
    create?: XOR<RatingsCreateWithoutTvShowInput, RatingsUncheckedCreateWithoutTvShowInput> | RatingsCreateWithoutTvShowInput[] | RatingsUncheckedCreateWithoutTvShowInput[]
    connectOrCreate?: RatingsCreateOrConnectWithoutTvShowInput | RatingsCreateOrConnectWithoutTvShowInput[]
    upsert?: RatingsUpsertWithWhereUniqueWithoutTvShowInput | RatingsUpsertWithWhereUniqueWithoutTvShowInput[]
    createMany?: RatingsCreateManyTvShowInputEnvelope
    set?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    disconnect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    delete?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    connect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    update?: RatingsUpdateWithWhereUniqueWithoutTvShowInput | RatingsUpdateWithWhereUniqueWithoutTvShowInput[]
    updateMany?: RatingsUpdateManyWithWhereWithoutTvShowInput | RatingsUpdateManyWithWhereWithoutTvShowInput[]
    deleteMany?: RatingsScalarWhereInput | RatingsScalarWhereInput[]
  }

  export type ActorsOnTvShowsUncheckedUpdateManyWithoutTvShowNestedInput = {
    create?: XOR<ActorsOnTvShowsCreateWithoutTvShowInput, ActorsOnTvShowsUncheckedCreateWithoutTvShowInput> | ActorsOnTvShowsCreateWithoutTvShowInput[] | ActorsOnTvShowsUncheckedCreateWithoutTvShowInput[]
    connectOrCreate?: ActorsOnTvShowsCreateOrConnectWithoutTvShowInput | ActorsOnTvShowsCreateOrConnectWithoutTvShowInput[]
    upsert?: ActorsOnTvShowsUpsertWithWhereUniqueWithoutTvShowInput | ActorsOnTvShowsUpsertWithWhereUniqueWithoutTvShowInput[]
    createMany?: ActorsOnTvShowsCreateManyTvShowInputEnvelope
    set?: ActorsOnTvShowsWhereUniqueInput | ActorsOnTvShowsWhereUniqueInput[]
    disconnect?: ActorsOnTvShowsWhereUniqueInput | ActorsOnTvShowsWhereUniqueInput[]
    delete?: ActorsOnTvShowsWhereUniqueInput | ActorsOnTvShowsWhereUniqueInput[]
    connect?: ActorsOnTvShowsWhereUniqueInput | ActorsOnTvShowsWhereUniqueInput[]
    update?: ActorsOnTvShowsUpdateWithWhereUniqueWithoutTvShowInput | ActorsOnTvShowsUpdateWithWhereUniqueWithoutTvShowInput[]
    updateMany?: ActorsOnTvShowsUpdateManyWithWhereWithoutTvShowInput | ActorsOnTvShowsUpdateManyWithWhereWithoutTvShowInput[]
    deleteMany?: ActorsOnTvShowsScalarWhereInput | ActorsOnTvShowsScalarWhereInput[]
  }

  export type TvShowGenresCreateNestedManyWithoutGenreInput = {
    create?: XOR<TvShowGenresCreateWithoutGenreInput, TvShowGenresUncheckedCreateWithoutGenreInput> | TvShowGenresCreateWithoutGenreInput[] | TvShowGenresUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: TvShowGenresCreateOrConnectWithoutGenreInput | TvShowGenresCreateOrConnectWithoutGenreInput[]
    createMany?: TvShowGenresCreateManyGenreInputEnvelope
    connect?: TvShowGenresWhereUniqueInput | TvShowGenresWhereUniqueInput[]
  }

  export type TvShowGenresUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<TvShowGenresCreateWithoutGenreInput, TvShowGenresUncheckedCreateWithoutGenreInput> | TvShowGenresCreateWithoutGenreInput[] | TvShowGenresUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: TvShowGenresCreateOrConnectWithoutGenreInput | TvShowGenresCreateOrConnectWithoutGenreInput[]
    createMany?: TvShowGenresCreateManyGenreInputEnvelope
    connect?: TvShowGenresWhereUniqueInput | TvShowGenresWhereUniqueInput[]
  }

  export type TvShowGenresUpdateManyWithoutGenreNestedInput = {
    create?: XOR<TvShowGenresCreateWithoutGenreInput, TvShowGenresUncheckedCreateWithoutGenreInput> | TvShowGenresCreateWithoutGenreInput[] | TvShowGenresUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: TvShowGenresCreateOrConnectWithoutGenreInput | TvShowGenresCreateOrConnectWithoutGenreInput[]
    upsert?: TvShowGenresUpsertWithWhereUniqueWithoutGenreInput | TvShowGenresUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: TvShowGenresCreateManyGenreInputEnvelope
    set?: TvShowGenresWhereUniqueInput | TvShowGenresWhereUniqueInput[]
    disconnect?: TvShowGenresWhereUniqueInput | TvShowGenresWhereUniqueInput[]
    delete?: TvShowGenresWhereUniqueInput | TvShowGenresWhereUniqueInput[]
    connect?: TvShowGenresWhereUniqueInput | TvShowGenresWhereUniqueInput[]
    update?: TvShowGenresUpdateWithWhereUniqueWithoutGenreInput | TvShowGenresUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: TvShowGenresUpdateManyWithWhereWithoutGenreInput | TvShowGenresUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: TvShowGenresScalarWhereInput | TvShowGenresScalarWhereInput[]
  }

  export type TvShowGenresUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<TvShowGenresCreateWithoutGenreInput, TvShowGenresUncheckedCreateWithoutGenreInput> | TvShowGenresCreateWithoutGenreInput[] | TvShowGenresUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: TvShowGenresCreateOrConnectWithoutGenreInput | TvShowGenresCreateOrConnectWithoutGenreInput[]
    upsert?: TvShowGenresUpsertWithWhereUniqueWithoutGenreInput | TvShowGenresUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: TvShowGenresCreateManyGenreInputEnvelope
    set?: TvShowGenresWhereUniqueInput | TvShowGenresWhereUniqueInput[]
    disconnect?: TvShowGenresWhereUniqueInput | TvShowGenresWhereUniqueInput[]
    delete?: TvShowGenresWhereUniqueInput | TvShowGenresWhereUniqueInput[]
    connect?: TvShowGenresWhereUniqueInput | TvShowGenresWhereUniqueInput[]
    update?: TvShowGenresUpdateWithWhereUniqueWithoutGenreInput | TvShowGenresUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: TvShowGenresUpdateManyWithWhereWithoutGenreInput | TvShowGenresUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: TvShowGenresScalarWhereInput | TvShowGenresScalarWhereInput[]
  }

  export type TvShowsCreateNestedOneWithoutTvshowGenresInput = {
    create?: XOR<TvShowsCreateWithoutTvshowGenresInput, TvShowsUncheckedCreateWithoutTvshowGenresInput>
    connectOrCreate?: TvShowsCreateOrConnectWithoutTvshowGenresInput
    connect?: TvShowsWhereUniqueInput
  }

  export type GenresCreateNestedOneWithoutTvshowGenresInput = {
    create?: XOR<GenresCreateWithoutTvshowGenresInput, GenresUncheckedCreateWithoutTvshowGenresInput>
    connectOrCreate?: GenresCreateOrConnectWithoutTvshowGenresInput
    connect?: GenresWhereUniqueInput
  }

  export type TvShowsUpdateOneRequiredWithoutTvshowGenresNestedInput = {
    create?: XOR<TvShowsCreateWithoutTvshowGenresInput, TvShowsUncheckedCreateWithoutTvshowGenresInput>
    connectOrCreate?: TvShowsCreateOrConnectWithoutTvshowGenresInput
    upsert?: TvShowsUpsertWithoutTvshowGenresInput
    connect?: TvShowsWhereUniqueInput
    update?: XOR<XOR<TvShowsUpdateToOneWithWhereWithoutTvshowGenresInput, TvShowsUpdateWithoutTvshowGenresInput>, TvShowsUncheckedUpdateWithoutTvshowGenresInput>
  }

  export type GenresUpdateOneRequiredWithoutTvshowGenresNestedInput = {
    create?: XOR<GenresCreateWithoutTvshowGenresInput, GenresUncheckedCreateWithoutTvshowGenresInput>
    connectOrCreate?: GenresCreateOrConnectWithoutTvshowGenresInput
    upsert?: GenresUpsertWithoutTvshowGenresInput
    connect?: GenresWhereUniqueInput
    update?: XOR<XOR<GenresUpdateToOneWithWhereWithoutTvshowGenresInput, GenresUpdateWithoutTvshowGenresInput>, GenresUncheckedUpdateWithoutTvshowGenresInput>
  }

  export type ListsCreateNestedManyWithoutUserInput = {
    create?: XOR<ListsCreateWithoutUserInput, ListsUncheckedCreateWithoutUserInput> | ListsCreateWithoutUserInput[] | ListsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListsCreateOrConnectWithoutUserInput | ListsCreateOrConnectWithoutUserInput[]
    createMany?: ListsCreateManyUserInputEnvelope
    connect?: ListsWhereUniqueInput | ListsWhereUniqueInput[]
  }

  export type RatingsCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingsCreateWithoutUserInput, RatingsUncheckedCreateWithoutUserInput> | RatingsCreateWithoutUserInput[] | RatingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingsCreateOrConnectWithoutUserInput | RatingsCreateOrConnectWithoutUserInput[]
    createMany?: RatingsCreateManyUserInputEnvelope
    connect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
  }

  export type ListsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ListsCreateWithoutUserInput, ListsUncheckedCreateWithoutUserInput> | ListsCreateWithoutUserInput[] | ListsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListsCreateOrConnectWithoutUserInput | ListsCreateOrConnectWithoutUserInput[]
    createMany?: ListsCreateManyUserInputEnvelope
    connect?: ListsWhereUniqueInput | ListsWhereUniqueInput[]
  }

  export type RatingsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingsCreateWithoutUserInput, RatingsUncheckedCreateWithoutUserInput> | RatingsCreateWithoutUserInput[] | RatingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingsCreateOrConnectWithoutUserInput | RatingsCreateOrConnectWithoutUserInput[]
    createMany?: RatingsCreateManyUserInputEnvelope
    connect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
  }

  export type ListsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListsCreateWithoutUserInput, ListsUncheckedCreateWithoutUserInput> | ListsCreateWithoutUserInput[] | ListsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListsCreateOrConnectWithoutUserInput | ListsCreateOrConnectWithoutUserInput[]
    upsert?: ListsUpsertWithWhereUniqueWithoutUserInput | ListsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListsCreateManyUserInputEnvelope
    set?: ListsWhereUniqueInput | ListsWhereUniqueInput[]
    disconnect?: ListsWhereUniqueInput | ListsWhereUniqueInput[]
    delete?: ListsWhereUniqueInput | ListsWhereUniqueInput[]
    connect?: ListsWhereUniqueInput | ListsWhereUniqueInput[]
    update?: ListsUpdateWithWhereUniqueWithoutUserInput | ListsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListsUpdateManyWithWhereWithoutUserInput | ListsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListsScalarWhereInput | ListsScalarWhereInput[]
  }

  export type RatingsUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingsCreateWithoutUserInput, RatingsUncheckedCreateWithoutUserInput> | RatingsCreateWithoutUserInput[] | RatingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingsCreateOrConnectWithoutUserInput | RatingsCreateOrConnectWithoutUserInput[]
    upsert?: RatingsUpsertWithWhereUniqueWithoutUserInput | RatingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingsCreateManyUserInputEnvelope
    set?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    disconnect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    delete?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    connect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    update?: RatingsUpdateWithWhereUniqueWithoutUserInput | RatingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingsUpdateManyWithWhereWithoutUserInput | RatingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingsScalarWhereInput | RatingsScalarWhereInput[]
  }

  export type ListsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ListsCreateWithoutUserInput, ListsUncheckedCreateWithoutUserInput> | ListsCreateWithoutUserInput[] | ListsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ListsCreateOrConnectWithoutUserInput | ListsCreateOrConnectWithoutUserInput[]
    upsert?: ListsUpsertWithWhereUniqueWithoutUserInput | ListsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ListsCreateManyUserInputEnvelope
    set?: ListsWhereUniqueInput | ListsWhereUniqueInput[]
    disconnect?: ListsWhereUniqueInput | ListsWhereUniqueInput[]
    delete?: ListsWhereUniqueInput | ListsWhereUniqueInput[]
    connect?: ListsWhereUniqueInput | ListsWhereUniqueInput[]
    update?: ListsUpdateWithWhereUniqueWithoutUserInput | ListsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ListsUpdateManyWithWhereWithoutUserInput | ListsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ListsScalarWhereInput | ListsScalarWhereInput[]
  }

  export type RatingsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingsCreateWithoutUserInput, RatingsUncheckedCreateWithoutUserInput> | RatingsCreateWithoutUserInput[] | RatingsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingsCreateOrConnectWithoutUserInput | RatingsCreateOrConnectWithoutUserInput[]
    upsert?: RatingsUpsertWithWhereUniqueWithoutUserInput | RatingsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingsCreateManyUserInputEnvelope
    set?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    disconnect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    delete?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    connect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    update?: RatingsUpdateWithWhereUniqueWithoutUserInput | RatingsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingsUpdateManyWithWhereWithoutUserInput | RatingsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingsScalarWhereInput | RatingsScalarWhereInput[]
  }

  export type ListsCreateNestedOneWithoutTvShowsInput = {
    create?: XOR<ListsCreateWithoutTvShowsInput, ListsUncheckedCreateWithoutTvShowsInput>
    connectOrCreate?: ListsCreateOrConnectWithoutTvShowsInput
    connect?: ListsWhereUniqueInput
  }

  export type TvShowsCreateNestedOneWithoutListsInput = {
    create?: XOR<TvShowsCreateWithoutListsInput, TvShowsUncheckedCreateWithoutListsInput>
    connectOrCreate?: TvShowsCreateOrConnectWithoutListsInput
    connect?: TvShowsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ListsUpdateOneRequiredWithoutTvShowsNestedInput = {
    create?: XOR<ListsCreateWithoutTvShowsInput, ListsUncheckedCreateWithoutTvShowsInput>
    connectOrCreate?: ListsCreateOrConnectWithoutTvShowsInput
    upsert?: ListsUpsertWithoutTvShowsInput
    connect?: ListsWhereUniqueInput
    update?: XOR<XOR<ListsUpdateToOneWithWhereWithoutTvShowsInput, ListsUpdateWithoutTvShowsInput>, ListsUncheckedUpdateWithoutTvShowsInput>
  }

  export type TvShowsUpdateOneRequiredWithoutListsNestedInput = {
    create?: XOR<TvShowsCreateWithoutListsInput, TvShowsUncheckedCreateWithoutListsInput>
    connectOrCreate?: TvShowsCreateOrConnectWithoutListsInput
    upsert?: TvShowsUpsertWithoutListsInput
    connect?: TvShowsWhereUniqueInput
    update?: XOR<XOR<TvShowsUpdateToOneWithWhereWithoutListsInput, TvShowsUpdateWithoutListsInput>, TvShowsUncheckedUpdateWithoutListsInput>
  }

  export type UsersCreateNestedOneWithoutListInput = {
    create?: XOR<UsersCreateWithoutListInput, UsersUncheckedCreateWithoutListInput>
    connectOrCreate?: UsersCreateOrConnectWithoutListInput
    connect?: UsersWhereUniqueInput
  }

  export type ListTvShowCreateNestedManyWithoutListInput = {
    create?: XOR<ListTvShowCreateWithoutListInput, ListTvShowUncheckedCreateWithoutListInput> | ListTvShowCreateWithoutListInput[] | ListTvShowUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListTvShowCreateOrConnectWithoutListInput | ListTvShowCreateOrConnectWithoutListInput[]
    createMany?: ListTvShowCreateManyListInputEnvelope
    connect?: ListTvShowWhereUniqueInput | ListTvShowWhereUniqueInput[]
  }

  export type ListTvShowUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<ListTvShowCreateWithoutListInput, ListTvShowUncheckedCreateWithoutListInput> | ListTvShowCreateWithoutListInput[] | ListTvShowUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListTvShowCreateOrConnectWithoutListInput | ListTvShowCreateOrConnectWithoutListInput[]
    createMany?: ListTvShowCreateManyListInputEnvelope
    connect?: ListTvShowWhereUniqueInput | ListTvShowWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutListNestedInput = {
    create?: XOR<UsersCreateWithoutListInput, UsersUncheckedCreateWithoutListInput>
    connectOrCreate?: UsersCreateOrConnectWithoutListInput
    upsert?: UsersUpsertWithoutListInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutListInput, UsersUpdateWithoutListInput>, UsersUncheckedUpdateWithoutListInput>
  }

  export type ListTvShowUpdateManyWithoutListNestedInput = {
    create?: XOR<ListTvShowCreateWithoutListInput, ListTvShowUncheckedCreateWithoutListInput> | ListTvShowCreateWithoutListInput[] | ListTvShowUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListTvShowCreateOrConnectWithoutListInput | ListTvShowCreateOrConnectWithoutListInput[]
    upsert?: ListTvShowUpsertWithWhereUniqueWithoutListInput | ListTvShowUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ListTvShowCreateManyListInputEnvelope
    set?: ListTvShowWhereUniqueInput | ListTvShowWhereUniqueInput[]
    disconnect?: ListTvShowWhereUniqueInput | ListTvShowWhereUniqueInput[]
    delete?: ListTvShowWhereUniqueInput | ListTvShowWhereUniqueInput[]
    connect?: ListTvShowWhereUniqueInput | ListTvShowWhereUniqueInput[]
    update?: ListTvShowUpdateWithWhereUniqueWithoutListInput | ListTvShowUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ListTvShowUpdateManyWithWhereWithoutListInput | ListTvShowUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ListTvShowScalarWhereInput | ListTvShowScalarWhereInput[]
  }

  export type ListTvShowUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<ListTvShowCreateWithoutListInput, ListTvShowUncheckedCreateWithoutListInput> | ListTvShowCreateWithoutListInput[] | ListTvShowUncheckedCreateWithoutListInput[]
    connectOrCreate?: ListTvShowCreateOrConnectWithoutListInput | ListTvShowCreateOrConnectWithoutListInput[]
    upsert?: ListTvShowUpsertWithWhereUniqueWithoutListInput | ListTvShowUpsertWithWhereUniqueWithoutListInput[]
    createMany?: ListTvShowCreateManyListInputEnvelope
    set?: ListTvShowWhereUniqueInput | ListTvShowWhereUniqueInput[]
    disconnect?: ListTvShowWhereUniqueInput | ListTvShowWhereUniqueInput[]
    delete?: ListTvShowWhereUniqueInput | ListTvShowWhereUniqueInput[]
    connect?: ListTvShowWhereUniqueInput | ListTvShowWhereUniqueInput[]
    update?: ListTvShowUpdateWithWhereUniqueWithoutListInput | ListTvShowUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: ListTvShowUpdateManyWithWhereWithoutListInput | ListTvShowUpdateManyWithWhereWithoutListInput[]
    deleteMany?: ListTvShowScalarWhereInput | ListTvShowScalarWhereInput[]
  }

  export type RatingsCreateNestedManyWithoutScaleInput = {
    create?: XOR<RatingsCreateWithoutScaleInput, RatingsUncheckedCreateWithoutScaleInput> | RatingsCreateWithoutScaleInput[] | RatingsUncheckedCreateWithoutScaleInput[]
    connectOrCreate?: RatingsCreateOrConnectWithoutScaleInput | RatingsCreateOrConnectWithoutScaleInput[]
    createMany?: RatingsCreateManyScaleInputEnvelope
    connect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
  }

  export type RatingsUncheckedCreateNestedManyWithoutScaleInput = {
    create?: XOR<RatingsCreateWithoutScaleInput, RatingsUncheckedCreateWithoutScaleInput> | RatingsCreateWithoutScaleInput[] | RatingsUncheckedCreateWithoutScaleInput[]
    connectOrCreate?: RatingsCreateOrConnectWithoutScaleInput | RatingsCreateOrConnectWithoutScaleInput[]
    createMany?: RatingsCreateManyScaleInputEnvelope
    connect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
  }

  export type RatingsUpdateManyWithoutScaleNestedInput = {
    create?: XOR<RatingsCreateWithoutScaleInput, RatingsUncheckedCreateWithoutScaleInput> | RatingsCreateWithoutScaleInput[] | RatingsUncheckedCreateWithoutScaleInput[]
    connectOrCreate?: RatingsCreateOrConnectWithoutScaleInput | RatingsCreateOrConnectWithoutScaleInput[]
    upsert?: RatingsUpsertWithWhereUniqueWithoutScaleInput | RatingsUpsertWithWhereUniqueWithoutScaleInput[]
    createMany?: RatingsCreateManyScaleInputEnvelope
    set?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    disconnect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    delete?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    connect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    update?: RatingsUpdateWithWhereUniqueWithoutScaleInput | RatingsUpdateWithWhereUniqueWithoutScaleInput[]
    updateMany?: RatingsUpdateManyWithWhereWithoutScaleInput | RatingsUpdateManyWithWhereWithoutScaleInput[]
    deleteMany?: RatingsScalarWhereInput | RatingsScalarWhereInput[]
  }

  export type RatingsUncheckedUpdateManyWithoutScaleNestedInput = {
    create?: XOR<RatingsCreateWithoutScaleInput, RatingsUncheckedCreateWithoutScaleInput> | RatingsCreateWithoutScaleInput[] | RatingsUncheckedCreateWithoutScaleInput[]
    connectOrCreate?: RatingsCreateOrConnectWithoutScaleInput | RatingsCreateOrConnectWithoutScaleInput[]
    upsert?: RatingsUpsertWithWhereUniqueWithoutScaleInput | RatingsUpsertWithWhereUniqueWithoutScaleInput[]
    createMany?: RatingsCreateManyScaleInputEnvelope
    set?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    disconnect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    delete?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    connect?: RatingsWhereUniqueInput | RatingsWhereUniqueInput[]
    update?: RatingsUpdateWithWhereUniqueWithoutScaleInput | RatingsUpdateWithWhereUniqueWithoutScaleInput[]
    updateMany?: RatingsUpdateManyWithWhereWithoutScaleInput | RatingsUpdateManyWithWhereWithoutScaleInput[]
    deleteMany?: RatingsScalarWhereInput | RatingsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutRatingsInput = {
    create?: XOR<UsersCreateWithoutRatingsInput, UsersUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRatingsInput
    connect?: UsersWhereUniqueInput
  }

  export type TvShowsCreateNestedOneWithoutRatingsInput = {
    create?: XOR<TvShowsCreateWithoutRatingsInput, TvShowsUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: TvShowsCreateOrConnectWithoutRatingsInput
    connect?: TvShowsWhereUniqueInput
  }

  export type RatingScaleCreateNestedOneWithoutRatingsInput = {
    create?: XOR<RatingScaleCreateWithoutRatingsInput, RatingScaleUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: RatingScaleCreateOrConnectWithoutRatingsInput
    connect?: RatingScaleWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsersUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<UsersCreateWithoutRatingsInput, UsersUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRatingsInput
    upsert?: UsersUpsertWithoutRatingsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutRatingsInput, UsersUpdateWithoutRatingsInput>, UsersUncheckedUpdateWithoutRatingsInput>
  }

  export type TvShowsUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<TvShowsCreateWithoutRatingsInput, TvShowsUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: TvShowsCreateOrConnectWithoutRatingsInput
    upsert?: TvShowsUpsertWithoutRatingsInput
    connect?: TvShowsWhereUniqueInput
    update?: XOR<XOR<TvShowsUpdateToOneWithWhereWithoutRatingsInput, TvShowsUpdateWithoutRatingsInput>, TvShowsUncheckedUpdateWithoutRatingsInput>
  }

  export type RatingScaleUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<RatingScaleCreateWithoutRatingsInput, RatingScaleUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: RatingScaleCreateOrConnectWithoutRatingsInput
    upsert?: RatingScaleUpsertWithoutRatingsInput
    connect?: RatingScaleWhereUniqueInput
    update?: XOR<XOR<RatingScaleUpdateToOneWithWhereWithoutRatingsInput, RatingScaleUpdateWithoutRatingsInput>, RatingScaleUncheckedUpdateWithoutRatingsInput>
  }

  export type TvShowsCreateNestedOneWithoutActorsInput = {
    create?: XOR<TvShowsCreateWithoutActorsInput, TvShowsUncheckedCreateWithoutActorsInput>
    connectOrCreate?: TvShowsCreateOrConnectWithoutActorsInput
    connect?: TvShowsWhereUniqueInput
  }

  export type ActorsCreateNestedOneWithoutTvShowsInput = {
    create?: XOR<ActorsCreateWithoutTvShowsInput, ActorsUncheckedCreateWithoutTvShowsInput>
    connectOrCreate?: ActorsCreateOrConnectWithoutTvShowsInput
    connect?: ActorsWhereUniqueInput
  }

  export type TvShowsUpdateOneRequiredWithoutActorsNestedInput = {
    create?: XOR<TvShowsCreateWithoutActorsInput, TvShowsUncheckedCreateWithoutActorsInput>
    connectOrCreate?: TvShowsCreateOrConnectWithoutActorsInput
    upsert?: TvShowsUpsertWithoutActorsInput
    connect?: TvShowsWhereUniqueInput
    update?: XOR<XOR<TvShowsUpdateToOneWithWhereWithoutActorsInput, TvShowsUpdateWithoutActorsInput>, TvShowsUncheckedUpdateWithoutActorsInput>
  }

  export type ActorsUpdateOneRequiredWithoutTvShowsNestedInput = {
    create?: XOR<ActorsCreateWithoutTvShowsInput, ActorsUncheckedCreateWithoutTvShowsInput>
    connectOrCreate?: ActorsCreateOrConnectWithoutTvShowsInput
    upsert?: ActorsUpsertWithoutTvShowsInput
    connect?: ActorsWhereUniqueInput
    update?: XOR<XOR<ActorsUpdateToOneWithWhereWithoutTvShowsInput, ActorsUpdateWithoutTvShowsInput>, ActorsUncheckedUpdateWithoutTvShowsInput>
  }

  export type ActorsOnTvShowsCreateNestedManyWithoutActorInput = {
    create?: XOR<ActorsOnTvShowsCreateWithoutActorInput, ActorsOnTvShowsUncheckedCreateWithoutActorInput> | ActorsOnTvShowsCreateWithoutActorInput[] | ActorsOnTvShowsUncheckedCreateWithoutActorInput[]
    connectOrCreate?: ActorsOnTvShowsCreateOrConnectWithoutActorInput | ActorsOnTvShowsCreateOrConnectWithoutActorInput[]
    createMany?: ActorsOnTvShowsCreateManyActorInputEnvelope
    connect?: ActorsOnTvShowsWhereUniqueInput | ActorsOnTvShowsWhereUniqueInput[]
  }

  export type ActorsOnTvShowsUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<ActorsOnTvShowsCreateWithoutActorInput, ActorsOnTvShowsUncheckedCreateWithoutActorInput> | ActorsOnTvShowsCreateWithoutActorInput[] | ActorsOnTvShowsUncheckedCreateWithoutActorInput[]
    connectOrCreate?: ActorsOnTvShowsCreateOrConnectWithoutActorInput | ActorsOnTvShowsCreateOrConnectWithoutActorInput[]
    createMany?: ActorsOnTvShowsCreateManyActorInputEnvelope
    connect?: ActorsOnTvShowsWhereUniqueInput | ActorsOnTvShowsWhereUniqueInput[]
  }

  export type ActorsOnTvShowsUpdateManyWithoutActorNestedInput = {
    create?: XOR<ActorsOnTvShowsCreateWithoutActorInput, ActorsOnTvShowsUncheckedCreateWithoutActorInput> | ActorsOnTvShowsCreateWithoutActorInput[] | ActorsOnTvShowsUncheckedCreateWithoutActorInput[]
    connectOrCreate?: ActorsOnTvShowsCreateOrConnectWithoutActorInput | ActorsOnTvShowsCreateOrConnectWithoutActorInput[]
    upsert?: ActorsOnTvShowsUpsertWithWhereUniqueWithoutActorInput | ActorsOnTvShowsUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: ActorsOnTvShowsCreateManyActorInputEnvelope
    set?: ActorsOnTvShowsWhereUniqueInput | ActorsOnTvShowsWhereUniqueInput[]
    disconnect?: ActorsOnTvShowsWhereUniqueInput | ActorsOnTvShowsWhereUniqueInput[]
    delete?: ActorsOnTvShowsWhereUniqueInput | ActorsOnTvShowsWhereUniqueInput[]
    connect?: ActorsOnTvShowsWhereUniqueInput | ActorsOnTvShowsWhereUniqueInput[]
    update?: ActorsOnTvShowsUpdateWithWhereUniqueWithoutActorInput | ActorsOnTvShowsUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: ActorsOnTvShowsUpdateManyWithWhereWithoutActorInput | ActorsOnTvShowsUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: ActorsOnTvShowsScalarWhereInput | ActorsOnTvShowsScalarWhereInput[]
  }

  export type ActorsOnTvShowsUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<ActorsOnTvShowsCreateWithoutActorInput, ActorsOnTvShowsUncheckedCreateWithoutActorInput> | ActorsOnTvShowsCreateWithoutActorInput[] | ActorsOnTvShowsUncheckedCreateWithoutActorInput[]
    connectOrCreate?: ActorsOnTvShowsCreateOrConnectWithoutActorInput | ActorsOnTvShowsCreateOrConnectWithoutActorInput[]
    upsert?: ActorsOnTvShowsUpsertWithWhereUniqueWithoutActorInput | ActorsOnTvShowsUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: ActorsOnTvShowsCreateManyActorInputEnvelope
    set?: ActorsOnTvShowsWhereUniqueInput | ActorsOnTvShowsWhereUniqueInput[]
    disconnect?: ActorsOnTvShowsWhereUniqueInput | ActorsOnTvShowsWhereUniqueInput[]
    delete?: ActorsOnTvShowsWhereUniqueInput | ActorsOnTvShowsWhereUniqueInput[]
    connect?: ActorsOnTvShowsWhereUniqueInput | ActorsOnTvShowsWhereUniqueInput[]
    update?: ActorsOnTvShowsUpdateWithWhereUniqueWithoutActorInput | ActorsOnTvShowsUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: ActorsOnTvShowsUpdateManyWithWhereWithoutActorInput | ActorsOnTvShowsUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: ActorsOnTvShowsScalarWhereInput | ActorsOnTvShowsScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TvShowGenresCreateWithoutTvShowInput = {
    id?: string
    genre: GenresCreateNestedOneWithoutTvshowGenresInput
  }

  export type TvShowGenresUncheckedCreateWithoutTvShowInput = {
    id?: string
    genreId: string
  }

  export type TvShowGenresCreateOrConnectWithoutTvShowInput = {
    where: TvShowGenresWhereUniqueInput
    create: XOR<TvShowGenresCreateWithoutTvShowInput, TvShowGenresUncheckedCreateWithoutTvShowInput>
  }

  export type TvShowGenresCreateManyTvShowInputEnvelope = {
    data: TvShowGenresCreateManyTvShowInput | TvShowGenresCreateManyTvShowInput[]
    skipDuplicates?: boolean
  }

  export type ListTvShowCreateWithoutTvShowInput = {
    id?: string
    addedAt?: Date | string
    order?: number
    list: ListsCreateNestedOneWithoutTvShowsInput
  }

  export type ListTvShowUncheckedCreateWithoutTvShowInput = {
    id?: string
    listId: string
    addedAt?: Date | string
    order?: number
  }

  export type ListTvShowCreateOrConnectWithoutTvShowInput = {
    where: ListTvShowWhereUniqueInput
    create: XOR<ListTvShowCreateWithoutTvShowInput, ListTvShowUncheckedCreateWithoutTvShowInput>
  }

  export type ListTvShowCreateManyTvShowInputEnvelope = {
    data: ListTvShowCreateManyTvShowInput | ListTvShowCreateManyTvShowInput[]
    skipDuplicates?: boolean
  }

  export type RatingsCreateWithoutTvShowInput = {
    id?: string
    comment?: string | null
    user: UsersCreateNestedOneWithoutRatingsInput
    scale: RatingScaleCreateNestedOneWithoutRatingsInput
  }

  export type RatingsUncheckedCreateWithoutTvShowInput = {
    id?: string
    userId: string
    scaleId: number
    comment?: string | null
  }

  export type RatingsCreateOrConnectWithoutTvShowInput = {
    where: RatingsWhereUniqueInput
    create: XOR<RatingsCreateWithoutTvShowInput, RatingsUncheckedCreateWithoutTvShowInput>
  }

  export type RatingsCreateManyTvShowInputEnvelope = {
    data: RatingsCreateManyTvShowInput | RatingsCreateManyTvShowInput[]
    skipDuplicates?: boolean
  }

  export type ActorsOnTvShowsCreateWithoutTvShowInput = {
    id?: string
    actor: ActorsCreateNestedOneWithoutTvShowsInput
  }

  export type ActorsOnTvShowsUncheckedCreateWithoutTvShowInput = {
    id?: string
    actorId: string
  }

  export type ActorsOnTvShowsCreateOrConnectWithoutTvShowInput = {
    where: ActorsOnTvShowsWhereUniqueInput
    create: XOR<ActorsOnTvShowsCreateWithoutTvShowInput, ActorsOnTvShowsUncheckedCreateWithoutTvShowInput>
  }

  export type ActorsOnTvShowsCreateManyTvShowInputEnvelope = {
    data: ActorsOnTvShowsCreateManyTvShowInput | ActorsOnTvShowsCreateManyTvShowInput[]
    skipDuplicates?: boolean
  }

  export type TvShowGenresUpsertWithWhereUniqueWithoutTvShowInput = {
    where: TvShowGenresWhereUniqueInput
    update: XOR<TvShowGenresUpdateWithoutTvShowInput, TvShowGenresUncheckedUpdateWithoutTvShowInput>
    create: XOR<TvShowGenresCreateWithoutTvShowInput, TvShowGenresUncheckedCreateWithoutTvShowInput>
  }

  export type TvShowGenresUpdateWithWhereUniqueWithoutTvShowInput = {
    where: TvShowGenresWhereUniqueInput
    data: XOR<TvShowGenresUpdateWithoutTvShowInput, TvShowGenresUncheckedUpdateWithoutTvShowInput>
  }

  export type TvShowGenresUpdateManyWithWhereWithoutTvShowInput = {
    where: TvShowGenresScalarWhereInput
    data: XOR<TvShowGenresUpdateManyMutationInput, TvShowGenresUncheckedUpdateManyWithoutTvShowInput>
  }

  export type TvShowGenresScalarWhereInput = {
    AND?: TvShowGenresScalarWhereInput | TvShowGenresScalarWhereInput[]
    OR?: TvShowGenresScalarWhereInput[]
    NOT?: TvShowGenresScalarWhereInput | TvShowGenresScalarWhereInput[]
    id?: StringFilter<"TvShowGenres"> | string
    tvShowId?: StringFilter<"TvShowGenres"> | string
    genreId?: StringFilter<"TvShowGenres"> | string
  }

  export type ListTvShowUpsertWithWhereUniqueWithoutTvShowInput = {
    where: ListTvShowWhereUniqueInput
    update: XOR<ListTvShowUpdateWithoutTvShowInput, ListTvShowUncheckedUpdateWithoutTvShowInput>
    create: XOR<ListTvShowCreateWithoutTvShowInput, ListTvShowUncheckedCreateWithoutTvShowInput>
  }

  export type ListTvShowUpdateWithWhereUniqueWithoutTvShowInput = {
    where: ListTvShowWhereUniqueInput
    data: XOR<ListTvShowUpdateWithoutTvShowInput, ListTvShowUncheckedUpdateWithoutTvShowInput>
  }

  export type ListTvShowUpdateManyWithWhereWithoutTvShowInput = {
    where: ListTvShowScalarWhereInput
    data: XOR<ListTvShowUpdateManyMutationInput, ListTvShowUncheckedUpdateManyWithoutTvShowInput>
  }

  export type ListTvShowScalarWhereInput = {
    AND?: ListTvShowScalarWhereInput | ListTvShowScalarWhereInput[]
    OR?: ListTvShowScalarWhereInput[]
    NOT?: ListTvShowScalarWhereInput | ListTvShowScalarWhereInput[]
    id?: StringFilter<"ListTvShow"> | string
    listId?: StringFilter<"ListTvShow"> | string
    tvShowId?: StringFilter<"ListTvShow"> | string
    addedAt?: DateTimeFilter<"ListTvShow"> | Date | string
    order?: IntFilter<"ListTvShow"> | number
  }

  export type RatingsUpsertWithWhereUniqueWithoutTvShowInput = {
    where: RatingsWhereUniqueInput
    update: XOR<RatingsUpdateWithoutTvShowInput, RatingsUncheckedUpdateWithoutTvShowInput>
    create: XOR<RatingsCreateWithoutTvShowInput, RatingsUncheckedCreateWithoutTvShowInput>
  }

  export type RatingsUpdateWithWhereUniqueWithoutTvShowInput = {
    where: RatingsWhereUniqueInput
    data: XOR<RatingsUpdateWithoutTvShowInput, RatingsUncheckedUpdateWithoutTvShowInput>
  }

  export type RatingsUpdateManyWithWhereWithoutTvShowInput = {
    where: RatingsScalarWhereInput
    data: XOR<RatingsUpdateManyMutationInput, RatingsUncheckedUpdateManyWithoutTvShowInput>
  }

  export type RatingsScalarWhereInput = {
    AND?: RatingsScalarWhereInput | RatingsScalarWhereInput[]
    OR?: RatingsScalarWhereInput[]
    NOT?: RatingsScalarWhereInput | RatingsScalarWhereInput[]
    id?: StringFilter<"Ratings"> | string
    userId?: StringFilter<"Ratings"> | string
    tvShowId?: StringFilter<"Ratings"> | string
    scaleId?: IntFilter<"Ratings"> | number
    comment?: StringNullableFilter<"Ratings"> | string | null
  }

  export type ActorsOnTvShowsUpsertWithWhereUniqueWithoutTvShowInput = {
    where: ActorsOnTvShowsWhereUniqueInput
    update: XOR<ActorsOnTvShowsUpdateWithoutTvShowInput, ActorsOnTvShowsUncheckedUpdateWithoutTvShowInput>
    create: XOR<ActorsOnTvShowsCreateWithoutTvShowInput, ActorsOnTvShowsUncheckedCreateWithoutTvShowInput>
  }

  export type ActorsOnTvShowsUpdateWithWhereUniqueWithoutTvShowInput = {
    where: ActorsOnTvShowsWhereUniqueInput
    data: XOR<ActorsOnTvShowsUpdateWithoutTvShowInput, ActorsOnTvShowsUncheckedUpdateWithoutTvShowInput>
  }

  export type ActorsOnTvShowsUpdateManyWithWhereWithoutTvShowInput = {
    where: ActorsOnTvShowsScalarWhereInput
    data: XOR<ActorsOnTvShowsUpdateManyMutationInput, ActorsOnTvShowsUncheckedUpdateManyWithoutTvShowInput>
  }

  export type ActorsOnTvShowsScalarWhereInput = {
    AND?: ActorsOnTvShowsScalarWhereInput | ActorsOnTvShowsScalarWhereInput[]
    OR?: ActorsOnTvShowsScalarWhereInput[]
    NOT?: ActorsOnTvShowsScalarWhereInput | ActorsOnTvShowsScalarWhereInput[]
    id?: StringFilter<"ActorsOnTvShows"> | string
    tvShowId?: StringFilter<"ActorsOnTvShows"> | string
    actorId?: StringFilter<"ActorsOnTvShows"> | string
  }

  export type TvShowGenresCreateWithoutGenreInput = {
    id?: string
    tvShow: TvShowsCreateNestedOneWithoutTvshowGenresInput
  }

  export type TvShowGenresUncheckedCreateWithoutGenreInput = {
    id?: string
    tvShowId: string
  }

  export type TvShowGenresCreateOrConnectWithoutGenreInput = {
    where: TvShowGenresWhereUniqueInput
    create: XOR<TvShowGenresCreateWithoutGenreInput, TvShowGenresUncheckedCreateWithoutGenreInput>
  }

  export type TvShowGenresCreateManyGenreInputEnvelope = {
    data: TvShowGenresCreateManyGenreInput | TvShowGenresCreateManyGenreInput[]
    skipDuplicates?: boolean
  }

  export type TvShowGenresUpsertWithWhereUniqueWithoutGenreInput = {
    where: TvShowGenresWhereUniqueInput
    update: XOR<TvShowGenresUpdateWithoutGenreInput, TvShowGenresUncheckedUpdateWithoutGenreInput>
    create: XOR<TvShowGenresCreateWithoutGenreInput, TvShowGenresUncheckedCreateWithoutGenreInput>
  }

  export type TvShowGenresUpdateWithWhereUniqueWithoutGenreInput = {
    where: TvShowGenresWhereUniqueInput
    data: XOR<TvShowGenresUpdateWithoutGenreInput, TvShowGenresUncheckedUpdateWithoutGenreInput>
  }

  export type TvShowGenresUpdateManyWithWhereWithoutGenreInput = {
    where: TvShowGenresScalarWhereInput
    data: XOR<TvShowGenresUpdateManyMutationInput, TvShowGenresUncheckedUpdateManyWithoutGenreInput>
  }

  export type TvShowsCreateWithoutTvshowGenresInput = {
    id?: string
    title: string
    synopsis: string
    cast: string
    poster: string
    premiereDate: Date | string
    originalName: string
    createdAt?: Date | string
    lists?: ListTvShowCreateNestedManyWithoutTvShowInput
    ratings?: RatingsCreateNestedManyWithoutTvShowInput
    actors?: ActorsOnTvShowsCreateNestedManyWithoutTvShowInput
  }

  export type TvShowsUncheckedCreateWithoutTvshowGenresInput = {
    id?: string
    title: string
    synopsis: string
    cast: string
    poster: string
    premiereDate: Date | string
    originalName: string
    createdAt?: Date | string
    lists?: ListTvShowUncheckedCreateNestedManyWithoutTvShowInput
    ratings?: RatingsUncheckedCreateNestedManyWithoutTvShowInput
    actors?: ActorsOnTvShowsUncheckedCreateNestedManyWithoutTvShowInput
  }

  export type TvShowsCreateOrConnectWithoutTvshowGenresInput = {
    where: TvShowsWhereUniqueInput
    create: XOR<TvShowsCreateWithoutTvshowGenresInput, TvShowsUncheckedCreateWithoutTvshowGenresInput>
  }

  export type GenresCreateWithoutTvshowGenresInput = {
    id?: string
    name: string
  }

  export type GenresUncheckedCreateWithoutTvshowGenresInput = {
    id?: string
    name: string
  }

  export type GenresCreateOrConnectWithoutTvshowGenresInput = {
    where: GenresWhereUniqueInput
    create: XOR<GenresCreateWithoutTvshowGenresInput, GenresUncheckedCreateWithoutTvshowGenresInput>
  }

  export type TvShowsUpsertWithoutTvshowGenresInput = {
    update: XOR<TvShowsUpdateWithoutTvshowGenresInput, TvShowsUncheckedUpdateWithoutTvshowGenresInput>
    create: XOR<TvShowsCreateWithoutTvshowGenresInput, TvShowsUncheckedCreateWithoutTvshowGenresInput>
    where?: TvShowsWhereInput
  }

  export type TvShowsUpdateToOneWithWhereWithoutTvshowGenresInput = {
    where?: TvShowsWhereInput
    data: XOR<TvShowsUpdateWithoutTvshowGenresInput, TvShowsUncheckedUpdateWithoutTvshowGenresInput>
  }

  export type TvShowsUpdateWithoutTvshowGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    premiereDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ListTvShowUpdateManyWithoutTvShowNestedInput
    ratings?: RatingsUpdateManyWithoutTvShowNestedInput
    actors?: ActorsOnTvShowsUpdateManyWithoutTvShowNestedInput
  }

  export type TvShowsUncheckedUpdateWithoutTvshowGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    premiereDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lists?: ListTvShowUncheckedUpdateManyWithoutTvShowNestedInput
    ratings?: RatingsUncheckedUpdateManyWithoutTvShowNestedInput
    actors?: ActorsOnTvShowsUncheckedUpdateManyWithoutTvShowNestedInput
  }

  export type GenresUpsertWithoutTvshowGenresInput = {
    update: XOR<GenresUpdateWithoutTvshowGenresInput, GenresUncheckedUpdateWithoutTvshowGenresInput>
    create: XOR<GenresCreateWithoutTvshowGenresInput, GenresUncheckedCreateWithoutTvshowGenresInput>
    where?: GenresWhereInput
  }

  export type GenresUpdateToOneWithWhereWithoutTvshowGenresInput = {
    where?: GenresWhereInput
    data: XOR<GenresUpdateWithoutTvshowGenresInput, GenresUncheckedUpdateWithoutTvshowGenresInput>
  }

  export type GenresUpdateWithoutTvshowGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenresUncheckedUpdateWithoutTvshowGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ListsCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tvShows?: ListTvShowCreateNestedManyWithoutListInput
  }

  export type ListsUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tvShows?: ListTvShowUncheckedCreateNestedManyWithoutListInput
  }

  export type ListsCreateOrConnectWithoutUserInput = {
    where: ListsWhereUniqueInput
    create: XOR<ListsCreateWithoutUserInput, ListsUncheckedCreateWithoutUserInput>
  }

  export type ListsCreateManyUserInputEnvelope = {
    data: ListsCreateManyUserInput | ListsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RatingsCreateWithoutUserInput = {
    id?: string
    comment?: string | null
    tvShow: TvShowsCreateNestedOneWithoutRatingsInput
    scale: RatingScaleCreateNestedOneWithoutRatingsInput
  }

  export type RatingsUncheckedCreateWithoutUserInput = {
    id?: string
    tvShowId: string
    scaleId: number
    comment?: string | null
  }

  export type RatingsCreateOrConnectWithoutUserInput = {
    where: RatingsWhereUniqueInput
    create: XOR<RatingsCreateWithoutUserInput, RatingsUncheckedCreateWithoutUserInput>
  }

  export type RatingsCreateManyUserInputEnvelope = {
    data: RatingsCreateManyUserInput | RatingsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ListsUpsertWithWhereUniqueWithoutUserInput = {
    where: ListsWhereUniqueInput
    update: XOR<ListsUpdateWithoutUserInput, ListsUncheckedUpdateWithoutUserInput>
    create: XOR<ListsCreateWithoutUserInput, ListsUncheckedCreateWithoutUserInput>
  }

  export type ListsUpdateWithWhereUniqueWithoutUserInput = {
    where: ListsWhereUniqueInput
    data: XOR<ListsUpdateWithoutUserInput, ListsUncheckedUpdateWithoutUserInput>
  }

  export type ListsUpdateManyWithWhereWithoutUserInput = {
    where: ListsScalarWhereInput
    data: XOR<ListsUpdateManyMutationInput, ListsUncheckedUpdateManyWithoutUserInput>
  }

  export type ListsScalarWhereInput = {
    AND?: ListsScalarWhereInput | ListsScalarWhereInput[]
    OR?: ListsScalarWhereInput[]
    NOT?: ListsScalarWhereInput | ListsScalarWhereInput[]
    id?: StringFilter<"Lists"> | string
    name?: StringFilter<"Lists"> | string
    userId?: StringFilter<"Lists"> | string
    createdAt?: DateTimeFilter<"Lists"> | Date | string
    updatedAt?: DateTimeFilter<"Lists"> | Date | string
  }

  export type RatingsUpsertWithWhereUniqueWithoutUserInput = {
    where: RatingsWhereUniqueInput
    update: XOR<RatingsUpdateWithoutUserInput, RatingsUncheckedUpdateWithoutUserInput>
    create: XOR<RatingsCreateWithoutUserInput, RatingsUncheckedCreateWithoutUserInput>
  }

  export type RatingsUpdateWithWhereUniqueWithoutUserInput = {
    where: RatingsWhereUniqueInput
    data: XOR<RatingsUpdateWithoutUserInput, RatingsUncheckedUpdateWithoutUserInput>
  }

  export type RatingsUpdateManyWithWhereWithoutUserInput = {
    where: RatingsScalarWhereInput
    data: XOR<RatingsUpdateManyMutationInput, RatingsUncheckedUpdateManyWithoutUserInput>
  }

  export type ListsCreateWithoutTvShowsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UsersCreateNestedOneWithoutListInput
  }

  export type ListsUncheckedCreateWithoutTvShowsInput = {
    id?: string
    name: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ListsCreateOrConnectWithoutTvShowsInput = {
    where: ListsWhereUniqueInput
    create: XOR<ListsCreateWithoutTvShowsInput, ListsUncheckedCreateWithoutTvShowsInput>
  }

  export type TvShowsCreateWithoutListsInput = {
    id?: string
    title: string
    synopsis: string
    cast: string
    poster: string
    premiereDate: Date | string
    originalName: string
    createdAt?: Date | string
    tvshowGenres?: TvShowGenresCreateNestedManyWithoutTvShowInput
    ratings?: RatingsCreateNestedManyWithoutTvShowInput
    actors?: ActorsOnTvShowsCreateNestedManyWithoutTvShowInput
  }

  export type TvShowsUncheckedCreateWithoutListsInput = {
    id?: string
    title: string
    synopsis: string
    cast: string
    poster: string
    premiereDate: Date | string
    originalName: string
    createdAt?: Date | string
    tvshowGenres?: TvShowGenresUncheckedCreateNestedManyWithoutTvShowInput
    ratings?: RatingsUncheckedCreateNestedManyWithoutTvShowInput
    actors?: ActorsOnTvShowsUncheckedCreateNestedManyWithoutTvShowInput
  }

  export type TvShowsCreateOrConnectWithoutListsInput = {
    where: TvShowsWhereUniqueInput
    create: XOR<TvShowsCreateWithoutListsInput, TvShowsUncheckedCreateWithoutListsInput>
  }

  export type ListsUpsertWithoutTvShowsInput = {
    update: XOR<ListsUpdateWithoutTvShowsInput, ListsUncheckedUpdateWithoutTvShowsInput>
    create: XOR<ListsCreateWithoutTvShowsInput, ListsUncheckedCreateWithoutTvShowsInput>
    where?: ListsWhereInput
  }

  export type ListsUpdateToOneWithWhereWithoutTvShowsInput = {
    where?: ListsWhereInput
    data: XOR<ListsUpdateWithoutTvShowsInput, ListsUncheckedUpdateWithoutTvShowsInput>
  }

  export type ListsUpdateWithoutTvShowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutListNestedInput
  }

  export type ListsUncheckedUpdateWithoutTvShowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TvShowsUpsertWithoutListsInput = {
    update: XOR<TvShowsUpdateWithoutListsInput, TvShowsUncheckedUpdateWithoutListsInput>
    create: XOR<TvShowsCreateWithoutListsInput, TvShowsUncheckedCreateWithoutListsInput>
    where?: TvShowsWhereInput
  }

  export type TvShowsUpdateToOneWithWhereWithoutListsInput = {
    where?: TvShowsWhereInput
    data: XOR<TvShowsUpdateWithoutListsInput, TvShowsUncheckedUpdateWithoutListsInput>
  }

  export type TvShowsUpdateWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    premiereDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tvshowGenres?: TvShowGenresUpdateManyWithoutTvShowNestedInput
    ratings?: RatingsUpdateManyWithoutTvShowNestedInput
    actors?: ActorsOnTvShowsUpdateManyWithoutTvShowNestedInput
  }

  export type TvShowsUncheckedUpdateWithoutListsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    premiereDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tvshowGenres?: TvShowGenresUncheckedUpdateManyWithoutTvShowNestedInput
    ratings?: RatingsUncheckedUpdateManyWithoutTvShowNestedInput
    actors?: ActorsOnTvShowsUncheckedUpdateManyWithoutTvShowNestedInput
  }

  export type UsersCreateWithoutListInput = {
    id?: string
    name: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ratings?: RatingsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutListInput = {
    id?: string
    name: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ratings?: RatingsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutListInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutListInput, UsersUncheckedCreateWithoutListInput>
  }

  export type ListTvShowCreateWithoutListInput = {
    id?: string
    addedAt?: Date | string
    order?: number
    tvShow: TvShowsCreateNestedOneWithoutListsInput
  }

  export type ListTvShowUncheckedCreateWithoutListInput = {
    id?: string
    tvShowId: string
    addedAt?: Date | string
    order?: number
  }

  export type ListTvShowCreateOrConnectWithoutListInput = {
    where: ListTvShowWhereUniqueInput
    create: XOR<ListTvShowCreateWithoutListInput, ListTvShowUncheckedCreateWithoutListInput>
  }

  export type ListTvShowCreateManyListInputEnvelope = {
    data: ListTvShowCreateManyListInput | ListTvShowCreateManyListInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutListInput = {
    update: XOR<UsersUpdateWithoutListInput, UsersUncheckedUpdateWithoutListInput>
    create: XOR<UsersCreateWithoutListInput, UsersUncheckedCreateWithoutListInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutListInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutListInput, UsersUncheckedUpdateWithoutListInput>
  }

  export type UsersUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: RatingsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ratings?: RatingsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ListTvShowUpsertWithWhereUniqueWithoutListInput = {
    where: ListTvShowWhereUniqueInput
    update: XOR<ListTvShowUpdateWithoutListInput, ListTvShowUncheckedUpdateWithoutListInput>
    create: XOR<ListTvShowCreateWithoutListInput, ListTvShowUncheckedCreateWithoutListInput>
  }

  export type ListTvShowUpdateWithWhereUniqueWithoutListInput = {
    where: ListTvShowWhereUniqueInput
    data: XOR<ListTvShowUpdateWithoutListInput, ListTvShowUncheckedUpdateWithoutListInput>
  }

  export type ListTvShowUpdateManyWithWhereWithoutListInput = {
    where: ListTvShowScalarWhereInput
    data: XOR<ListTvShowUpdateManyMutationInput, ListTvShowUncheckedUpdateManyWithoutListInput>
  }

  export type RatingsCreateWithoutScaleInput = {
    id?: string
    comment?: string | null
    user: UsersCreateNestedOneWithoutRatingsInput
    tvShow: TvShowsCreateNestedOneWithoutRatingsInput
  }

  export type RatingsUncheckedCreateWithoutScaleInput = {
    id?: string
    userId: string
    tvShowId: string
    comment?: string | null
  }

  export type RatingsCreateOrConnectWithoutScaleInput = {
    where: RatingsWhereUniqueInput
    create: XOR<RatingsCreateWithoutScaleInput, RatingsUncheckedCreateWithoutScaleInput>
  }

  export type RatingsCreateManyScaleInputEnvelope = {
    data: RatingsCreateManyScaleInput | RatingsCreateManyScaleInput[]
    skipDuplicates?: boolean
  }

  export type RatingsUpsertWithWhereUniqueWithoutScaleInput = {
    where: RatingsWhereUniqueInput
    update: XOR<RatingsUpdateWithoutScaleInput, RatingsUncheckedUpdateWithoutScaleInput>
    create: XOR<RatingsCreateWithoutScaleInput, RatingsUncheckedCreateWithoutScaleInput>
  }

  export type RatingsUpdateWithWhereUniqueWithoutScaleInput = {
    where: RatingsWhereUniqueInput
    data: XOR<RatingsUpdateWithoutScaleInput, RatingsUncheckedUpdateWithoutScaleInput>
  }

  export type RatingsUpdateManyWithWhereWithoutScaleInput = {
    where: RatingsScalarWhereInput
    data: XOR<RatingsUpdateManyMutationInput, RatingsUncheckedUpdateManyWithoutScaleInput>
  }

  export type UsersCreateWithoutRatingsInput = {
    id?: string
    name: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    list?: ListsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutRatingsInput = {
    id?: string
    name: string
    email: string
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    list?: ListsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutRatingsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRatingsInput, UsersUncheckedCreateWithoutRatingsInput>
  }

  export type TvShowsCreateWithoutRatingsInput = {
    id?: string
    title: string
    synopsis: string
    cast: string
    poster: string
    premiereDate: Date | string
    originalName: string
    createdAt?: Date | string
    tvshowGenres?: TvShowGenresCreateNestedManyWithoutTvShowInput
    lists?: ListTvShowCreateNestedManyWithoutTvShowInput
    actors?: ActorsOnTvShowsCreateNestedManyWithoutTvShowInput
  }

  export type TvShowsUncheckedCreateWithoutRatingsInput = {
    id?: string
    title: string
    synopsis: string
    cast: string
    poster: string
    premiereDate: Date | string
    originalName: string
    createdAt?: Date | string
    tvshowGenres?: TvShowGenresUncheckedCreateNestedManyWithoutTvShowInput
    lists?: ListTvShowUncheckedCreateNestedManyWithoutTvShowInput
    actors?: ActorsOnTvShowsUncheckedCreateNestedManyWithoutTvShowInput
  }

  export type TvShowsCreateOrConnectWithoutRatingsInput = {
    where: TvShowsWhereUniqueInput
    create: XOR<TvShowsCreateWithoutRatingsInput, TvShowsUncheckedCreateWithoutRatingsInput>
  }

  export type RatingScaleCreateWithoutRatingsInput = {
    label: string
  }

  export type RatingScaleUncheckedCreateWithoutRatingsInput = {
    id?: number
    label: string
  }

  export type RatingScaleCreateOrConnectWithoutRatingsInput = {
    where: RatingScaleWhereUniqueInput
    create: XOR<RatingScaleCreateWithoutRatingsInput, RatingScaleUncheckedCreateWithoutRatingsInput>
  }

  export type UsersUpsertWithoutRatingsInput = {
    update: XOR<UsersUpdateWithoutRatingsInput, UsersUncheckedUpdateWithoutRatingsInput>
    create: XOR<UsersCreateWithoutRatingsInput, UsersUncheckedCreateWithoutRatingsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutRatingsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutRatingsInput, UsersUncheckedUpdateWithoutRatingsInput>
  }

  export type UsersUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ListsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    list?: ListsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TvShowsUpsertWithoutRatingsInput = {
    update: XOR<TvShowsUpdateWithoutRatingsInput, TvShowsUncheckedUpdateWithoutRatingsInput>
    create: XOR<TvShowsCreateWithoutRatingsInput, TvShowsUncheckedCreateWithoutRatingsInput>
    where?: TvShowsWhereInput
  }

  export type TvShowsUpdateToOneWithWhereWithoutRatingsInput = {
    where?: TvShowsWhereInput
    data: XOR<TvShowsUpdateWithoutRatingsInput, TvShowsUncheckedUpdateWithoutRatingsInput>
  }

  export type TvShowsUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    premiereDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tvshowGenres?: TvShowGenresUpdateManyWithoutTvShowNestedInput
    lists?: ListTvShowUpdateManyWithoutTvShowNestedInput
    actors?: ActorsOnTvShowsUpdateManyWithoutTvShowNestedInput
  }

  export type TvShowsUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    premiereDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tvshowGenres?: TvShowGenresUncheckedUpdateManyWithoutTvShowNestedInput
    lists?: ListTvShowUncheckedUpdateManyWithoutTvShowNestedInput
    actors?: ActorsOnTvShowsUncheckedUpdateManyWithoutTvShowNestedInput
  }

  export type RatingScaleUpsertWithoutRatingsInput = {
    update: XOR<RatingScaleUpdateWithoutRatingsInput, RatingScaleUncheckedUpdateWithoutRatingsInput>
    create: XOR<RatingScaleCreateWithoutRatingsInput, RatingScaleUncheckedCreateWithoutRatingsInput>
    where?: RatingScaleWhereInput
  }

  export type RatingScaleUpdateToOneWithWhereWithoutRatingsInput = {
    where?: RatingScaleWhereInput
    data: XOR<RatingScaleUpdateWithoutRatingsInput, RatingScaleUncheckedUpdateWithoutRatingsInput>
  }

  export type RatingScaleUpdateWithoutRatingsInput = {
    label?: StringFieldUpdateOperationsInput | string
  }

  export type RatingScaleUncheckedUpdateWithoutRatingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
  }

  export type TvShowsCreateWithoutActorsInput = {
    id?: string
    title: string
    synopsis: string
    cast: string
    poster: string
    premiereDate: Date | string
    originalName: string
    createdAt?: Date | string
    tvshowGenres?: TvShowGenresCreateNestedManyWithoutTvShowInput
    lists?: ListTvShowCreateNestedManyWithoutTvShowInput
    ratings?: RatingsCreateNestedManyWithoutTvShowInput
  }

  export type TvShowsUncheckedCreateWithoutActorsInput = {
    id?: string
    title: string
    synopsis: string
    cast: string
    poster: string
    premiereDate: Date | string
    originalName: string
    createdAt?: Date | string
    tvshowGenres?: TvShowGenresUncheckedCreateNestedManyWithoutTvShowInput
    lists?: ListTvShowUncheckedCreateNestedManyWithoutTvShowInput
    ratings?: RatingsUncheckedCreateNestedManyWithoutTvShowInput
  }

  export type TvShowsCreateOrConnectWithoutActorsInput = {
    where: TvShowsWhereUniqueInput
    create: XOR<TvShowsCreateWithoutActorsInput, TvShowsUncheckedCreateWithoutActorsInput>
  }

  export type ActorsCreateWithoutTvShowsInput = {
    id?: string
    name: string
  }

  export type ActorsUncheckedCreateWithoutTvShowsInput = {
    id?: string
    name: string
  }

  export type ActorsCreateOrConnectWithoutTvShowsInput = {
    where: ActorsWhereUniqueInput
    create: XOR<ActorsCreateWithoutTvShowsInput, ActorsUncheckedCreateWithoutTvShowsInput>
  }

  export type TvShowsUpsertWithoutActorsInput = {
    update: XOR<TvShowsUpdateWithoutActorsInput, TvShowsUncheckedUpdateWithoutActorsInput>
    create: XOR<TvShowsCreateWithoutActorsInput, TvShowsUncheckedCreateWithoutActorsInput>
    where?: TvShowsWhereInput
  }

  export type TvShowsUpdateToOneWithWhereWithoutActorsInput = {
    where?: TvShowsWhereInput
    data: XOR<TvShowsUpdateWithoutActorsInput, TvShowsUncheckedUpdateWithoutActorsInput>
  }

  export type TvShowsUpdateWithoutActorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    premiereDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tvshowGenres?: TvShowGenresUpdateManyWithoutTvShowNestedInput
    lists?: ListTvShowUpdateManyWithoutTvShowNestedInput
    ratings?: RatingsUpdateManyWithoutTvShowNestedInput
  }

  export type TvShowsUncheckedUpdateWithoutActorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    synopsis?: StringFieldUpdateOperationsInput | string
    cast?: StringFieldUpdateOperationsInput | string
    poster?: StringFieldUpdateOperationsInput | string
    premiereDate?: DateTimeFieldUpdateOperationsInput | Date | string
    originalName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tvshowGenres?: TvShowGenresUncheckedUpdateManyWithoutTvShowNestedInput
    lists?: ListTvShowUncheckedUpdateManyWithoutTvShowNestedInput
    ratings?: RatingsUncheckedUpdateManyWithoutTvShowNestedInput
  }

  export type ActorsUpsertWithoutTvShowsInput = {
    update: XOR<ActorsUpdateWithoutTvShowsInput, ActorsUncheckedUpdateWithoutTvShowsInput>
    create: XOR<ActorsCreateWithoutTvShowsInput, ActorsUncheckedCreateWithoutTvShowsInput>
    where?: ActorsWhereInput
  }

  export type ActorsUpdateToOneWithWhereWithoutTvShowsInput = {
    where?: ActorsWhereInput
    data: XOR<ActorsUpdateWithoutTvShowsInput, ActorsUncheckedUpdateWithoutTvShowsInput>
  }

  export type ActorsUpdateWithoutTvShowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ActorsUncheckedUpdateWithoutTvShowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ActorsOnTvShowsCreateWithoutActorInput = {
    id?: string
    tvShow: TvShowsCreateNestedOneWithoutActorsInput
  }

  export type ActorsOnTvShowsUncheckedCreateWithoutActorInput = {
    id?: string
    tvShowId: string
  }

  export type ActorsOnTvShowsCreateOrConnectWithoutActorInput = {
    where: ActorsOnTvShowsWhereUniqueInput
    create: XOR<ActorsOnTvShowsCreateWithoutActorInput, ActorsOnTvShowsUncheckedCreateWithoutActorInput>
  }

  export type ActorsOnTvShowsCreateManyActorInputEnvelope = {
    data: ActorsOnTvShowsCreateManyActorInput | ActorsOnTvShowsCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type ActorsOnTvShowsUpsertWithWhereUniqueWithoutActorInput = {
    where: ActorsOnTvShowsWhereUniqueInput
    update: XOR<ActorsOnTvShowsUpdateWithoutActorInput, ActorsOnTvShowsUncheckedUpdateWithoutActorInput>
    create: XOR<ActorsOnTvShowsCreateWithoutActorInput, ActorsOnTvShowsUncheckedCreateWithoutActorInput>
  }

  export type ActorsOnTvShowsUpdateWithWhereUniqueWithoutActorInput = {
    where: ActorsOnTvShowsWhereUniqueInput
    data: XOR<ActorsOnTvShowsUpdateWithoutActorInput, ActorsOnTvShowsUncheckedUpdateWithoutActorInput>
  }

  export type ActorsOnTvShowsUpdateManyWithWhereWithoutActorInput = {
    where: ActorsOnTvShowsScalarWhereInput
    data: XOR<ActorsOnTvShowsUpdateManyMutationInput, ActorsOnTvShowsUncheckedUpdateManyWithoutActorInput>
  }

  export type TvShowGenresCreateManyTvShowInput = {
    id?: string
    genreId: string
  }

  export type ListTvShowCreateManyTvShowInput = {
    id?: string
    listId: string
    addedAt?: Date | string
    order?: number
  }

  export type RatingsCreateManyTvShowInput = {
    id?: string
    userId: string
    scaleId: number
    comment?: string | null
  }

  export type ActorsOnTvShowsCreateManyTvShowInput = {
    id?: string
    actorId: string
  }

  export type TvShowGenresUpdateWithoutTvShowInput = {
    id?: StringFieldUpdateOperationsInput | string
    genre?: GenresUpdateOneRequiredWithoutTvshowGenresNestedInput
  }

  export type TvShowGenresUncheckedUpdateWithoutTvShowInput = {
    id?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type TvShowGenresUncheckedUpdateManyWithoutTvShowInput = {
    id?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type ListTvShowUpdateWithoutTvShowInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    list?: ListsUpdateOneRequiredWithoutTvShowsNestedInput
  }

  export type ListTvShowUncheckedUpdateWithoutTvShowInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ListTvShowUncheckedUpdateManyWithoutTvShowInput = {
    id?: StringFieldUpdateOperationsInput | string
    listId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RatingsUpdateWithoutTvShowInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutRatingsNestedInput
    scale?: RatingScaleUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingsUncheckedUpdateWithoutTvShowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scaleId?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingsUncheckedUpdateManyWithoutTvShowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scaleId?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActorsOnTvShowsUpdateWithoutTvShowInput = {
    id?: StringFieldUpdateOperationsInput | string
    actor?: ActorsUpdateOneRequiredWithoutTvShowsNestedInput
  }

  export type ActorsOnTvShowsUncheckedUpdateWithoutTvShowInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
  }

  export type ActorsOnTvShowsUncheckedUpdateManyWithoutTvShowInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
  }

  export type TvShowGenresCreateManyGenreInput = {
    id?: string
    tvShowId: string
  }

  export type TvShowGenresUpdateWithoutGenreInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvShow?: TvShowsUpdateOneRequiredWithoutTvshowGenresNestedInput
  }

  export type TvShowGenresUncheckedUpdateWithoutGenreInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvShowId?: StringFieldUpdateOperationsInput | string
  }

  export type TvShowGenresUncheckedUpdateManyWithoutGenreInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvShowId?: StringFieldUpdateOperationsInput | string
  }

  export type ListsCreateManyUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RatingsCreateManyUserInput = {
    id?: string
    tvShowId: string
    scaleId: number
    comment?: string | null
  }

  export type ListsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tvShows?: ListTvShowUpdateManyWithoutListNestedInput
  }

  export type ListsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tvShows?: ListTvShowUncheckedUpdateManyWithoutListNestedInput
  }

  export type ListsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    tvShow?: TvShowsUpdateOneRequiredWithoutRatingsNestedInput
    scale?: RatingScaleUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvShowId?: StringFieldUpdateOperationsInput | string
    scaleId?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvShowId?: StringFieldUpdateOperationsInput | string
    scaleId?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListTvShowCreateManyListInput = {
    id?: string
    tvShowId: string
    addedAt?: Date | string
    order?: number
  }

  export type ListTvShowUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
    tvShow?: TvShowsUpdateOneRequiredWithoutListsNestedInput
  }

  export type ListTvShowUncheckedUpdateWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvShowId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type ListTvShowUncheckedUpdateManyWithoutListInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvShowId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RatingsCreateManyScaleInput = {
    id?: string
    userId: string
    tvShowId: string
    comment?: string | null
  }

  export type RatingsUpdateWithoutScaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UsersUpdateOneRequiredWithoutRatingsNestedInput
    tvShow?: TvShowsUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingsUncheckedUpdateWithoutScaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tvShowId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingsUncheckedUpdateManyWithoutScaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tvShowId?: StringFieldUpdateOperationsInput | string
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActorsOnTvShowsCreateManyActorInput = {
    id?: string
    tvShowId: string
  }

  export type ActorsOnTvShowsUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvShow?: TvShowsUpdateOneRequiredWithoutActorsNestedInput
  }

  export type ActorsOnTvShowsUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvShowId?: StringFieldUpdateOperationsInput | string
  }

  export type ActorsOnTvShowsUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    tvShowId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}