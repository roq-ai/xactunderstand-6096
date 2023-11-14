/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model adjustment
 *
 */
export type adjustment = $Result.DefaultSelection<Prisma.$adjustmentPayload>;
/**
 * Model business
 *
 */
export type business = $Result.DefaultSelection<Prisma.$businessPayload>;
/**
 * Model estimate
 *
 */
export type estimate = $Result.DefaultSelection<Prisma.$estimatePayload>;
/**
 * Model team
 *
 */
export type team = $Result.DefaultSelection<Prisma.$teamPayload>;
/**
 * Model team_member
 *
 */
export type team_member = $Result.DefaultSelection<Prisma.$team_memberPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Adjustments
 * const adjustments = await prisma.adjustment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Adjustments
   * const adjustments = await prisma.adjustment.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.adjustment`: Exposes CRUD operations for the **adjustment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Adjustments
   * const adjustments = await prisma.adjustment.findMany()
   * ```
   */
  get adjustment(): Prisma.adjustmentDelegate<ExtArgs>;

  /**
   * `prisma.business`: Exposes CRUD operations for the **business** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Businesses
   * const businesses = await prisma.business.findMany()
   * ```
   */
  get business(): Prisma.businessDelegate<ExtArgs>;

  /**
   * `prisma.estimate`: Exposes CRUD operations for the **estimate** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Estimates
   * const estimates = await prisma.estimate.findMany()
   * ```
   */
  get estimate(): Prisma.estimateDelegate<ExtArgs>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **team** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Teams
   * const teams = await prisma.team.findMany()
   * ```
   */
  get team(): Prisma.teamDelegate<ExtArgs>;

  /**
   * `prisma.team_member`: Exposes CRUD operations for the **team_member** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Team_members
   * const team_members = await prisma.team_member.findMany()
   * ```
   */
  get team_member(): Prisma.team_memberDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    adjustment: 'adjustment';
    business: 'business';
    estimate: 'estimate';
    team: 'team';
    team_member: 'team_member';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'adjustment' | 'business' | 'estimate' | 'team' | 'team_member' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      adjustment: {
        payload: Prisma.$adjustmentPayload<ExtArgs>;
        fields: Prisma.adjustmentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.adjustmentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$adjustmentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.adjustmentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$adjustmentPayload>;
          };
          findFirst: {
            args: Prisma.adjustmentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$adjustmentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.adjustmentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$adjustmentPayload>;
          };
          findMany: {
            args: Prisma.adjustmentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$adjustmentPayload>[];
          };
          create: {
            args: Prisma.adjustmentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$adjustmentPayload>;
          };
          createMany: {
            args: Prisma.adjustmentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.adjustmentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$adjustmentPayload>;
          };
          update: {
            args: Prisma.adjustmentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$adjustmentPayload>;
          };
          deleteMany: {
            args: Prisma.adjustmentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.adjustmentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.adjustmentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$adjustmentPayload>;
          };
          aggregate: {
            args: Prisma.AdjustmentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAdjustment>;
          };
          groupBy: {
            args: Prisma.adjustmentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AdjustmentGroupByOutputType>[];
          };
          count: {
            args: Prisma.adjustmentCountArgs<ExtArgs>;
            result: $Utils.Optional<AdjustmentCountAggregateOutputType> | number;
          };
        };
      };
      business: {
        payload: Prisma.$businessPayload<ExtArgs>;
        fields: Prisma.businessFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.businessFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.businessFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          findFirst: {
            args: Prisma.businessFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.businessFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          findMany: {
            args: Prisma.businessFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>[];
          };
          create: {
            args: Prisma.businessCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          createMany: {
            args: Prisma.businessCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.businessDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          update: {
            args: Prisma.businessUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          deleteMany: {
            args: Prisma.businessDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.businessUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.businessUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$businessPayload>;
          };
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBusiness>;
          };
          groupBy: {
            args: Prisma.businessGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BusinessGroupByOutputType>[];
          };
          count: {
            args: Prisma.businessCountArgs<ExtArgs>;
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number;
          };
        };
      };
      estimate: {
        payload: Prisma.$estimatePayload<ExtArgs>;
        fields: Prisma.estimateFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.estimateFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$estimatePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.estimateFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$estimatePayload>;
          };
          findFirst: {
            args: Prisma.estimateFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$estimatePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.estimateFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$estimatePayload>;
          };
          findMany: {
            args: Prisma.estimateFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$estimatePayload>[];
          };
          create: {
            args: Prisma.estimateCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$estimatePayload>;
          };
          createMany: {
            args: Prisma.estimateCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.estimateDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$estimatePayload>;
          };
          update: {
            args: Prisma.estimateUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$estimatePayload>;
          };
          deleteMany: {
            args: Prisma.estimateDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.estimateUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.estimateUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$estimatePayload>;
          };
          aggregate: {
            args: Prisma.EstimateAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEstimate>;
          };
          groupBy: {
            args: Prisma.estimateGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EstimateGroupByOutputType>[];
          };
          count: {
            args: Prisma.estimateCountArgs<ExtArgs>;
            result: $Utils.Optional<EstimateCountAggregateOutputType> | number;
          };
        };
      };
      team: {
        payload: Prisma.$teamPayload<ExtArgs>;
        fields: Prisma.teamFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.teamFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.teamFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          findFirst: {
            args: Prisma.teamFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.teamFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          findMany: {
            args: Prisma.teamFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>[];
          };
          create: {
            args: Prisma.teamCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          createMany: {
            args: Prisma.teamCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.teamDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          update: {
            args: Prisma.teamUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          deleteMany: {
            args: Prisma.teamDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.teamUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.teamUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teamPayload>;
          };
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeam>;
          };
          groupBy: {
            args: Prisma.teamGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TeamGroupByOutputType>[];
          };
          count: {
            args: Prisma.teamCountArgs<ExtArgs>;
            result: $Utils.Optional<TeamCountAggregateOutputType> | number;
          };
        };
      };
      team_member: {
        payload: Prisma.$team_memberPayload<ExtArgs>;
        fields: Prisma.team_memberFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.team_memberFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.team_memberFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          findFirst: {
            args: Prisma.team_memberFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.team_memberFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          findMany: {
            args: Prisma.team_memberFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>[];
          };
          create: {
            args: Prisma.team_memberCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          createMany: {
            args: Prisma.team_memberCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.team_memberDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          update: {
            args: Prisma.team_memberUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          deleteMany: {
            args: Prisma.team_memberDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.team_memberUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.team_memberUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$team_memberPayload>;
          };
          aggregate: {
            args: Prisma.Team_memberAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeam_member>;
          };
          groupBy: {
            args: Prisma.team_memberGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Team_memberGroupByOutputType>[];
          };
          count: {
            args: Prisma.team_memberCountArgs<ExtArgs>;
            result: $Utils.Optional<Team_memberCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type BusinessCountOutputType
   */

  export type BusinessCountOutputType = {
    team: number;
    user: number;
  };

  export type BusinessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | BusinessCountOutputTypeCountTeamArgs;
    user?: boolean | BusinessCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     */
    select?: BusinessCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: teamWhereInput;
    };

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: userWhereInput;
    };

  /**
   * Count Type EstimateCountOutputType
   */

  export type EstimateCountOutputType = {
    adjustment: number;
  };

  export type EstimateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adjustment?: boolean | EstimateCountOutputTypeCountAdjustmentArgs;
  };

  // Custom InputTypes

  /**
   * EstimateCountOutputType without action
   */
  export type EstimateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstimateCountOutputType
     */
    select?: EstimateCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * EstimateCountOutputType without action
   */
  export type EstimateCountOutputTypeCountAdjustmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: adjustmentWhereInput;
  };

  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    team_member: number;
  };

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_member?: boolean | TeamCountOutputTypeCountTeam_memberArgs;
  };

  // Custom InputTypes

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountTeam_memberArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: team_memberWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    adjustment: number;
    estimate: number;
    team_member: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adjustment?: boolean | UserCountOutputTypeCountAdjustmentArgs;
    estimate?: boolean | UserCountOutputTypeCountEstimateArgs;
    team_member?: boolean | UserCountOutputTypeCountTeam_memberArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAdjustmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: adjustmentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEstimateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: estimateWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeam_memberArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: team_memberWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model adjustment
   */

  export type AggregateAdjustment = {
    _count: AdjustmentCountAggregateOutputType | null;
    _avg: AdjustmentAvgAggregateOutputType | null;
    _sum: AdjustmentSumAggregateOutputType | null;
    _min: AdjustmentMinAggregateOutputType | null;
    _max: AdjustmentMaxAggregateOutputType | null;
  };

  export type AdjustmentAvgAggregateOutputType = {
    amount: number | null;
  };

  export type AdjustmentSumAggregateOutputType = {
    amount: number | null;
  };

  export type AdjustmentMinAggregateOutputType = {
    id: string | null;
    estimate_id: string | null;
    user_id: string | null;
    description: string | null;
    amount: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AdjustmentMaxAggregateOutputType = {
    id: string | null;
    estimate_id: string | null;
    user_id: string | null;
    description: string | null;
    amount: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AdjustmentCountAggregateOutputType = {
    id: number;
    estimate_id: number;
    user_id: number;
    description: number;
    amount: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AdjustmentAvgAggregateInputType = {
    amount?: true;
  };

  export type AdjustmentSumAggregateInputType = {
    amount?: true;
  };

  export type AdjustmentMinAggregateInputType = {
    id?: true;
    estimate_id?: true;
    user_id?: true;
    description?: true;
    amount?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AdjustmentMaxAggregateInputType = {
    id?: true;
    estimate_id?: true;
    user_id?: true;
    description?: true;
    amount?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AdjustmentCountAggregateInputType = {
    id?: true;
    estimate_id?: true;
    user_id?: true;
    description?: true;
    amount?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AdjustmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adjustment to aggregate.
     */
    where?: adjustmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of adjustments to fetch.
     */
    orderBy?: adjustmentOrderByWithRelationInput | adjustmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: adjustmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` adjustments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` adjustments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned adjustments
     **/
    _count?: true | AdjustmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AdjustmentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AdjustmentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AdjustmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AdjustmentMaxAggregateInputType;
  };

  export type GetAdjustmentAggregateType<T extends AdjustmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAdjustment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdjustment[P]>
      : GetScalarType<T[P], AggregateAdjustment[P]>;
  };

  export type adjustmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: adjustmentWhereInput;
    orderBy?: adjustmentOrderByWithAggregationInput | adjustmentOrderByWithAggregationInput[];
    by: AdjustmentScalarFieldEnum[] | AdjustmentScalarFieldEnum;
    having?: adjustmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdjustmentCountAggregateInputType | true;
    _avg?: AdjustmentAvgAggregateInputType;
    _sum?: AdjustmentSumAggregateInputType;
    _min?: AdjustmentMinAggregateInputType;
    _max?: AdjustmentMaxAggregateInputType;
  };

  export type AdjustmentGroupByOutputType = {
    id: string;
    estimate_id: string;
    user_id: string;
    description: string | null;
    amount: number | null;
    created_at: Date;
    updated_at: Date;
    _count: AdjustmentCountAggregateOutputType | null;
    _avg: AdjustmentAvgAggregateOutputType | null;
    _sum: AdjustmentSumAggregateOutputType | null;
    _min: AdjustmentMinAggregateOutputType | null;
    _max: AdjustmentMaxAggregateOutputType | null;
  };

  type GetAdjustmentGroupByPayload<T extends adjustmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdjustmentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AdjustmentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AdjustmentGroupByOutputType[P]>
          : GetScalarType<T[P], AdjustmentGroupByOutputType[P]>;
      }
    >
  >;

  export type adjustmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        estimate_id?: boolean;
        user_id?: boolean;
        description?: boolean;
        amount?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        estimate?: boolean | estimateDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['adjustment']
    >;

  export type adjustmentSelectScalar = {
    id?: boolean;
    estimate_id?: boolean;
    user_id?: boolean;
    description?: boolean;
    amount?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type adjustmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estimate?: boolean | estimateDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $adjustmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'adjustment';
    objects: {
      estimate: Prisma.$estimatePayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        estimate_id: string;
        user_id: string;
        description: string | null;
        amount: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['adjustment']
    >;
    composites: {};
  };

  type adjustmentGetPayload<S extends boolean | null | undefined | adjustmentDefaultArgs> = $Result.GetResult<
    Prisma.$adjustmentPayload,
    S
  >;

  type adjustmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    adjustmentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: AdjustmentCountAggregateInputType | true;
  };

  export interface adjustmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['adjustment']; meta: { name: 'adjustment' } };
    /**
     * Find zero or one Adjustment that matches the filter.
     * @param {adjustmentFindUniqueArgs} args - Arguments to find a Adjustment
     * @example
     * // Get one Adjustment
     * const adjustment = await prisma.adjustment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends adjustmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, adjustmentFindUniqueArgs<ExtArgs>>,
    ): Prisma__adjustmentClient<
      $Result.GetResult<Prisma.$adjustmentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Adjustment that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {adjustmentFindUniqueOrThrowArgs} args - Arguments to find a Adjustment
     * @example
     * // Get one Adjustment
     * const adjustment = await prisma.adjustment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends adjustmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adjustmentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__adjustmentClient<
      $Result.GetResult<Prisma.$adjustmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Adjustment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adjustmentFindFirstArgs} args - Arguments to find a Adjustment
     * @example
     * // Get one Adjustment
     * const adjustment = await prisma.adjustment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends adjustmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, adjustmentFindFirstArgs<ExtArgs>>,
    ): Prisma__adjustmentClient<
      $Result.GetResult<Prisma.$adjustmentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Adjustment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adjustmentFindFirstOrThrowArgs} args - Arguments to find a Adjustment
     * @example
     * // Get one Adjustment
     * const adjustment = await prisma.adjustment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends adjustmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, adjustmentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__adjustmentClient<
      $Result.GetResult<Prisma.$adjustmentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Adjustments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adjustmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adjustments
     * const adjustments = await prisma.adjustment.findMany()
     *
     * // Get first 10 Adjustments
     * const adjustments = await prisma.adjustment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const adjustmentWithIdOnly = await prisma.adjustment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends adjustmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adjustmentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adjustmentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Adjustment.
     * @param {adjustmentCreateArgs} args - Arguments to create a Adjustment.
     * @example
     * // Create one Adjustment
     * const Adjustment = await prisma.adjustment.create({
     *   data: {
     *     // ... data to create a Adjustment
     *   }
     * })
     *
     **/
    create<T extends adjustmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, adjustmentCreateArgs<ExtArgs>>,
    ): Prisma__adjustmentClient<$Result.GetResult<Prisma.$adjustmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Adjustments.
     *     @param {adjustmentCreateManyArgs} args - Arguments to create many Adjustments.
     *     @example
     *     // Create many Adjustments
     *     const adjustment = await prisma.adjustment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends adjustmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adjustmentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Adjustment.
     * @param {adjustmentDeleteArgs} args - Arguments to delete one Adjustment.
     * @example
     * // Delete one Adjustment
     * const Adjustment = await prisma.adjustment.delete({
     *   where: {
     *     // ... filter to delete one Adjustment
     *   }
     * })
     *
     **/
    delete<T extends adjustmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, adjustmentDeleteArgs<ExtArgs>>,
    ): Prisma__adjustmentClient<$Result.GetResult<Prisma.$adjustmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Adjustment.
     * @param {adjustmentUpdateArgs} args - Arguments to update one Adjustment.
     * @example
     * // Update one Adjustment
     * const adjustment = await prisma.adjustment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends adjustmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, adjustmentUpdateArgs<ExtArgs>>,
    ): Prisma__adjustmentClient<$Result.GetResult<Prisma.$adjustmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Adjustments.
     * @param {adjustmentDeleteManyArgs} args - Arguments to filter Adjustments to delete.
     * @example
     * // Delete a few Adjustments
     * const { count } = await prisma.adjustment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends adjustmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, adjustmentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Adjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adjustmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adjustments
     * const adjustment = await prisma.adjustment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends adjustmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, adjustmentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Adjustment.
     * @param {adjustmentUpsertArgs} args - Arguments to update or create a Adjustment.
     * @example
     * // Update or create a Adjustment
     * const adjustment = await prisma.adjustment.upsert({
     *   create: {
     *     // ... data to create a Adjustment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adjustment we want to update
     *   }
     * })
     **/
    upsert<T extends adjustmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, adjustmentUpsertArgs<ExtArgs>>,
    ): Prisma__adjustmentClient<$Result.GetResult<Prisma.$adjustmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Adjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adjustmentCountArgs} args - Arguments to filter Adjustments to count.
     * @example
     * // Count the number of Adjustments
     * const count = await prisma.adjustment.count({
     *   where: {
     *     // ... the filter for the Adjustments we want to count
     *   }
     * })
     **/
    count<T extends adjustmentCountArgs>(
      args?: Subset<T, adjustmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdjustmentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Adjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdjustmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdjustmentAggregateArgs>(
      args: Subset<T, AdjustmentAggregateArgs>,
    ): Prisma.PrismaPromise<GetAdjustmentAggregateType<T>>;

    /**
     * Group by Adjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {adjustmentGroupByArgs} args - Group by arguments.
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
      T extends adjustmentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: adjustmentGroupByArgs['orderBy'] }
        : { orderBy?: adjustmentGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, adjustmentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAdjustmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the adjustment model
     */
    readonly fields: adjustmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for adjustment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__adjustmentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    estimate<T extends estimateDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, estimateDefaultArgs<ExtArgs>>,
    ): Prisma__estimateClient<
      $Result.GetResult<Prisma.$estimatePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the adjustment model
   */
  interface adjustmentFieldRefs {
    readonly id: FieldRef<'adjustment', 'String'>;
    readonly estimate_id: FieldRef<'adjustment', 'String'>;
    readonly user_id: FieldRef<'adjustment', 'String'>;
    readonly description: FieldRef<'adjustment', 'String'>;
    readonly amount: FieldRef<'adjustment', 'Int'>;
    readonly created_at: FieldRef<'adjustment', 'DateTime'>;
    readonly updated_at: FieldRef<'adjustment', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * adjustment findUnique
   */
  export type adjustmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adjustment
     */
    select?: adjustmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adjustmentInclude<ExtArgs> | null;
    /**
     * Filter, which adjustment to fetch.
     */
    where: adjustmentWhereUniqueInput;
  };

  /**
   * adjustment findUniqueOrThrow
   */
  export type adjustmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adjustment
     */
    select?: adjustmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adjustmentInclude<ExtArgs> | null;
    /**
     * Filter, which adjustment to fetch.
     */
    where: adjustmentWhereUniqueInput;
  };

  /**
   * adjustment findFirst
   */
  export type adjustmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adjustment
     */
    select?: adjustmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adjustmentInclude<ExtArgs> | null;
    /**
     * Filter, which adjustment to fetch.
     */
    where?: adjustmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of adjustments to fetch.
     */
    orderBy?: adjustmentOrderByWithRelationInput | adjustmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for adjustments.
     */
    cursor?: adjustmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` adjustments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` adjustments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of adjustments.
     */
    distinct?: AdjustmentScalarFieldEnum | AdjustmentScalarFieldEnum[];
  };

  /**
   * adjustment findFirstOrThrow
   */
  export type adjustmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adjustment
     */
    select?: adjustmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adjustmentInclude<ExtArgs> | null;
    /**
     * Filter, which adjustment to fetch.
     */
    where?: adjustmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of adjustments to fetch.
     */
    orderBy?: adjustmentOrderByWithRelationInput | adjustmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for adjustments.
     */
    cursor?: adjustmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` adjustments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` adjustments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of adjustments.
     */
    distinct?: AdjustmentScalarFieldEnum | AdjustmentScalarFieldEnum[];
  };

  /**
   * adjustment findMany
   */
  export type adjustmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adjustment
     */
    select?: adjustmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adjustmentInclude<ExtArgs> | null;
    /**
     * Filter, which adjustments to fetch.
     */
    where?: adjustmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of adjustments to fetch.
     */
    orderBy?: adjustmentOrderByWithRelationInput | adjustmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing adjustments.
     */
    cursor?: adjustmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` adjustments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` adjustments.
     */
    skip?: number;
    distinct?: AdjustmentScalarFieldEnum | AdjustmentScalarFieldEnum[];
  };

  /**
   * adjustment create
   */
  export type adjustmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adjustment
     */
    select?: adjustmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adjustmentInclude<ExtArgs> | null;
    /**
     * The data needed to create a adjustment.
     */
    data: XOR<adjustmentCreateInput, adjustmentUncheckedCreateInput>;
  };

  /**
   * adjustment createMany
   */
  export type adjustmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many adjustments.
     */
    data: adjustmentCreateManyInput | adjustmentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * adjustment update
   */
  export type adjustmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adjustment
     */
    select?: adjustmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adjustmentInclude<ExtArgs> | null;
    /**
     * The data needed to update a adjustment.
     */
    data: XOR<adjustmentUpdateInput, adjustmentUncheckedUpdateInput>;
    /**
     * Choose, which adjustment to update.
     */
    where: adjustmentWhereUniqueInput;
  };

  /**
   * adjustment updateMany
   */
  export type adjustmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update adjustments.
     */
    data: XOR<adjustmentUpdateManyMutationInput, adjustmentUncheckedUpdateManyInput>;
    /**
     * Filter which adjustments to update
     */
    where?: adjustmentWhereInput;
  };

  /**
   * adjustment upsert
   */
  export type adjustmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adjustment
     */
    select?: adjustmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adjustmentInclude<ExtArgs> | null;
    /**
     * The filter to search for the adjustment to update in case it exists.
     */
    where: adjustmentWhereUniqueInput;
    /**
     * In case the adjustment found by the `where` argument doesn't exist, create a new adjustment with this data.
     */
    create: XOR<adjustmentCreateInput, adjustmentUncheckedCreateInput>;
    /**
     * In case the adjustment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<adjustmentUpdateInput, adjustmentUncheckedUpdateInput>;
  };

  /**
   * adjustment delete
   */
  export type adjustmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adjustment
     */
    select?: adjustmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adjustmentInclude<ExtArgs> | null;
    /**
     * Filter which adjustment to delete.
     */
    where: adjustmentWhereUniqueInput;
  };

  /**
   * adjustment deleteMany
   */
  export type adjustmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which adjustments to delete
     */
    where?: adjustmentWhereInput;
  };

  /**
   * adjustment without action
   */
  export type adjustmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adjustment
     */
    select?: adjustmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adjustmentInclude<ExtArgs> | null;
  };

  /**
   * Model business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null;
    _min: BusinessMinAggregateOutputType | null;
    _max: BusinessMaxAggregateOutputType | null;
  };

  export type BusinessMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    phone: string | null;
    website: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BusinessMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    phone: string | null;
    website: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BusinessCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    phone: number;
    website: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type BusinessMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone?: true;
    website?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BusinessMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone?: true;
    website?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BusinessCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    phone?: true;
    website?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which business to aggregate.
     */
    where?: businessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: businessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` businesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned businesses
     **/
    _count?: true | BusinessCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BusinessMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BusinessMaxAggregateInputType;
  };

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
    [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>;
  };

  export type businessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: businessWhereInput;
    orderBy?: businessOrderByWithAggregationInput | businessOrderByWithAggregationInput[];
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum;
    having?: businessScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BusinessCountAggregateInputType | true;
    _min?: BusinessMinAggregateInputType;
    _max?: BusinessMaxAggregateInputType;
  };

  export type BusinessGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    phone: string | null;
    website: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: BusinessCountAggregateOutputType | null;
    _min: BusinessMinAggregateOutputType | null;
    _max: BusinessMaxAggregateOutputType | null;
  };

  type GetBusinessGroupByPayload<T extends businessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BusinessGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
          : GetScalarType<T[P], BusinessGroupByOutputType[P]>;
      }
    >
  >;

  export type businessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        address?: boolean;
        phone?: boolean;
        website?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        team?: boolean | business$teamArgs<ExtArgs>;
        user?: boolean | business$userArgs<ExtArgs>;
        _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['business']
    >;

  export type businessSelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    phone?: boolean;
    website?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type businessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | business$teamArgs<ExtArgs>;
    user?: boolean | business$userArgs<ExtArgs>;
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $businessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'business';
    objects: {
      team: Prisma.$teamPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        phone: string | null;
        website: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['business']
    >;
    composites: {};
  };

  type businessGetPayload<S extends boolean | null | undefined | businessDefaultArgs> = $Result.GetResult<
    Prisma.$businessPayload,
    S
  >;

  type businessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    businessFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: BusinessCountAggregateInputType | true;
  };

  export interface businessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['business']; meta: { name: 'business' } };
    /**
     * Find zero or one Business that matches the filter.
     * @param {businessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends businessFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, businessFindUniqueArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Business that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {businessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends businessFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, businessFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends businessFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, businessFindFirstArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends businessFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, businessFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     *
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends businessFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, businessFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Business.
     * @param {businessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     *
     **/
    create<T extends businessCreateArgs<ExtArgs>>(
      args: SelectSubset<T, businessCreateArgs<ExtArgs>>,
    ): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Businesses.
     *     @param {businessCreateManyArgs} args - Arguments to create many Businesses.
     *     @example
     *     // Create many Businesses
     *     const business = await prisma.business.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends businessCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, businessCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Business.
     * @param {businessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     *
     **/
    delete<T extends businessDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, businessDeleteArgs<ExtArgs>>,
    ): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Business.
     * @param {businessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends businessUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, businessUpdateArgs<ExtArgs>>,
    ): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Businesses.
     * @param {businessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends businessDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, businessDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends businessUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, businessUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Business.
     * @param {businessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     **/
    upsert<T extends businessUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, businessUpsertArgs<ExtArgs>>,
    ): Prisma__businessClient<$Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
     **/
    count<T extends businessCountArgs>(
      args?: Subset<T, businessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessAggregateArgs>(
      args: Subset<T, BusinessAggregateArgs>,
    ): Prisma.PrismaPromise<GetBusinessAggregateType<T>>;

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {businessGroupByArgs} args - Group by arguments.
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
      T extends businessGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: businessGroupByArgs['orderBy'] }
        : { orderBy?: businessGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, businessGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the business model
     */
    readonly fields: businessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__businessClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team<T extends business$teamArgs<ExtArgs> = {}>(
      args?: Subset<T, business$teamArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends business$userArgs<ExtArgs> = {}>(
      args?: Subset<T, business$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the business model
   */
  interface businessFieldRefs {
    readonly id: FieldRef<'business', 'String'>;
    readonly description: FieldRef<'business', 'String'>;
    readonly address: FieldRef<'business', 'String'>;
    readonly phone: FieldRef<'business', 'String'>;
    readonly website: FieldRef<'business', 'String'>;
    readonly name: FieldRef<'business', 'String'>;
    readonly created_at: FieldRef<'business', 'DateTime'>;
    readonly updated_at: FieldRef<'business', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * business findUnique
   */
  export type businessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter, which business to fetch.
     */
    where: businessWhereUniqueInput;
  };

  /**
   * business findUniqueOrThrow
   */
  export type businessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter, which business to fetch.
     */
    where: businessWhereUniqueInput;
  };

  /**
   * business findFirst
   */
  export type businessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter, which business to fetch.
     */
    where?: businessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for businesses.
     */
    cursor?: businessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` businesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[];
  };

  /**
   * business findFirstOrThrow
   */
  export type businessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter, which business to fetch.
     */
    where?: businessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for businesses.
     */
    cursor?: businessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` businesses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[];
  };

  /**
   * business findMany
   */
  export type businessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter, which businesses to fetch.
     */
    where?: businessWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of businesses to fetch.
     */
    orderBy?: businessOrderByWithRelationInput | businessOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing businesses.
     */
    cursor?: businessWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` businesses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` businesses.
     */
    skip?: number;
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[];
  };

  /**
   * business create
   */
  export type businessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * The data needed to create a business.
     */
    data: XOR<businessCreateInput, businessUncheckedCreateInput>;
  };

  /**
   * business createMany
   */
  export type businessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many businesses.
     */
    data: businessCreateManyInput | businessCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * business update
   */
  export type businessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * The data needed to update a business.
     */
    data: XOR<businessUpdateInput, businessUncheckedUpdateInput>;
    /**
     * Choose, which business to update.
     */
    where: businessWhereUniqueInput;
  };

  /**
   * business updateMany
   */
  export type businessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update businesses.
     */
    data: XOR<businessUpdateManyMutationInput, businessUncheckedUpdateManyInput>;
    /**
     * Filter which businesses to update
     */
    where?: businessWhereInput;
  };

  /**
   * business upsert
   */
  export type businessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * The filter to search for the business to update in case it exists.
     */
    where: businessWhereUniqueInput;
    /**
     * In case the business found by the `where` argument doesn't exist, create a new business with this data.
     */
    create: XOR<businessCreateInput, businessUncheckedCreateInput>;
    /**
     * In case the business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<businessUpdateInput, businessUncheckedUpdateInput>;
  };

  /**
   * business delete
   */
  export type businessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    /**
     * Filter which business to delete.
     */
    where: businessWhereUniqueInput;
  };

  /**
   * business deleteMany
   */
  export type businessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which businesses to delete
     */
    where?: businessWhereInput;
  };

  /**
   * business.team
   */
  export type business$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    where?: teamWhereInput;
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    cursor?: teamWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * business.user
   */
  export type business$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * business without action
   */
  export type businessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
  };

  /**
   * Model estimate
   */

  export type AggregateEstimate = {
    _count: EstimateCountAggregateOutputType | null;
    _avg: EstimateAvgAggregateOutputType | null;
    _sum: EstimateSumAggregateOutputType | null;
    _min: EstimateMinAggregateOutputType | null;
    _max: EstimateMaxAggregateOutputType | null;
  };

  export type EstimateAvgAggregateOutputType = {
    amount: number | null;
  };

  export type EstimateSumAggregateOutputType = {
    amount: number | null;
  };

  export type EstimateMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    title: string | null;
    description: string | null;
    status: string | null;
    amount: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EstimateMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    title: string | null;
    description: string | null;
    status: string | null;
    amount: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EstimateCountAggregateOutputType = {
    id: number;
    user_id: number;
    title: number;
    description: number;
    status: number;
    amount: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type EstimateAvgAggregateInputType = {
    amount?: true;
  };

  export type EstimateSumAggregateInputType = {
    amount?: true;
  };

  export type EstimateMinAggregateInputType = {
    id?: true;
    user_id?: true;
    title?: true;
    description?: true;
    status?: true;
    amount?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EstimateMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    title?: true;
    description?: true;
    status?: true;
    amount?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EstimateCountAggregateInputType = {
    id?: true;
    user_id?: true;
    title?: true;
    description?: true;
    status?: true;
    amount?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type EstimateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estimate to aggregate.
     */
    where?: estimateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of estimates to fetch.
     */
    orderBy?: estimateOrderByWithRelationInput | estimateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: estimateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` estimates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` estimates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned estimates
     **/
    _count?: true | EstimateCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: EstimateAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: EstimateSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EstimateMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EstimateMaxAggregateInputType;
  };

  export type GetEstimateAggregateType<T extends EstimateAggregateArgs> = {
    [P in keyof T & keyof AggregateEstimate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstimate[P]>
      : GetScalarType<T[P], AggregateEstimate[P]>;
  };

  export type estimateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estimateWhereInput;
    orderBy?: estimateOrderByWithAggregationInput | estimateOrderByWithAggregationInput[];
    by: EstimateScalarFieldEnum[] | EstimateScalarFieldEnum;
    having?: estimateScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EstimateCountAggregateInputType | true;
    _avg?: EstimateAvgAggregateInputType;
    _sum?: EstimateSumAggregateInputType;
    _min?: EstimateMinAggregateInputType;
    _max?: EstimateMaxAggregateInputType;
  };

  export type EstimateGroupByOutputType = {
    id: string;
    user_id: string;
    title: string;
    description: string | null;
    status: string | null;
    amount: number | null;
    created_at: Date;
    updated_at: Date;
    _count: EstimateCountAggregateOutputType | null;
    _avg: EstimateAvgAggregateOutputType | null;
    _sum: EstimateSumAggregateOutputType | null;
    _min: EstimateMinAggregateOutputType | null;
    _max: EstimateMaxAggregateOutputType | null;
  };

  type GetEstimateGroupByPayload<T extends estimateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstimateGroupByOutputType, T['by']> & {
        [P in keyof T & keyof EstimateGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], EstimateGroupByOutputType[P]>
          : GetScalarType<T[P], EstimateGroupByOutputType[P]>;
      }
    >
  >;

  export type estimateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        title?: boolean;
        description?: boolean;
        status?: boolean;
        amount?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        adjustment?: boolean | estimate$adjustmentArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        _count?: boolean | EstimateCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['estimate']
    >;

  export type estimateSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    title?: boolean;
    description?: boolean;
    status?: boolean;
    amount?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type estimateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adjustment?: boolean | estimate$adjustmentArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | EstimateCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $estimatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'estimate';
    objects: {
      adjustment: Prisma.$adjustmentPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        title: string;
        description: string | null;
        status: string | null;
        amount: number | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['estimate']
    >;
    composites: {};
  };

  type estimateGetPayload<S extends boolean | null | undefined | estimateDefaultArgs> = $Result.GetResult<
    Prisma.$estimatePayload,
    S
  >;

  type estimateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    estimateFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: EstimateCountAggregateInputType | true;
  };

  export interface estimateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['estimate']; meta: { name: 'estimate' } };
    /**
     * Find zero or one Estimate that matches the filter.
     * @param {estimateFindUniqueArgs} args - Arguments to find a Estimate
     * @example
     * // Get one Estimate
     * const estimate = await prisma.estimate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends estimateFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, estimateFindUniqueArgs<ExtArgs>>,
    ): Prisma__estimateClient<
      $Result.GetResult<Prisma.$estimatePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Estimate that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {estimateFindUniqueOrThrowArgs} args - Arguments to find a Estimate
     * @example
     * // Get one Estimate
     * const estimate = await prisma.estimate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends estimateFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, estimateFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__estimateClient<
      $Result.GetResult<Prisma.$estimatePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Estimate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estimateFindFirstArgs} args - Arguments to find a Estimate
     * @example
     * // Get one Estimate
     * const estimate = await prisma.estimate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends estimateFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, estimateFindFirstArgs<ExtArgs>>,
    ): Prisma__estimateClient<
      $Result.GetResult<Prisma.$estimatePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Estimate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estimateFindFirstOrThrowArgs} args - Arguments to find a Estimate
     * @example
     * // Get one Estimate
     * const estimate = await prisma.estimate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends estimateFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, estimateFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__estimateClient<
      $Result.GetResult<Prisma.$estimatePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Estimates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estimateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estimates
     * const estimates = await prisma.estimate.findMany()
     *
     * // Get first 10 Estimates
     * const estimates = await prisma.estimate.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const estimateWithIdOnly = await prisma.estimate.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends estimateFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, estimateFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estimatePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Estimate.
     * @param {estimateCreateArgs} args - Arguments to create a Estimate.
     * @example
     * // Create one Estimate
     * const Estimate = await prisma.estimate.create({
     *   data: {
     *     // ... data to create a Estimate
     *   }
     * })
     *
     **/
    create<T extends estimateCreateArgs<ExtArgs>>(
      args: SelectSubset<T, estimateCreateArgs<ExtArgs>>,
    ): Prisma__estimateClient<$Result.GetResult<Prisma.$estimatePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Estimates.
     *     @param {estimateCreateManyArgs} args - Arguments to create many Estimates.
     *     @example
     *     // Create many Estimates
     *     const estimate = await prisma.estimate.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends estimateCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, estimateCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Estimate.
     * @param {estimateDeleteArgs} args - Arguments to delete one Estimate.
     * @example
     * // Delete one Estimate
     * const Estimate = await prisma.estimate.delete({
     *   where: {
     *     // ... filter to delete one Estimate
     *   }
     * })
     *
     **/
    delete<T extends estimateDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, estimateDeleteArgs<ExtArgs>>,
    ): Prisma__estimateClient<$Result.GetResult<Prisma.$estimatePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Estimate.
     * @param {estimateUpdateArgs} args - Arguments to update one Estimate.
     * @example
     * // Update one Estimate
     * const estimate = await prisma.estimate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends estimateUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, estimateUpdateArgs<ExtArgs>>,
    ): Prisma__estimateClient<$Result.GetResult<Prisma.$estimatePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Estimates.
     * @param {estimateDeleteManyArgs} args - Arguments to filter Estimates to delete.
     * @example
     * // Delete a few Estimates
     * const { count } = await prisma.estimate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends estimateDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, estimateDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Estimates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estimateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estimates
     * const estimate = await prisma.estimate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends estimateUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, estimateUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Estimate.
     * @param {estimateUpsertArgs} args - Arguments to update or create a Estimate.
     * @example
     * // Update or create a Estimate
     * const estimate = await prisma.estimate.upsert({
     *   create: {
     *     // ... data to create a Estimate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estimate we want to update
     *   }
     * })
     **/
    upsert<T extends estimateUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, estimateUpsertArgs<ExtArgs>>,
    ): Prisma__estimateClient<$Result.GetResult<Prisma.$estimatePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Estimates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estimateCountArgs} args - Arguments to filter Estimates to count.
     * @example
     * // Count the number of Estimates
     * const count = await prisma.estimate.count({
     *   where: {
     *     // ... the filter for the Estimates we want to count
     *   }
     * })
     **/
    count<T extends estimateCountArgs>(
      args?: Subset<T, estimateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstimateCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Estimate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstimateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstimateAggregateArgs>(
      args: Subset<T, EstimateAggregateArgs>,
    ): Prisma.PrismaPromise<GetEstimateAggregateType<T>>;

    /**
     * Group by Estimate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estimateGroupByArgs} args - Group by arguments.
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
      T extends estimateGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: estimateGroupByArgs['orderBy'] }
        : { orderBy?: estimateGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, estimateGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetEstimateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the estimate model
     */
    readonly fields: estimateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for estimate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__estimateClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    adjustment<T extends estimate$adjustmentArgs<ExtArgs> = {}>(
      args?: Subset<T, estimate$adjustmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adjustmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the estimate model
   */
  interface estimateFieldRefs {
    readonly id: FieldRef<'estimate', 'String'>;
    readonly user_id: FieldRef<'estimate', 'String'>;
    readonly title: FieldRef<'estimate', 'String'>;
    readonly description: FieldRef<'estimate', 'String'>;
    readonly status: FieldRef<'estimate', 'String'>;
    readonly amount: FieldRef<'estimate', 'Int'>;
    readonly created_at: FieldRef<'estimate', 'DateTime'>;
    readonly updated_at: FieldRef<'estimate', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * estimate findUnique
   */
  export type estimateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estimate
     */
    select?: estimateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: estimateInclude<ExtArgs> | null;
    /**
     * Filter, which estimate to fetch.
     */
    where: estimateWhereUniqueInput;
  };

  /**
   * estimate findUniqueOrThrow
   */
  export type estimateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estimate
     */
    select?: estimateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: estimateInclude<ExtArgs> | null;
    /**
     * Filter, which estimate to fetch.
     */
    where: estimateWhereUniqueInput;
  };

  /**
   * estimate findFirst
   */
  export type estimateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estimate
     */
    select?: estimateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: estimateInclude<ExtArgs> | null;
    /**
     * Filter, which estimate to fetch.
     */
    where?: estimateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of estimates to fetch.
     */
    orderBy?: estimateOrderByWithRelationInput | estimateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for estimates.
     */
    cursor?: estimateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` estimates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` estimates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of estimates.
     */
    distinct?: EstimateScalarFieldEnum | EstimateScalarFieldEnum[];
  };

  /**
   * estimate findFirstOrThrow
   */
  export type estimateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estimate
     */
    select?: estimateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: estimateInclude<ExtArgs> | null;
    /**
     * Filter, which estimate to fetch.
     */
    where?: estimateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of estimates to fetch.
     */
    orderBy?: estimateOrderByWithRelationInput | estimateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for estimates.
     */
    cursor?: estimateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` estimates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` estimates.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of estimates.
     */
    distinct?: EstimateScalarFieldEnum | EstimateScalarFieldEnum[];
  };

  /**
   * estimate findMany
   */
  export type estimateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estimate
     */
    select?: estimateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: estimateInclude<ExtArgs> | null;
    /**
     * Filter, which estimates to fetch.
     */
    where?: estimateWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of estimates to fetch.
     */
    orderBy?: estimateOrderByWithRelationInput | estimateOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing estimates.
     */
    cursor?: estimateWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` estimates from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` estimates.
     */
    skip?: number;
    distinct?: EstimateScalarFieldEnum | EstimateScalarFieldEnum[];
  };

  /**
   * estimate create
   */
  export type estimateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estimate
     */
    select?: estimateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: estimateInclude<ExtArgs> | null;
    /**
     * The data needed to create a estimate.
     */
    data: XOR<estimateCreateInput, estimateUncheckedCreateInput>;
  };

  /**
   * estimate createMany
   */
  export type estimateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many estimates.
     */
    data: estimateCreateManyInput | estimateCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * estimate update
   */
  export type estimateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estimate
     */
    select?: estimateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: estimateInclude<ExtArgs> | null;
    /**
     * The data needed to update a estimate.
     */
    data: XOR<estimateUpdateInput, estimateUncheckedUpdateInput>;
    /**
     * Choose, which estimate to update.
     */
    where: estimateWhereUniqueInput;
  };

  /**
   * estimate updateMany
   */
  export type estimateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update estimates.
     */
    data: XOR<estimateUpdateManyMutationInput, estimateUncheckedUpdateManyInput>;
    /**
     * Filter which estimates to update
     */
    where?: estimateWhereInput;
  };

  /**
   * estimate upsert
   */
  export type estimateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estimate
     */
    select?: estimateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: estimateInclude<ExtArgs> | null;
    /**
     * The filter to search for the estimate to update in case it exists.
     */
    where: estimateWhereUniqueInput;
    /**
     * In case the estimate found by the `where` argument doesn't exist, create a new estimate with this data.
     */
    create: XOR<estimateCreateInput, estimateUncheckedCreateInput>;
    /**
     * In case the estimate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<estimateUpdateInput, estimateUncheckedUpdateInput>;
  };

  /**
   * estimate delete
   */
  export type estimateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estimate
     */
    select?: estimateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: estimateInclude<ExtArgs> | null;
    /**
     * Filter which estimate to delete.
     */
    where: estimateWhereUniqueInput;
  };

  /**
   * estimate deleteMany
   */
  export type estimateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estimates to delete
     */
    where?: estimateWhereInput;
  };

  /**
   * estimate.adjustment
   */
  export type estimate$adjustmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adjustment
     */
    select?: adjustmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adjustmentInclude<ExtArgs> | null;
    where?: adjustmentWhereInput;
    orderBy?: adjustmentOrderByWithRelationInput | adjustmentOrderByWithRelationInput[];
    cursor?: adjustmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AdjustmentScalarFieldEnum | AdjustmentScalarFieldEnum[];
  };

  /**
   * estimate without action
   */
  export type estimateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estimate
     */
    select?: estimateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: estimateInclude<ExtArgs> | null;
  };

  /**
   * Model team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
  };

  export type TeamMinAggregateOutputType = {
    id: string | null;
    business_id: string | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TeamMaxAggregateOutputType = {
    id: string | null;
    business_id: string | null;
    name: string | null;
    description: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TeamCountAggregateOutputType = {
    id: number;
    business_id: number;
    name: number;
    description: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TeamMinAggregateInputType = {
    id?: true;
    business_id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TeamMaxAggregateInputType = {
    id?: true;
    business_id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TeamCountAggregateInputType = {
    id?: true;
    business_id?: true;
    name?: true;
    description?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team to aggregate.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned teams
     **/
    _count?: true | TeamCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TeamMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TeamMaxAggregateInputType;
  };

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
    [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>;
  };

  export type teamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamWhereInput;
    orderBy?: teamOrderByWithAggregationInput | teamOrderByWithAggregationInput[];
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum;
    having?: teamScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeamCountAggregateInputType | true;
    _min?: TeamMinAggregateInputType;
    _max?: TeamMaxAggregateInputType;
  };

  export type TeamGroupByOutputType = {
    id: string;
    business_id: string;
    name: string;
    description: string | null;
    created_at: Date;
    updated_at: Date;
    _count: TeamCountAggregateOutputType | null;
    _min: TeamMinAggregateOutputType | null;
    _max: TeamMaxAggregateOutputType | null;
  };

  type GetTeamGroupByPayload<T extends teamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TeamGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
          : GetScalarType<T[P], TeamGroupByOutputType[P]>;
      }
    >
  >;

  export type teamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      business_id?: boolean;
      name?: boolean;
      description?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      business?: boolean | businessDefaultArgs<ExtArgs>;
      team_member?: boolean | team$team_memberArgs<ExtArgs>;
      _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['team']
  >;

  export type teamSelectScalar = {
    id?: boolean;
    business_id?: boolean;
    name?: boolean;
    description?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type teamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | businessDefaultArgs<ExtArgs>;
    team_member?: boolean | team$team_memberArgs<ExtArgs>;
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $teamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'team';
    objects: {
      business: Prisma.$businessPayload<ExtArgs>;
      team_member: Prisma.$team_memberPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        business_id: string;
        name: string;
        description: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['team']
    >;
    composites: {};
  };

  type teamGetPayload<S extends boolean | null | undefined | teamDefaultArgs> = $Result.GetResult<
    Prisma.$teamPayload,
    S
  >;

  type teamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    teamFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: TeamCountAggregateInputType | true;
  };

  export interface teamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team']; meta: { name: 'team' } };
    /**
     * Find zero or one Team that matches the filter.
     * @param {teamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends teamFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, teamFindUniqueArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Team that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {teamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends teamFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends teamFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindFirstArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends teamFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     *
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends teamFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Team.
     * @param {teamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     *
     **/
    create<T extends teamCreateArgs<ExtArgs>>(
      args: SelectSubset<T, teamCreateArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Teams.
     *     @param {teamCreateManyArgs} args - Arguments to create many Teams.
     *     @example
     *     // Create many Teams
     *     const team = await prisma.team.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends teamCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Team.
     * @param {teamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     *
     **/
    delete<T extends teamDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, teamDeleteArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Team.
     * @param {teamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends teamUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpdateArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Teams.
     * @param {teamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends teamDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teamDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends teamUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Team.
     * @param {teamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     **/
    upsert<T extends teamUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, teamUpsertArgs<ExtArgs>>,
    ): Prisma__teamClient<$Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
     **/
    count<T extends teamCountArgs>(
      args?: Subset<T, teamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(
      args: Subset<T, TeamAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeamAggregateType<T>>;

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamGroupByArgs} args - Group by arguments.
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
      T extends teamGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teamGroupByArgs['orderBy'] }
        : { orderBy?: teamGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, teamGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the team model
     */
    readonly fields: teamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teamClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    business<T extends businessDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, businessDefaultArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    team_member<T extends team$team_memberArgs<ExtArgs> = {}>(
      args?: Subset<T, team$team_memberArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the team model
   */
  interface teamFieldRefs {
    readonly id: FieldRef<'team', 'String'>;
    readonly business_id: FieldRef<'team', 'String'>;
    readonly name: FieldRef<'team', 'String'>;
    readonly description: FieldRef<'team', 'String'>;
    readonly created_at: FieldRef<'team', 'DateTime'>;
    readonly updated_at: FieldRef<'team', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * team findUnique
   */
  export type teamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team findUniqueOrThrow
   */
  export type teamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team findFirst
   */
  export type teamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team findFirstOrThrow
   */
  export type teamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which team to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team findMany
   */
  export type teamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter, which teams to fetch.
     */
    where?: teamWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teams to fetch.
     */
    orderBy?: teamOrderByWithRelationInput | teamOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing teams.
     */
    cursor?: teamWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teams from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teams.
     */
    skip?: number;
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[];
  };

  /**
   * team create
   */
  export type teamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The data needed to create a team.
     */
    data: XOR<teamCreateInput, teamUncheckedCreateInput>;
  };

  /**
   * team createMany
   */
  export type teamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teams.
     */
    data: teamCreateManyInput | teamCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * team update
   */
  export type teamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The data needed to update a team.
     */
    data: XOR<teamUpdateInput, teamUncheckedUpdateInput>;
    /**
     * Choose, which team to update.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team updateMany
   */
  export type teamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teams.
     */
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyInput>;
    /**
     * Filter which teams to update
     */
    where?: teamWhereInput;
  };

  /**
   * team upsert
   */
  export type teamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * The filter to search for the team to update in case it exists.
     */
    where: teamWhereUniqueInput;
    /**
     * In case the team found by the `where` argument doesn't exist, create a new team with this data.
     */
    create: XOR<teamCreateInput, teamUncheckedCreateInput>;
    /**
     * In case the team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teamUpdateInput, teamUncheckedUpdateInput>;
  };

  /**
   * team delete
   */
  export type teamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
    /**
     * Filter which team to delete.
     */
    where: teamWhereUniqueInput;
  };

  /**
   * team deleteMany
   */
  export type teamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to delete
     */
    where?: teamWhereInput;
  };

  /**
   * team.team_member
   */
  export type team$team_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    where?: team_memberWhereInput;
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    cursor?: team_memberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team without action
   */
  export type teamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team
     */
    select?: teamSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teamInclude<ExtArgs> | null;
  };

  /**
   * Model team_member
   */

  export type AggregateTeam_member = {
    _count: Team_memberCountAggregateOutputType | null;
    _min: Team_memberMinAggregateOutputType | null;
    _max: Team_memberMaxAggregateOutputType | null;
  };

  export type Team_memberMinAggregateOutputType = {
    id: string | null;
    team_id: string | null;
    user_id: string | null;
    role: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Team_memberMaxAggregateOutputType = {
    id: string | null;
    team_id: string | null;
    user_id: string | null;
    role: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Team_memberCountAggregateOutputType = {
    id: number;
    team_id: number;
    user_id: number;
    role: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Team_memberMinAggregateInputType = {
    id?: true;
    team_id?: true;
    user_id?: true;
    role?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Team_memberMaxAggregateInputType = {
    id?: true;
    team_id?: true;
    user_id?: true;
    role?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Team_memberCountAggregateInputType = {
    id?: true;
    team_id?: true;
    user_id?: true;
    role?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Team_memberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_member to aggregate.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned team_members
     **/
    _count?: true | Team_memberCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Team_memberMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Team_memberMaxAggregateInputType;
  };

  export type GetTeam_memberAggregateType<T extends Team_memberAggregateArgs> = {
    [P in keyof T & keyof AggregateTeam_member]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam_member[P]>
      : GetScalarType<T[P], AggregateTeam_member[P]>;
  };

  export type team_memberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_memberWhereInput;
    orderBy?: team_memberOrderByWithAggregationInput | team_memberOrderByWithAggregationInput[];
    by: Team_memberScalarFieldEnum[] | Team_memberScalarFieldEnum;
    having?: team_memberScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Team_memberCountAggregateInputType | true;
    _min?: Team_memberMinAggregateInputType;
    _max?: Team_memberMaxAggregateInputType;
  };

  export type Team_memberGroupByOutputType = {
    id: string;
    team_id: string;
    user_id: string;
    role: string | null;
    created_at: Date;
    updated_at: Date;
    _count: Team_memberCountAggregateOutputType | null;
    _min: Team_memberMinAggregateOutputType | null;
    _max: Team_memberMaxAggregateOutputType | null;
  };

  type GetTeam_memberGroupByPayload<T extends team_memberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Team_memberGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Team_memberGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Team_memberGroupByOutputType[P]>
          : GetScalarType<T[P], Team_memberGroupByOutputType[P]>;
      }
    >
  >;

  export type team_memberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        team_id?: boolean;
        user_id?: boolean;
        role?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        team?: boolean | teamDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['team_member']
    >;

  export type team_memberSelectScalar = {
    id?: boolean;
    team_id?: boolean;
    user_id?: boolean;
    role?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type team_memberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | teamDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $team_memberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'team_member';
    objects: {
      team: Prisma.$teamPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        team_id: string;
        user_id: string;
        role: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['team_member']
    >;
    composites: {};
  };

  type team_memberGetPayload<S extends boolean | null | undefined | team_memberDefaultArgs> = $Result.GetResult<
    Prisma.$team_memberPayload,
    S
  >;

  type team_memberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    team_memberFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Team_memberCountAggregateInputType | true;
  };

  export interface team_memberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team_member']; meta: { name: 'team_member' } };
    /**
     * Find zero or one Team_member that matches the filter.
     * @param {team_memberFindUniqueArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends team_memberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberFindUniqueArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Team_member that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {team_memberFindUniqueOrThrowArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends team_memberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Team_member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindFirstArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends team_memberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindFirstArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Team_member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindFirstOrThrowArgs} args - Arguments to find a Team_member
     * @example
     * // Get one Team_member
     * const team_member = await prisma.team_member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends team_memberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__team_memberClient<
      $Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Team_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Team_members
     * const team_members = await prisma.team_member.findMany()
     *
     * // Get first 10 Team_members
     * const team_members = await prisma.team_member.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const team_memberWithIdOnly = await prisma.team_member.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends team_memberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Team_member.
     * @param {team_memberCreateArgs} args - Arguments to create a Team_member.
     * @example
     * // Create one Team_member
     * const Team_member = await prisma.team_member.create({
     *   data: {
     *     // ... data to create a Team_member
     *   }
     * })
     *
     **/
    create<T extends team_memberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberCreateArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Team_members.
     *     @param {team_memberCreateManyArgs} args - Arguments to create many Team_members.
     *     @example
     *     // Create many Team_members
     *     const team_member = await prisma.team_member.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends team_memberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Team_member.
     * @param {team_memberDeleteArgs} args - Arguments to delete one Team_member.
     * @example
     * // Delete one Team_member
     * const Team_member = await prisma.team_member.delete({
     *   where: {
     *     // ... filter to delete one Team_member
     *   }
     * })
     *
     **/
    delete<T extends team_memberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberDeleteArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Team_member.
     * @param {team_memberUpdateArgs} args - Arguments to update one Team_member.
     * @example
     * // Update one Team_member
     * const team_member = await prisma.team_member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends team_memberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberUpdateArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Team_members.
     * @param {team_memberDeleteManyArgs} args - Arguments to filter Team_members to delete.
     * @example
     * // Delete a few Team_members
     * const { count } = await prisma.team_member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends team_memberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, team_memberDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Team_members
     * const team_member = await prisma.team_member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends team_memberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Team_member.
     * @param {team_memberUpsertArgs} args - Arguments to update or create a Team_member.
     * @example
     * // Update or create a Team_member
     * const team_member = await prisma.team_member.upsert({
     *   create: {
     *     // ... data to create a Team_member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team_member we want to update
     *   }
     * })
     **/
    upsert<T extends team_memberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, team_memberUpsertArgs<ExtArgs>>,
    ): Prisma__team_memberClient<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberCountArgs} args - Arguments to filter Team_members to count.
     * @example
     * // Count the number of Team_members
     * const count = await prisma.team_member.count({
     *   where: {
     *     // ... the filter for the Team_members we want to count
     *   }
     * })
     **/
    count<T extends team_memberCountArgs>(
      args?: Subset<T, team_memberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Team_memberCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Team_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Team_memberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Team_memberAggregateArgs>(
      args: Subset<T, Team_memberAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeam_memberAggregateType<T>>;

    /**
     * Group by Team_member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_memberGroupByArgs} args - Group by arguments.
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
      T extends team_memberGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: team_memberGroupByArgs['orderBy'] }
        : { orderBy?: team_memberGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, team_memberGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTeam_memberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the team_member model
     */
    readonly fields: team_memberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team_member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__team_memberClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    team<T extends teamDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, teamDefaultArgs<ExtArgs>>,
    ): Prisma__teamClient<
      $Result.GetResult<Prisma.$teamPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the team_member model
   */
  interface team_memberFieldRefs {
    readonly id: FieldRef<'team_member', 'String'>;
    readonly team_id: FieldRef<'team_member', 'String'>;
    readonly user_id: FieldRef<'team_member', 'String'>;
    readonly role: FieldRef<'team_member', 'String'>;
    readonly created_at: FieldRef<'team_member', 'DateTime'>;
    readonly updated_at: FieldRef<'team_member', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * team_member findUnique
   */
  export type team_memberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member findUniqueOrThrow
   */
  export type team_memberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member findFirst
   */
  export type team_memberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for team_members.
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of team_members.
     */
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team_member findFirstOrThrow
   */
  export type team_memberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_member to fetch.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for team_members.
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of team_members.
     */
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team_member findMany
   */
  export type team_memberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter, which team_members to fetch.
     */
    where?: team_memberWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing team_members.
     */
    cursor?: team_memberWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` team_members.
     */
    skip?: number;
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * team_member create
   */
  export type team_memberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * The data needed to create a team_member.
     */
    data: XOR<team_memberCreateInput, team_memberUncheckedCreateInput>;
  };

  /**
   * team_member createMany
   */
  export type team_memberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many team_members.
     */
    data: team_memberCreateManyInput | team_memberCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * team_member update
   */
  export type team_memberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * The data needed to update a team_member.
     */
    data: XOR<team_memberUpdateInput, team_memberUncheckedUpdateInput>;
    /**
     * Choose, which team_member to update.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member updateMany
   */
  export type team_memberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update team_members.
     */
    data: XOR<team_memberUpdateManyMutationInput, team_memberUncheckedUpdateManyInput>;
    /**
     * Filter which team_members to update
     */
    where?: team_memberWhereInput;
  };

  /**
   * team_member upsert
   */
  export type team_memberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * The filter to search for the team_member to update in case it exists.
     */
    where: team_memberWhereUniqueInput;
    /**
     * In case the team_member found by the `where` argument doesn't exist, create a new team_member with this data.
     */
    create: XOR<team_memberCreateInput, team_memberUncheckedCreateInput>;
    /**
     * In case the team_member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<team_memberUpdateInput, team_memberUncheckedUpdateInput>;
  };

  /**
   * team_member delete
   */
  export type team_memberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    /**
     * Filter which team_member to delete.
     */
    where: team_memberWhereUniqueInput;
  };

  /**
   * team_member deleteMany
   */
  export type team_memberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_members to delete
     */
    where?: team_memberWhereInput;
  };

  /**
   * team_member without action
   */
  export type team_memberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    business_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    business_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    business_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    business_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    business_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    business_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    business_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      business_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      adjustment?: boolean | user$adjustmentArgs<ExtArgs>;
      estimate?: boolean | user$estimateArgs<ExtArgs>;
      team_member?: boolean | user$team_memberArgs<ExtArgs>;
      business?: boolean | user$businessArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    business_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    adjustment?: boolean | user$adjustmentArgs<ExtArgs>;
    estimate?: boolean | user$estimateArgs<ExtArgs>;
    team_member?: boolean | user$team_memberArgs<ExtArgs>;
    business?: boolean | user$businessArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      adjustment: Prisma.$adjustmentPayload<ExtArgs>[];
      estimate: Prisma.$estimatePayload<ExtArgs>[];
      team_member: Prisma.$team_memberPayload<ExtArgs>[];
      business: Prisma.$businessPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        business_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    adjustment<T extends user$adjustmentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$adjustmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$adjustmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    estimate<T extends user$estimateArgs<ExtArgs> = {}>(
      args?: Subset<T, user$estimateArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estimatePayload<ExtArgs>, T, 'findMany'> | Null>;

    team_member<T extends user$team_memberArgs<ExtArgs> = {}>(
      args?: Subset<T, user$team_memberArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_memberPayload<ExtArgs>, T, 'findMany'> | Null>;

    business<T extends user$businessArgs<ExtArgs> = {}>(
      args?: Subset<T, user$businessArgs<ExtArgs>>,
    ): Prisma__businessClient<
      $Result.GetResult<Prisma.$businessPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly business_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.adjustment
   */
  export type user$adjustmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the adjustment
     */
    select?: adjustmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: adjustmentInclude<ExtArgs> | null;
    where?: adjustmentWhereInput;
    orderBy?: adjustmentOrderByWithRelationInput | adjustmentOrderByWithRelationInput[];
    cursor?: adjustmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AdjustmentScalarFieldEnum | AdjustmentScalarFieldEnum[];
  };

  /**
   * user.estimate
   */
  export type user$estimateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estimate
     */
    select?: estimateSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: estimateInclude<ExtArgs> | null;
    where?: estimateWhereInput;
    orderBy?: estimateOrderByWithRelationInput | estimateOrderByWithRelationInput[];
    cursor?: estimateWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EstimateScalarFieldEnum | EstimateScalarFieldEnum[];
  };

  /**
   * user.team_member
   */
  export type user$team_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_member
     */
    select?: team_memberSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: team_memberInclude<ExtArgs> | null;
    where?: team_memberWhereInput;
    orderBy?: team_memberOrderByWithRelationInput | team_memberOrderByWithRelationInput[];
    cursor?: team_memberWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Team_memberScalarFieldEnum | Team_memberScalarFieldEnum[];
  };

  /**
   * user.business
   */
  export type user$businessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business
     */
    select?: businessSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: businessInclude<ExtArgs> | null;
    where?: businessWhereInput;
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AdjustmentScalarFieldEnum: {
    id: 'id';
    estimate_id: 'estimate_id';
    user_id: 'user_id';
    description: 'description';
    amount: 'amount';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AdjustmentScalarFieldEnum = (typeof AdjustmentScalarFieldEnum)[keyof typeof AdjustmentScalarFieldEnum];

  export const BusinessScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    phone: 'phone';
    website: 'website';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum];

  export const EstimateScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    title: 'title';
    description: 'description';
    status: 'status';
    amount: 'amount';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type EstimateScalarFieldEnum = (typeof EstimateScalarFieldEnum)[keyof typeof EstimateScalarFieldEnum];

  export const TeamScalarFieldEnum: {
    id: 'id';
    business_id: 'business_id';
    name: 'name';
    description: 'description';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum];

  export const Team_memberScalarFieldEnum: {
    id: 'id';
    team_id: 'team_id';
    user_id: 'user_id';
    role: 'role';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Team_memberScalarFieldEnum = (typeof Team_memberScalarFieldEnum)[keyof typeof Team_memberScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    business_id: 'business_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type adjustmentWhereInput = {
    AND?: adjustmentWhereInput | adjustmentWhereInput[];
    OR?: adjustmentWhereInput[];
    NOT?: adjustmentWhereInput | adjustmentWhereInput[];
    id?: UuidFilter<'adjustment'> | string;
    estimate_id?: UuidFilter<'adjustment'> | string;
    user_id?: UuidFilter<'adjustment'> | string;
    description?: StringNullableFilter<'adjustment'> | string | null;
    amount?: IntNullableFilter<'adjustment'> | number | null;
    created_at?: DateTimeFilter<'adjustment'> | Date | string;
    updated_at?: DateTimeFilter<'adjustment'> | Date | string;
    estimate?: XOR<EstimateRelationFilter, estimateWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type adjustmentOrderByWithRelationInput = {
    id?: SortOrder;
    estimate_id?: SortOrder;
    user_id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    amount?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    estimate?: estimateOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type adjustmentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: adjustmentWhereInput | adjustmentWhereInput[];
      OR?: adjustmentWhereInput[];
      NOT?: adjustmentWhereInput | adjustmentWhereInput[];
      estimate_id?: UuidFilter<'adjustment'> | string;
      user_id?: UuidFilter<'adjustment'> | string;
      description?: StringNullableFilter<'adjustment'> | string | null;
      amount?: IntNullableFilter<'adjustment'> | number | null;
      created_at?: DateTimeFilter<'adjustment'> | Date | string;
      updated_at?: DateTimeFilter<'adjustment'> | Date | string;
      estimate?: XOR<EstimateRelationFilter, estimateWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type adjustmentOrderByWithAggregationInput = {
    id?: SortOrder;
    estimate_id?: SortOrder;
    user_id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    amount?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: adjustmentCountOrderByAggregateInput;
    _avg?: adjustmentAvgOrderByAggregateInput;
    _max?: adjustmentMaxOrderByAggregateInput;
    _min?: adjustmentMinOrderByAggregateInput;
    _sum?: adjustmentSumOrderByAggregateInput;
  };

  export type adjustmentScalarWhereWithAggregatesInput = {
    AND?: adjustmentScalarWhereWithAggregatesInput | adjustmentScalarWhereWithAggregatesInput[];
    OR?: adjustmentScalarWhereWithAggregatesInput[];
    NOT?: adjustmentScalarWhereWithAggregatesInput | adjustmentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'adjustment'> | string;
    estimate_id?: UuidWithAggregatesFilter<'adjustment'> | string;
    user_id?: UuidWithAggregatesFilter<'adjustment'> | string;
    description?: StringNullableWithAggregatesFilter<'adjustment'> | string | null;
    amount?: IntNullableWithAggregatesFilter<'adjustment'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'adjustment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'adjustment'> | Date | string;
  };

  export type businessWhereInput = {
    AND?: businessWhereInput | businessWhereInput[];
    OR?: businessWhereInput[];
    NOT?: businessWhereInput | businessWhereInput[];
    id?: UuidFilter<'business'> | string;
    description?: StringNullableFilter<'business'> | string | null;
    address?: StringNullableFilter<'business'> | string | null;
    phone?: StringNullableFilter<'business'> | string | null;
    website?: StringNullableFilter<'business'> | string | null;
    name?: StringFilter<'business'> | string;
    created_at?: DateTimeFilter<'business'> | Date | string;
    updated_at?: DateTimeFilter<'business'> | Date | string;
    team?: TeamListRelationFilter;
    user?: UserListRelationFilter;
  };

  export type businessOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    phone?: SortOrderInput | SortOrder;
    website?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    team?: teamOrderByRelationAggregateInput;
    user?: userOrderByRelationAggregateInput;
  };

  export type businessWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: businessWhereInput | businessWhereInput[];
      OR?: businessWhereInput[];
      NOT?: businessWhereInput | businessWhereInput[];
      description?: StringNullableFilter<'business'> | string | null;
      address?: StringNullableFilter<'business'> | string | null;
      phone?: StringNullableFilter<'business'> | string | null;
      website?: StringNullableFilter<'business'> | string | null;
      name?: StringFilter<'business'> | string;
      created_at?: DateTimeFilter<'business'> | Date | string;
      updated_at?: DateTimeFilter<'business'> | Date | string;
      team?: TeamListRelationFilter;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type businessOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    phone?: SortOrderInput | SortOrder;
    website?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: businessCountOrderByAggregateInput;
    _max?: businessMaxOrderByAggregateInput;
    _min?: businessMinOrderByAggregateInput;
  };

  export type businessScalarWhereWithAggregatesInput = {
    AND?: businessScalarWhereWithAggregatesInput | businessScalarWhereWithAggregatesInput[];
    OR?: businessScalarWhereWithAggregatesInput[];
    NOT?: businessScalarWhereWithAggregatesInput | businessScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'business'> | string;
    description?: StringNullableWithAggregatesFilter<'business'> | string | null;
    address?: StringNullableWithAggregatesFilter<'business'> | string | null;
    phone?: StringNullableWithAggregatesFilter<'business'> | string | null;
    website?: StringNullableWithAggregatesFilter<'business'> | string | null;
    name?: StringWithAggregatesFilter<'business'> | string;
    created_at?: DateTimeWithAggregatesFilter<'business'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'business'> | Date | string;
  };

  export type estimateWhereInput = {
    AND?: estimateWhereInput | estimateWhereInput[];
    OR?: estimateWhereInput[];
    NOT?: estimateWhereInput | estimateWhereInput[];
    id?: UuidFilter<'estimate'> | string;
    user_id?: UuidFilter<'estimate'> | string;
    title?: StringFilter<'estimate'> | string;
    description?: StringNullableFilter<'estimate'> | string | null;
    status?: StringNullableFilter<'estimate'> | string | null;
    amount?: IntNullableFilter<'estimate'> | number | null;
    created_at?: DateTimeFilter<'estimate'> | Date | string;
    updated_at?: DateTimeFilter<'estimate'> | Date | string;
    adjustment?: AdjustmentListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type estimateOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    amount?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    adjustment?: adjustmentOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type estimateWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: estimateWhereInput | estimateWhereInput[];
      OR?: estimateWhereInput[];
      NOT?: estimateWhereInput | estimateWhereInput[];
      user_id?: UuidFilter<'estimate'> | string;
      title?: StringFilter<'estimate'> | string;
      description?: StringNullableFilter<'estimate'> | string | null;
      status?: StringNullableFilter<'estimate'> | string | null;
      amount?: IntNullableFilter<'estimate'> | number | null;
      created_at?: DateTimeFilter<'estimate'> | Date | string;
      updated_at?: DateTimeFilter<'estimate'> | Date | string;
      adjustment?: AdjustmentListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type estimateOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    title?: SortOrder;
    description?: SortOrderInput | SortOrder;
    status?: SortOrderInput | SortOrder;
    amount?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: estimateCountOrderByAggregateInput;
    _avg?: estimateAvgOrderByAggregateInput;
    _max?: estimateMaxOrderByAggregateInput;
    _min?: estimateMinOrderByAggregateInput;
    _sum?: estimateSumOrderByAggregateInput;
  };

  export type estimateScalarWhereWithAggregatesInput = {
    AND?: estimateScalarWhereWithAggregatesInput | estimateScalarWhereWithAggregatesInput[];
    OR?: estimateScalarWhereWithAggregatesInput[];
    NOT?: estimateScalarWhereWithAggregatesInput | estimateScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'estimate'> | string;
    user_id?: UuidWithAggregatesFilter<'estimate'> | string;
    title?: StringWithAggregatesFilter<'estimate'> | string;
    description?: StringNullableWithAggregatesFilter<'estimate'> | string | null;
    status?: StringNullableWithAggregatesFilter<'estimate'> | string | null;
    amount?: IntNullableWithAggregatesFilter<'estimate'> | number | null;
    created_at?: DateTimeWithAggregatesFilter<'estimate'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'estimate'> | Date | string;
  };

  export type teamWhereInput = {
    AND?: teamWhereInput | teamWhereInput[];
    OR?: teamWhereInput[];
    NOT?: teamWhereInput | teamWhereInput[];
    id?: UuidFilter<'team'> | string;
    business_id?: UuidFilter<'team'> | string;
    name?: StringFilter<'team'> | string;
    description?: StringNullableFilter<'team'> | string | null;
    created_at?: DateTimeFilter<'team'> | Date | string;
    updated_at?: DateTimeFilter<'team'> | Date | string;
    business?: XOR<BusinessRelationFilter, businessWhereInput>;
    team_member?: Team_memberListRelationFilter;
  };

  export type teamOrderByWithRelationInput = {
    id?: SortOrder;
    business_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    business?: businessOrderByWithRelationInput;
    team_member?: team_memberOrderByRelationAggregateInput;
  };

  export type teamWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: teamWhereInput | teamWhereInput[];
      OR?: teamWhereInput[];
      NOT?: teamWhereInput | teamWhereInput[];
      business_id?: UuidFilter<'team'> | string;
      name?: StringFilter<'team'> | string;
      description?: StringNullableFilter<'team'> | string | null;
      created_at?: DateTimeFilter<'team'> | Date | string;
      updated_at?: DateTimeFilter<'team'> | Date | string;
      business?: XOR<BusinessRelationFilter, businessWhereInput>;
      team_member?: Team_memberListRelationFilter;
    },
    'id'
  >;

  export type teamOrderByWithAggregationInput = {
    id?: SortOrder;
    business_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: teamCountOrderByAggregateInput;
    _max?: teamMaxOrderByAggregateInput;
    _min?: teamMinOrderByAggregateInput;
  };

  export type teamScalarWhereWithAggregatesInput = {
    AND?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[];
    OR?: teamScalarWhereWithAggregatesInput[];
    NOT?: teamScalarWhereWithAggregatesInput | teamScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'team'> | string;
    business_id?: UuidWithAggregatesFilter<'team'> | string;
    name?: StringWithAggregatesFilter<'team'> | string;
    description?: StringNullableWithAggregatesFilter<'team'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'team'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'team'> | Date | string;
  };

  export type team_memberWhereInput = {
    AND?: team_memberWhereInput | team_memberWhereInput[];
    OR?: team_memberWhereInput[];
    NOT?: team_memberWhereInput | team_memberWhereInput[];
    id?: UuidFilter<'team_member'> | string;
    team_id?: UuidFilter<'team_member'> | string;
    user_id?: UuidFilter<'team_member'> | string;
    role?: StringNullableFilter<'team_member'> | string | null;
    created_at?: DateTimeFilter<'team_member'> | Date | string;
    updated_at?: DateTimeFilter<'team_member'> | Date | string;
    team?: XOR<TeamRelationFilter, teamWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type team_memberOrderByWithRelationInput = {
    id?: SortOrder;
    team_id?: SortOrder;
    user_id?: SortOrder;
    role?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    team?: teamOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type team_memberWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: team_memberWhereInput | team_memberWhereInput[];
      OR?: team_memberWhereInput[];
      NOT?: team_memberWhereInput | team_memberWhereInput[];
      team_id?: UuidFilter<'team_member'> | string;
      user_id?: UuidFilter<'team_member'> | string;
      role?: StringNullableFilter<'team_member'> | string | null;
      created_at?: DateTimeFilter<'team_member'> | Date | string;
      updated_at?: DateTimeFilter<'team_member'> | Date | string;
      team?: XOR<TeamRelationFilter, teamWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type team_memberOrderByWithAggregationInput = {
    id?: SortOrder;
    team_id?: SortOrder;
    user_id?: SortOrder;
    role?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: team_memberCountOrderByAggregateInput;
    _max?: team_memberMaxOrderByAggregateInput;
    _min?: team_memberMinOrderByAggregateInput;
  };

  export type team_memberScalarWhereWithAggregatesInput = {
    AND?: team_memberScalarWhereWithAggregatesInput | team_memberScalarWhereWithAggregatesInput[];
    OR?: team_memberScalarWhereWithAggregatesInput[];
    NOT?: team_memberScalarWhereWithAggregatesInput | team_memberScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'team_member'> | string;
    team_id?: UuidWithAggregatesFilter<'team_member'> | string;
    user_id?: UuidWithAggregatesFilter<'team_member'> | string;
    role?: StringNullableWithAggregatesFilter<'team_member'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'team_member'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'team_member'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    business_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    adjustment?: AdjustmentListRelationFilter;
    estimate?: EstimateListRelationFilter;
    team_member?: Team_memberListRelationFilter;
    business?: XOR<BusinessNullableRelationFilter, businessWhereInput> | null;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    business_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    adjustment?: adjustmentOrderByRelationAggregateInput;
    estimate?: estimateOrderByRelationAggregateInput;
    team_member?: team_memberOrderByRelationAggregateInput;
    business?: businessOrderByWithRelationInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      business_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      adjustment?: AdjustmentListRelationFilter;
      estimate?: EstimateListRelationFilter;
      team_member?: Team_memberListRelationFilter;
      business?: XOR<BusinessNullableRelationFilter, businessWhereInput> | null;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    business_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    business_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type adjustmentCreateInput = {
    id?: string;
    description?: string | null;
    amount?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    estimate: estimateCreateNestedOneWithoutAdjustmentInput;
    user: userCreateNestedOneWithoutAdjustmentInput;
  };

  export type adjustmentUncheckedCreateInput = {
    id?: string;
    estimate_id: string;
    user_id: string;
    description?: string | null;
    amount?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type adjustmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    estimate?: estimateUpdateOneRequiredWithoutAdjustmentNestedInput;
    user?: userUpdateOneRequiredWithoutAdjustmentNestedInput;
  };

  export type adjustmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    estimate_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type adjustmentCreateManyInput = {
    id?: string;
    estimate_id: string;
    user_id: string;
    description?: string | null;
    amount?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type adjustmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type adjustmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    estimate_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type businessCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    team?: teamCreateNestedManyWithoutBusinessInput;
    user?: userCreateNestedManyWithoutBusinessInput;
  };

  export type businessUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    team?: teamUncheckedCreateNestedManyWithoutBusinessInput;
    user?: userUncheckedCreateNestedManyWithoutBusinessInput;
  };

  export type businessUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    team?: teamUpdateManyWithoutBusinessNestedInput;
    user?: userUpdateManyWithoutBusinessNestedInput;
  };

  export type businessUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    team?: teamUncheckedUpdateManyWithoutBusinessNestedInput;
    user?: userUncheckedUpdateManyWithoutBusinessNestedInput;
  };

  export type businessCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type businessUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type businessUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type estimateCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: string | null;
    amount?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    adjustment?: adjustmentCreateNestedManyWithoutEstimateInput;
    user: userCreateNestedOneWithoutEstimateInput;
  };

  export type estimateUncheckedCreateInput = {
    id?: string;
    user_id: string;
    title: string;
    description?: string | null;
    status?: string | null;
    amount?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    adjustment?: adjustmentUncheckedCreateNestedManyWithoutEstimateInput;
  };

  export type estimateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    adjustment?: adjustmentUpdateManyWithoutEstimateNestedInput;
    user?: userUpdateOneRequiredWithoutEstimateNestedInput;
  };

  export type estimateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    adjustment?: adjustmentUncheckedUpdateManyWithoutEstimateNestedInput;
  };

  export type estimateCreateManyInput = {
    id?: string;
    user_id: string;
    title: string;
    description?: string | null;
    status?: string | null;
    amount?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type estimateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type estimateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teamCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    business: businessCreateNestedOneWithoutTeamInput;
    team_member?: team_memberCreateNestedManyWithoutTeamInput;
  };

  export type teamUncheckedCreateInput = {
    id?: string;
    business_id: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    team_member?: team_memberUncheckedCreateNestedManyWithoutTeamInput;
  };

  export type teamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business?: businessUpdateOneRequiredWithoutTeamNestedInput;
    team_member?: team_memberUpdateManyWithoutTeamNestedInput;
  };

  export type teamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    team_member?: team_memberUncheckedUpdateManyWithoutTeamNestedInput;
  };

  export type teamCreateManyInput = {
    id?: string;
    business_id: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberCreateInput = {
    id?: string;
    role?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    team: teamCreateNestedOneWithoutTeam_memberInput;
    user: userCreateNestedOneWithoutTeam_memberInput;
  };

  export type team_memberUncheckedCreateInput = {
    id?: string;
    team_id: string;
    user_id: string;
    role?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    team?: teamUpdateOneRequiredWithoutTeam_memberNestedInput;
    user?: userUpdateOneRequiredWithoutTeam_memberNestedInput;
  };

  export type team_memberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberCreateManyInput = {
    id?: string;
    team_id: string;
    user_id: string;
    role?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    adjustment?: adjustmentCreateNestedManyWithoutUserInput;
    estimate?: estimateCreateNestedManyWithoutUserInput;
    team_member?: team_memberCreateNestedManyWithoutUserInput;
    business?: businessCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    business_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    adjustment?: adjustmentUncheckedCreateNestedManyWithoutUserInput;
    estimate?: estimateUncheckedCreateNestedManyWithoutUserInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    adjustment?: adjustmentUpdateManyWithoutUserNestedInput;
    estimate?: estimateUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUpdateManyWithoutUserNestedInput;
    business?: businessUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    business_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    adjustment?: adjustmentUncheckedUpdateManyWithoutUserNestedInput;
    estimate?: estimateUncheckedUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    business_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    business_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type EstimateRelationFilter = {
    is?: estimateWhereInput;
    isNot?: estimateWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type adjustmentCountOrderByAggregateInput = {
    id?: SortOrder;
    estimate_id?: SortOrder;
    user_id?: SortOrder;
    description?: SortOrder;
    amount?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type adjustmentAvgOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type adjustmentMaxOrderByAggregateInput = {
    id?: SortOrder;
    estimate_id?: SortOrder;
    user_id?: SortOrder;
    description?: SortOrder;
    amount?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type adjustmentMinOrderByAggregateInput = {
    id?: SortOrder;
    estimate_id?: SortOrder;
    user_id?: SortOrder;
    description?: SortOrder;
    amount?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type adjustmentSumOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type TeamListRelationFilter = {
    every?: teamWhereInput;
    some?: teamWhereInput;
    none?: teamWhereInput;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type teamOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type businessCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone?: SortOrder;
    website?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type businessMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone?: SortOrder;
    website?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type businessMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    phone?: SortOrder;
    website?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type AdjustmentListRelationFilter = {
    every?: adjustmentWhereInput;
    some?: adjustmentWhereInput;
    none?: adjustmentWhereInput;
  };

  export type adjustmentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type estimateCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    amount?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type estimateAvgOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type estimateMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    amount?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type estimateMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    title?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    amount?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type estimateSumOrderByAggregateInput = {
    amount?: SortOrder;
  };

  export type BusinessRelationFilter = {
    is?: businessWhereInput;
    isNot?: businessWhereInput;
  };

  export type Team_memberListRelationFilter = {
    every?: team_memberWhereInput;
    some?: team_memberWhereInput;
    none?: team_memberWhereInput;
  };

  export type team_memberOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type teamCountOrderByAggregateInput = {
    id?: SortOrder;
    business_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teamMaxOrderByAggregateInput = {
    id?: SortOrder;
    business_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teamMinOrderByAggregateInput = {
    id?: SortOrder;
    business_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type TeamRelationFilter = {
    is?: teamWhereInput;
    isNot?: teamWhereInput;
  };

  export type team_memberCountOrderByAggregateInput = {
    id?: SortOrder;
    team_id?: SortOrder;
    user_id?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type team_memberMaxOrderByAggregateInput = {
    id?: SortOrder;
    team_id?: SortOrder;
    user_id?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type team_memberMinOrderByAggregateInput = {
    id?: SortOrder;
    team_id?: SortOrder;
    user_id?: SortOrder;
    role?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type EstimateListRelationFilter = {
    every?: estimateWhereInput;
    some?: estimateWhereInput;
    none?: estimateWhereInput;
  };

  export type BusinessNullableRelationFilter = {
    is?: businessWhereInput | null;
    isNot?: businessWhereInput | null;
  };

  export type estimateOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    business_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    business_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    business_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type estimateCreateNestedOneWithoutAdjustmentInput = {
    create?: XOR<estimateCreateWithoutAdjustmentInput, estimateUncheckedCreateWithoutAdjustmentInput>;
    connectOrCreate?: estimateCreateOrConnectWithoutAdjustmentInput;
    connect?: estimateWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutAdjustmentInput = {
    create?: XOR<userCreateWithoutAdjustmentInput, userUncheckedCreateWithoutAdjustmentInput>;
    connectOrCreate?: userCreateOrConnectWithoutAdjustmentInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type estimateUpdateOneRequiredWithoutAdjustmentNestedInput = {
    create?: XOR<estimateCreateWithoutAdjustmentInput, estimateUncheckedCreateWithoutAdjustmentInput>;
    connectOrCreate?: estimateCreateOrConnectWithoutAdjustmentInput;
    upsert?: estimateUpsertWithoutAdjustmentInput;
    connect?: estimateWhereUniqueInput;
    update?: XOR<
      XOR<estimateUpdateToOneWithWhereWithoutAdjustmentInput, estimateUpdateWithoutAdjustmentInput>,
      estimateUncheckedUpdateWithoutAdjustmentInput
    >;
  };

  export type userUpdateOneRequiredWithoutAdjustmentNestedInput = {
    create?: XOR<userCreateWithoutAdjustmentInput, userUncheckedCreateWithoutAdjustmentInput>;
    connectOrCreate?: userCreateOrConnectWithoutAdjustmentInput;
    upsert?: userUpsertWithoutAdjustmentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutAdjustmentInput, userUpdateWithoutAdjustmentInput>,
      userUncheckedUpdateWithoutAdjustmentInput
    >;
  };

  export type teamCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<teamCreateWithoutBusinessInput, teamUncheckedCreateWithoutBusinessInput>
      | teamCreateWithoutBusinessInput[]
      | teamUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: teamCreateOrConnectWithoutBusinessInput | teamCreateOrConnectWithoutBusinessInput[];
    createMany?: teamCreateManyBusinessInputEnvelope;
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[];
  };

  export type userCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<userCreateWithoutBusinessInput, userUncheckedCreateWithoutBusinessInput>
      | userCreateWithoutBusinessInput[]
      | userUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: userCreateOrConnectWithoutBusinessInput | userCreateOrConnectWithoutBusinessInput[];
    createMany?: userCreateManyBusinessInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type teamUncheckedCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<teamCreateWithoutBusinessInput, teamUncheckedCreateWithoutBusinessInput>
      | teamCreateWithoutBusinessInput[]
      | teamUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: teamCreateOrConnectWithoutBusinessInput | teamCreateOrConnectWithoutBusinessInput[];
    createMany?: teamCreateManyBusinessInputEnvelope;
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutBusinessInput = {
    create?:
      | XOR<userCreateWithoutBusinessInput, userUncheckedCreateWithoutBusinessInput>
      | userCreateWithoutBusinessInput[]
      | userUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: userCreateOrConnectWithoutBusinessInput | userCreateOrConnectWithoutBusinessInput[];
    createMany?: userCreateManyBusinessInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type teamUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<teamCreateWithoutBusinessInput, teamUncheckedCreateWithoutBusinessInput>
      | teamCreateWithoutBusinessInput[]
      | teamUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: teamCreateOrConnectWithoutBusinessInput | teamCreateOrConnectWithoutBusinessInput[];
    upsert?: teamUpsertWithWhereUniqueWithoutBusinessInput | teamUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: teamCreateManyBusinessInputEnvelope;
    set?: teamWhereUniqueInput | teamWhereUniqueInput[];
    disconnect?: teamWhereUniqueInput | teamWhereUniqueInput[];
    delete?: teamWhereUniqueInput | teamWhereUniqueInput[];
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[];
    update?: teamUpdateWithWhereUniqueWithoutBusinessInput | teamUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: teamUpdateManyWithWhereWithoutBusinessInput | teamUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: teamScalarWhereInput | teamScalarWhereInput[];
  };

  export type userUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<userCreateWithoutBusinessInput, userUncheckedCreateWithoutBusinessInput>
      | userCreateWithoutBusinessInput[]
      | userUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: userCreateOrConnectWithoutBusinessInput | userCreateOrConnectWithoutBusinessInput[];
    upsert?: userUpsertWithWhereUniqueWithoutBusinessInput | userUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: userCreateManyBusinessInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutBusinessInput | userUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: userUpdateManyWithWhereWithoutBusinessInput | userUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type teamUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<teamCreateWithoutBusinessInput, teamUncheckedCreateWithoutBusinessInput>
      | teamCreateWithoutBusinessInput[]
      | teamUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: teamCreateOrConnectWithoutBusinessInput | teamCreateOrConnectWithoutBusinessInput[];
    upsert?: teamUpsertWithWhereUniqueWithoutBusinessInput | teamUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: teamCreateManyBusinessInputEnvelope;
    set?: teamWhereUniqueInput | teamWhereUniqueInput[];
    disconnect?: teamWhereUniqueInput | teamWhereUniqueInput[];
    delete?: teamWhereUniqueInput | teamWhereUniqueInput[];
    connect?: teamWhereUniqueInput | teamWhereUniqueInput[];
    update?: teamUpdateWithWhereUniqueWithoutBusinessInput | teamUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: teamUpdateManyWithWhereWithoutBusinessInput | teamUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: teamScalarWhereInput | teamScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?:
      | XOR<userCreateWithoutBusinessInput, userUncheckedCreateWithoutBusinessInput>
      | userCreateWithoutBusinessInput[]
      | userUncheckedCreateWithoutBusinessInput[];
    connectOrCreate?: userCreateOrConnectWithoutBusinessInput | userCreateOrConnectWithoutBusinessInput[];
    upsert?: userUpsertWithWhereUniqueWithoutBusinessInput | userUpsertWithWhereUniqueWithoutBusinessInput[];
    createMany?: userCreateManyBusinessInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutBusinessInput | userUpdateWithWhereUniqueWithoutBusinessInput[];
    updateMany?: userUpdateManyWithWhereWithoutBusinessInput | userUpdateManyWithWhereWithoutBusinessInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type adjustmentCreateNestedManyWithoutEstimateInput = {
    create?:
      | XOR<adjustmentCreateWithoutEstimateInput, adjustmentUncheckedCreateWithoutEstimateInput>
      | adjustmentCreateWithoutEstimateInput[]
      | adjustmentUncheckedCreateWithoutEstimateInput[];
    connectOrCreate?: adjustmentCreateOrConnectWithoutEstimateInput | adjustmentCreateOrConnectWithoutEstimateInput[];
    createMany?: adjustmentCreateManyEstimateInputEnvelope;
    connect?: adjustmentWhereUniqueInput | adjustmentWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutEstimateInput = {
    create?: XOR<userCreateWithoutEstimateInput, userUncheckedCreateWithoutEstimateInput>;
    connectOrCreate?: userCreateOrConnectWithoutEstimateInput;
    connect?: userWhereUniqueInput;
  };

  export type adjustmentUncheckedCreateNestedManyWithoutEstimateInput = {
    create?:
      | XOR<adjustmentCreateWithoutEstimateInput, adjustmentUncheckedCreateWithoutEstimateInput>
      | adjustmentCreateWithoutEstimateInput[]
      | adjustmentUncheckedCreateWithoutEstimateInput[];
    connectOrCreate?: adjustmentCreateOrConnectWithoutEstimateInput | adjustmentCreateOrConnectWithoutEstimateInput[];
    createMany?: adjustmentCreateManyEstimateInputEnvelope;
    connect?: adjustmentWhereUniqueInput | adjustmentWhereUniqueInput[];
  };

  export type adjustmentUpdateManyWithoutEstimateNestedInput = {
    create?:
      | XOR<adjustmentCreateWithoutEstimateInput, adjustmentUncheckedCreateWithoutEstimateInput>
      | adjustmentCreateWithoutEstimateInput[]
      | adjustmentUncheckedCreateWithoutEstimateInput[];
    connectOrCreate?: adjustmentCreateOrConnectWithoutEstimateInput | adjustmentCreateOrConnectWithoutEstimateInput[];
    upsert?:
      | adjustmentUpsertWithWhereUniqueWithoutEstimateInput
      | adjustmentUpsertWithWhereUniqueWithoutEstimateInput[];
    createMany?: adjustmentCreateManyEstimateInputEnvelope;
    set?: adjustmentWhereUniqueInput | adjustmentWhereUniqueInput[];
    disconnect?: adjustmentWhereUniqueInput | adjustmentWhereUniqueInput[];
    delete?: adjustmentWhereUniqueInput | adjustmentWhereUniqueInput[];
    connect?: adjustmentWhereUniqueInput | adjustmentWhereUniqueInput[];
    update?:
      | adjustmentUpdateWithWhereUniqueWithoutEstimateInput
      | adjustmentUpdateWithWhereUniqueWithoutEstimateInput[];
    updateMany?:
      | adjustmentUpdateManyWithWhereWithoutEstimateInput
      | adjustmentUpdateManyWithWhereWithoutEstimateInput[];
    deleteMany?: adjustmentScalarWhereInput | adjustmentScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutEstimateNestedInput = {
    create?: XOR<userCreateWithoutEstimateInput, userUncheckedCreateWithoutEstimateInput>;
    connectOrCreate?: userCreateOrConnectWithoutEstimateInput;
    upsert?: userUpsertWithoutEstimateInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutEstimateInput, userUpdateWithoutEstimateInput>,
      userUncheckedUpdateWithoutEstimateInput
    >;
  };

  export type adjustmentUncheckedUpdateManyWithoutEstimateNestedInput = {
    create?:
      | XOR<adjustmentCreateWithoutEstimateInput, adjustmentUncheckedCreateWithoutEstimateInput>
      | adjustmentCreateWithoutEstimateInput[]
      | adjustmentUncheckedCreateWithoutEstimateInput[];
    connectOrCreate?: adjustmentCreateOrConnectWithoutEstimateInput | adjustmentCreateOrConnectWithoutEstimateInput[];
    upsert?:
      | adjustmentUpsertWithWhereUniqueWithoutEstimateInput
      | adjustmentUpsertWithWhereUniqueWithoutEstimateInput[];
    createMany?: adjustmentCreateManyEstimateInputEnvelope;
    set?: adjustmentWhereUniqueInput | adjustmentWhereUniqueInput[];
    disconnect?: adjustmentWhereUniqueInput | adjustmentWhereUniqueInput[];
    delete?: adjustmentWhereUniqueInput | adjustmentWhereUniqueInput[];
    connect?: adjustmentWhereUniqueInput | adjustmentWhereUniqueInput[];
    update?:
      | adjustmentUpdateWithWhereUniqueWithoutEstimateInput
      | adjustmentUpdateWithWhereUniqueWithoutEstimateInput[];
    updateMany?:
      | adjustmentUpdateManyWithWhereWithoutEstimateInput
      | adjustmentUpdateManyWithWhereWithoutEstimateInput[];
    deleteMany?: adjustmentScalarWhereInput | adjustmentScalarWhereInput[];
  };

  export type businessCreateNestedOneWithoutTeamInput = {
    create?: XOR<businessCreateWithoutTeamInput, businessUncheckedCreateWithoutTeamInput>;
    connectOrCreate?: businessCreateOrConnectWithoutTeamInput;
    connect?: businessWhereUniqueInput;
  };

  export type team_memberCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput>
      | team_memberCreateWithoutTeamInput[]
      | team_memberUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutTeamInput | team_memberCreateOrConnectWithoutTeamInput[];
    createMany?: team_memberCreateManyTeamInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type team_memberUncheckedCreateNestedManyWithoutTeamInput = {
    create?:
      | XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput>
      | team_memberCreateWithoutTeamInput[]
      | team_memberUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutTeamInput | team_memberCreateOrConnectWithoutTeamInput[];
    createMany?: team_memberCreateManyTeamInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type businessUpdateOneRequiredWithoutTeamNestedInput = {
    create?: XOR<businessCreateWithoutTeamInput, businessUncheckedCreateWithoutTeamInput>;
    connectOrCreate?: businessCreateOrConnectWithoutTeamInput;
    upsert?: businessUpsertWithoutTeamInput;
    connect?: businessWhereUniqueInput;
    update?: XOR<
      XOR<businessUpdateToOneWithWhereWithoutTeamInput, businessUpdateWithoutTeamInput>,
      businessUncheckedUpdateWithoutTeamInput
    >;
  };

  export type team_memberUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput>
      | team_memberCreateWithoutTeamInput[]
      | team_memberUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutTeamInput | team_memberCreateOrConnectWithoutTeamInput[];
    upsert?: team_memberUpsertWithWhereUniqueWithoutTeamInput | team_memberUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: team_memberCreateManyTeamInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?: team_memberUpdateWithWhereUniqueWithoutTeamInput | team_memberUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: team_memberUpdateManyWithWhereWithoutTeamInput | team_memberUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type team_memberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput>
      | team_memberCreateWithoutTeamInput[]
      | team_memberUncheckedCreateWithoutTeamInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutTeamInput | team_memberCreateOrConnectWithoutTeamInput[];
    upsert?: team_memberUpsertWithWhereUniqueWithoutTeamInput | team_memberUpsertWithWhereUniqueWithoutTeamInput[];
    createMany?: team_memberCreateManyTeamInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?: team_memberUpdateWithWhereUniqueWithoutTeamInput | team_memberUpdateWithWhereUniqueWithoutTeamInput[];
    updateMany?: team_memberUpdateManyWithWhereWithoutTeamInput | team_memberUpdateManyWithWhereWithoutTeamInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type teamCreateNestedOneWithoutTeam_memberInput = {
    create?: XOR<teamCreateWithoutTeam_memberInput, teamUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: teamCreateOrConnectWithoutTeam_memberInput;
    connect?: teamWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutTeam_memberInput = {
    create?: XOR<userCreateWithoutTeam_memberInput, userUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: userCreateOrConnectWithoutTeam_memberInput;
    connect?: userWhereUniqueInput;
  };

  export type teamUpdateOneRequiredWithoutTeam_memberNestedInput = {
    create?: XOR<teamCreateWithoutTeam_memberInput, teamUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: teamCreateOrConnectWithoutTeam_memberInput;
    upsert?: teamUpsertWithoutTeam_memberInput;
    connect?: teamWhereUniqueInput;
    update?: XOR<
      XOR<teamUpdateToOneWithWhereWithoutTeam_memberInput, teamUpdateWithoutTeam_memberInput>,
      teamUncheckedUpdateWithoutTeam_memberInput
    >;
  };

  export type userUpdateOneRequiredWithoutTeam_memberNestedInput = {
    create?: XOR<userCreateWithoutTeam_memberInput, userUncheckedCreateWithoutTeam_memberInput>;
    connectOrCreate?: userCreateOrConnectWithoutTeam_memberInput;
    upsert?: userUpsertWithoutTeam_memberInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTeam_memberInput, userUpdateWithoutTeam_memberInput>,
      userUncheckedUpdateWithoutTeam_memberInput
    >;
  };

  export type adjustmentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<adjustmentCreateWithoutUserInput, adjustmentUncheckedCreateWithoutUserInput>
      | adjustmentCreateWithoutUserInput[]
      | adjustmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: adjustmentCreateOrConnectWithoutUserInput | adjustmentCreateOrConnectWithoutUserInput[];
    createMany?: adjustmentCreateManyUserInputEnvelope;
    connect?: adjustmentWhereUniqueInput | adjustmentWhereUniqueInput[];
  };

  export type estimateCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<estimateCreateWithoutUserInput, estimateUncheckedCreateWithoutUserInput>
      | estimateCreateWithoutUserInput[]
      | estimateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: estimateCreateOrConnectWithoutUserInput | estimateCreateOrConnectWithoutUserInput[];
    createMany?: estimateCreateManyUserInputEnvelope;
    connect?: estimateWhereUniqueInput | estimateWhereUniqueInput[];
  };

  export type team_memberCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
      | team_memberCreateWithoutUserInput[]
      | team_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[];
    createMany?: team_memberCreateManyUserInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type businessCreateNestedOneWithoutUserInput = {
    create?: XOR<businessCreateWithoutUserInput, businessUncheckedCreateWithoutUserInput>;
    connectOrCreate?: businessCreateOrConnectWithoutUserInput;
    connect?: businessWhereUniqueInput;
  };

  export type adjustmentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<adjustmentCreateWithoutUserInput, adjustmentUncheckedCreateWithoutUserInput>
      | adjustmentCreateWithoutUserInput[]
      | adjustmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: adjustmentCreateOrConnectWithoutUserInput | adjustmentCreateOrConnectWithoutUserInput[];
    createMany?: adjustmentCreateManyUserInputEnvelope;
    connect?: adjustmentWhereUniqueInput | adjustmentWhereUniqueInput[];
  };

  export type estimateUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<estimateCreateWithoutUserInput, estimateUncheckedCreateWithoutUserInput>
      | estimateCreateWithoutUserInput[]
      | estimateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: estimateCreateOrConnectWithoutUserInput | estimateCreateOrConnectWithoutUserInput[];
    createMany?: estimateCreateManyUserInputEnvelope;
    connect?: estimateWhereUniqueInput | estimateWhereUniqueInput[];
  };

  export type team_memberUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
      | team_memberCreateWithoutUserInput[]
      | team_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[];
    createMany?: team_memberCreateManyUserInputEnvelope;
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
  };

  export type adjustmentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<adjustmentCreateWithoutUserInput, adjustmentUncheckedCreateWithoutUserInput>
      | adjustmentCreateWithoutUserInput[]
      | adjustmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: adjustmentCreateOrConnectWithoutUserInput | adjustmentCreateOrConnectWithoutUserInput[];
    upsert?: adjustmentUpsertWithWhereUniqueWithoutUserInput | adjustmentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: adjustmentCreateManyUserInputEnvelope;
    set?: adjustmentWhereUniqueInput | adjustmentWhereUniqueInput[];
    disconnect?: adjustmentWhereUniqueInput | adjustmentWhereUniqueInput[];
    delete?: adjustmentWhereUniqueInput | adjustmentWhereUniqueInput[];
    connect?: adjustmentWhereUniqueInput | adjustmentWhereUniqueInput[];
    update?: adjustmentUpdateWithWhereUniqueWithoutUserInput | adjustmentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: adjustmentUpdateManyWithWhereWithoutUserInput | adjustmentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: adjustmentScalarWhereInput | adjustmentScalarWhereInput[];
  };

  export type estimateUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<estimateCreateWithoutUserInput, estimateUncheckedCreateWithoutUserInput>
      | estimateCreateWithoutUserInput[]
      | estimateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: estimateCreateOrConnectWithoutUserInput | estimateCreateOrConnectWithoutUserInput[];
    upsert?: estimateUpsertWithWhereUniqueWithoutUserInput | estimateUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: estimateCreateManyUserInputEnvelope;
    set?: estimateWhereUniqueInput | estimateWhereUniqueInput[];
    disconnect?: estimateWhereUniqueInput | estimateWhereUniqueInput[];
    delete?: estimateWhereUniqueInput | estimateWhereUniqueInput[];
    connect?: estimateWhereUniqueInput | estimateWhereUniqueInput[];
    update?: estimateUpdateWithWhereUniqueWithoutUserInput | estimateUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: estimateUpdateManyWithWhereWithoutUserInput | estimateUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: estimateScalarWhereInput | estimateScalarWhereInput[];
  };

  export type team_memberUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
      | team_memberCreateWithoutUserInput[]
      | team_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[];
    upsert?: team_memberUpsertWithWhereUniqueWithoutUserInput | team_memberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: team_memberCreateManyUserInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?: team_memberUpdateWithWhereUniqueWithoutUserInput | team_memberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: team_memberUpdateManyWithWhereWithoutUserInput | team_memberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type businessUpdateOneWithoutUserNestedInput = {
    create?: XOR<businessCreateWithoutUserInput, businessUncheckedCreateWithoutUserInput>;
    connectOrCreate?: businessCreateOrConnectWithoutUserInput;
    upsert?: businessUpsertWithoutUserInput;
    disconnect?: businessWhereInput | boolean;
    delete?: businessWhereInput | boolean;
    connect?: businessWhereUniqueInput;
    update?: XOR<
      XOR<businessUpdateToOneWithWhereWithoutUserInput, businessUpdateWithoutUserInput>,
      businessUncheckedUpdateWithoutUserInput
    >;
  };

  export type adjustmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<adjustmentCreateWithoutUserInput, adjustmentUncheckedCreateWithoutUserInput>
      | adjustmentCreateWithoutUserInput[]
      | adjustmentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: adjustmentCreateOrConnectWithoutUserInput | adjustmentCreateOrConnectWithoutUserInput[];
    upsert?: adjustmentUpsertWithWhereUniqueWithoutUserInput | adjustmentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: adjustmentCreateManyUserInputEnvelope;
    set?: adjustmentWhereUniqueInput | adjustmentWhereUniqueInput[];
    disconnect?: adjustmentWhereUniqueInput | adjustmentWhereUniqueInput[];
    delete?: adjustmentWhereUniqueInput | adjustmentWhereUniqueInput[];
    connect?: adjustmentWhereUniqueInput | adjustmentWhereUniqueInput[];
    update?: adjustmentUpdateWithWhereUniqueWithoutUserInput | adjustmentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: adjustmentUpdateManyWithWhereWithoutUserInput | adjustmentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: adjustmentScalarWhereInput | adjustmentScalarWhereInput[];
  };

  export type estimateUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<estimateCreateWithoutUserInput, estimateUncheckedCreateWithoutUserInput>
      | estimateCreateWithoutUserInput[]
      | estimateUncheckedCreateWithoutUserInput[];
    connectOrCreate?: estimateCreateOrConnectWithoutUserInput | estimateCreateOrConnectWithoutUserInput[];
    upsert?: estimateUpsertWithWhereUniqueWithoutUserInput | estimateUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: estimateCreateManyUserInputEnvelope;
    set?: estimateWhereUniqueInput | estimateWhereUniqueInput[];
    disconnect?: estimateWhereUniqueInput | estimateWhereUniqueInput[];
    delete?: estimateWhereUniqueInput | estimateWhereUniqueInput[];
    connect?: estimateWhereUniqueInput | estimateWhereUniqueInput[];
    update?: estimateUpdateWithWhereUniqueWithoutUserInput | estimateUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: estimateUpdateManyWithWhereWithoutUserInput | estimateUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: estimateScalarWhereInput | estimateScalarWhereInput[];
  };

  export type team_memberUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>
      | team_memberCreateWithoutUserInput[]
      | team_memberUncheckedCreateWithoutUserInput[];
    connectOrCreate?: team_memberCreateOrConnectWithoutUserInput | team_memberCreateOrConnectWithoutUserInput[];
    upsert?: team_memberUpsertWithWhereUniqueWithoutUserInput | team_memberUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: team_memberCreateManyUserInputEnvelope;
    set?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    disconnect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    delete?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    connect?: team_memberWhereUniqueInput | team_memberWhereUniqueInput[];
    update?: team_memberUpdateWithWhereUniqueWithoutUserInput | team_memberUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: team_memberUpdateManyWithWhereWithoutUserInput | team_memberUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _avg?: NestedFloatNullableFilter<$PrismaModel>;
    _sum?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedIntNullableFilter<$PrismaModel>;
    _max?: NestedIntNullableFilter<$PrismaModel>;
  };

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type estimateCreateWithoutAdjustmentInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: string | null;
    amount?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutEstimateInput;
  };

  export type estimateUncheckedCreateWithoutAdjustmentInput = {
    id?: string;
    user_id: string;
    title: string;
    description?: string | null;
    status?: string | null;
    amount?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type estimateCreateOrConnectWithoutAdjustmentInput = {
    where: estimateWhereUniqueInput;
    create: XOR<estimateCreateWithoutAdjustmentInput, estimateUncheckedCreateWithoutAdjustmentInput>;
  };

  export type userCreateWithoutAdjustmentInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    estimate?: estimateCreateNestedManyWithoutUserInput;
    team_member?: team_memberCreateNestedManyWithoutUserInput;
    business?: businessCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutAdjustmentInput = {
    id?: string;
    email: string;
    business_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    estimate?: estimateUncheckedCreateNestedManyWithoutUserInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutAdjustmentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutAdjustmentInput, userUncheckedCreateWithoutAdjustmentInput>;
  };

  export type estimateUpsertWithoutAdjustmentInput = {
    update: XOR<estimateUpdateWithoutAdjustmentInput, estimateUncheckedUpdateWithoutAdjustmentInput>;
    create: XOR<estimateCreateWithoutAdjustmentInput, estimateUncheckedCreateWithoutAdjustmentInput>;
    where?: estimateWhereInput;
  };

  export type estimateUpdateToOneWithWhereWithoutAdjustmentInput = {
    where?: estimateWhereInput;
    data: XOR<estimateUpdateWithoutAdjustmentInput, estimateUncheckedUpdateWithoutAdjustmentInput>;
  };

  export type estimateUpdateWithoutAdjustmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutEstimateNestedInput;
  };

  export type estimateUncheckedUpdateWithoutAdjustmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutAdjustmentInput = {
    update: XOR<userUpdateWithoutAdjustmentInput, userUncheckedUpdateWithoutAdjustmentInput>;
    create: XOR<userCreateWithoutAdjustmentInput, userUncheckedCreateWithoutAdjustmentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutAdjustmentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutAdjustmentInput, userUncheckedUpdateWithoutAdjustmentInput>;
  };

  export type userUpdateWithoutAdjustmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    estimate?: estimateUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUpdateManyWithoutUserNestedInput;
    business?: businessUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutAdjustmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    business_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    estimate?: estimateUncheckedUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type teamCreateWithoutBusinessInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    team_member?: team_memberCreateNestedManyWithoutTeamInput;
  };

  export type teamUncheckedCreateWithoutBusinessInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    team_member?: team_memberUncheckedCreateNestedManyWithoutTeamInput;
  };

  export type teamCreateOrConnectWithoutBusinessInput = {
    where: teamWhereUniqueInput;
    create: XOR<teamCreateWithoutBusinessInput, teamUncheckedCreateWithoutBusinessInput>;
  };

  export type teamCreateManyBusinessInputEnvelope = {
    data: teamCreateManyBusinessInput | teamCreateManyBusinessInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutBusinessInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    adjustment?: adjustmentCreateNestedManyWithoutUserInput;
    estimate?: estimateCreateNestedManyWithoutUserInput;
    team_member?: team_memberCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutBusinessInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    adjustment?: adjustmentUncheckedCreateNestedManyWithoutUserInput;
    estimate?: estimateUncheckedCreateNestedManyWithoutUserInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutBusinessInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutBusinessInput, userUncheckedCreateWithoutBusinessInput>;
  };

  export type userCreateManyBusinessInputEnvelope = {
    data: userCreateManyBusinessInput | userCreateManyBusinessInput[];
    skipDuplicates?: boolean;
  };

  export type teamUpsertWithWhereUniqueWithoutBusinessInput = {
    where: teamWhereUniqueInput;
    update: XOR<teamUpdateWithoutBusinessInput, teamUncheckedUpdateWithoutBusinessInput>;
    create: XOR<teamCreateWithoutBusinessInput, teamUncheckedCreateWithoutBusinessInput>;
  };

  export type teamUpdateWithWhereUniqueWithoutBusinessInput = {
    where: teamWhereUniqueInput;
    data: XOR<teamUpdateWithoutBusinessInput, teamUncheckedUpdateWithoutBusinessInput>;
  };

  export type teamUpdateManyWithWhereWithoutBusinessInput = {
    where: teamScalarWhereInput;
    data: XOR<teamUpdateManyMutationInput, teamUncheckedUpdateManyWithoutBusinessInput>;
  };

  export type teamScalarWhereInput = {
    AND?: teamScalarWhereInput | teamScalarWhereInput[];
    OR?: teamScalarWhereInput[];
    NOT?: teamScalarWhereInput | teamScalarWhereInput[];
    id?: UuidFilter<'team'> | string;
    business_id?: UuidFilter<'team'> | string;
    name?: StringFilter<'team'> | string;
    description?: StringNullableFilter<'team'> | string | null;
    created_at?: DateTimeFilter<'team'> | Date | string;
    updated_at?: DateTimeFilter<'team'> | Date | string;
  };

  export type userUpsertWithWhereUniqueWithoutBusinessInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutBusinessInput, userUncheckedUpdateWithoutBusinessInput>;
    create: XOR<userCreateWithoutBusinessInput, userUncheckedCreateWithoutBusinessInput>;
  };

  export type userUpdateWithWhereUniqueWithoutBusinessInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutBusinessInput, userUncheckedUpdateWithoutBusinessInput>;
  };

  export type userUpdateManyWithWhereWithoutBusinessInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutBusinessInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    business_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type adjustmentCreateWithoutEstimateInput = {
    id?: string;
    description?: string | null;
    amount?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutAdjustmentInput;
  };

  export type adjustmentUncheckedCreateWithoutEstimateInput = {
    id?: string;
    user_id: string;
    description?: string | null;
    amount?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type adjustmentCreateOrConnectWithoutEstimateInput = {
    where: adjustmentWhereUniqueInput;
    create: XOR<adjustmentCreateWithoutEstimateInput, adjustmentUncheckedCreateWithoutEstimateInput>;
  };

  export type adjustmentCreateManyEstimateInputEnvelope = {
    data: adjustmentCreateManyEstimateInput | adjustmentCreateManyEstimateInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutEstimateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    adjustment?: adjustmentCreateNestedManyWithoutUserInput;
    team_member?: team_memberCreateNestedManyWithoutUserInput;
    business?: businessCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutEstimateInput = {
    id?: string;
    email: string;
    business_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    adjustment?: adjustmentUncheckedCreateNestedManyWithoutUserInput;
    team_member?: team_memberUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutEstimateInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutEstimateInput, userUncheckedCreateWithoutEstimateInput>;
  };

  export type adjustmentUpsertWithWhereUniqueWithoutEstimateInput = {
    where: adjustmentWhereUniqueInput;
    update: XOR<adjustmentUpdateWithoutEstimateInput, adjustmentUncheckedUpdateWithoutEstimateInput>;
    create: XOR<adjustmentCreateWithoutEstimateInput, adjustmentUncheckedCreateWithoutEstimateInput>;
  };

  export type adjustmentUpdateWithWhereUniqueWithoutEstimateInput = {
    where: adjustmentWhereUniqueInput;
    data: XOR<adjustmentUpdateWithoutEstimateInput, adjustmentUncheckedUpdateWithoutEstimateInput>;
  };

  export type adjustmentUpdateManyWithWhereWithoutEstimateInput = {
    where: adjustmentScalarWhereInput;
    data: XOR<adjustmentUpdateManyMutationInput, adjustmentUncheckedUpdateManyWithoutEstimateInput>;
  };

  export type adjustmentScalarWhereInput = {
    AND?: adjustmentScalarWhereInput | adjustmentScalarWhereInput[];
    OR?: adjustmentScalarWhereInput[];
    NOT?: adjustmentScalarWhereInput | adjustmentScalarWhereInput[];
    id?: UuidFilter<'adjustment'> | string;
    estimate_id?: UuidFilter<'adjustment'> | string;
    user_id?: UuidFilter<'adjustment'> | string;
    description?: StringNullableFilter<'adjustment'> | string | null;
    amount?: IntNullableFilter<'adjustment'> | number | null;
    created_at?: DateTimeFilter<'adjustment'> | Date | string;
    updated_at?: DateTimeFilter<'adjustment'> | Date | string;
  };

  export type userUpsertWithoutEstimateInput = {
    update: XOR<userUpdateWithoutEstimateInput, userUncheckedUpdateWithoutEstimateInput>;
    create: XOR<userCreateWithoutEstimateInput, userUncheckedCreateWithoutEstimateInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutEstimateInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutEstimateInput, userUncheckedUpdateWithoutEstimateInput>;
  };

  export type userUpdateWithoutEstimateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    adjustment?: adjustmentUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUpdateManyWithoutUserNestedInput;
    business?: businessUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutEstimateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    business_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    adjustment?: adjustmentUncheckedUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type businessCreateWithoutTeamInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userCreateNestedManyWithoutBusinessInput;
  };

  export type businessUncheckedCreateWithoutTeamInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userUncheckedCreateNestedManyWithoutBusinessInput;
  };

  export type businessCreateOrConnectWithoutTeamInput = {
    where: businessWhereUniqueInput;
    create: XOR<businessCreateWithoutTeamInput, businessUncheckedCreateWithoutTeamInput>;
  };

  export type team_memberCreateWithoutTeamInput = {
    id?: string;
    role?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutTeam_memberInput;
  };

  export type team_memberUncheckedCreateWithoutTeamInput = {
    id?: string;
    user_id: string;
    role?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberCreateOrConnectWithoutTeamInput = {
    where: team_memberWhereUniqueInput;
    create: XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput>;
  };

  export type team_memberCreateManyTeamInputEnvelope = {
    data: team_memberCreateManyTeamInput | team_memberCreateManyTeamInput[];
    skipDuplicates?: boolean;
  };

  export type businessUpsertWithoutTeamInput = {
    update: XOR<businessUpdateWithoutTeamInput, businessUncheckedUpdateWithoutTeamInput>;
    create: XOR<businessCreateWithoutTeamInput, businessUncheckedCreateWithoutTeamInput>;
    where?: businessWhereInput;
  };

  export type businessUpdateToOneWithWhereWithoutTeamInput = {
    where?: businessWhereInput;
    data: XOR<businessUpdateWithoutTeamInput, businessUncheckedUpdateWithoutTeamInput>;
  };

  export type businessUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateManyWithoutBusinessNestedInput;
  };

  export type businessUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUncheckedUpdateManyWithoutBusinessNestedInput;
  };

  export type team_memberUpsertWithWhereUniqueWithoutTeamInput = {
    where: team_memberWhereUniqueInput;
    update: XOR<team_memberUpdateWithoutTeamInput, team_memberUncheckedUpdateWithoutTeamInput>;
    create: XOR<team_memberCreateWithoutTeamInput, team_memberUncheckedCreateWithoutTeamInput>;
  };

  export type team_memberUpdateWithWhereUniqueWithoutTeamInput = {
    where: team_memberWhereUniqueInput;
    data: XOR<team_memberUpdateWithoutTeamInput, team_memberUncheckedUpdateWithoutTeamInput>;
  };

  export type team_memberUpdateManyWithWhereWithoutTeamInput = {
    where: team_memberScalarWhereInput;
    data: XOR<team_memberUpdateManyMutationInput, team_memberUncheckedUpdateManyWithoutTeamInput>;
  };

  export type team_memberScalarWhereInput = {
    AND?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
    OR?: team_memberScalarWhereInput[];
    NOT?: team_memberScalarWhereInput | team_memberScalarWhereInput[];
    id?: UuidFilter<'team_member'> | string;
    team_id?: UuidFilter<'team_member'> | string;
    user_id?: UuidFilter<'team_member'> | string;
    role?: StringNullableFilter<'team_member'> | string | null;
    created_at?: DateTimeFilter<'team_member'> | Date | string;
    updated_at?: DateTimeFilter<'team_member'> | Date | string;
  };

  export type teamCreateWithoutTeam_memberInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    business: businessCreateNestedOneWithoutTeamInput;
  };

  export type teamUncheckedCreateWithoutTeam_memberInput = {
    id?: string;
    business_id: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teamCreateOrConnectWithoutTeam_memberInput = {
    where: teamWhereUniqueInput;
    create: XOR<teamCreateWithoutTeam_memberInput, teamUncheckedCreateWithoutTeam_memberInput>;
  };

  export type userCreateWithoutTeam_memberInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    adjustment?: adjustmentCreateNestedManyWithoutUserInput;
    estimate?: estimateCreateNestedManyWithoutUserInput;
    business?: businessCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTeam_memberInput = {
    id?: string;
    email: string;
    business_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    adjustment?: adjustmentUncheckedCreateNestedManyWithoutUserInput;
    estimate?: estimateUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTeam_memberInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTeam_memberInput, userUncheckedCreateWithoutTeam_memberInput>;
  };

  export type teamUpsertWithoutTeam_memberInput = {
    update: XOR<teamUpdateWithoutTeam_memberInput, teamUncheckedUpdateWithoutTeam_memberInput>;
    create: XOR<teamCreateWithoutTeam_memberInput, teamUncheckedCreateWithoutTeam_memberInput>;
    where?: teamWhereInput;
  };

  export type teamUpdateToOneWithWhereWithoutTeam_memberInput = {
    where?: teamWhereInput;
    data: XOR<teamUpdateWithoutTeam_memberInput, teamUncheckedUpdateWithoutTeam_memberInput>;
  };

  export type teamUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business?: businessUpdateOneRequiredWithoutTeamNestedInput;
  };

  export type teamUncheckedUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutTeam_memberInput = {
    update: XOR<userUpdateWithoutTeam_memberInput, userUncheckedUpdateWithoutTeam_memberInput>;
    create: XOR<userCreateWithoutTeam_memberInput, userUncheckedCreateWithoutTeam_memberInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTeam_memberInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTeam_memberInput, userUncheckedUpdateWithoutTeam_memberInput>;
  };

  export type userUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    adjustment?: adjustmentUpdateManyWithoutUserNestedInput;
    estimate?: estimateUpdateManyWithoutUserNestedInput;
    business?: businessUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTeam_memberInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    business_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    adjustment?: adjustmentUncheckedUpdateManyWithoutUserNestedInput;
    estimate?: estimateUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type adjustmentCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    amount?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    estimate: estimateCreateNestedOneWithoutAdjustmentInput;
  };

  export type adjustmentUncheckedCreateWithoutUserInput = {
    id?: string;
    estimate_id: string;
    description?: string | null;
    amount?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type adjustmentCreateOrConnectWithoutUserInput = {
    where: adjustmentWhereUniqueInput;
    create: XOR<adjustmentCreateWithoutUserInput, adjustmentUncheckedCreateWithoutUserInput>;
  };

  export type adjustmentCreateManyUserInputEnvelope = {
    data: adjustmentCreateManyUserInput | adjustmentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type estimateCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: string | null;
    amount?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    adjustment?: adjustmentCreateNestedManyWithoutEstimateInput;
  };

  export type estimateUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: string | null;
    amount?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    adjustment?: adjustmentUncheckedCreateNestedManyWithoutEstimateInput;
  };

  export type estimateCreateOrConnectWithoutUserInput = {
    where: estimateWhereUniqueInput;
    create: XOR<estimateCreateWithoutUserInput, estimateUncheckedCreateWithoutUserInput>;
  };

  export type estimateCreateManyUserInputEnvelope = {
    data: estimateCreateManyUserInput | estimateCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type team_memberCreateWithoutUserInput = {
    id?: string;
    role?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    team: teamCreateNestedOneWithoutTeam_memberInput;
  };

  export type team_memberUncheckedCreateWithoutUserInput = {
    id?: string;
    team_id: string;
    role?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberCreateOrConnectWithoutUserInput = {
    where: team_memberWhereUniqueInput;
    create: XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>;
  };

  export type team_memberCreateManyUserInputEnvelope = {
    data: team_memberCreateManyUserInput | team_memberCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type businessCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    team?: teamCreateNestedManyWithoutBusinessInput;
  };

  export type businessUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    phone?: string | null;
    website?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    team?: teamUncheckedCreateNestedManyWithoutBusinessInput;
  };

  export type businessCreateOrConnectWithoutUserInput = {
    where: businessWhereUniqueInput;
    create: XOR<businessCreateWithoutUserInput, businessUncheckedCreateWithoutUserInput>;
  };

  export type adjustmentUpsertWithWhereUniqueWithoutUserInput = {
    where: adjustmentWhereUniqueInput;
    update: XOR<adjustmentUpdateWithoutUserInput, adjustmentUncheckedUpdateWithoutUserInput>;
    create: XOR<adjustmentCreateWithoutUserInput, adjustmentUncheckedCreateWithoutUserInput>;
  };

  export type adjustmentUpdateWithWhereUniqueWithoutUserInput = {
    where: adjustmentWhereUniqueInput;
    data: XOR<adjustmentUpdateWithoutUserInput, adjustmentUncheckedUpdateWithoutUserInput>;
  };

  export type adjustmentUpdateManyWithWhereWithoutUserInput = {
    where: adjustmentScalarWhereInput;
    data: XOR<adjustmentUpdateManyMutationInput, adjustmentUncheckedUpdateManyWithoutUserInput>;
  };

  export type estimateUpsertWithWhereUniqueWithoutUserInput = {
    where: estimateWhereUniqueInput;
    update: XOR<estimateUpdateWithoutUserInput, estimateUncheckedUpdateWithoutUserInput>;
    create: XOR<estimateCreateWithoutUserInput, estimateUncheckedCreateWithoutUserInput>;
  };

  export type estimateUpdateWithWhereUniqueWithoutUserInput = {
    where: estimateWhereUniqueInput;
    data: XOR<estimateUpdateWithoutUserInput, estimateUncheckedUpdateWithoutUserInput>;
  };

  export type estimateUpdateManyWithWhereWithoutUserInput = {
    where: estimateScalarWhereInput;
    data: XOR<estimateUpdateManyMutationInput, estimateUncheckedUpdateManyWithoutUserInput>;
  };

  export type estimateScalarWhereInput = {
    AND?: estimateScalarWhereInput | estimateScalarWhereInput[];
    OR?: estimateScalarWhereInput[];
    NOT?: estimateScalarWhereInput | estimateScalarWhereInput[];
    id?: UuidFilter<'estimate'> | string;
    user_id?: UuidFilter<'estimate'> | string;
    title?: StringFilter<'estimate'> | string;
    description?: StringNullableFilter<'estimate'> | string | null;
    status?: StringNullableFilter<'estimate'> | string | null;
    amount?: IntNullableFilter<'estimate'> | number | null;
    created_at?: DateTimeFilter<'estimate'> | Date | string;
    updated_at?: DateTimeFilter<'estimate'> | Date | string;
  };

  export type team_memberUpsertWithWhereUniqueWithoutUserInput = {
    where: team_memberWhereUniqueInput;
    update: XOR<team_memberUpdateWithoutUserInput, team_memberUncheckedUpdateWithoutUserInput>;
    create: XOR<team_memberCreateWithoutUserInput, team_memberUncheckedCreateWithoutUserInput>;
  };

  export type team_memberUpdateWithWhereUniqueWithoutUserInput = {
    where: team_memberWhereUniqueInput;
    data: XOR<team_memberUpdateWithoutUserInput, team_memberUncheckedUpdateWithoutUserInput>;
  };

  export type team_memberUpdateManyWithWhereWithoutUserInput = {
    where: team_memberScalarWhereInput;
    data: XOR<team_memberUpdateManyMutationInput, team_memberUncheckedUpdateManyWithoutUserInput>;
  };

  export type businessUpsertWithoutUserInput = {
    update: XOR<businessUpdateWithoutUserInput, businessUncheckedUpdateWithoutUserInput>;
    create: XOR<businessCreateWithoutUserInput, businessUncheckedCreateWithoutUserInput>;
    where?: businessWhereInput;
  };

  export type businessUpdateToOneWithWhereWithoutUserInput = {
    where?: businessWhereInput;
    data: XOR<businessUpdateWithoutUserInput, businessUncheckedUpdateWithoutUserInput>;
  };

  export type businessUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    team?: teamUpdateManyWithoutBusinessNestedInput;
  };

  export type businessUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    phone?: NullableStringFieldUpdateOperationsInput | string | null;
    website?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    team?: teamUncheckedUpdateManyWithoutBusinessNestedInput;
  };

  export type teamCreateManyBusinessInput = {
    id?: string;
    name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateManyBusinessInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teamUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    team_member?: team_memberUpdateManyWithoutTeamNestedInput;
  };

  export type teamUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    team_member?: team_memberUncheckedUpdateManyWithoutTeamNestedInput;
  };

  export type teamUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    adjustment?: adjustmentUpdateManyWithoutUserNestedInput;
    estimate?: estimateUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    adjustment?: adjustmentUncheckedUpdateManyWithoutUserNestedInput;
    estimate?: estimateUncheckedUpdateManyWithoutUserNestedInput;
    team_member?: team_memberUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateManyWithoutBusinessInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type adjustmentCreateManyEstimateInput = {
    id?: string;
    user_id: string;
    description?: string | null;
    amount?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type adjustmentUpdateWithoutEstimateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutAdjustmentNestedInput;
  };

  export type adjustmentUncheckedUpdateWithoutEstimateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type adjustmentUncheckedUpdateManyWithoutEstimateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberCreateManyTeamInput = {
    id?: string;
    user_id: string;
    role?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutTeam_memberNestedInput;
  };

  export type team_memberUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type adjustmentCreateManyUserInput = {
    id?: string;
    estimate_id: string;
    description?: string | null;
    amount?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type estimateCreateManyUserInput = {
    id?: string;
    title: string;
    description?: string | null;
    status?: string | null;
    amount?: number | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type team_memberCreateManyUserInput = {
    id?: string;
    team_id: string;
    role?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type adjustmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    estimate?: estimateUpdateOneRequiredWithoutAdjustmentNestedInput;
  };

  export type adjustmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    estimate_id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type adjustmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    estimate_id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type estimateUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    adjustment?: adjustmentUpdateManyWithoutEstimateNestedInput;
  };

  export type estimateUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    adjustment?: adjustmentUncheckedUpdateManyWithoutEstimateNestedInput;
  };

  export type estimateUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: NullableStringFieldUpdateOperationsInput | string | null;
    amount?: NullableIntFieldUpdateOperationsInput | number | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    team?: teamUpdateOneRequiredWithoutTeam_memberNestedInput;
  };

  export type team_memberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type team_memberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    team_id?: StringFieldUpdateOperationsInput | string;
    role?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use BusinessCountOutputTypeDefaultArgs instead
   */
  export type BusinessCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    BusinessCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use EstimateCountOutputTypeDefaultArgs instead
   */
  export type EstimateCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    EstimateCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TeamCountOutputTypeDefaultArgs instead
   */
  export type TeamCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    TeamCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use adjustmentDefaultArgs instead
   */
  export type adjustmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    adjustmentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use businessDefaultArgs instead
   */
  export type businessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    businessDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use estimateDefaultArgs instead
   */
  export type estimateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    estimateDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use teamDefaultArgs instead
   */
  export type teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = teamDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use team_memberDefaultArgs instead
   */
  export type team_memberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    team_memberDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
