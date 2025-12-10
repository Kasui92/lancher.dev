# Hooks

Hooks are shell commands that automate post-creation tasks. They execute sequentially in the newly created project directory, after all files have been copied. Each command requires explicit user confirmation before running, displays its output in real-time, and halts the entire sequence if it returns a non-zero exit code.

## Configuration

Define hooks as an array of shell command strings in `.lancher.yaml`.

```yaml
hooks:
  - npm install
  - git init
  - ./scripts/setup.sh
```

Keep your hooks simple and focused on single tasks. For complex operations, extract the logic into separate shell scripts that hooks can call. Always use relative paths in your commands to ensure portability across different environments, and make sure to handle errors gracefully so failures provide clear feedback.

## Execution Behavior

Hooks execute after all template files have been copied to the destination directory. They run sequentially in the order defined, with each command executing in the newly created project directory. Before running each command, Lancher requires explicit user confirmation and displays the full command text. The output of each command appears in real-time as it executes. If any command returns a non-zero exit code, the entire hook sequence stops immediately.

This behavior ensures you maintain control over potentially destructive operations like dependency installation or git initialization. Since files are already copied before hooks run, failed commands won't leave your project in a partial state. You can bypass confirmation prompts using the `--hooks` flag, but exercise caution with this option—only use it with templates you trust and have reviewed.

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

Hooks execute shell commands in your system, so never run untrusted hooks without reviewing them first. Lancher requires explicit user confirmation before executing each command and displays the full command text before running it.

Lancher supports a `--hooks` flag that automatically confirms all prompts, including hook execution. **Never use `--hooks` with templates from untrusted sources** without first inspecting the `.lancher.yaml` file to verify what commands will run. Always review template configurations before using flags that bypass confirmation prompts.

Since commands run directly in your system's shell environment, take standard shell security precautions and consider adding user confirmation prompts for potentially destructive operations. Note that hooks cannot execute other `lancher` commands to prevent infinite loops and unexpected behavior—design your hooks to perform direct operations rather than invoking Lancher again.
