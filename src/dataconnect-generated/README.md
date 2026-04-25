# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*AllDreams*](#alldreams)
  - [*MyDreams*](#mydreams)
- [**Mutations**](#mutations)
  - [*CreateMyDream*](#createmydream)
  - [*StarADream*](#staradream)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## AllDreams
You can execute the `AllDreams` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
allDreams(options?: ExecuteQueryOptions): QueryPromise<AllDreamsData, undefined>;

interface AllDreamsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<AllDreamsData, undefined>;
}
export const allDreamsRef: AllDreamsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
allDreams(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<AllDreamsData, undefined>;

interface AllDreamsRef {
  ...
  (dc: DataConnect): QueryRef<AllDreamsData, undefined>;
}
export const allDreamsRef: AllDreamsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the allDreamsRef:
```typescript
const name = allDreamsRef.operationName;
console.log(name);
```

### Variables
The `AllDreams` query has no variables.
### Return Type
Recall that executing the `AllDreams` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `AllDreamsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface AllDreamsData {
  dreams: ({
    id: UUIDString;
    content: string;
    mood?: string | null;
    createdAt: TimestampString;
    tags?: string[] | null;
  } & Dream_Key)[];
}
```
### Using `AllDreams`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, allDreams } from '@dataconnect/generated';


// Call the `allDreams()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await allDreams();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await allDreams(dataConnect);

console.log(data.dreams);

// Or, you can use the `Promise` API.
allDreams().then((response) => {
  const data = response.data;
  console.log(data.dreams);
});
```

### Using `AllDreams`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, allDreamsRef } from '@dataconnect/generated';


// Call the `allDreamsRef()` function to get a reference to the query.
const ref = allDreamsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = allDreamsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.dreams);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.dreams);
});
```

## MyDreams
You can execute the `MyDreams` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
myDreams(options?: ExecuteQueryOptions): QueryPromise<MyDreamsData, undefined>;

interface MyDreamsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<MyDreamsData, undefined>;
}
export const myDreamsRef: MyDreamsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
myDreams(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<MyDreamsData, undefined>;

interface MyDreamsRef {
  ...
  (dc: DataConnect): QueryRef<MyDreamsData, undefined>;
}
export const myDreamsRef: MyDreamsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the myDreamsRef:
```typescript
const name = myDreamsRef.operationName;
console.log(name);
```

### Variables
The `MyDreams` query has no variables.
### Return Type
Recall that executing the `MyDreams` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `MyDreamsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface MyDreamsData {
  users: ({
    id: UUIDString;
    dreams_via_StarredDream: ({
      id: UUIDString;
      content: string;
      mood?: string | null;
      createdAt: TimestampString;
    } & Dream_Key)[];
  } & User_Key)[];
}
```
### Using `MyDreams`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, myDreams } from '@dataconnect/generated';


// Call the `myDreams()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await myDreams();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await myDreams(dataConnect);

console.log(data.users);

// Or, you can use the `Promise` API.
myDreams().then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

### Using `MyDreams`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, myDreamsRef } from '@dataconnect/generated';


// Call the `myDreamsRef()` function to get a reference to the query.
const ref = myDreamsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = myDreamsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.users);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.users);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateMyDream
You can execute the `CreateMyDream` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createMyDream(vars: CreateMyDreamVariables): MutationPromise<CreateMyDreamData, CreateMyDreamVariables>;

interface CreateMyDreamRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMyDreamVariables): MutationRef<CreateMyDreamData, CreateMyDreamVariables>;
}
export const createMyDreamRef: CreateMyDreamRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createMyDream(dc: DataConnect, vars: CreateMyDreamVariables): MutationPromise<CreateMyDreamData, CreateMyDreamVariables>;

interface CreateMyDreamRef {
  ...
  (dc: DataConnect, vars: CreateMyDreamVariables): MutationRef<CreateMyDreamData, CreateMyDreamVariables>;
}
export const createMyDreamRef: CreateMyDreamRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createMyDreamRef:
```typescript
const name = createMyDreamRef.operationName;
console.log(name);
```

### Variables
The `CreateMyDream` mutation requires an argument of type `CreateMyDreamVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateMyDreamVariables {
  content: string;
  mood?: string | null;
  tags?: string[] | null;
}
```
### Return Type
Recall that executing the `CreateMyDream` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateMyDreamData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateMyDreamData {
  dream_insert: Dream_Key;
}
```
### Using `CreateMyDream`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createMyDream, CreateMyDreamVariables } from '@dataconnect/generated';

// The `CreateMyDream` mutation requires an argument of type `CreateMyDreamVariables`:
const createMyDreamVars: CreateMyDreamVariables = {
  content: ..., 
  mood: ..., // optional
  tags: ..., // optional
};

// Call the `createMyDream()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createMyDream(createMyDreamVars);
// Variables can be defined inline as well.
const { data } = await createMyDream({ content: ..., mood: ..., tags: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createMyDream(dataConnect, createMyDreamVars);

console.log(data.dream_insert);

// Or, you can use the `Promise` API.
createMyDream(createMyDreamVars).then((response) => {
  const data = response.data;
  console.log(data.dream_insert);
});
```

### Using `CreateMyDream`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createMyDreamRef, CreateMyDreamVariables } from '@dataconnect/generated';

// The `CreateMyDream` mutation requires an argument of type `CreateMyDreamVariables`:
const createMyDreamVars: CreateMyDreamVariables = {
  content: ..., 
  mood: ..., // optional
  tags: ..., // optional
};

// Call the `createMyDreamRef()` function to get a reference to the mutation.
const ref = createMyDreamRef(createMyDreamVars);
// Variables can be defined inline as well.
const ref = createMyDreamRef({ content: ..., mood: ..., tags: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createMyDreamRef(dataConnect, createMyDreamVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.dream_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.dream_insert);
});
```

## StarADream
You can execute the `StarADream` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
starADream(vars: StarADreamVariables): MutationPromise<StarADreamData, StarADreamVariables>;

interface StarADreamRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: StarADreamVariables): MutationRef<StarADreamData, StarADreamVariables>;
}
export const starADreamRef: StarADreamRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
starADream(dc: DataConnect, vars: StarADreamVariables): MutationPromise<StarADreamData, StarADreamVariables>;

interface StarADreamRef {
  ...
  (dc: DataConnect, vars: StarADreamVariables): MutationRef<StarADreamData, StarADreamVariables>;
}
export const starADreamRef: StarADreamRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the starADreamRef:
```typescript
const name = starADreamRef.operationName;
console.log(name);
```

### Variables
The `StarADream` mutation requires an argument of type `StarADreamVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface StarADreamVariables {
  dreamId: UUIDString;
}
```
### Return Type
Recall that executing the `StarADream` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `StarADreamData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface StarADreamData {
  starredDream_insert: StarredDream_Key;
}
```
### Using `StarADream`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, starADream, StarADreamVariables } from '@dataconnect/generated';

// The `StarADream` mutation requires an argument of type `StarADreamVariables`:
const starADreamVars: StarADreamVariables = {
  dreamId: ..., 
};

// Call the `starADream()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await starADream(starADreamVars);
// Variables can be defined inline as well.
const { data } = await starADream({ dreamId: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await starADream(dataConnect, starADreamVars);

console.log(data.starredDream_insert);

// Or, you can use the `Promise` API.
starADream(starADreamVars).then((response) => {
  const data = response.data;
  console.log(data.starredDream_insert);
});
```

### Using `StarADream`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, starADreamRef, StarADreamVariables } from '@dataconnect/generated';

// The `StarADream` mutation requires an argument of type `StarADreamVariables`:
const starADreamVars: StarADreamVariables = {
  dreamId: ..., 
};

// Call the `starADreamRef()` function to get a reference to the mutation.
const ref = starADreamRef(starADreamVars);
// Variables can be defined inline as well.
const ref = starADreamRef({ dreamId: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = starADreamRef(dataConnect, starADreamVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.starredDream_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.starredDream_insert);
});
```

