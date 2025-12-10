# Creating Projects

Lancher generates new projects by copying template files to a destination directory. You can specify templates and destinations via command-line flags or use interactive prompts to select from available options. The creation process handles validation, metadata display, file copying with pattern exclusions, and optional hook execution.

## Basic Usage

The simplest way to create a project is using the `-t` (template) and `-d` (destination) flags.

```bash
lancher create -t <template> -d <destination>
```

Example:

```bash
lancher create -t nextjs -d ./my-app
```

This command copies the `nextjs` template to the `./my-app` directory. If the destination exists, lancher will abort to prevent accidental overwrites.

## Interactive Mode

```bash
lancher create
```

Prompts for:

1. Template selection (from available templates)
2. Destination directory
3. Asks if you want to initialize the local git repository
4. Hook execution confirmation (if configured)

Interactive mode is useful when you want to browse available templates or don't remember exact template names. The prompt provides a searchable list of all stored templates.

## Process Flow

1. **Validation**: Checks template exists and destination is available
2. **Display Metadata**: Shows template name, description, version (from `.lancher.yaml`)
3. **Copy Files**: Copies template to destination (respecting ignore patterns)
4. **Execute Hooks**: Runs post-creation commands (if confirmed)

Each step must complete successfully before proceeding. If a hook fails (non-zero exit code), the process stops but already-copied files remain.

## Examples

### Web Application

```bash
lancher create -t nextjs-starter -d ./client
lancher create -t express-api -d ./server
```

### Monorepo

```bash
lancher create -t monorepo -d ./workspace
```

### Multiple Projects

```bash
for service in auth users products; do
  lancher create -t microservice -d ./services/$service
done
```

## Flags

- `-t, --template <name>` - Template name
- `-d, --destination <path>` - Destination directory
- `--git` - Init git repository
- `--no-git` - Skip git init
- `--hook` - Execute all hooks from `.lancher.yaml`
- `--no-hooks` - Skip hooks execution
