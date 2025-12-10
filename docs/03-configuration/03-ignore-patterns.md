# Ignore Patterns

Ignore patterns define which files and directories should be excluded during template copy operations. Patterns use glob syntax and support exact filename matches, wildcards for flexible matching, and directory paths. All patterns are case-sensitive and evaluated against each file's relative path within the template.

## Configuration

Define patterns as an array of strings. Quote patterns containing special characters.

```yaml
ignore:
  - node_modules
  - .git
  - "*.log"
```

Patterns prevent unnecessary files from being copied to new projects. This keeps templates clean and avoids copying build artifacts, dependencies, or version control history.

## Pattern Types

### Exact Match

```yaml
ignore:
  - node_modules
  - package-lock.json
  - .DS_Store
```

### Wildcards

```yaml
ignore:
  - "*.log"
  - "*.tmp"
  - "test-*"
```

### Directories

```yaml
ignore:
  - dist/
  - build/
  - .cache/
```

### Glob Patterns

```yaml
ignore:
  - "**/*.test.js"
  - "**/node_modules"
```

## Common Patterns

### Node.js

```yaml
ignore:
  - node_modules
  - package-lock.json
  - pnpm-lock.yaml
  - yarn.lock
  - .next
  - .nuxt
  - dist
  - build
  - "*.log"
```

### Python

```yaml
ignore:
  - __pycache__
  - "*.pyc"
  - "*.pyo"
  - venv
  - .venv
  - .pytest_cache
  - dist
  - "*.egg-info"
```

### Go

```yaml
ignore:
  - vendor
  - "*.exe"
  - "*.test"
  - .bin
  - coverage.out
```

### Git & VCS

```yaml
ignore:
  - .git
  - .svn
  - .hg
```

### IDE & Editors

```yaml
ignore:
  - .vscode
  - .idea
  - "*.swp"
  - "*.swo"
  - .DS_Store
  - Thumbs.db
```

### Secrets & Environment

```yaml
ignore:
  - .env
  - .env.local
  - .env.*.local
  - "*.key"
  - "*.pem"
  - secrets.yaml
```

### Build Artifacts

```yaml
ignore:
  - dist
  - build
  - out
  - .next
  - .nuxt
  - target
  - "*.o"
  - "*.so"
```

## Best Practices

- **Always exclude** `.git`, `node_modules`, build directories
- **Never include** secrets, keys, or credentials
- **Remove** platform-specific files (`.DS_Store`, `Thumbs.db`)
- **Clean** IDE configurations (`.vscode`, `.idea`)
- **Strip** lock files if templates should support multiple package managers
- **Quote** patterns with special characters

## Notes

- Patterns use glob syntax
- Matching is case-sensitive
- Patterns match from template root
- Empty ignore array includes all files
