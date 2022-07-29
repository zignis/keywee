KeyWee

# KeyWee

## Table of contents

### Functions

- [objPick](README.md#objpick)
- [objSanitize](README.md#objsanitize)

## Functions

### objPick

▸ **objPick**<`Type`, `Key`\>(`obj`, `keys`, `options?`): `Record`<`string` \| `Key`, `Type`[keyof `Type`]\>

Pick specific keys from an object.

**`Example`**

```ts
const obj = {
  "one": true,
  "two": false,
  "foo": "bar"
};

objPick(obj, ['two', 'foo']);

=>
{
  "two": false,
  "foo": "bar"
}
```

**`Property`**

Create new properties for missing keys.

**`Property`**

Default value to use for upsert.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends `Record`<`any`, `any`\> |
| `Key` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `Type` | Source object. |
| `keys` | `Key`[] \| `string`[] | Array of keys to pick. |
| `options?` | `Object` | Object pick options. |
| `options.defaultValue?` | `any` | - |
| `options.upsert?` | `boolean` | - |

#### Returns

`Record`<`string` \| `Key`, `Type`[keyof `Type`]\>

Object with specified keys.

___

### objSanitize

▸ **objSanitize**<`Type`\>(`obj`, `options?`): `Partial`<`Type`\>

Sanitize an object.

**`Example`**

```ts
objSanitize({
  "1": null,
  "2": "two",
  "3": undefined
});

=>
{
  "2": "two"
}

objSanitize({
  "foo": 1,
  "bar": "one"
}, {
  validate: (value) => typeof value !== 'string',
});

=>
{
  "foo": 1
}
```

**`Property`**

Custom validator function.

**`Property`**

Preserve the original object.

**`Property`**

Remove empty strings.

**`Property`**

Remove empty nested objects.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends `Record`<`any`, `any`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | `Type` | Source object. |
| `options?` | `Object` | Object sanitize options. |
| `options.preserveOriginal?` | `boolean` | - |
| `options.removeEmptyObjects?` | `boolean` | - |
| `options.removeEmptyStrings?` | `boolean` | - |
| `options.validate?` | (`value`: `Type`[keyof `Type`]) => `boolean` | - |

#### Returns

`Partial`<`Type`\>

Sanitized object.
