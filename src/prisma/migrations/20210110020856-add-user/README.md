# Migration `20210110020856-add-user`

This migration has been generated at 1/10/2021, 2:08:57 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `User` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
UNIQUE INDEX `User.email_unique`(`email`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20210110020856-add-user
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,16 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "mysql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id    Int    @id @default(autoincrement())
+  email String @unique
+}
```


