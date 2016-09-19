declare module $data
{
    export class EntityAttachMode
    {
        static defaultMode: string;
        static AllChanged(data: any): void;
        static KeepChanges(data: any): void;
        static Default(data: any): void;
    }

    interface IPromise<T> extends Object
    {
        then(handler: (args: T) => void): IPromise<any>;
        then(handler: (args: T) => any): IPromise<any>;

        fail(handler: (args: T) => void): IPromise<any>;
        fail(handler: (args: T) => any): IPromise<any>;

        valueOf(): Object;
    }

    export class Base implements Object
    {
        constructor(...params: any[]);
        getType: () => any;
    }

    interface Event extends Object
    {
        attach(eventHandler: (sender: any, event: any) => void): void;
        detach(eventHandler: () => void): void;
        fire(e: any, sender: any): void;
    }

    export class Entity extends Base
    {
        constructor();
        constructor(initData: {});

        entityState: number;
        changedProperties: any[];

        propertyChanging: Event;
        propertyChanged: Event;
        propertyValidationError: Event;
        isValid: boolean;

        context: any;

        addEventListener(eventName: string, func: Function): void;
        _skipChangeTracking: boolean;
        _isDeleted: boolean;
        getMemberDefinition(field: string): any;

        getFieldNames(): any[];
        memberDefinitions: any;
    }

    export class Queryable<T extends Entity> implements Object
    {
        withInlineCount(): Queryable<T>;

        filter(predicate: (it: T) => boolean): Queryable<T>;
        filter(predicate: (it: T) => boolean, thisArg: any): Queryable<T>;

        map(projection: (it: T) => any): Queryable<any>;

        length(): $data.IPromise<Number>;
        length(handler: (result: number) => void): $data.IPromise<Number>;
        length(handler: { success?: (result: number) => void; error?: (result: any) => void; }): $data.IPromise<Number>;

        forEach(handler: (it: any) => void): $data.IPromise<T>;

        toArray(): $data.IPromise<T[]>;
        toArray(handler: (result: T[]) => void): $data.IPromise<T[]>;
        toArray(handler: { success?: (result: T[]) => void; error?: (result: any) => void; }): $data.IPromise<T[]>;

        single(predicate: (it: T) => boolean, params?: any, handler?: (result: T) => void): $data.IPromise<T>;
        single(predicate: (it: T) => boolean, params?: any, handler?: { success?: (result: T) => void; error?: (result: any) => void; }): $data.IPromise<T>;
        single(query: string): $data.IPromise<T>;

        take(amout: number): Queryable<T>;
        skip(amout: number): Queryable<T>;

        order(selector: string): Queryable<T>;
        orderBy(predicate: (it: T) => any): Queryable<T>;
        orderByDescending(predicate: (it: T) => any): Queryable<T>;

        first(predicate: (it: T) => boolean, params?: any, handler?: (result: T) => void): $data.IPromise<T>;
        first(predicate: (it: T) => boolean, params?: any, handler?: { success?: (result: T) => void; error?: (result: any) => void; }): $data.IPromise<T>;

        include(selector: string): Queryable<T>;

        removeAll(): $data.IPromise<Number>;
        removeAll(handler: (count: number) => void): $data.IPromise<Number>;
        removeAll(handler: { success?: (result: number) => void; error?: (result: any) => void; }): $data.IPromise<Number>;

        find(item: T): $data.IPromise<T>;
    }

    export class EntitySet<T extends Entity> extends Queryable<T> {
        tableName: string;
        collectionName: string;

        add(item: T): T;
        add(initData: {}): T;

        attach(item: T): void;
        attach(item: {}): void;
        attachOrGet(item: T, options: any): T;
        attachOrGet(item: {}): T;

        detach(item: T): void;
        detach(item: {}): void;

        remove(item: T): void;
        remove(item: {}): void;

        elementType: T;
        entityContext: any;

        bulkInsert(fields: any[], records: any[]): $data.IPromise<void>;

        static addMember(name: string, f: any): void;
    }

    export class EntityContext implements Object
    {
        constructor(config: any);
        constructor(config: { name: string; oDataServiceHost: string; MaxDataServiceVersion: string; });
        constructor(config: { name: string; oDataServiceHost?: string; databaseName?: string; localStoreName?: string; user?: string; password?: string; });

        onReady(): $data.IPromise<EntityContext>;
        onReady(handler: (currentContext: EntityContext) => void): $data.IPromise<EntityContext>;
        saveChanges(): $data.IPromise<Number>;
        saveChanges(handler: (result: number) => void): $data.IPromise<Number>;
        saveChanges(cb: { success?: (result: number) => void; error?: (result: any) => void; }): $data.IPromise<Number>;

        add(item: Entity): Entity;
        attach(item: Entity): void;
        attachOrGet(item: Entity): Entity;
        attachOrGet(item: Entity, EntityAttachMode: any): Entity;
        detach(item: Entity): void;
        remove(item: Entity): void;

        prepareRequest(req: any): void;
        storageProvider: any;
        forEachEntitySet(result: any): void;

        stateManager: any;
        getEntitySetFromElementType(type: any): any;

        bulkInsert(entitySet: any, fields: any[], records: any[]): $data.IPromise<void>;
    }

    export class Association implements Object
    {

    }

    export class Blob implements Object
    {

    }
    export class Guid implements Object
    {
        constructor(value: string);
        value: string;
    }


    export class SimpleBase implements Object
    {
        constructor(initData: any);
    }
    export class Geospatial extends SimpleBase
    {
        constructor(initData: any);
        type: String;
    }
    export class Geography extends Geospatial
    {
        constructor(initData: any);
    }

    export class GeographyPoint extends Geography
    {
        constructor(initData: any);
        constructor(coordinates: any[]);
        constructor(longitude: number, latitude: number);
        longitude: number;
        latitude: number;
        coordinates: any[];
    }
    export class GeographyLineString extends Geography
    {
        constructor(initData: any);
        constructor(coordinates: any[]);
        coordinates: any[];
    }
    export class GeographyPolygon extends Geography
    {
        constructor(initData: any);
        constructor(coordinates: any[]);
        coordinates: any[];
    }
    export class GeographyMultiPoint extends Geography
    {
        constructor(initData: any);
        constructor(coordinates: any[]);
        coordinates: any[];
    }
    export class GeographyMultiLineString extends Geography
    {
        constructor(initData: any);
        constructor(coordinates: any[]);
        coordinates: any[];
    }
    export class GeographyMultiPolygon extends Geography
    {
        constructor(initData: any);
        constructor(coordinates: any[]);
        coordinates: any[];
    }
    export class GeographyCollection extends Geography
    {
        constructor(initData: any);
        constructor(geometries: any[]);
        geometries: any[];
    }

    export class Geometry extends Geospatial
    {
        constructor(initData: any);
    }

    export class GeometryPoint extends Geometry
    {
        constructor(initData: any);
        constructor(coordinates: any[]);
        constructor(x: number, y: number);
        x: number;
        y: number;
        coordinates: any[];
    }
    export class GeometryLineString extends Geometry
    {
        constructor(initData: any);
        constructor(coordinates: any[]);
        coordinates: any[];
    }
    export class GeometryPolygon extends Geometry
    {
        constructor(initData: any);
        constructor(coordinates: any[]);
        coordinates: any[];
    }
    export class GeometryMultiPoint extends Geometry
    {
        constructor(initData: any);
        constructor(coordinates: any[]);
        coordinates: any[];
    }
    export class GeometryMultiLineString extends Geometry
    {
        constructor(initData: any);
        constructor(coordinates: any[]);
        coordinates: any[];
    }
    export class GeometryMultiPolygon extends Geometry
    {
        constructor(initData: any);
        constructor(coordinates: any[]);
        coordinates: any[];
    }
    export class GeometryCollection extends Geography
    {
        constructor(initData: any);
        constructor(geometries: any[]);
        geometries: any[];
    }

}

declare module Q
{
    export var resolve: (p: any) => $data.IPromise<any>;
    export var when: (p: $data.IPromise<any>, then?: () => any, fail?: () => any) => $data.IPromise<any>;
    export var all: (p: $data.IPromise<any>[]) => $data.IPromise<any>;
    export var allResolved: (p: $data.IPromise<any>[]) => $data.IPromise<any>;

    export var fcall: (handler: () => any) => $data.IPromise<any>;
}

interface String
{
    contains(s: string): boolean;
    startsWith(s: string): boolean;
    endsWith(s: string): boolean;
    strLength(): number;
    indexOf(s: string): number;
    concat(s: string): string;
}

interface Date
{
    day(): number;
    hour(): number;
    minute(): number;
    month(): number;
    second(): number;
    year(): number;
}

interface Number
{
    round(): number;
    floor(): number;
    ceiling(): number;
}

