# .lancher.yaml

The `.lancher.yaml` file is an optional YAML configuration that defines template behavior. It specifies metadata displayed during project creation (name, description, author, version), shell commands executed after file copy (hooks), and patterns for excluding files from the copy operation (ignore). All fields are optional.

## File Format

The configuration uses standard YAML syntax with predefined top-level keys.

```yaml
name: Template Name
description: Brief description
author: Author Name
version: 1.0.0
hooks:
  - command1
  - command2
ignore:
  - pattern1
  - pattern2
```

The file can be either `.lancher.yaml` or `.lancher.yml`, `lancher.yaml`, or `lancher.yml`. If there are multiple configuration files, an error will be displayed, prompting you to keep only the trusted file. You can view the status of your templates at any time using the `lancher info` command.

## Fields

Each field serves a specific purpose in template configuration. Missing fields are simply ignored, allowing minimal configurations.

### name

**Type:** `string`
**Optional**

Template display name shown during creation.

```yaml
name: Next.js TypeScript Starter
```

### description

**Type:** `string`
**Optional**

Brief template description.

```yaml
description: Production-ready Next.js with TypeScript and Tailwind
```

### author

**Type:** `string`
**Optional**

Template author or maintainer.

```yaml
author: Development Team <dev@example.com>
```

### version

**Type:** `string`
**Optional**

Template version. Use semantic versioning.

```yaml
version: 2.1.0
```

### hooks

**Type:** `array of strings`
**Optional**

Shell commands executed in project directory after file copy. Requires user confirmation.

```yaml
hooks:
  - npm install
  - git init
  - chmod +x scripts/setup.sh
```

**Execution:**

- Commands run in order
- Executed from project directory
- User must confirm before execution
- Output displayed for each command
- Stops on first failure

### ignore

**Type:** `array of strings`
**Optional**

File patterns excluded during copy. Supports glob syntax.

```yaml
ignore:
  - node_modules
  - .git
  - "*.log"
  - .env.local
```

## Examples

### Node.js Project

```yaml
name: Node.js API
description: Express.js REST API with TypeScript
author: API Team
version: 1.0.0

hooks:
  - npm install
  - npm run build
  - git init

ignore:
  - node_modules
  - dist
  - "*.log"
  - .env.local
```

### Python Project

```yaml
name: Python CLI
description: Python CLI application template
version: 1.0.0

hooks:
  - python -m venv venv
  - source venv/bin/activate && pip install -r requirements.txt

ignore:
  - venv
  - __pycache__
  - "*.pyc"
  - .env
```

### Monorepo

```yaml
name: Full-Stack Monorepo
description: React + Node.js monorepo with workspaces
version: 2.0.0

hooks:
  - npm install
  - npm run bootstrap
  - npx husky install

ignore:
  - node_modules
  - "**/dist"
  - "**/build"
  - .git
```

## Pattern Syntax

- **Exact names**: `node_modules`, `.git`
- **Wildcards**: `*.log`, `*.tmp`
- **Directories**: `dist/`, `build/`
- **Glob patterns**: `**/*.test.js`
- **Quote special chars**: `"*.log"`
