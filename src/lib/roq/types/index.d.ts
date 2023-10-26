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
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model conversion
 *
 */
export type conversion = $Result.DefaultSelection<Prisma.$conversionPayload>;
/**
 * Model conversion_history
 *
 */
export type conversion_history = $Result.DefaultSelection<Prisma.$conversion_historyPayload>;
/**
 * Model role
 *
 */
export type role = $Result.DefaultSelection<Prisma.$rolePayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;
/**
 * Model user_role
 *
 */
export type user_role = $Result.DefaultSelection<Prisma.$user_rolePayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
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
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
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
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.conversion`: Exposes CRUD operations for the **conversion** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Conversions
   * const conversions = await prisma.conversion.findMany()
   * ```
   */
  get conversion(): Prisma.conversionDelegate<ExtArgs>;

  /**
   * `prisma.conversion_history`: Exposes CRUD operations for the **conversion_history** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Conversion_histories
   * const conversion_histories = await prisma.conversion_history.findMany()
   * ```
   */
  get conversion_history(): Prisma.conversion_historyDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **role** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   */
  get role(): Prisma.roleDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;

  /**
   * `prisma.user_role`: Exposes CRUD operations for the **user_role** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more User_roles
   * const user_roles = await prisma.user_role.findMany()
   * ```
   */
  get user_role(): Prisma.user_roleDelegate<ExtArgs>;
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
    company: 'company';
    conversion: 'conversion';
    conversion_history: 'conversion_history';
    role: 'role';
    user: 'user';
    user_role: 'user_role';
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
      modelProps: 'company' | 'conversion' | 'conversion_history' | 'role' | 'user' | 'user_role';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      conversion: {
        payload: Prisma.$conversionPayload<ExtArgs>;
        fields: Prisma.conversionFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.conversionFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conversionPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.conversionFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conversionPayload>;
          };
          findFirst: {
            args: Prisma.conversionFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conversionPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.conversionFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conversionPayload>;
          };
          findMany: {
            args: Prisma.conversionFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conversionPayload>[];
          };
          create: {
            args: Prisma.conversionCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conversionPayload>;
          };
          createMany: {
            args: Prisma.conversionCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.conversionDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conversionPayload>;
          };
          update: {
            args: Prisma.conversionUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conversionPayload>;
          };
          deleteMany: {
            args: Prisma.conversionDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.conversionUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.conversionUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conversionPayload>;
          };
          aggregate: {
            args: Prisma.ConversionAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateConversion>;
          };
          groupBy: {
            args: Prisma.conversionGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ConversionGroupByOutputType>[];
          };
          count: {
            args: Prisma.conversionCountArgs<ExtArgs>;
            result: $Utils.Optional<ConversionCountAggregateOutputType> | number;
          };
        };
      };
      conversion_history: {
        payload: Prisma.$conversion_historyPayload<ExtArgs>;
        fields: Prisma.conversion_historyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.conversion_historyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conversion_historyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.conversion_historyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conversion_historyPayload>;
          };
          findFirst: {
            args: Prisma.conversion_historyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conversion_historyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.conversion_historyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conversion_historyPayload>;
          };
          findMany: {
            args: Prisma.conversion_historyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conversion_historyPayload>[];
          };
          create: {
            args: Prisma.conversion_historyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conversion_historyPayload>;
          };
          createMany: {
            args: Prisma.conversion_historyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.conversion_historyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conversion_historyPayload>;
          };
          update: {
            args: Prisma.conversion_historyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conversion_historyPayload>;
          };
          deleteMany: {
            args: Prisma.conversion_historyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.conversion_historyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.conversion_historyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$conversion_historyPayload>;
          };
          aggregate: {
            args: Prisma.Conversion_historyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateConversion_history>;
          };
          groupBy: {
            args: Prisma.conversion_historyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Conversion_historyGroupByOutputType>[];
          };
          count: {
            args: Prisma.conversion_historyCountArgs<ExtArgs>;
            result: $Utils.Optional<Conversion_historyCountAggregateOutputType> | number;
          };
        };
      };
      role: {
        payload: Prisma.$rolePayload<ExtArgs>;
        fields: Prisma.roleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.roleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.roleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          findFirst: {
            args: Prisma.roleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.roleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          findMany: {
            args: Prisma.roleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>[];
          };
          create: {
            args: Prisma.roleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          createMany: {
            args: Prisma.roleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.roleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          update: {
            args: Prisma.roleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          deleteMany: {
            args: Prisma.roleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.roleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.roleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$rolePayload>;
          };
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRole>;
          };
          groupBy: {
            args: Prisma.roleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RoleGroupByOutputType>[];
          };
          count: {
            args: Prisma.roleCountArgs<ExtArgs>;
            result: $Utils.Optional<RoleCountAggregateOutputType> | number;
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
      user_role: {
        payload: Prisma.$user_rolePayload<ExtArgs>;
        fields: Prisma.user_roleFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.user_roleFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.user_roleFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>;
          };
          findFirst: {
            args: Prisma.user_roleFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.user_roleFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>;
          };
          findMany: {
            args: Prisma.user_roleFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>[];
          };
          create: {
            args: Prisma.user_roleCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>;
          };
          createMany: {
            args: Prisma.user_roleCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.user_roleDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>;
          };
          update: {
            args: Prisma.user_roleUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>;
          };
          deleteMany: {
            args: Prisma.user_roleDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.user_roleUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.user_roleUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$user_rolePayload>;
          };
          aggregate: {
            args: Prisma.User_roleAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser_role>;
          };
          groupBy: {
            args: Prisma.user_roleGroupByArgs<ExtArgs>;
            result: $Utils.Optional<User_roleGroupByOutputType>[];
          };
          count: {
            args: Prisma.user_roleCountArgs<ExtArgs>;
            result: $Utils.Optional<User_roleCountAggregateOutputType> | number;
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
   * Count Type ConversionCountOutputType
   */

  export type ConversionCountOutputType = {
    conversion_history: number;
  };

  export type ConversionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversion_history?: boolean | ConversionCountOutputTypeCountConversion_historyArgs;
  };

  // Custom InputTypes

  /**
   * ConversionCountOutputType without action
   */
  export type ConversionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the ConversionCountOutputType
       */
      select?: ConversionCountOutputTypeSelect<ExtArgs> | null;
    };

  /**
   * ConversionCountOutputType without action
   */
  export type ConversionCountOutputTypeCountConversion_historyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: conversion_historyWhereInput;
  };

  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    user_role: number;
  };

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_role?: boolean | RoleCountOutputTypeCountUser_roleArgs;
  };

  // Custom InputTypes

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUser_roleArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: user_roleWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    conversion: number;
    conversion_history: number;
    role: number;
    user_role: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversion?: boolean | UserCountOutputTypeCountConversionArgs;
    conversion_history?: boolean | UserCountOutputTypeCountConversion_historyArgs;
    role?: boolean | UserCountOutputTypeCountRoleArgs;
    user_role?: boolean | UserCountOutputTypeCountUser_roleArgs;
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
  export type UserCountOutputTypeCountConversionArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: conversionWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConversion_historyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: conversion_historyWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roleWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUser_roleArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: user_roleWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      tenant_id?: boolean;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tenant_id?: boolean;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

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
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
  };

  /**
   * Model conversion
   */

  export type AggregateConversion = {
    _count: ConversionCountAggregateOutputType | null;
    _avg: ConversionAvgAggregateOutputType | null;
    _sum: ConversionSumAggregateOutputType | null;
    _min: ConversionMinAggregateOutputType | null;
    _max: ConversionMaxAggregateOutputType | null;
  };

  export type ConversionAvgAggregateOutputType = {
    pixel_value: number | null;
    vector_value: number | null;
  };

  export type ConversionSumAggregateOutputType = {
    pixel_value: number | null;
    vector_value: number | null;
  };

  export type ConversionMinAggregateOutputType = {
    id: string | null;
    pixel_value: number | null;
    vector_value: number | null;
    conversion_time: Date | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ConversionMaxAggregateOutputType = {
    id: string | null;
    pixel_value: number | null;
    vector_value: number | null;
    conversion_time: Date | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ConversionCountAggregateOutputType = {
    id: number;
    pixel_value: number;
    vector_value: number;
    conversion_time: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ConversionAvgAggregateInputType = {
    pixel_value?: true;
    vector_value?: true;
  };

  export type ConversionSumAggregateInputType = {
    pixel_value?: true;
    vector_value?: true;
  };

  export type ConversionMinAggregateInputType = {
    id?: true;
    pixel_value?: true;
    vector_value?: true;
    conversion_time?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ConversionMaxAggregateInputType = {
    id?: true;
    pixel_value?: true;
    vector_value?: true;
    conversion_time?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ConversionCountAggregateInputType = {
    id?: true;
    pixel_value?: true;
    vector_value?: true;
    conversion_time?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ConversionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversion to aggregate.
     */
    where?: conversionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of conversions to fetch.
     */
    orderBy?: conversionOrderByWithRelationInput | conversionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: conversionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` conversions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` conversions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned conversions
     **/
    _count?: true | ConversionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ConversionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ConversionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ConversionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ConversionMaxAggregateInputType;
  };

  export type GetConversionAggregateType<T extends ConversionAggregateArgs> = {
    [P in keyof T & keyof AggregateConversion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversion[P]>
      : GetScalarType<T[P], AggregateConversion[P]>;
  };

  export type conversionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversionWhereInput;
    orderBy?: conversionOrderByWithAggregationInput | conversionOrderByWithAggregationInput[];
    by: ConversionScalarFieldEnum[] | ConversionScalarFieldEnum;
    having?: conversionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ConversionCountAggregateInputType | true;
    _avg?: ConversionAvgAggregateInputType;
    _sum?: ConversionSumAggregateInputType;
    _min?: ConversionMinAggregateInputType;
    _max?: ConversionMaxAggregateInputType;
  };

  export type ConversionGroupByOutputType = {
    id: string;
    pixel_value: number;
    vector_value: number;
    conversion_time: Date | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ConversionCountAggregateOutputType | null;
    _avg: ConversionAvgAggregateOutputType | null;
    _sum: ConversionSumAggregateOutputType | null;
    _min: ConversionMinAggregateOutputType | null;
    _max: ConversionMaxAggregateOutputType | null;
  };

  type GetConversionGroupByPayload<T extends conversionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConversionGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ConversionGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ConversionGroupByOutputType[P]>
          : GetScalarType<T[P], ConversionGroupByOutputType[P]>;
      }
    >
  >;

  export type conversionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        pixel_value?: boolean;
        vector_value?: boolean;
        conversion_time?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
        conversion_history?: boolean | conversion$conversion_historyArgs<ExtArgs>;
        _count?: boolean | ConversionCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['conversion']
    >;

  export type conversionSelectScalar = {
    id?: boolean;
    pixel_value?: boolean;
    vector_value?: boolean;
    conversion_time?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type conversionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    conversion_history?: boolean | conversion$conversion_historyArgs<ExtArgs>;
    _count?: boolean | ConversionCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $conversionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'conversion';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      conversion_history: Prisma.$conversion_historyPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        pixel_value: number;
        vector_value: number;
        conversion_time: Date | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['conversion']
    >;
    composites: {};
  };

  type conversionGetPayload<S extends boolean | null | undefined | conversionDefaultArgs> = $Result.GetResult<
    Prisma.$conversionPayload,
    S
  >;

  type conversionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    conversionFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ConversionCountAggregateInputType | true;
  };

  export interface conversionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['conversion']; meta: { name: 'conversion' } };
    /**
     * Find zero or one Conversion that matches the filter.
     * @param {conversionFindUniqueArgs} args - Arguments to find a Conversion
     * @example
     * // Get one Conversion
     * const conversion = await prisma.conversion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends conversionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, conversionFindUniqueArgs<ExtArgs>>,
    ): Prisma__conversionClient<
      $Result.GetResult<Prisma.$conversionPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Conversion that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {conversionFindUniqueOrThrowArgs} args - Arguments to find a Conversion
     * @example
     * // Get one Conversion
     * const conversion = await prisma.conversion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends conversionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, conversionFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__conversionClient<
      $Result.GetResult<Prisma.$conversionPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Conversion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversionFindFirstArgs} args - Arguments to find a Conversion
     * @example
     * // Get one Conversion
     * const conversion = await prisma.conversion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends conversionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, conversionFindFirstArgs<ExtArgs>>,
    ): Prisma__conversionClient<
      $Result.GetResult<Prisma.$conversionPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Conversion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversionFindFirstOrThrowArgs} args - Arguments to find a Conversion
     * @example
     * // Get one Conversion
     * const conversion = await prisma.conversion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends conversionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, conversionFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__conversionClient<
      $Result.GetResult<Prisma.$conversionPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Conversions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversions
     * const conversions = await prisma.conversion.findMany()
     *
     * // Get first 10 Conversions
     * const conversions = await prisma.conversion.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const conversionWithIdOnly = await prisma.conversion.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends conversionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, conversionFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversionPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Conversion.
     * @param {conversionCreateArgs} args - Arguments to create a Conversion.
     * @example
     * // Create one Conversion
     * const Conversion = await prisma.conversion.create({
     *   data: {
     *     // ... data to create a Conversion
     *   }
     * })
     *
     **/
    create<T extends conversionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, conversionCreateArgs<ExtArgs>>,
    ): Prisma__conversionClient<$Result.GetResult<Prisma.$conversionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Conversions.
     *     @param {conversionCreateManyArgs} args - Arguments to create many Conversions.
     *     @example
     *     // Create many Conversions
     *     const conversion = await prisma.conversion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends conversionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, conversionCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Conversion.
     * @param {conversionDeleteArgs} args - Arguments to delete one Conversion.
     * @example
     * // Delete one Conversion
     * const Conversion = await prisma.conversion.delete({
     *   where: {
     *     // ... filter to delete one Conversion
     *   }
     * })
     *
     **/
    delete<T extends conversionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, conversionDeleteArgs<ExtArgs>>,
    ): Prisma__conversionClient<$Result.GetResult<Prisma.$conversionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Conversion.
     * @param {conversionUpdateArgs} args - Arguments to update one Conversion.
     * @example
     * // Update one Conversion
     * const conversion = await prisma.conversion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends conversionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, conversionUpdateArgs<ExtArgs>>,
    ): Prisma__conversionClient<$Result.GetResult<Prisma.$conversionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Conversions.
     * @param {conversionDeleteManyArgs} args - Arguments to filter Conversions to delete.
     * @example
     * // Delete a few Conversions
     * const { count } = await prisma.conversion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends conversionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, conversionDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Conversions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversions
     * const conversion = await prisma.conversion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends conversionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, conversionUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Conversion.
     * @param {conversionUpsertArgs} args - Arguments to update or create a Conversion.
     * @example
     * // Update or create a Conversion
     * const conversion = await prisma.conversion.upsert({
     *   create: {
     *     // ... data to create a Conversion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversion we want to update
     *   }
     * })
     **/
    upsert<T extends conversionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, conversionUpsertArgs<ExtArgs>>,
    ): Prisma__conversionClient<$Result.GetResult<Prisma.$conversionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Conversions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversionCountArgs} args - Arguments to filter Conversions to count.
     * @example
     * // Count the number of Conversions
     * const count = await prisma.conversion.count({
     *   where: {
     *     // ... the filter for the Conversions we want to count
     *   }
     * })
     **/
    count<T extends conversionCountArgs>(
      args?: Subset<T, conversionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConversionCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Conversion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConversionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConversionAggregateArgs>(
      args: Subset<T, ConversionAggregateArgs>,
    ): Prisma.PrismaPromise<GetConversionAggregateType<T>>;

    /**
     * Group by Conversion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversionGroupByArgs} args - Group by arguments.
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
      T extends conversionGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: conversionGroupByArgs['orderBy'] }
        : { orderBy?: conversionGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, conversionGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetConversionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the conversion model
     */
    readonly fields: conversionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for conversion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__conversionClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    conversion_history<T extends conversion$conversion_historyArgs<ExtArgs> = {}>(
      args?: Subset<T, conversion$conversion_historyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversion_historyPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the conversion model
   */
  interface conversionFieldRefs {
    readonly id: FieldRef<'conversion', 'String'>;
    readonly pixel_value: FieldRef<'conversion', 'Int'>;
    readonly vector_value: FieldRef<'conversion', 'Int'>;
    readonly conversion_time: FieldRef<'conversion', 'DateTime'>;
    readonly user_id: FieldRef<'conversion', 'String'>;
    readonly created_at: FieldRef<'conversion', 'DateTime'>;
    readonly updated_at: FieldRef<'conversion', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * conversion findUnique
   */
  export type conversionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion
     */
    select?: conversionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversionInclude<ExtArgs> | null;
    /**
     * Filter, which conversion to fetch.
     */
    where: conversionWhereUniqueInput;
  };

  /**
   * conversion findUniqueOrThrow
   */
  export type conversionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion
     */
    select?: conversionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversionInclude<ExtArgs> | null;
    /**
     * Filter, which conversion to fetch.
     */
    where: conversionWhereUniqueInput;
  };

  /**
   * conversion findFirst
   */
  export type conversionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion
     */
    select?: conversionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversionInclude<ExtArgs> | null;
    /**
     * Filter, which conversion to fetch.
     */
    where?: conversionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of conversions to fetch.
     */
    orderBy?: conversionOrderByWithRelationInput | conversionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for conversions.
     */
    cursor?: conversionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` conversions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` conversions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of conversions.
     */
    distinct?: ConversionScalarFieldEnum | ConversionScalarFieldEnum[];
  };

  /**
   * conversion findFirstOrThrow
   */
  export type conversionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion
     */
    select?: conversionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversionInclude<ExtArgs> | null;
    /**
     * Filter, which conversion to fetch.
     */
    where?: conversionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of conversions to fetch.
     */
    orderBy?: conversionOrderByWithRelationInput | conversionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for conversions.
     */
    cursor?: conversionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` conversions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` conversions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of conversions.
     */
    distinct?: ConversionScalarFieldEnum | ConversionScalarFieldEnum[];
  };

  /**
   * conversion findMany
   */
  export type conversionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion
     */
    select?: conversionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversionInclude<ExtArgs> | null;
    /**
     * Filter, which conversions to fetch.
     */
    where?: conversionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of conversions to fetch.
     */
    orderBy?: conversionOrderByWithRelationInput | conversionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing conversions.
     */
    cursor?: conversionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` conversions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` conversions.
     */
    skip?: number;
    distinct?: ConversionScalarFieldEnum | ConversionScalarFieldEnum[];
  };

  /**
   * conversion create
   */
  export type conversionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion
     */
    select?: conversionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversionInclude<ExtArgs> | null;
    /**
     * The data needed to create a conversion.
     */
    data: XOR<conversionCreateInput, conversionUncheckedCreateInput>;
  };

  /**
   * conversion createMany
   */
  export type conversionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many conversions.
     */
    data: conversionCreateManyInput | conversionCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * conversion update
   */
  export type conversionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion
     */
    select?: conversionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversionInclude<ExtArgs> | null;
    /**
     * The data needed to update a conversion.
     */
    data: XOR<conversionUpdateInput, conversionUncheckedUpdateInput>;
    /**
     * Choose, which conversion to update.
     */
    where: conversionWhereUniqueInput;
  };

  /**
   * conversion updateMany
   */
  export type conversionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update conversions.
     */
    data: XOR<conversionUpdateManyMutationInput, conversionUncheckedUpdateManyInput>;
    /**
     * Filter which conversions to update
     */
    where?: conversionWhereInput;
  };

  /**
   * conversion upsert
   */
  export type conversionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion
     */
    select?: conversionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversionInclude<ExtArgs> | null;
    /**
     * The filter to search for the conversion to update in case it exists.
     */
    where: conversionWhereUniqueInput;
    /**
     * In case the conversion found by the `where` argument doesn't exist, create a new conversion with this data.
     */
    create: XOR<conversionCreateInput, conversionUncheckedCreateInput>;
    /**
     * In case the conversion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<conversionUpdateInput, conversionUncheckedUpdateInput>;
  };

  /**
   * conversion delete
   */
  export type conversionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion
     */
    select?: conversionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversionInclude<ExtArgs> | null;
    /**
     * Filter which conversion to delete.
     */
    where: conversionWhereUniqueInput;
  };

  /**
   * conversion deleteMany
   */
  export type conversionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversions to delete
     */
    where?: conversionWhereInput;
  };

  /**
   * conversion.conversion_history
   */
  export type conversion$conversion_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion_history
     */
    select?: conversion_historySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversion_historyInclude<ExtArgs> | null;
    where?: conversion_historyWhereInput;
    orderBy?: conversion_historyOrderByWithRelationInput | conversion_historyOrderByWithRelationInput[];
    cursor?: conversion_historyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Conversion_historyScalarFieldEnum | Conversion_historyScalarFieldEnum[];
  };

  /**
   * conversion without action
   */
  export type conversionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion
     */
    select?: conversionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversionInclude<ExtArgs> | null;
  };

  /**
   * Model conversion_history
   */

  export type AggregateConversion_history = {
    _count: Conversion_historyCountAggregateOutputType | null;
    _min: Conversion_historyMinAggregateOutputType | null;
    _max: Conversion_historyMaxAggregateOutputType | null;
  };

  export type Conversion_historyMinAggregateOutputType = {
    id: string | null;
    conversion_id: string | null;
    user_id: string | null;
    timestamp: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Conversion_historyMaxAggregateOutputType = {
    id: string | null;
    conversion_id: string | null;
    user_id: string | null;
    timestamp: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Conversion_historyCountAggregateOutputType = {
    id: number;
    conversion_id: number;
    user_id: number;
    timestamp: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Conversion_historyMinAggregateInputType = {
    id?: true;
    conversion_id?: true;
    user_id?: true;
    timestamp?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Conversion_historyMaxAggregateInputType = {
    id?: true;
    conversion_id?: true;
    user_id?: true;
    timestamp?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Conversion_historyCountAggregateInputType = {
    id?: true;
    conversion_id?: true;
    user_id?: true;
    timestamp?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Conversion_historyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversion_history to aggregate.
     */
    where?: conversion_historyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of conversion_histories to fetch.
     */
    orderBy?: conversion_historyOrderByWithRelationInput | conversion_historyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: conversion_historyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` conversion_histories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` conversion_histories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned conversion_histories
     **/
    _count?: true | Conversion_historyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Conversion_historyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Conversion_historyMaxAggregateInputType;
  };

  export type GetConversion_historyAggregateType<T extends Conversion_historyAggregateArgs> = {
    [P in keyof T & keyof AggregateConversion_history]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConversion_history[P]>
      : GetScalarType<T[P], AggregateConversion_history[P]>;
  };

  export type conversion_historyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: conversion_historyWhereInput;
    orderBy?: conversion_historyOrderByWithAggregationInput | conversion_historyOrderByWithAggregationInput[];
    by: Conversion_historyScalarFieldEnum[] | Conversion_historyScalarFieldEnum;
    having?: conversion_historyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Conversion_historyCountAggregateInputType | true;
    _min?: Conversion_historyMinAggregateInputType;
    _max?: Conversion_historyMaxAggregateInputType;
  };

  export type Conversion_historyGroupByOutputType = {
    id: string;
    conversion_id: string;
    user_id: string;
    timestamp: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: Conversion_historyCountAggregateOutputType | null;
    _min: Conversion_historyMinAggregateOutputType | null;
    _max: Conversion_historyMaxAggregateOutputType | null;
  };

  type GetConversion_historyGroupByPayload<T extends conversion_historyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Conversion_historyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Conversion_historyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Conversion_historyGroupByOutputType[P]>
          : GetScalarType<T[P], Conversion_historyGroupByOutputType[P]>;
      }
    >
  >;

  export type conversion_historySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        conversion_id?: boolean;
        user_id?: boolean;
        timestamp?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        conversion?: boolean | conversionDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['conversion_history']
    >;

  export type conversion_historySelectScalar = {
    id?: boolean;
    conversion_id?: boolean;
    user_id?: boolean;
    timestamp?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type conversion_historyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversion?: boolean | conversionDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $conversion_historyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'conversion_history';
    objects: {
      conversion: Prisma.$conversionPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        conversion_id: string;
        user_id: string;
        timestamp: Date | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['conversion_history']
    >;
    composites: {};
  };

  type conversion_historyGetPayload<S extends boolean | null | undefined | conversion_historyDefaultArgs> =
    $Result.GetResult<Prisma.$conversion_historyPayload, S>;

  type conversion_historyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    conversion_historyFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Conversion_historyCountAggregateInputType | true;
  };

  export interface conversion_historyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['conversion_history'];
      meta: { name: 'conversion_history' };
    };
    /**
     * Find zero or one Conversion_history that matches the filter.
     * @param {conversion_historyFindUniqueArgs} args - Arguments to find a Conversion_history
     * @example
     * // Get one Conversion_history
     * const conversion_history = await prisma.conversion_history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends conversion_historyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, conversion_historyFindUniqueArgs<ExtArgs>>,
    ): Prisma__conversion_historyClient<
      $Result.GetResult<Prisma.$conversion_historyPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Conversion_history that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {conversion_historyFindUniqueOrThrowArgs} args - Arguments to find a Conversion_history
     * @example
     * // Get one Conversion_history
     * const conversion_history = await prisma.conversion_history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends conversion_historyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, conversion_historyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__conversion_historyClient<
      $Result.GetResult<Prisma.$conversion_historyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Conversion_history that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversion_historyFindFirstArgs} args - Arguments to find a Conversion_history
     * @example
     * // Get one Conversion_history
     * const conversion_history = await prisma.conversion_history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends conversion_historyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, conversion_historyFindFirstArgs<ExtArgs>>,
    ): Prisma__conversion_historyClient<
      $Result.GetResult<Prisma.$conversion_historyPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Conversion_history that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversion_historyFindFirstOrThrowArgs} args - Arguments to find a Conversion_history
     * @example
     * // Get one Conversion_history
     * const conversion_history = await prisma.conversion_history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends conversion_historyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, conversion_historyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__conversion_historyClient<
      $Result.GetResult<Prisma.$conversion_historyPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Conversion_histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversion_historyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conversion_histories
     * const conversion_histories = await prisma.conversion_history.findMany()
     *
     * // Get first 10 Conversion_histories
     * const conversion_histories = await prisma.conversion_history.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const conversion_historyWithIdOnly = await prisma.conversion_history.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends conversion_historyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, conversion_historyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversion_historyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Conversion_history.
     * @param {conversion_historyCreateArgs} args - Arguments to create a Conversion_history.
     * @example
     * // Create one Conversion_history
     * const Conversion_history = await prisma.conversion_history.create({
     *   data: {
     *     // ... data to create a Conversion_history
     *   }
     * })
     *
     **/
    create<T extends conversion_historyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, conversion_historyCreateArgs<ExtArgs>>,
    ): Prisma__conversion_historyClient<
      $Result.GetResult<Prisma.$conversion_historyPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Conversion_histories.
     *     @param {conversion_historyCreateManyArgs} args - Arguments to create many Conversion_histories.
     *     @example
     *     // Create many Conversion_histories
     *     const conversion_history = await prisma.conversion_history.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends conversion_historyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, conversion_historyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Conversion_history.
     * @param {conversion_historyDeleteArgs} args - Arguments to delete one Conversion_history.
     * @example
     * // Delete one Conversion_history
     * const Conversion_history = await prisma.conversion_history.delete({
     *   where: {
     *     // ... filter to delete one Conversion_history
     *   }
     * })
     *
     **/
    delete<T extends conversion_historyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, conversion_historyDeleteArgs<ExtArgs>>,
    ): Prisma__conversion_historyClient<
      $Result.GetResult<Prisma.$conversion_historyPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Conversion_history.
     * @param {conversion_historyUpdateArgs} args - Arguments to update one Conversion_history.
     * @example
     * // Update one Conversion_history
     * const conversion_history = await prisma.conversion_history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends conversion_historyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, conversion_historyUpdateArgs<ExtArgs>>,
    ): Prisma__conversion_historyClient<
      $Result.GetResult<Prisma.$conversion_historyPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Conversion_histories.
     * @param {conversion_historyDeleteManyArgs} args - Arguments to filter Conversion_histories to delete.
     * @example
     * // Delete a few Conversion_histories
     * const { count } = await prisma.conversion_history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends conversion_historyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, conversion_historyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Conversion_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversion_historyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conversion_histories
     * const conversion_history = await prisma.conversion_history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends conversion_historyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, conversion_historyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Conversion_history.
     * @param {conversion_historyUpsertArgs} args - Arguments to update or create a Conversion_history.
     * @example
     * // Update or create a Conversion_history
     * const conversion_history = await prisma.conversion_history.upsert({
     *   create: {
     *     // ... data to create a Conversion_history
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conversion_history we want to update
     *   }
     * })
     **/
    upsert<T extends conversion_historyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, conversion_historyUpsertArgs<ExtArgs>>,
    ): Prisma__conversion_historyClient<
      $Result.GetResult<Prisma.$conversion_historyPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Conversion_histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversion_historyCountArgs} args - Arguments to filter Conversion_histories to count.
     * @example
     * // Count the number of Conversion_histories
     * const count = await prisma.conversion_history.count({
     *   where: {
     *     // ... the filter for the Conversion_histories we want to count
     *   }
     * })
     **/
    count<T extends conversion_historyCountArgs>(
      args?: Subset<T, conversion_historyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Conversion_historyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Conversion_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Conversion_historyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Conversion_historyAggregateArgs>(
      args: Subset<T, Conversion_historyAggregateArgs>,
    ): Prisma.PrismaPromise<GetConversion_historyAggregateType<T>>;

    /**
     * Group by Conversion_history.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {conversion_historyGroupByArgs} args - Group by arguments.
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
      T extends conversion_historyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: conversion_historyGroupByArgs['orderBy'] }
        : { orderBy?: conversion_historyGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, conversion_historyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetConversion_historyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the conversion_history model
     */
    readonly fields: conversion_historyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for conversion_history.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__conversion_historyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    conversion<T extends conversionDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, conversionDefaultArgs<ExtArgs>>,
    ): Prisma__conversionClient<
      $Result.GetResult<Prisma.$conversionPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
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
   * Fields of the conversion_history model
   */
  interface conversion_historyFieldRefs {
    readonly id: FieldRef<'conversion_history', 'String'>;
    readonly conversion_id: FieldRef<'conversion_history', 'String'>;
    readonly user_id: FieldRef<'conversion_history', 'String'>;
    readonly timestamp: FieldRef<'conversion_history', 'DateTime'>;
    readonly created_at: FieldRef<'conversion_history', 'DateTime'>;
    readonly updated_at: FieldRef<'conversion_history', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * conversion_history findUnique
   */
  export type conversion_historyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion_history
     */
    select?: conversion_historySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversion_historyInclude<ExtArgs> | null;
    /**
     * Filter, which conversion_history to fetch.
     */
    where: conversion_historyWhereUniqueInput;
  };

  /**
   * conversion_history findUniqueOrThrow
   */
  export type conversion_historyFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the conversion_history
     */
    select?: conversion_historySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversion_historyInclude<ExtArgs> | null;
    /**
     * Filter, which conversion_history to fetch.
     */
    where: conversion_historyWhereUniqueInput;
  };

  /**
   * conversion_history findFirst
   */
  export type conversion_historyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion_history
     */
    select?: conversion_historySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversion_historyInclude<ExtArgs> | null;
    /**
     * Filter, which conversion_history to fetch.
     */
    where?: conversion_historyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of conversion_histories to fetch.
     */
    orderBy?: conversion_historyOrderByWithRelationInput | conversion_historyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for conversion_histories.
     */
    cursor?: conversion_historyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` conversion_histories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` conversion_histories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of conversion_histories.
     */
    distinct?: Conversion_historyScalarFieldEnum | Conversion_historyScalarFieldEnum[];
  };

  /**
   * conversion_history findFirstOrThrow
   */
  export type conversion_historyFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the conversion_history
     */
    select?: conversion_historySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversion_historyInclude<ExtArgs> | null;
    /**
     * Filter, which conversion_history to fetch.
     */
    where?: conversion_historyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of conversion_histories to fetch.
     */
    orderBy?: conversion_historyOrderByWithRelationInput | conversion_historyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for conversion_histories.
     */
    cursor?: conversion_historyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` conversion_histories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` conversion_histories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of conversion_histories.
     */
    distinct?: Conversion_historyScalarFieldEnum | Conversion_historyScalarFieldEnum[];
  };

  /**
   * conversion_history findMany
   */
  export type conversion_historyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion_history
     */
    select?: conversion_historySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversion_historyInclude<ExtArgs> | null;
    /**
     * Filter, which conversion_histories to fetch.
     */
    where?: conversion_historyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of conversion_histories to fetch.
     */
    orderBy?: conversion_historyOrderByWithRelationInput | conversion_historyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing conversion_histories.
     */
    cursor?: conversion_historyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` conversion_histories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` conversion_histories.
     */
    skip?: number;
    distinct?: Conversion_historyScalarFieldEnum | Conversion_historyScalarFieldEnum[];
  };

  /**
   * conversion_history create
   */
  export type conversion_historyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion_history
     */
    select?: conversion_historySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversion_historyInclude<ExtArgs> | null;
    /**
     * The data needed to create a conversion_history.
     */
    data: XOR<conversion_historyCreateInput, conversion_historyUncheckedCreateInput>;
  };

  /**
   * conversion_history createMany
   */
  export type conversion_historyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many conversion_histories.
     */
    data: conversion_historyCreateManyInput | conversion_historyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * conversion_history update
   */
  export type conversion_historyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion_history
     */
    select?: conversion_historySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversion_historyInclude<ExtArgs> | null;
    /**
     * The data needed to update a conversion_history.
     */
    data: XOR<conversion_historyUpdateInput, conversion_historyUncheckedUpdateInput>;
    /**
     * Choose, which conversion_history to update.
     */
    where: conversion_historyWhereUniqueInput;
  };

  /**
   * conversion_history updateMany
   */
  export type conversion_historyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update conversion_histories.
     */
    data: XOR<conversion_historyUpdateManyMutationInput, conversion_historyUncheckedUpdateManyInput>;
    /**
     * Filter which conversion_histories to update
     */
    where?: conversion_historyWhereInput;
  };

  /**
   * conversion_history upsert
   */
  export type conversion_historyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion_history
     */
    select?: conversion_historySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversion_historyInclude<ExtArgs> | null;
    /**
     * The filter to search for the conversion_history to update in case it exists.
     */
    where: conversion_historyWhereUniqueInput;
    /**
     * In case the conversion_history found by the `where` argument doesn't exist, create a new conversion_history with this data.
     */
    create: XOR<conversion_historyCreateInput, conversion_historyUncheckedCreateInput>;
    /**
     * In case the conversion_history was found with the provided `where` argument, update it with this data.
     */
    update: XOR<conversion_historyUpdateInput, conversion_historyUncheckedUpdateInput>;
  };

  /**
   * conversion_history delete
   */
  export type conversion_historyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion_history
     */
    select?: conversion_historySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversion_historyInclude<ExtArgs> | null;
    /**
     * Filter which conversion_history to delete.
     */
    where: conversion_historyWhereUniqueInput;
  };

  /**
   * conversion_history deleteMany
   */
  export type conversion_historyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which conversion_histories to delete
     */
    where?: conversion_historyWhereInput;
  };

  /**
   * conversion_history without action
   */
  export type conversion_historyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion_history
     */
    select?: conversion_historySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversion_historyInclude<ExtArgs> | null;
  };

  /**
   * Model role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null;
    _min: RoleMinAggregateOutputType | null;
    _max: RoleMaxAggregateOutputType | null;
  };

  export type RoleMinAggregateOutputType = {
    id: string | null;
    role_name: string | null;
    description: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RoleMaxAggregateOutputType = {
    id: string | null;
    role_name: string | null;
    description: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type RoleCountAggregateOutputType = {
    id: number;
    role_name: number;
    description: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type RoleMinAggregateInputType = {
    id?: true;
    role_name?: true;
    description?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RoleMaxAggregateInputType = {
    id?: true;
    role_name?: true;
    description?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type RoleCountAggregateInputType = {
    id?: true;
    role_name?: true;
    description?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which role to aggregate.
     */
    where?: roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned roles
     **/
    _count?: true | RoleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RoleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RoleMaxAggregateInputType;
  };

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
    [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>;
  };

  export type roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: roleWhereInput;
    orderBy?: roleOrderByWithAggregationInput | roleOrderByWithAggregationInput[];
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum;
    having?: roleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoleCountAggregateInputType | true;
    _min?: RoleMinAggregateInputType;
    _max?: RoleMaxAggregateInputType;
  };

  export type RoleGroupByOutputType = {
    id: string;
    role_name: string;
    description: string | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: RoleCountAggregateOutputType | null;
    _min: RoleMinAggregateOutputType | null;
    _max: RoleMaxAggregateOutputType | null;
  };

  type GetRoleGroupByPayload<T extends roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof RoleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
          : GetScalarType<T[P], RoleGroupByOutputType[P]>;
      }
    >
  >;

  export type roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      role_name?: boolean;
      description?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      user_role?: boolean | role$user_roleArgs<ExtArgs>;
      _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['role']
  >;

  export type roleSelectScalar = {
    id?: boolean;
    role_name?: boolean;
    description?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    user_role?: boolean | role$user_roleArgs<ExtArgs>;
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'role';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      user_role: Prisma.$user_rolePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        role_name: string;
        description: string | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['role']
    >;
    composites: {};
  };

  type roleGetPayload<S extends boolean | null | undefined | roleDefaultArgs> = $Result.GetResult<
    Prisma.$rolePayload,
    S
  >;

  type roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    roleFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: RoleCountAggregateInputType | true;
  };

  export interface roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['role']; meta: { name: 'role' } };
    /**
     * Find zero or one Role that matches the filter.
     * @param {roleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends roleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, roleFindUniqueArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Role that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {roleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends roleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends roleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindFirstArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends roleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     *
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends roleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, roleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Role.
     * @param {roleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     *
     **/
    create<T extends roleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, roleCreateArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Roles.
     *     @param {roleCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const role = await prisma.role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends roleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, roleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Role.
     * @param {roleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     *
     **/
    delete<T extends roleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, roleDeleteArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Role.
     * @param {roleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends roleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, roleUpdateArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Roles.
     * @param {roleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends roleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, roleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends roleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, roleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Role.
     * @param {roleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     **/
    upsert<T extends roleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, roleUpsertArgs<ExtArgs>>,
    ): Prisma__roleClient<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
     **/
    count<T extends roleCountArgs>(
      args?: Subset<T, roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(
      args: Subset<T, RoleAggregateArgs>,
    ): Prisma.PrismaPromise<GetRoleAggregateType<T>>;

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {roleGroupByArgs} args - Group by arguments.
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
      T extends roleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: roleGroupByArgs['orderBy'] }
        : { orderBy?: roleGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, roleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the role model
     */
    readonly fields: roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__roleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user_role<T extends role$user_roleArgs<ExtArgs> = {}>(
      args?: Subset<T, role$user_roleArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the role model
   */
  interface roleFieldRefs {
    readonly id: FieldRef<'role', 'String'>;
    readonly role_name: FieldRef<'role', 'String'>;
    readonly description: FieldRef<'role', 'String'>;
    readonly user_id: FieldRef<'role', 'String'>;
    readonly created_at: FieldRef<'role', 'DateTime'>;
    readonly updated_at: FieldRef<'role', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * role findUnique
   */
  export type roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput;
  };

  /**
   * role findUniqueOrThrow
   */
  export type roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
    /**
     * Filter, which role to fetch.
     */
    where: roleWhereUniqueInput;
  };

  /**
   * role findFirst
   */
  export type roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[];
  };

  /**
   * role findFirstOrThrow
   */
  export type roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
    /**
     * Filter, which role to fetch.
     */
    where?: roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for roles.
     */
    cursor?: roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[];
  };

  /**
   * role findMany
   */
  export type roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
    /**
     * Filter, which roles to fetch.
     */
    where?: roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of roles to fetch.
     */
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing roles.
     */
    cursor?: roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` roles.
     */
    skip?: number;
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[];
  };

  /**
   * role create
   */
  export type roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
    /**
     * The data needed to create a role.
     */
    data: XOR<roleCreateInput, roleUncheckedCreateInput>;
  };

  /**
   * role createMany
   */
  export type roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many roles.
     */
    data: roleCreateManyInput | roleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * role update
   */
  export type roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
    /**
     * The data needed to update a role.
     */
    data: XOR<roleUpdateInput, roleUncheckedUpdateInput>;
    /**
     * Choose, which role to update.
     */
    where: roleWhereUniqueInput;
  };

  /**
   * role updateMany
   */
  export type roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update roles.
     */
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyInput>;
    /**
     * Filter which roles to update
     */
    where?: roleWhereInput;
  };

  /**
   * role upsert
   */
  export type roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
    /**
     * The filter to search for the role to update in case it exists.
     */
    where: roleWhereUniqueInput;
    /**
     * In case the role found by the `where` argument doesn't exist, create a new role with this data.
     */
    create: XOR<roleCreateInput, roleUncheckedCreateInput>;
    /**
     * In case the role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<roleUpdateInput, roleUncheckedUpdateInput>;
  };

  /**
   * role delete
   */
  export type roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
    /**
     * Filter which role to delete.
     */
    where: roleWhereUniqueInput;
  };

  /**
   * role deleteMany
   */
  export type roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which roles to delete
     */
    where?: roleWhereInput;
  };

  /**
   * role.user_role
   */
  export type role$user_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    where?: user_roleWhereInput;
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[];
    cursor?: user_roleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[];
  };

  /**
   * role without action
   */
  export type roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
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
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    roq_user_id?: true;
    tenant_id?: true;
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
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    roq_user_id: string;
    tenant_id: string;
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
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      conversion?: boolean | user$conversionArgs<ExtArgs>;
      conversion_history?: boolean | user$conversion_historyArgs<ExtArgs>;
      role?: boolean | user$roleArgs<ExtArgs>;
      user_role?: boolean | user$user_roleArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conversion?: boolean | user$conversionArgs<ExtArgs>;
    conversion_history?: boolean | user$conversion_historyArgs<ExtArgs>;
    role?: boolean | user$roleArgs<ExtArgs>;
    user_role?: boolean | user$user_roleArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      conversion: Prisma.$conversionPayload<ExtArgs>[];
      conversion_history: Prisma.$conversion_historyPayload<ExtArgs>[];
      role: Prisma.$rolePayload<ExtArgs>[];
      user_role: Prisma.$user_rolePayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        roq_user_id: string;
        tenant_id: string;
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

    conversion<T extends user$conversionArgs<ExtArgs> = {}>(
      args?: Subset<T, user$conversionArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversionPayload<ExtArgs>, T, 'findMany'> | Null>;

    conversion_history<T extends user$conversion_historyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$conversion_historyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$conversion_historyPayload<ExtArgs>, T, 'findMany'> | Null>;

    role<T extends user$roleArgs<ExtArgs> = {}>(
      args?: Subset<T, user$roleArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findMany'> | Null>;

    user_role<T extends user$user_roleArgs<ExtArgs> = {}>(
      args?: Subset<T, user$user_roleArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
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
   * user.conversion
   */
  export type user$conversionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion
     */
    select?: conversionSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversionInclude<ExtArgs> | null;
    where?: conversionWhereInput;
    orderBy?: conversionOrderByWithRelationInput | conversionOrderByWithRelationInput[];
    cursor?: conversionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ConversionScalarFieldEnum | ConversionScalarFieldEnum[];
  };

  /**
   * user.conversion_history
   */
  export type user$conversion_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the conversion_history
     */
    select?: conversion_historySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: conversion_historyInclude<ExtArgs> | null;
    where?: conversion_historyWhereInput;
    orderBy?: conversion_historyOrderByWithRelationInput | conversion_historyOrderByWithRelationInput[];
    cursor?: conversion_historyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Conversion_historyScalarFieldEnum | Conversion_historyScalarFieldEnum[];
  };

  /**
   * user.role
   */
  export type user$roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the role
     */
    select?: roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: roleInclude<ExtArgs> | null;
    where?: roleWhereInput;
    orderBy?: roleOrderByWithRelationInput | roleOrderByWithRelationInput[];
    cursor?: roleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[];
  };

  /**
   * user.user_role
   */
  export type user$user_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    where?: user_roleWhereInput;
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[];
    cursor?: user_roleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[];
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
   * Model user_role
   */

  export type AggregateUser_role = {
    _count: User_roleCountAggregateOutputType | null;
    _min: User_roleMinAggregateOutputType | null;
    _max: User_roleMaxAggregateOutputType | null;
  };

  export type User_roleMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    role_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type User_roleMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    role_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type User_roleCountAggregateOutputType = {
    id: number;
    user_id: number;
    role_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type User_roleMinAggregateInputType = {
    id?: true;
    user_id?: true;
    role_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type User_roleMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    role_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type User_roleCountAggregateInputType = {
    id?: true;
    user_id?: true;
    role_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type User_roleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_role to aggregate.
     */
    where?: user_roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: user_roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned user_roles
     **/
    _count?: true | User_roleCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: User_roleMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: User_roleMaxAggregateInputType;
  };

  export type GetUser_roleAggregateType<T extends User_roleAggregateArgs> = {
    [P in keyof T & keyof AggregateUser_role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_role[P]>
      : GetScalarType<T[P], AggregateUser_role[P]>;
  };

  export type user_roleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_roleWhereInput;
    orderBy?: user_roleOrderByWithAggregationInput | user_roleOrderByWithAggregationInput[];
    by: User_roleScalarFieldEnum[] | User_roleScalarFieldEnum;
    having?: user_roleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_roleCountAggregateInputType | true;
    _min?: User_roleMinAggregateInputType;
    _max?: User_roleMaxAggregateInputType;
  };

  export type User_roleGroupByOutputType = {
    id: string;
    user_id: string;
    role_id: string;
    created_at: Date;
    updated_at: Date;
    _count: User_roleCountAggregateOutputType | null;
    _min: User_roleMinAggregateOutputType | null;
    _max: User_roleMaxAggregateOutputType | null;
  };

  type GetUser_roleGroupByPayload<T extends user_roleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_roleGroupByOutputType, T['by']> & {
        [P in keyof T & keyof User_roleGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], User_roleGroupByOutputType[P]>
          : GetScalarType<T[P], User_roleGroupByOutputType[P]>;
      }
    >
  >;

  export type user_roleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        user_id?: boolean;
        role_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        role?: boolean | roleDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['user_role']
    >;

  export type user_roleSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    role_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type user_roleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | roleDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $user_rolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user_role';
    objects: {
      role: Prisma.$rolePayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        role_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user_role']
    >;
    composites: {};
  };

  type user_roleGetPayload<S extends boolean | null | undefined | user_roleDefaultArgs> = $Result.GetResult<
    Prisma.$user_rolePayload,
    S
  >;

  type user_roleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    user_roleFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: User_roleCountAggregateInputType | true;
  };

  export interface user_roleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_role']; meta: { name: 'user_role' } };
    /**
     * Find zero or one User_role that matches the filter.
     * @param {user_roleFindUniqueArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends user_roleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleFindUniqueArgs<ExtArgs>>,
    ): Prisma__user_roleClient<
      $Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one User_role that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {user_roleFindUniqueOrThrowArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends user_roleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__user_roleClient<
      $Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first User_role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindFirstArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends user_roleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleFindFirstArgs<ExtArgs>>,
    ): Prisma__user_roleClient<
      $Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first User_role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindFirstOrThrowArgs} args - Arguments to find a User_role
     * @example
     * // Get one User_role
     * const user_role = await prisma.user_role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends user_roleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__user_roleClient<
      $Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more User_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_roles
     * const user_roles = await prisma.user_role.findMany()
     *
     * // Get first 10 User_roles
     * const user_roles = await prisma.user_role.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const user_roleWithIdOnly = await prisma.user_role.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends user_roleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User_role.
     * @param {user_roleCreateArgs} args - Arguments to create a User_role.
     * @example
     * // Create one User_role
     * const User_role = await prisma.user_role.create({
     *   data: {
     *     // ... data to create a User_role
     *   }
     * })
     *
     **/
    create<T extends user_roleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleCreateArgs<ExtArgs>>,
    ): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many User_roles.
     *     @param {user_roleCreateManyArgs} args - Arguments to create many User_roles.
     *     @example
     *     // Create many User_roles
     *     const user_role = await prisma.user_role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends user_roleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User_role.
     * @param {user_roleDeleteArgs} args - Arguments to delete one User_role.
     * @example
     * // Delete one User_role
     * const User_role = await prisma.user_role.delete({
     *   where: {
     *     // ... filter to delete one User_role
     *   }
     * })
     *
     **/
    delete<T extends user_roleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleDeleteArgs<ExtArgs>>,
    ): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User_role.
     * @param {user_roleUpdateArgs} args - Arguments to update one User_role.
     * @example
     * // Update one User_role
     * const user_role = await prisma.user_role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends user_roleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleUpdateArgs<ExtArgs>>,
    ): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more User_roles.
     * @param {user_roleDeleteManyArgs} args - Arguments to filter User_roles to delete.
     * @example
     * // Delete a few User_roles
     * const { count } = await prisma.user_role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends user_roleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, user_roleDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_roles
     * const user_role = await prisma.user_role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends user_roleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User_role.
     * @param {user_roleUpsertArgs} args - Arguments to update or create a User_role.
     * @example
     * // Update or create a User_role
     * const user_role = await prisma.user_role.upsert({
     *   create: {
     *     // ... data to create a User_role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_role we want to update
     *   }
     * })
     **/
    upsert<T extends user_roleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, user_roleUpsertArgs<ExtArgs>>,
    ): Prisma__user_roleClient<$Result.GetResult<Prisma.$user_rolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of User_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleCountArgs} args - Arguments to filter User_roles to count.
     * @example
     * // Count the number of User_roles
     * const count = await prisma.user_role.count({
     *   where: {
     *     // ... the filter for the User_roles we want to count
     *   }
     * })
     **/
    count<T extends user_roleCountArgs>(
      args?: Subset<T, user_roleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_roleCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_roleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_roleAggregateArgs>(
      args: Subset<T, User_roleAggregateArgs>,
    ): Prisma.PrismaPromise<GetUser_roleAggregateType<T>>;

    /**
     * Group by User_role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_roleGroupByArgs} args - Group by arguments.
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
      T extends user_roleGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_roleGroupByArgs['orderBy'] }
        : { orderBy?: user_roleGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, user_roleGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUser_roleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user_role model
     */
    readonly fields: user_roleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_roleClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    role<T extends roleDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, roleDefaultArgs<ExtArgs>>,
    ): Prisma__roleClient<
      $Result.GetResult<Prisma.$rolePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
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
   * Fields of the user_role model
   */
  interface user_roleFieldRefs {
    readonly id: FieldRef<'user_role', 'String'>;
    readonly user_id: FieldRef<'user_role', 'String'>;
    readonly role_id: FieldRef<'user_role', 'String'>;
    readonly created_at: FieldRef<'user_role', 'DateTime'>;
    readonly updated_at: FieldRef<'user_role', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user_role findUnique
   */
  export type user_roleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    /**
     * Filter, which user_role to fetch.
     */
    where: user_roleWhereUniqueInput;
  };

  /**
   * user_role findUniqueOrThrow
   */
  export type user_roleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    /**
     * Filter, which user_role to fetch.
     */
    where: user_roleWhereUniqueInput;
  };

  /**
   * user_role findFirst
   */
  export type user_roleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    /**
     * Filter, which user_role to fetch.
     */
    where?: user_roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for user_roles.
     */
    cursor?: user_roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[];
  };

  /**
   * user_role findFirstOrThrow
   */
  export type user_roleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    /**
     * Filter, which user_role to fetch.
     */
    where?: user_roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for user_roles.
     */
    cursor?: user_roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_roles.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of user_roles.
     */
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[];
  };

  /**
   * user_role findMany
   */
  export type user_roleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    /**
     * Filter, which user_roles to fetch.
     */
    where?: user_roleWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of user_roles to fetch.
     */
    orderBy?: user_roleOrderByWithRelationInput | user_roleOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing user_roles.
     */
    cursor?: user_roleWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` user_roles from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` user_roles.
     */
    skip?: number;
    distinct?: User_roleScalarFieldEnum | User_roleScalarFieldEnum[];
  };

  /**
   * user_role create
   */
  export type user_roleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    /**
     * The data needed to create a user_role.
     */
    data: XOR<user_roleCreateInput, user_roleUncheckedCreateInput>;
  };

  /**
   * user_role createMany
   */
  export type user_roleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_roles.
     */
    data: user_roleCreateManyInput | user_roleCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user_role update
   */
  export type user_roleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    /**
     * The data needed to update a user_role.
     */
    data: XOR<user_roleUpdateInput, user_roleUncheckedUpdateInput>;
    /**
     * Choose, which user_role to update.
     */
    where: user_roleWhereUniqueInput;
  };

  /**
   * user_role updateMany
   */
  export type user_roleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_roles.
     */
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyInput>;
    /**
     * Filter which user_roles to update
     */
    where?: user_roleWhereInput;
  };

  /**
   * user_role upsert
   */
  export type user_roleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    /**
     * The filter to search for the user_role to update in case it exists.
     */
    where: user_roleWhereUniqueInput;
    /**
     * In case the user_role found by the `where` argument doesn't exist, create a new user_role with this data.
     */
    create: XOR<user_roleCreateInput, user_roleUncheckedCreateInput>;
    /**
     * In case the user_role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_roleUpdateInput, user_roleUncheckedUpdateInput>;
  };

  /**
   * user_role delete
   */
  export type user_roleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
    /**
     * Filter which user_role to delete.
     */
    where: user_roleWhereUniqueInput;
  };

  /**
   * user_role deleteMany
   */
  export type user_roleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_roles to delete
     */
    where?: user_roleWhereInput;
  };

  /**
   * user_role without action
   */
  export type user_roleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_role
     */
    select?: user_roleSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: user_roleInclude<ExtArgs> | null;
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

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const ConversionScalarFieldEnum: {
    id: 'id';
    pixel_value: 'pixel_value';
    vector_value: 'vector_value';
    conversion_time: 'conversion_time';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ConversionScalarFieldEnum = (typeof ConversionScalarFieldEnum)[keyof typeof ConversionScalarFieldEnum];

  export const Conversion_historyScalarFieldEnum: {
    id: 'id';
    conversion_id: 'conversion_id';
    user_id: 'user_id';
    timestamp: 'timestamp';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Conversion_historyScalarFieldEnum =
    (typeof Conversion_historyScalarFieldEnum)[keyof typeof Conversion_historyScalarFieldEnum];

  export const RoleScalarFieldEnum: {
    id: 'id';
    role_name: 'role_name';
    description: 'description';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const User_roleScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    role_id: 'role_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type User_roleScalarFieldEnum = (typeof User_roleScalarFieldEnum)[keyof typeof User_roleScalarFieldEnum];

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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

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

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      tenant_id?: StringFilter<'company'> | string;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type conversionWhereInput = {
    AND?: conversionWhereInput | conversionWhereInput[];
    OR?: conversionWhereInput[];
    NOT?: conversionWhereInput | conversionWhereInput[];
    id?: UuidFilter<'conversion'> | string;
    pixel_value?: IntFilter<'conversion'> | number;
    vector_value?: IntFilter<'conversion'> | number;
    conversion_time?: DateTimeNullableFilter<'conversion'> | Date | string | null;
    user_id?: UuidFilter<'conversion'> | string;
    created_at?: DateTimeFilter<'conversion'> | Date | string;
    updated_at?: DateTimeFilter<'conversion'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    conversion_history?: Conversion_historyListRelationFilter;
  };

  export type conversionOrderByWithRelationInput = {
    id?: SortOrder;
    pixel_value?: SortOrder;
    vector_value?: SortOrder;
    conversion_time?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    conversion_history?: conversion_historyOrderByRelationAggregateInput;
  };

  export type conversionWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: conversionWhereInput | conversionWhereInput[];
      OR?: conversionWhereInput[];
      NOT?: conversionWhereInput | conversionWhereInput[];
      pixel_value?: IntFilter<'conversion'> | number;
      vector_value?: IntFilter<'conversion'> | number;
      conversion_time?: DateTimeNullableFilter<'conversion'> | Date | string | null;
      user_id?: UuidFilter<'conversion'> | string;
      created_at?: DateTimeFilter<'conversion'> | Date | string;
      updated_at?: DateTimeFilter<'conversion'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      conversion_history?: Conversion_historyListRelationFilter;
    },
    'id'
  >;

  export type conversionOrderByWithAggregationInput = {
    id?: SortOrder;
    pixel_value?: SortOrder;
    vector_value?: SortOrder;
    conversion_time?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: conversionCountOrderByAggregateInput;
    _avg?: conversionAvgOrderByAggregateInput;
    _max?: conversionMaxOrderByAggregateInput;
    _min?: conversionMinOrderByAggregateInput;
    _sum?: conversionSumOrderByAggregateInput;
  };

  export type conversionScalarWhereWithAggregatesInput = {
    AND?: conversionScalarWhereWithAggregatesInput | conversionScalarWhereWithAggregatesInput[];
    OR?: conversionScalarWhereWithAggregatesInput[];
    NOT?: conversionScalarWhereWithAggregatesInput | conversionScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'conversion'> | string;
    pixel_value?: IntWithAggregatesFilter<'conversion'> | number;
    vector_value?: IntWithAggregatesFilter<'conversion'> | number;
    conversion_time?: DateTimeNullableWithAggregatesFilter<'conversion'> | Date | string | null;
    user_id?: UuidWithAggregatesFilter<'conversion'> | string;
    created_at?: DateTimeWithAggregatesFilter<'conversion'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'conversion'> | Date | string;
  };

  export type conversion_historyWhereInput = {
    AND?: conversion_historyWhereInput | conversion_historyWhereInput[];
    OR?: conversion_historyWhereInput[];
    NOT?: conversion_historyWhereInput | conversion_historyWhereInput[];
    id?: UuidFilter<'conversion_history'> | string;
    conversion_id?: UuidFilter<'conversion_history'> | string;
    user_id?: UuidFilter<'conversion_history'> | string;
    timestamp?: DateTimeNullableFilter<'conversion_history'> | Date | string | null;
    created_at?: DateTimeFilter<'conversion_history'> | Date | string;
    updated_at?: DateTimeFilter<'conversion_history'> | Date | string;
    conversion?: XOR<ConversionRelationFilter, conversionWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type conversion_historyOrderByWithRelationInput = {
    id?: SortOrder;
    conversion_id?: SortOrder;
    user_id?: SortOrder;
    timestamp?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    conversion?: conversionOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type conversion_historyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: conversion_historyWhereInput | conversion_historyWhereInput[];
      OR?: conversion_historyWhereInput[];
      NOT?: conversion_historyWhereInput | conversion_historyWhereInput[];
      conversion_id?: UuidFilter<'conversion_history'> | string;
      user_id?: UuidFilter<'conversion_history'> | string;
      timestamp?: DateTimeNullableFilter<'conversion_history'> | Date | string | null;
      created_at?: DateTimeFilter<'conversion_history'> | Date | string;
      updated_at?: DateTimeFilter<'conversion_history'> | Date | string;
      conversion?: XOR<ConversionRelationFilter, conversionWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type conversion_historyOrderByWithAggregationInput = {
    id?: SortOrder;
    conversion_id?: SortOrder;
    user_id?: SortOrder;
    timestamp?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: conversion_historyCountOrderByAggregateInput;
    _max?: conversion_historyMaxOrderByAggregateInput;
    _min?: conversion_historyMinOrderByAggregateInput;
  };

  export type conversion_historyScalarWhereWithAggregatesInput = {
    AND?: conversion_historyScalarWhereWithAggregatesInput | conversion_historyScalarWhereWithAggregatesInput[];
    OR?: conversion_historyScalarWhereWithAggregatesInput[];
    NOT?: conversion_historyScalarWhereWithAggregatesInput | conversion_historyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'conversion_history'> | string;
    conversion_id?: UuidWithAggregatesFilter<'conversion_history'> | string;
    user_id?: UuidWithAggregatesFilter<'conversion_history'> | string;
    timestamp?: DateTimeNullableWithAggregatesFilter<'conversion_history'> | Date | string | null;
    created_at?: DateTimeWithAggregatesFilter<'conversion_history'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'conversion_history'> | Date | string;
  };

  export type roleWhereInput = {
    AND?: roleWhereInput | roleWhereInput[];
    OR?: roleWhereInput[];
    NOT?: roleWhereInput | roleWhereInput[];
    id?: UuidFilter<'role'> | string;
    role_name?: StringFilter<'role'> | string;
    description?: StringNullableFilter<'role'> | string | null;
    user_id?: UuidFilter<'role'> | string;
    created_at?: DateTimeFilter<'role'> | Date | string;
    updated_at?: DateTimeFilter<'role'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    user_role?: User_roleListRelationFilter;
  };

  export type roleOrderByWithRelationInput = {
    id?: SortOrder;
    role_name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    user_role?: user_roleOrderByRelationAggregateInput;
  };

  export type roleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: roleWhereInput | roleWhereInput[];
      OR?: roleWhereInput[];
      NOT?: roleWhereInput | roleWhereInput[];
      role_name?: StringFilter<'role'> | string;
      description?: StringNullableFilter<'role'> | string | null;
      user_id?: UuidFilter<'role'> | string;
      created_at?: DateTimeFilter<'role'> | Date | string;
      updated_at?: DateTimeFilter<'role'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      user_role?: User_roleListRelationFilter;
    },
    'id'
  >;

  export type roleOrderByWithAggregationInput = {
    id?: SortOrder;
    role_name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: roleCountOrderByAggregateInput;
    _max?: roleMaxOrderByAggregateInput;
    _min?: roleMinOrderByAggregateInput;
  };

  export type roleScalarWhereWithAggregatesInput = {
    AND?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[];
    OR?: roleScalarWhereWithAggregatesInput[];
    NOT?: roleScalarWhereWithAggregatesInput | roleScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'role'> | string;
    role_name?: StringWithAggregatesFilter<'role'> | string;
    description?: StringNullableWithAggregatesFilter<'role'> | string | null;
    user_id?: UuidWithAggregatesFilter<'role'> | string;
    created_at?: DateTimeWithAggregatesFilter<'role'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'role'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    conversion?: ConversionListRelationFilter;
    conversion_history?: Conversion_historyListRelationFilter;
    role?: RoleListRelationFilter;
    user_role?: User_roleListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    conversion?: conversionOrderByRelationAggregateInput;
    conversion_history?: conversion_historyOrderByRelationAggregateInput;
    role?: roleOrderByRelationAggregateInput;
    user_role?: user_roleOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      conversion?: ConversionListRelationFilter;
      conversion_history?: Conversion_historyListRelationFilter;
      role?: RoleListRelationFilter;
      user_role?: User_roleListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
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
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type user_roleWhereInput = {
    AND?: user_roleWhereInput | user_roleWhereInput[];
    OR?: user_roleWhereInput[];
    NOT?: user_roleWhereInput | user_roleWhereInput[];
    id?: UuidFilter<'user_role'> | string;
    user_id?: UuidFilter<'user_role'> | string;
    role_id?: UuidFilter<'user_role'> | string;
    created_at?: DateTimeFilter<'user_role'> | Date | string;
    updated_at?: DateTimeFilter<'user_role'> | Date | string;
    role?: XOR<RoleRelationFilter, roleWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type user_roleOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    role_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    role?: roleOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type user_roleWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: user_roleWhereInput | user_roleWhereInput[];
      OR?: user_roleWhereInput[];
      NOT?: user_roleWhereInput | user_roleWhereInput[];
      user_id?: UuidFilter<'user_role'> | string;
      role_id?: UuidFilter<'user_role'> | string;
      created_at?: DateTimeFilter<'user_role'> | Date | string;
      updated_at?: DateTimeFilter<'user_role'> | Date | string;
      role?: XOR<RoleRelationFilter, roleWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type user_roleOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    role_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: user_roleCountOrderByAggregateInput;
    _max?: user_roleMaxOrderByAggregateInput;
    _min?: user_roleMinOrderByAggregateInput;
  };

  export type user_roleScalarWhereWithAggregatesInput = {
    AND?: user_roleScalarWhereWithAggregatesInput | user_roleScalarWhereWithAggregatesInput[];
    OR?: user_roleScalarWhereWithAggregatesInput[];
    NOT?: user_roleScalarWhereWithAggregatesInput | user_roleScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user_role'> | string;
    user_id?: UuidWithAggregatesFilter<'user_role'> | string;
    role_id?: UuidWithAggregatesFilter<'user_role'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user_role'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user_role'> | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type conversionCreateInput = {
    id?: string;
    pixel_value: number;
    vector_value: number;
    conversion_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutConversionInput;
    conversion_history?: conversion_historyCreateNestedManyWithoutConversionInput;
  };

  export type conversionUncheckedCreateInput = {
    id?: string;
    pixel_value: number;
    vector_value: number;
    conversion_time?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    conversion_history?: conversion_historyUncheckedCreateNestedManyWithoutConversionInput;
  };

  export type conversionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pixel_value?: IntFieldUpdateOperationsInput | number;
    vector_value?: IntFieldUpdateOperationsInput | number;
    conversion_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutConversionNestedInput;
    conversion_history?: conversion_historyUpdateManyWithoutConversionNestedInput;
  };

  export type conversionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pixel_value?: IntFieldUpdateOperationsInput | number;
    vector_value?: IntFieldUpdateOperationsInput | number;
    conversion_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    conversion_history?: conversion_historyUncheckedUpdateManyWithoutConversionNestedInput;
  };

  export type conversionCreateManyInput = {
    id?: string;
    pixel_value: number;
    vector_value: number;
    conversion_time?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type conversionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pixel_value?: IntFieldUpdateOperationsInput | number;
    vector_value?: IntFieldUpdateOperationsInput | number;
    conversion_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type conversionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pixel_value?: IntFieldUpdateOperationsInput | number;
    vector_value?: IntFieldUpdateOperationsInput | number;
    conversion_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type conversion_historyCreateInput = {
    id?: string;
    timestamp?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    conversion: conversionCreateNestedOneWithoutConversion_historyInput;
    user: userCreateNestedOneWithoutConversion_historyInput;
  };

  export type conversion_historyUncheckedCreateInput = {
    id?: string;
    conversion_id: string;
    user_id: string;
    timestamp?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type conversion_historyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    conversion?: conversionUpdateOneRequiredWithoutConversion_historyNestedInput;
    user?: userUpdateOneRequiredWithoutConversion_historyNestedInput;
  };

  export type conversion_historyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    conversion_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type conversion_historyCreateManyInput = {
    id?: string;
    conversion_id: string;
    user_id: string;
    timestamp?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type conversion_historyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type conversion_historyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    conversion_id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type roleCreateInput = {
    id?: string;
    role_name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutRoleInput;
    user_role?: user_roleCreateNestedManyWithoutRoleInput;
  };

  export type roleUncheckedCreateInput = {
    id?: string;
    role_name: string;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_role?: user_roleUncheckedCreateNestedManyWithoutRoleInput;
  };

  export type roleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role_name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutRoleNestedInput;
    user_role?: user_roleUpdateManyWithoutRoleNestedInput;
  };

  export type roleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role_name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_role?: user_roleUncheckedUpdateManyWithoutRoleNestedInput;
  };

  export type roleCreateManyInput = {
    id?: string;
    role_name: string;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type roleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role_name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type roleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role_name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
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
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    conversion?: conversionCreateNestedManyWithoutUserInput;
    conversion_history?: conversion_historyCreateNestedManyWithoutUserInput;
    role?: roleCreateNestedManyWithoutUserInput;
    user_role?: user_roleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    conversion?: conversionUncheckedCreateNestedManyWithoutUserInput;
    conversion_history?: conversion_historyUncheckedCreateNestedManyWithoutUserInput;
    role?: roleUncheckedCreateNestedManyWithoutUserInput;
    user_role?: user_roleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    conversion?: conversionUpdateManyWithoutUserNestedInput;
    conversion_history?: conversion_historyUpdateManyWithoutUserNestedInput;
    role?: roleUpdateManyWithoutUserNestedInput;
    user_role?: user_roleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    conversion?: conversionUncheckedUpdateManyWithoutUserNestedInput;
    conversion_history?: conversion_historyUncheckedUpdateManyWithoutUserNestedInput;
    role?: roleUncheckedUpdateManyWithoutUserNestedInput;
    user_role?: user_roleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
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
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_roleCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    role: roleCreateNestedOneWithoutUser_roleInput;
    user: userCreateNestedOneWithoutUser_roleInput;
  };

  export type user_roleUncheckedCreateInput = {
    id?: string;
    user_id: string;
    role_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_roleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: roleUpdateOneRequiredWithoutUser_roleNestedInput;
    user?: userUpdateOneRequiredWithoutUser_roleNestedInput;
  };

  export type user_roleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    role_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_roleCreateManyInput = {
    id?: string;
    user_id: string;
    role_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_roleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_roleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    role_id?: StringFieldUpdateOperationsInput | string;
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

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    tenant_id?: SortOrder;
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type Conversion_historyListRelationFilter = {
    every?: conversion_historyWhereInput;
    some?: conversion_historyWhereInput;
    none?: conversion_historyWhereInput;
  };

  export type conversion_historyOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type conversionCountOrderByAggregateInput = {
    id?: SortOrder;
    pixel_value?: SortOrder;
    vector_value?: SortOrder;
    conversion_time?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type conversionAvgOrderByAggregateInput = {
    pixel_value?: SortOrder;
    vector_value?: SortOrder;
  };

  export type conversionMaxOrderByAggregateInput = {
    id?: SortOrder;
    pixel_value?: SortOrder;
    vector_value?: SortOrder;
    conversion_time?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type conversionMinOrderByAggregateInput = {
    id?: SortOrder;
    pixel_value?: SortOrder;
    vector_value?: SortOrder;
    conversion_time?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type conversionSumOrderByAggregateInput = {
    pixel_value?: SortOrder;
    vector_value?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type ConversionRelationFilter = {
    is?: conversionWhereInput;
    isNot?: conversionWhereInput;
  };

  export type conversion_historyCountOrderByAggregateInput = {
    id?: SortOrder;
    conversion_id?: SortOrder;
    user_id?: SortOrder;
    timestamp?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type conversion_historyMaxOrderByAggregateInput = {
    id?: SortOrder;
    conversion_id?: SortOrder;
    user_id?: SortOrder;
    timestamp?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type conversion_historyMinOrderByAggregateInput = {
    id?: SortOrder;
    conversion_id?: SortOrder;
    user_id?: SortOrder;
    timestamp?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type User_roleListRelationFilter = {
    every?: user_roleWhereInput;
    some?: user_roleWhereInput;
    none?: user_roleWhereInput;
  };

  export type user_roleOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type roleCountOrderByAggregateInput = {
    id?: SortOrder;
    role_name?: SortOrder;
    description?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type roleMaxOrderByAggregateInput = {
    id?: SortOrder;
    role_name?: SortOrder;
    description?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type roleMinOrderByAggregateInput = {
    id?: SortOrder;
    role_name?: SortOrder;
    description?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ConversionListRelationFilter = {
    every?: conversionWhereInput;
    some?: conversionWhereInput;
    none?: conversionWhereInput;
  };

  export type RoleListRelationFilter = {
    every?: roleWhereInput;
    some?: roleWhereInput;
    none?: roleWhereInput;
  };

  export type conversionOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type roleOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type RoleRelationFilter = {
    is?: roleWhereInput;
    isNot?: roleWhereInput;
  };

  export type user_roleCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    role_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type user_roleMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    role_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type user_roleMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    role_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userCreateNestedOneWithoutConversionInput = {
    create?: XOR<userCreateWithoutConversionInput, userUncheckedCreateWithoutConversionInput>;
    connectOrCreate?: userCreateOrConnectWithoutConversionInput;
    connect?: userWhereUniqueInput;
  };

  export type conversion_historyCreateNestedManyWithoutConversionInput = {
    create?:
      | XOR<conversion_historyCreateWithoutConversionInput, conversion_historyUncheckedCreateWithoutConversionInput>
      | conversion_historyCreateWithoutConversionInput[]
      | conversion_historyUncheckedCreateWithoutConversionInput[];
    connectOrCreate?:
      | conversion_historyCreateOrConnectWithoutConversionInput
      | conversion_historyCreateOrConnectWithoutConversionInput[];
    createMany?: conversion_historyCreateManyConversionInputEnvelope;
    connect?: conversion_historyWhereUniqueInput | conversion_historyWhereUniqueInput[];
  };

  export type conversion_historyUncheckedCreateNestedManyWithoutConversionInput = {
    create?:
      | XOR<conversion_historyCreateWithoutConversionInput, conversion_historyUncheckedCreateWithoutConversionInput>
      | conversion_historyCreateWithoutConversionInput[]
      | conversion_historyUncheckedCreateWithoutConversionInput[];
    connectOrCreate?:
      | conversion_historyCreateOrConnectWithoutConversionInput
      | conversion_historyCreateOrConnectWithoutConversionInput[];
    createMany?: conversion_historyCreateManyConversionInputEnvelope;
    connect?: conversion_historyWhereUniqueInput | conversion_historyWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type userUpdateOneRequiredWithoutConversionNestedInput = {
    create?: XOR<userCreateWithoutConversionInput, userUncheckedCreateWithoutConversionInput>;
    connectOrCreate?: userCreateOrConnectWithoutConversionInput;
    upsert?: userUpsertWithoutConversionInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutConversionInput, userUpdateWithoutConversionInput>,
      userUncheckedUpdateWithoutConversionInput
    >;
  };

  export type conversion_historyUpdateManyWithoutConversionNestedInput = {
    create?:
      | XOR<conversion_historyCreateWithoutConversionInput, conversion_historyUncheckedCreateWithoutConversionInput>
      | conversion_historyCreateWithoutConversionInput[]
      | conversion_historyUncheckedCreateWithoutConversionInput[];
    connectOrCreate?:
      | conversion_historyCreateOrConnectWithoutConversionInput
      | conversion_historyCreateOrConnectWithoutConversionInput[];
    upsert?:
      | conversion_historyUpsertWithWhereUniqueWithoutConversionInput
      | conversion_historyUpsertWithWhereUniqueWithoutConversionInput[];
    createMany?: conversion_historyCreateManyConversionInputEnvelope;
    set?: conversion_historyWhereUniqueInput | conversion_historyWhereUniqueInput[];
    disconnect?: conversion_historyWhereUniqueInput | conversion_historyWhereUniqueInput[];
    delete?: conversion_historyWhereUniqueInput | conversion_historyWhereUniqueInput[];
    connect?: conversion_historyWhereUniqueInput | conversion_historyWhereUniqueInput[];
    update?:
      | conversion_historyUpdateWithWhereUniqueWithoutConversionInput
      | conversion_historyUpdateWithWhereUniqueWithoutConversionInput[];
    updateMany?:
      | conversion_historyUpdateManyWithWhereWithoutConversionInput
      | conversion_historyUpdateManyWithWhereWithoutConversionInput[];
    deleteMany?: conversion_historyScalarWhereInput | conversion_historyScalarWhereInput[];
  };

  export type conversion_historyUncheckedUpdateManyWithoutConversionNestedInput = {
    create?:
      | XOR<conversion_historyCreateWithoutConversionInput, conversion_historyUncheckedCreateWithoutConversionInput>
      | conversion_historyCreateWithoutConversionInput[]
      | conversion_historyUncheckedCreateWithoutConversionInput[];
    connectOrCreate?:
      | conversion_historyCreateOrConnectWithoutConversionInput
      | conversion_historyCreateOrConnectWithoutConversionInput[];
    upsert?:
      | conversion_historyUpsertWithWhereUniqueWithoutConversionInput
      | conversion_historyUpsertWithWhereUniqueWithoutConversionInput[];
    createMany?: conversion_historyCreateManyConversionInputEnvelope;
    set?: conversion_historyWhereUniqueInput | conversion_historyWhereUniqueInput[];
    disconnect?: conversion_historyWhereUniqueInput | conversion_historyWhereUniqueInput[];
    delete?: conversion_historyWhereUniqueInput | conversion_historyWhereUniqueInput[];
    connect?: conversion_historyWhereUniqueInput | conversion_historyWhereUniqueInput[];
    update?:
      | conversion_historyUpdateWithWhereUniqueWithoutConversionInput
      | conversion_historyUpdateWithWhereUniqueWithoutConversionInput[];
    updateMany?:
      | conversion_historyUpdateManyWithWhereWithoutConversionInput
      | conversion_historyUpdateManyWithWhereWithoutConversionInput[];
    deleteMany?: conversion_historyScalarWhereInput | conversion_historyScalarWhereInput[];
  };

  export type conversionCreateNestedOneWithoutConversion_historyInput = {
    create?: XOR<
      conversionCreateWithoutConversion_historyInput,
      conversionUncheckedCreateWithoutConversion_historyInput
    >;
    connectOrCreate?: conversionCreateOrConnectWithoutConversion_historyInput;
    connect?: conversionWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutConversion_historyInput = {
    create?: XOR<userCreateWithoutConversion_historyInput, userUncheckedCreateWithoutConversion_historyInput>;
    connectOrCreate?: userCreateOrConnectWithoutConversion_historyInput;
    connect?: userWhereUniqueInput;
  };

  export type conversionUpdateOneRequiredWithoutConversion_historyNestedInput = {
    create?: XOR<
      conversionCreateWithoutConversion_historyInput,
      conversionUncheckedCreateWithoutConversion_historyInput
    >;
    connectOrCreate?: conversionCreateOrConnectWithoutConversion_historyInput;
    upsert?: conversionUpsertWithoutConversion_historyInput;
    connect?: conversionWhereUniqueInput;
    update?: XOR<
      XOR<conversionUpdateToOneWithWhereWithoutConversion_historyInput, conversionUpdateWithoutConversion_historyInput>,
      conversionUncheckedUpdateWithoutConversion_historyInput
    >;
  };

  export type userUpdateOneRequiredWithoutConversion_historyNestedInput = {
    create?: XOR<userCreateWithoutConversion_historyInput, userUncheckedCreateWithoutConversion_historyInput>;
    connectOrCreate?: userCreateOrConnectWithoutConversion_historyInput;
    upsert?: userUpsertWithoutConversion_historyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutConversion_historyInput, userUpdateWithoutConversion_historyInput>,
      userUncheckedUpdateWithoutConversion_historyInput
    >;
  };

  export type userCreateNestedOneWithoutRoleInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput>;
    connectOrCreate?: userCreateOrConnectWithoutRoleInput;
    connect?: userWhereUniqueInput;
  };

  export type user_roleCreateNestedManyWithoutRoleInput = {
    create?:
      | XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput>
      | user_roleCreateWithoutRoleInput[]
      | user_roleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: user_roleCreateOrConnectWithoutRoleInput | user_roleCreateOrConnectWithoutRoleInput[];
    createMany?: user_roleCreateManyRoleInputEnvelope;
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
  };

  export type user_roleUncheckedCreateNestedManyWithoutRoleInput = {
    create?:
      | XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput>
      | user_roleCreateWithoutRoleInput[]
      | user_roleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: user_roleCreateOrConnectWithoutRoleInput | user_roleCreateOrConnectWithoutRoleInput[];
    createMany?: user_roleCreateManyRoleInputEnvelope;
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
  };

  export type userUpdateOneRequiredWithoutRoleNestedInput = {
    create?: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput>;
    connectOrCreate?: userCreateOrConnectWithoutRoleInput;
    upsert?: userUpsertWithoutRoleInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutRoleInput, userUpdateWithoutRoleInput>,
      userUncheckedUpdateWithoutRoleInput
    >;
  };

  export type user_roleUpdateManyWithoutRoleNestedInput = {
    create?:
      | XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput>
      | user_roleCreateWithoutRoleInput[]
      | user_roleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: user_roleCreateOrConnectWithoutRoleInput | user_roleCreateOrConnectWithoutRoleInput[];
    upsert?: user_roleUpsertWithWhereUniqueWithoutRoleInput | user_roleUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: user_roleCreateManyRoleInputEnvelope;
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    update?: user_roleUpdateWithWhereUniqueWithoutRoleInput | user_roleUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: user_roleUpdateManyWithWhereWithoutRoleInput | user_roleUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[];
  };

  export type user_roleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?:
      | XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput>
      | user_roleCreateWithoutRoleInput[]
      | user_roleUncheckedCreateWithoutRoleInput[];
    connectOrCreate?: user_roleCreateOrConnectWithoutRoleInput | user_roleCreateOrConnectWithoutRoleInput[];
    upsert?: user_roleUpsertWithWhereUniqueWithoutRoleInput | user_roleUpsertWithWhereUniqueWithoutRoleInput[];
    createMany?: user_roleCreateManyRoleInputEnvelope;
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    update?: user_roleUpdateWithWhereUniqueWithoutRoleInput | user_roleUpdateWithWhereUniqueWithoutRoleInput[];
    updateMany?: user_roleUpdateManyWithWhereWithoutRoleInput | user_roleUpdateManyWithWhereWithoutRoleInput[];
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[];
  };

  export type conversionCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<conversionCreateWithoutUserInput, conversionUncheckedCreateWithoutUserInput>
      | conversionCreateWithoutUserInput[]
      | conversionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: conversionCreateOrConnectWithoutUserInput | conversionCreateOrConnectWithoutUserInput[];
    createMany?: conversionCreateManyUserInputEnvelope;
    connect?: conversionWhereUniqueInput | conversionWhereUniqueInput[];
  };

  export type conversion_historyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<conversion_historyCreateWithoutUserInput, conversion_historyUncheckedCreateWithoutUserInput>
      | conversion_historyCreateWithoutUserInput[]
      | conversion_historyUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | conversion_historyCreateOrConnectWithoutUserInput
      | conversion_historyCreateOrConnectWithoutUserInput[];
    createMany?: conversion_historyCreateManyUserInputEnvelope;
    connect?: conversion_historyWhereUniqueInput | conversion_historyWhereUniqueInput[];
  };

  export type roleCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
      | roleCreateWithoutUserInput[]
      | roleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: roleCreateOrConnectWithoutUserInput | roleCreateOrConnectWithoutUserInput[];
    createMany?: roleCreateManyUserInputEnvelope;
    connect?: roleWhereUniqueInput | roleWhereUniqueInput[];
  };

  export type user_roleCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
      | user_roleCreateWithoutUserInput[]
      | user_roleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput | user_roleCreateOrConnectWithoutUserInput[];
    createMany?: user_roleCreateManyUserInputEnvelope;
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
  };

  export type conversionUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<conversionCreateWithoutUserInput, conversionUncheckedCreateWithoutUserInput>
      | conversionCreateWithoutUserInput[]
      | conversionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: conversionCreateOrConnectWithoutUserInput | conversionCreateOrConnectWithoutUserInput[];
    createMany?: conversionCreateManyUserInputEnvelope;
    connect?: conversionWhereUniqueInput | conversionWhereUniqueInput[];
  };

  export type conversion_historyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<conversion_historyCreateWithoutUserInput, conversion_historyUncheckedCreateWithoutUserInput>
      | conversion_historyCreateWithoutUserInput[]
      | conversion_historyUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | conversion_historyCreateOrConnectWithoutUserInput
      | conversion_historyCreateOrConnectWithoutUserInput[];
    createMany?: conversion_historyCreateManyUserInputEnvelope;
    connect?: conversion_historyWhereUniqueInput | conversion_historyWhereUniqueInput[];
  };

  export type roleUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
      | roleCreateWithoutUserInput[]
      | roleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: roleCreateOrConnectWithoutUserInput | roleCreateOrConnectWithoutUserInput[];
    createMany?: roleCreateManyUserInputEnvelope;
    connect?: roleWhereUniqueInput | roleWhereUniqueInput[];
  };

  export type user_roleUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
      | user_roleCreateWithoutUserInput[]
      | user_roleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput | user_roleCreateOrConnectWithoutUserInput[];
    createMany?: user_roleCreateManyUserInputEnvelope;
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
  };

  export type conversionUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<conversionCreateWithoutUserInput, conversionUncheckedCreateWithoutUserInput>
      | conversionCreateWithoutUserInput[]
      | conversionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: conversionCreateOrConnectWithoutUserInput | conversionCreateOrConnectWithoutUserInput[];
    upsert?: conversionUpsertWithWhereUniqueWithoutUserInput | conversionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: conversionCreateManyUserInputEnvelope;
    set?: conversionWhereUniqueInput | conversionWhereUniqueInput[];
    disconnect?: conversionWhereUniqueInput | conversionWhereUniqueInput[];
    delete?: conversionWhereUniqueInput | conversionWhereUniqueInput[];
    connect?: conversionWhereUniqueInput | conversionWhereUniqueInput[];
    update?: conversionUpdateWithWhereUniqueWithoutUserInput | conversionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: conversionUpdateManyWithWhereWithoutUserInput | conversionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: conversionScalarWhereInput | conversionScalarWhereInput[];
  };

  export type conversion_historyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<conversion_historyCreateWithoutUserInput, conversion_historyUncheckedCreateWithoutUserInput>
      | conversion_historyCreateWithoutUserInput[]
      | conversion_historyUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | conversion_historyCreateOrConnectWithoutUserInput
      | conversion_historyCreateOrConnectWithoutUserInput[];
    upsert?:
      | conversion_historyUpsertWithWhereUniqueWithoutUserInput
      | conversion_historyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: conversion_historyCreateManyUserInputEnvelope;
    set?: conversion_historyWhereUniqueInput | conversion_historyWhereUniqueInput[];
    disconnect?: conversion_historyWhereUniqueInput | conversion_historyWhereUniqueInput[];
    delete?: conversion_historyWhereUniqueInput | conversion_historyWhereUniqueInput[];
    connect?: conversion_historyWhereUniqueInput | conversion_historyWhereUniqueInput[];
    update?:
      | conversion_historyUpdateWithWhereUniqueWithoutUserInput
      | conversion_historyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | conversion_historyUpdateManyWithWhereWithoutUserInput
      | conversion_historyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: conversion_historyScalarWhereInput | conversion_historyScalarWhereInput[];
  };

  export type roleUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
      | roleCreateWithoutUserInput[]
      | roleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: roleCreateOrConnectWithoutUserInput | roleCreateOrConnectWithoutUserInput[];
    upsert?: roleUpsertWithWhereUniqueWithoutUserInput | roleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: roleCreateManyUserInputEnvelope;
    set?: roleWhereUniqueInput | roleWhereUniqueInput[];
    disconnect?: roleWhereUniqueInput | roleWhereUniqueInput[];
    delete?: roleWhereUniqueInput | roleWhereUniqueInput[];
    connect?: roleWhereUniqueInput | roleWhereUniqueInput[];
    update?: roleUpdateWithWhereUniqueWithoutUserInput | roleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: roleUpdateManyWithWhereWithoutUserInput | roleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: roleScalarWhereInput | roleScalarWhereInput[];
  };

  export type user_roleUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
      | user_roleCreateWithoutUserInput[]
      | user_roleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput | user_roleCreateOrConnectWithoutUserInput[];
    upsert?: user_roleUpsertWithWhereUniqueWithoutUserInput | user_roleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: user_roleCreateManyUserInputEnvelope;
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    update?: user_roleUpdateWithWhereUniqueWithoutUserInput | user_roleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: user_roleUpdateManyWithWhereWithoutUserInput | user_roleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[];
  };

  export type conversionUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<conversionCreateWithoutUserInput, conversionUncheckedCreateWithoutUserInput>
      | conversionCreateWithoutUserInput[]
      | conversionUncheckedCreateWithoutUserInput[];
    connectOrCreate?: conversionCreateOrConnectWithoutUserInput | conversionCreateOrConnectWithoutUserInput[];
    upsert?: conversionUpsertWithWhereUniqueWithoutUserInput | conversionUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: conversionCreateManyUserInputEnvelope;
    set?: conversionWhereUniqueInput | conversionWhereUniqueInput[];
    disconnect?: conversionWhereUniqueInput | conversionWhereUniqueInput[];
    delete?: conversionWhereUniqueInput | conversionWhereUniqueInput[];
    connect?: conversionWhereUniqueInput | conversionWhereUniqueInput[];
    update?: conversionUpdateWithWhereUniqueWithoutUserInput | conversionUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: conversionUpdateManyWithWhereWithoutUserInput | conversionUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: conversionScalarWhereInput | conversionScalarWhereInput[];
  };

  export type conversion_historyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<conversion_historyCreateWithoutUserInput, conversion_historyUncheckedCreateWithoutUserInput>
      | conversion_historyCreateWithoutUserInput[]
      | conversion_historyUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | conversion_historyCreateOrConnectWithoutUserInput
      | conversion_historyCreateOrConnectWithoutUserInput[];
    upsert?:
      | conversion_historyUpsertWithWhereUniqueWithoutUserInput
      | conversion_historyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: conversion_historyCreateManyUserInputEnvelope;
    set?: conversion_historyWhereUniqueInput | conversion_historyWhereUniqueInput[];
    disconnect?: conversion_historyWhereUniqueInput | conversion_historyWhereUniqueInput[];
    delete?: conversion_historyWhereUniqueInput | conversion_historyWhereUniqueInput[];
    connect?: conversion_historyWhereUniqueInput | conversion_historyWhereUniqueInput[];
    update?:
      | conversion_historyUpdateWithWhereUniqueWithoutUserInput
      | conversion_historyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | conversion_historyUpdateManyWithWhereWithoutUserInput
      | conversion_historyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: conversion_historyScalarWhereInput | conversion_historyScalarWhereInput[];
  };

  export type roleUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>
      | roleCreateWithoutUserInput[]
      | roleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: roleCreateOrConnectWithoutUserInput | roleCreateOrConnectWithoutUserInput[];
    upsert?: roleUpsertWithWhereUniqueWithoutUserInput | roleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: roleCreateManyUserInputEnvelope;
    set?: roleWhereUniqueInput | roleWhereUniqueInput[];
    disconnect?: roleWhereUniqueInput | roleWhereUniqueInput[];
    delete?: roleWhereUniqueInput | roleWhereUniqueInput[];
    connect?: roleWhereUniqueInput | roleWhereUniqueInput[];
    update?: roleUpdateWithWhereUniqueWithoutUserInput | roleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: roleUpdateManyWithWhereWithoutUserInput | roleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: roleScalarWhereInput | roleScalarWhereInput[];
  };

  export type user_roleUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>
      | user_roleCreateWithoutUserInput[]
      | user_roleUncheckedCreateWithoutUserInput[];
    connectOrCreate?: user_roleCreateOrConnectWithoutUserInput | user_roleCreateOrConnectWithoutUserInput[];
    upsert?: user_roleUpsertWithWhereUniqueWithoutUserInput | user_roleUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: user_roleCreateManyUserInputEnvelope;
    set?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    disconnect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    delete?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    connect?: user_roleWhereUniqueInput | user_roleWhereUniqueInput[];
    update?: user_roleUpdateWithWhereUniqueWithoutUserInput | user_roleUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: user_roleUpdateManyWithWhereWithoutUserInput | user_roleUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: user_roleScalarWhereInput | user_roleScalarWhereInput[];
  };

  export type roleCreateNestedOneWithoutUser_roleInput = {
    create?: XOR<roleCreateWithoutUser_roleInput, roleUncheckedCreateWithoutUser_roleInput>;
    connectOrCreate?: roleCreateOrConnectWithoutUser_roleInput;
    connect?: roleWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutUser_roleInput = {
    create?: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput>;
    connectOrCreate?: userCreateOrConnectWithoutUser_roleInput;
    connect?: userWhereUniqueInput;
  };

  export type roleUpdateOneRequiredWithoutUser_roleNestedInput = {
    create?: XOR<roleCreateWithoutUser_roleInput, roleUncheckedCreateWithoutUser_roleInput>;
    connectOrCreate?: roleCreateOrConnectWithoutUser_roleInput;
    upsert?: roleUpsertWithoutUser_roleInput;
    connect?: roleWhereUniqueInput;
    update?: XOR<
      XOR<roleUpdateToOneWithWhereWithoutUser_roleInput, roleUpdateWithoutUser_roleInput>,
      roleUncheckedUpdateWithoutUser_roleInput
    >;
  };

  export type userUpdateOneRequiredWithoutUser_roleNestedInput = {
    create?: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput>;
    connectOrCreate?: userCreateOrConnectWithoutUser_roleInput;
    upsert?: userUpsertWithoutUser_roleInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutUser_roleInput, userUpdateWithoutUser_roleInput>,
      userUncheckedUpdateWithoutUser_roleInput
    >;
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type userCreateWithoutConversionInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    conversion_history?: conversion_historyCreateNestedManyWithoutUserInput;
    role?: roleCreateNestedManyWithoutUserInput;
    user_role?: user_roleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutConversionInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    conversion_history?: conversion_historyUncheckedCreateNestedManyWithoutUserInput;
    role?: roleUncheckedCreateNestedManyWithoutUserInput;
    user_role?: user_roleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutConversionInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutConversionInput, userUncheckedCreateWithoutConversionInput>;
  };

  export type conversion_historyCreateWithoutConversionInput = {
    id?: string;
    timestamp?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutConversion_historyInput;
  };

  export type conversion_historyUncheckedCreateWithoutConversionInput = {
    id?: string;
    user_id: string;
    timestamp?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type conversion_historyCreateOrConnectWithoutConversionInput = {
    where: conversion_historyWhereUniqueInput;
    create: XOR<
      conversion_historyCreateWithoutConversionInput,
      conversion_historyUncheckedCreateWithoutConversionInput
    >;
  };

  export type conversion_historyCreateManyConversionInputEnvelope = {
    data: conversion_historyCreateManyConversionInput | conversion_historyCreateManyConversionInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutConversionInput = {
    update: XOR<userUpdateWithoutConversionInput, userUncheckedUpdateWithoutConversionInput>;
    create: XOR<userCreateWithoutConversionInput, userUncheckedCreateWithoutConversionInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutConversionInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutConversionInput, userUncheckedUpdateWithoutConversionInput>;
  };

  export type userUpdateWithoutConversionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    conversion_history?: conversion_historyUpdateManyWithoutUserNestedInput;
    role?: roleUpdateManyWithoutUserNestedInput;
    user_role?: user_roleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutConversionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    conversion_history?: conversion_historyUncheckedUpdateManyWithoutUserNestedInput;
    role?: roleUncheckedUpdateManyWithoutUserNestedInput;
    user_role?: user_roleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type conversion_historyUpsertWithWhereUniqueWithoutConversionInput = {
    where: conversion_historyWhereUniqueInput;
    update: XOR<
      conversion_historyUpdateWithoutConversionInput,
      conversion_historyUncheckedUpdateWithoutConversionInput
    >;
    create: XOR<
      conversion_historyCreateWithoutConversionInput,
      conversion_historyUncheckedCreateWithoutConversionInput
    >;
  };

  export type conversion_historyUpdateWithWhereUniqueWithoutConversionInput = {
    where: conversion_historyWhereUniqueInput;
    data: XOR<conversion_historyUpdateWithoutConversionInput, conversion_historyUncheckedUpdateWithoutConversionInput>;
  };

  export type conversion_historyUpdateManyWithWhereWithoutConversionInput = {
    where: conversion_historyScalarWhereInput;
    data: XOR<conversion_historyUpdateManyMutationInput, conversion_historyUncheckedUpdateManyWithoutConversionInput>;
  };

  export type conversion_historyScalarWhereInput = {
    AND?: conversion_historyScalarWhereInput | conversion_historyScalarWhereInput[];
    OR?: conversion_historyScalarWhereInput[];
    NOT?: conversion_historyScalarWhereInput | conversion_historyScalarWhereInput[];
    id?: UuidFilter<'conversion_history'> | string;
    conversion_id?: UuidFilter<'conversion_history'> | string;
    user_id?: UuidFilter<'conversion_history'> | string;
    timestamp?: DateTimeNullableFilter<'conversion_history'> | Date | string | null;
    created_at?: DateTimeFilter<'conversion_history'> | Date | string;
    updated_at?: DateTimeFilter<'conversion_history'> | Date | string;
  };

  export type conversionCreateWithoutConversion_historyInput = {
    id?: string;
    pixel_value: number;
    vector_value: number;
    conversion_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutConversionInput;
  };

  export type conversionUncheckedCreateWithoutConversion_historyInput = {
    id?: string;
    pixel_value: number;
    vector_value: number;
    conversion_time?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type conversionCreateOrConnectWithoutConversion_historyInput = {
    where: conversionWhereUniqueInput;
    create: XOR<
      conversionCreateWithoutConversion_historyInput,
      conversionUncheckedCreateWithoutConversion_historyInput
    >;
  };

  export type userCreateWithoutConversion_historyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    conversion?: conversionCreateNestedManyWithoutUserInput;
    role?: roleCreateNestedManyWithoutUserInput;
    user_role?: user_roleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutConversion_historyInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    conversion?: conversionUncheckedCreateNestedManyWithoutUserInput;
    role?: roleUncheckedCreateNestedManyWithoutUserInput;
    user_role?: user_roleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutConversion_historyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutConversion_historyInput, userUncheckedCreateWithoutConversion_historyInput>;
  };

  export type conversionUpsertWithoutConversion_historyInput = {
    update: XOR<
      conversionUpdateWithoutConversion_historyInput,
      conversionUncheckedUpdateWithoutConversion_historyInput
    >;
    create: XOR<
      conversionCreateWithoutConversion_historyInput,
      conversionUncheckedCreateWithoutConversion_historyInput
    >;
    where?: conversionWhereInput;
  };

  export type conversionUpdateToOneWithWhereWithoutConversion_historyInput = {
    where?: conversionWhereInput;
    data: XOR<conversionUpdateWithoutConversion_historyInput, conversionUncheckedUpdateWithoutConversion_historyInput>;
  };

  export type conversionUpdateWithoutConversion_historyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pixel_value?: IntFieldUpdateOperationsInput | number;
    vector_value?: IntFieldUpdateOperationsInput | number;
    conversion_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutConversionNestedInput;
  };

  export type conversionUncheckedUpdateWithoutConversion_historyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pixel_value?: IntFieldUpdateOperationsInput | number;
    vector_value?: IntFieldUpdateOperationsInput | number;
    conversion_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutConversion_historyInput = {
    update: XOR<userUpdateWithoutConversion_historyInput, userUncheckedUpdateWithoutConversion_historyInput>;
    create: XOR<userCreateWithoutConversion_historyInput, userUncheckedCreateWithoutConversion_historyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutConversion_historyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutConversion_historyInput, userUncheckedUpdateWithoutConversion_historyInput>;
  };

  export type userUpdateWithoutConversion_historyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    conversion?: conversionUpdateManyWithoutUserNestedInput;
    role?: roleUpdateManyWithoutUserNestedInput;
    user_role?: user_roleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutConversion_historyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    conversion?: conversionUncheckedUpdateManyWithoutUserNestedInput;
    role?: roleUncheckedUpdateManyWithoutUserNestedInput;
    user_role?: user_roleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutRoleInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    conversion?: conversionCreateNestedManyWithoutUserInput;
    conversion_history?: conversion_historyCreateNestedManyWithoutUserInput;
    user_role?: user_roleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutRoleInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    conversion?: conversionUncheckedCreateNestedManyWithoutUserInput;
    conversion_history?: conversion_historyUncheckedCreateNestedManyWithoutUserInput;
    user_role?: user_roleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutRoleInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput>;
  };

  export type user_roleCreateWithoutRoleInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutUser_roleInput;
  };

  export type user_roleUncheckedCreateWithoutRoleInput = {
    id?: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_roleCreateOrConnectWithoutRoleInput = {
    where: user_roleWhereUniqueInput;
    create: XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput>;
  };

  export type user_roleCreateManyRoleInputEnvelope = {
    data: user_roleCreateManyRoleInput | user_roleCreateManyRoleInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutRoleInput = {
    update: XOR<userUpdateWithoutRoleInput, userUncheckedUpdateWithoutRoleInput>;
    create: XOR<userCreateWithoutRoleInput, userUncheckedCreateWithoutRoleInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutRoleInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutRoleInput, userUncheckedUpdateWithoutRoleInput>;
  };

  export type userUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    conversion?: conversionUpdateManyWithoutUserNestedInput;
    conversion_history?: conversion_historyUpdateManyWithoutUserNestedInput;
    user_role?: user_roleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    conversion?: conversionUncheckedUpdateManyWithoutUserNestedInput;
    conversion_history?: conversion_historyUncheckedUpdateManyWithoutUserNestedInput;
    user_role?: user_roleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type user_roleUpsertWithWhereUniqueWithoutRoleInput = {
    where: user_roleWhereUniqueInput;
    update: XOR<user_roleUpdateWithoutRoleInput, user_roleUncheckedUpdateWithoutRoleInput>;
    create: XOR<user_roleCreateWithoutRoleInput, user_roleUncheckedCreateWithoutRoleInput>;
  };

  export type user_roleUpdateWithWhereUniqueWithoutRoleInput = {
    where: user_roleWhereUniqueInput;
    data: XOR<user_roleUpdateWithoutRoleInput, user_roleUncheckedUpdateWithoutRoleInput>;
  };

  export type user_roleUpdateManyWithWhereWithoutRoleInput = {
    where: user_roleScalarWhereInput;
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyWithoutRoleInput>;
  };

  export type user_roleScalarWhereInput = {
    AND?: user_roleScalarWhereInput | user_roleScalarWhereInput[];
    OR?: user_roleScalarWhereInput[];
    NOT?: user_roleScalarWhereInput | user_roleScalarWhereInput[];
    id?: UuidFilter<'user_role'> | string;
    user_id?: UuidFilter<'user_role'> | string;
    role_id?: UuidFilter<'user_role'> | string;
    created_at?: DateTimeFilter<'user_role'> | Date | string;
    updated_at?: DateTimeFilter<'user_role'> | Date | string;
  };

  export type conversionCreateWithoutUserInput = {
    id?: string;
    pixel_value: number;
    vector_value: number;
    conversion_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    conversion_history?: conversion_historyCreateNestedManyWithoutConversionInput;
  };

  export type conversionUncheckedCreateWithoutUserInput = {
    id?: string;
    pixel_value: number;
    vector_value: number;
    conversion_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    conversion_history?: conversion_historyUncheckedCreateNestedManyWithoutConversionInput;
  };

  export type conversionCreateOrConnectWithoutUserInput = {
    where: conversionWhereUniqueInput;
    create: XOR<conversionCreateWithoutUserInput, conversionUncheckedCreateWithoutUserInput>;
  };

  export type conversionCreateManyUserInputEnvelope = {
    data: conversionCreateManyUserInput | conversionCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type conversion_historyCreateWithoutUserInput = {
    id?: string;
    timestamp?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    conversion: conversionCreateNestedOneWithoutConversion_historyInput;
  };

  export type conversion_historyUncheckedCreateWithoutUserInput = {
    id?: string;
    conversion_id: string;
    timestamp?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type conversion_historyCreateOrConnectWithoutUserInput = {
    where: conversion_historyWhereUniqueInput;
    create: XOR<conversion_historyCreateWithoutUserInput, conversion_historyUncheckedCreateWithoutUserInput>;
  };

  export type conversion_historyCreateManyUserInputEnvelope = {
    data: conversion_historyCreateManyUserInput | conversion_historyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type roleCreateWithoutUserInput = {
    id?: string;
    role_name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_role?: user_roleCreateNestedManyWithoutRoleInput;
  };

  export type roleUncheckedCreateWithoutUserInput = {
    id?: string;
    role_name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_role?: user_roleUncheckedCreateNestedManyWithoutRoleInput;
  };

  export type roleCreateOrConnectWithoutUserInput = {
    where: roleWhereUniqueInput;
    create: XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>;
  };

  export type roleCreateManyUserInputEnvelope = {
    data: roleCreateManyUserInput | roleCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type user_roleCreateWithoutUserInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    role: roleCreateNestedOneWithoutUser_roleInput;
  };

  export type user_roleUncheckedCreateWithoutUserInput = {
    id?: string;
    role_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_roleCreateOrConnectWithoutUserInput = {
    where: user_roleWhereUniqueInput;
    create: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>;
  };

  export type user_roleCreateManyUserInputEnvelope = {
    data: user_roleCreateManyUserInput | user_roleCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type conversionUpsertWithWhereUniqueWithoutUserInput = {
    where: conversionWhereUniqueInput;
    update: XOR<conversionUpdateWithoutUserInput, conversionUncheckedUpdateWithoutUserInput>;
    create: XOR<conversionCreateWithoutUserInput, conversionUncheckedCreateWithoutUserInput>;
  };

  export type conversionUpdateWithWhereUniqueWithoutUserInput = {
    where: conversionWhereUniqueInput;
    data: XOR<conversionUpdateWithoutUserInput, conversionUncheckedUpdateWithoutUserInput>;
  };

  export type conversionUpdateManyWithWhereWithoutUserInput = {
    where: conversionScalarWhereInput;
    data: XOR<conversionUpdateManyMutationInput, conversionUncheckedUpdateManyWithoutUserInput>;
  };

  export type conversionScalarWhereInput = {
    AND?: conversionScalarWhereInput | conversionScalarWhereInput[];
    OR?: conversionScalarWhereInput[];
    NOT?: conversionScalarWhereInput | conversionScalarWhereInput[];
    id?: UuidFilter<'conversion'> | string;
    pixel_value?: IntFilter<'conversion'> | number;
    vector_value?: IntFilter<'conversion'> | number;
    conversion_time?: DateTimeNullableFilter<'conversion'> | Date | string | null;
    user_id?: UuidFilter<'conversion'> | string;
    created_at?: DateTimeFilter<'conversion'> | Date | string;
    updated_at?: DateTimeFilter<'conversion'> | Date | string;
  };

  export type conversion_historyUpsertWithWhereUniqueWithoutUserInput = {
    where: conversion_historyWhereUniqueInput;
    update: XOR<conversion_historyUpdateWithoutUserInput, conversion_historyUncheckedUpdateWithoutUserInput>;
    create: XOR<conversion_historyCreateWithoutUserInput, conversion_historyUncheckedCreateWithoutUserInput>;
  };

  export type conversion_historyUpdateWithWhereUniqueWithoutUserInput = {
    where: conversion_historyWhereUniqueInput;
    data: XOR<conversion_historyUpdateWithoutUserInput, conversion_historyUncheckedUpdateWithoutUserInput>;
  };

  export type conversion_historyUpdateManyWithWhereWithoutUserInput = {
    where: conversion_historyScalarWhereInput;
    data: XOR<conversion_historyUpdateManyMutationInput, conversion_historyUncheckedUpdateManyWithoutUserInput>;
  };

  export type roleUpsertWithWhereUniqueWithoutUserInput = {
    where: roleWhereUniqueInput;
    update: XOR<roleUpdateWithoutUserInput, roleUncheckedUpdateWithoutUserInput>;
    create: XOR<roleCreateWithoutUserInput, roleUncheckedCreateWithoutUserInput>;
  };

  export type roleUpdateWithWhereUniqueWithoutUserInput = {
    where: roleWhereUniqueInput;
    data: XOR<roleUpdateWithoutUserInput, roleUncheckedUpdateWithoutUserInput>;
  };

  export type roleUpdateManyWithWhereWithoutUserInput = {
    where: roleScalarWhereInput;
    data: XOR<roleUpdateManyMutationInput, roleUncheckedUpdateManyWithoutUserInput>;
  };

  export type roleScalarWhereInput = {
    AND?: roleScalarWhereInput | roleScalarWhereInput[];
    OR?: roleScalarWhereInput[];
    NOT?: roleScalarWhereInput | roleScalarWhereInput[];
    id?: UuidFilter<'role'> | string;
    role_name?: StringFilter<'role'> | string;
    description?: StringNullableFilter<'role'> | string | null;
    user_id?: UuidFilter<'role'> | string;
    created_at?: DateTimeFilter<'role'> | Date | string;
    updated_at?: DateTimeFilter<'role'> | Date | string;
  };

  export type user_roleUpsertWithWhereUniqueWithoutUserInput = {
    where: user_roleWhereUniqueInput;
    update: XOR<user_roleUpdateWithoutUserInput, user_roleUncheckedUpdateWithoutUserInput>;
    create: XOR<user_roleCreateWithoutUserInput, user_roleUncheckedCreateWithoutUserInput>;
  };

  export type user_roleUpdateWithWhereUniqueWithoutUserInput = {
    where: user_roleWhereUniqueInput;
    data: XOR<user_roleUpdateWithoutUserInput, user_roleUncheckedUpdateWithoutUserInput>;
  };

  export type user_roleUpdateManyWithWhereWithoutUserInput = {
    where: user_roleScalarWhereInput;
    data: XOR<user_roleUpdateManyMutationInput, user_roleUncheckedUpdateManyWithoutUserInput>;
  };

  export type roleCreateWithoutUser_roleInput = {
    id?: string;
    role_name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutRoleInput;
  };

  export type roleUncheckedCreateWithoutUser_roleInput = {
    id?: string;
    role_name: string;
    description?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type roleCreateOrConnectWithoutUser_roleInput = {
    where: roleWhereUniqueInput;
    create: XOR<roleCreateWithoutUser_roleInput, roleUncheckedCreateWithoutUser_roleInput>;
  };

  export type userCreateWithoutUser_roleInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    conversion?: conversionCreateNestedManyWithoutUserInput;
    conversion_history?: conversion_historyCreateNestedManyWithoutUserInput;
    role?: roleCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutUser_roleInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    conversion?: conversionUncheckedCreateNestedManyWithoutUserInput;
    conversion_history?: conversion_historyUncheckedCreateNestedManyWithoutUserInput;
    role?: roleUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutUser_roleInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput>;
  };

  export type roleUpsertWithoutUser_roleInput = {
    update: XOR<roleUpdateWithoutUser_roleInput, roleUncheckedUpdateWithoutUser_roleInput>;
    create: XOR<roleCreateWithoutUser_roleInput, roleUncheckedCreateWithoutUser_roleInput>;
    where?: roleWhereInput;
  };

  export type roleUpdateToOneWithWhereWithoutUser_roleInput = {
    where?: roleWhereInput;
    data: XOR<roleUpdateWithoutUser_roleInput, roleUncheckedUpdateWithoutUser_roleInput>;
  };

  export type roleUpdateWithoutUser_roleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role_name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutRoleNestedInput;
  };

  export type roleUncheckedUpdateWithoutUser_roleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role_name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutUser_roleInput = {
    update: XOR<userUpdateWithoutUser_roleInput, userUncheckedUpdateWithoutUser_roleInput>;
    create: XOR<userCreateWithoutUser_roleInput, userUncheckedCreateWithoutUser_roleInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutUser_roleInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutUser_roleInput, userUncheckedUpdateWithoutUser_roleInput>;
  };

  export type userUpdateWithoutUser_roleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    conversion?: conversionUpdateManyWithoutUserNestedInput;
    conversion_history?: conversion_historyUpdateManyWithoutUserNestedInput;
    role?: roleUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutUser_roleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    conversion?: conversionUncheckedUpdateManyWithoutUserNestedInput;
    conversion_history?: conversion_historyUncheckedUpdateManyWithoutUserNestedInput;
    role?: roleUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type conversion_historyCreateManyConversionInput = {
    id?: string;
    user_id: string;
    timestamp?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type conversion_historyUpdateWithoutConversionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutConversion_historyNestedInput;
  };

  export type conversion_historyUncheckedUpdateWithoutConversionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type conversion_historyUncheckedUpdateManyWithoutConversionInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_roleCreateManyRoleInput = {
    id?: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_roleUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutUser_roleNestedInput;
  };

  export type user_roleUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_roleUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type conversionCreateManyUserInput = {
    id?: string;
    pixel_value: number;
    vector_value: number;
    conversion_time?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type conversion_historyCreateManyUserInput = {
    id?: string;
    conversion_id: string;
    timestamp?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type roleCreateManyUserInput = {
    id?: string;
    role_name: string;
    description?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type user_roleCreateManyUserInput = {
    id?: string;
    role_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type conversionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pixel_value?: IntFieldUpdateOperationsInput | number;
    vector_value?: IntFieldUpdateOperationsInput | number;
    conversion_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    conversion_history?: conversion_historyUpdateManyWithoutConversionNestedInput;
  };

  export type conversionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pixel_value?: IntFieldUpdateOperationsInput | number;
    vector_value?: IntFieldUpdateOperationsInput | number;
    conversion_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    conversion_history?: conversion_historyUncheckedUpdateManyWithoutConversionNestedInput;
  };

  export type conversionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    pixel_value?: IntFieldUpdateOperationsInput | number;
    vector_value?: IntFieldUpdateOperationsInput | number;
    conversion_time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type conversion_historyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    conversion?: conversionUpdateOneRequiredWithoutConversion_historyNestedInput;
  };

  export type conversion_historyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    conversion_id?: StringFieldUpdateOperationsInput | string;
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type conversion_historyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    conversion_id?: StringFieldUpdateOperationsInput | string;
    timestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type roleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role_name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_role?: user_roleUpdateManyWithoutRoleNestedInput;
  };

  export type roleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role_name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_role?: user_roleUncheckedUpdateManyWithoutRoleNestedInput;
  };

  export type roleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role_name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_roleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    role?: roleUpdateOneRequiredWithoutUser_roleNestedInput;
  };

  export type user_roleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type user_roleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    role_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use ConversionCountOutputTypeDefaultArgs instead
   */
  export type ConversionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ConversionCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use RoleCountOutputTypeDefaultArgs instead
   */
  export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    RoleCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use conversionDefaultArgs instead
   */
  export type conversionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    conversionDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use conversion_historyDefaultArgs instead
   */
  export type conversion_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    conversion_historyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use roleDefaultArgs instead
   */
  export type roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = roleDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use user_roleDefaultArgs instead
   */
  export type user_roleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    user_roleDefaultArgs<ExtArgs>;

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
