# Hooks

Hooks are shell commands that automate post-creation tasks. They execute sequentially in the newly created project directory, after all files have been copied. Each command requires explicit user confirmation before running, displays its output in real-time, and halts the entire sequence if it returns a non-zero exit code.

Post-creation shell commands for project automation.

## Configuration

Define hooks as an array of shell command strings in `.lancher.yaml`.

```yaml
hooks:
  - npm install
  - git init
  - ./scripts/setup.sh
```

## Execution Behavior

1. Commands execute **after** file copy
2. Run **in order** from project directory
3. Require **user confirmation**
4. Display output for each command
5. **Stop on failure** (non-zero exit code)

This behavior ensures you maintain control over potentially destructive operations like dependency installation or git initialization. Failed commands won't leave partial state since files are already copied.

## Common Patterns

### Dependency Installation

```yaml
hooks:
  - npm install
```

```yaml
hooks:
  - pnpm install
```

```yaml
hooks:
  - pip install -r requirements.txt
```

### Git Initialization

```yaml
hooks:
  - git init
  - git add .
  - git commit -m "Initial commit"
```

### Script Execution

```yaml
hooks:
  - chmod +x scripts/*.sh
  - ./scripts/setup.sh
```

### Environment Setup

```yaml
hooks:
  - cp .env.example .env
  - echo "Configure .env file"
```

### Database Setup

```yaml
hooks:
  - npm run db:migrate
  - npm run db:seed
```

### Multi-Step Setup

```yaml
hooks:
  - npm install
  - npm run build
  - git init
  - npx husky install
  - chmod +x scripts/*.sh
```

## Conditional Execution

### Check Command Availability

```yaml
hooks:
  - command -v pnpm && pnpm install || npm install
```

### Platform-Specific

```yaml
hooks:
  - |
    if [[ "$OSTYPE" == "darwin"* ]]; then
      brew install something
    fi
```

### File Existence

```yaml
hooks:
  - test -f package.json && npm install || echo "No package.json"
```

## Security

- **Never run untrusted hooks** without review
- User confirmation required
- Commands shown before execution
- Review `.lancher.yaml` before using templates

## Best Practices

- Keep hooks simple and focused
- Use scripts for complex operations
- Document hook requirements
- Test across platforms
- Handle errors gracefully
- Use relative paths
