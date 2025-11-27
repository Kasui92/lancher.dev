# Commands

Lancher provides a minimal CLI with two main commands: `create` for generating projects from templates, and `template` with subcommands for managing your template library. Most commands support both explicit flags and interactive prompts, allowing flexibility between scripting and manual use.

Complete command reference.

## create

Create a new project from a template. Accepts template name and destination path as flags or prompts interactively.

```bash
lancher create -t <template> -d <destination>
lancher create --template <name> --destination <path>
```

**Flags:**

- `-t, --template` - Template name
- `-d, --destination` - Destination directory

**Interactive:**

```bash
lancher create
```

**Examples:**

```bash
lancher create -t nextjs -d ./my-app
lancher create --template react --destination ~/projects/new-app
```

The command validates the template exists before copying. If the destination directory exists, the operation aborts to prevent overwrites.

---

## template add

Add template from local path or git repository. Local templates are copied, git templates are cloned.

```bash
lancher template add <name> <source>
```

**Arguments:**

- `<name>` - Template name
- `<source>` - Local path, Zip file or git URL

**Interactive:**

```bash
lancher template add
```

**Examples:**

```bash
# Local
lancher template add nextjs ~/projects/nextjs-app

# Git HTTPS
lancher template add react https://github.com/user/react-template

# Git SSH
lancher template add vue git@github.com:user/vue-template.git
```

---

## template list

List all templates.

```bash
lancher template list
lancher template ls
```

**Output:**

- Template name
- Storage path
- Git URL (if applicable)

---

## template update

Update template.

```bash
lancher template update <name>
lancher template update <name> -d <path>
```

**Flags:**

- `-d, --directory` - New source path (overwrites template)

**Examples:**

```bash
# Git pull
lancher template update react

# Overwrite
lancher template update nextjs -d ~/projects/updated-nextjs
```

---

## template remove

Remove template.

```bash
lancher template remove <name>
lancher template rm <name>
```

**Interactive:**

```bash
lancher template remove
```

**Examples:**

```bash
lancher template remove old-template
lancher template rm unused
```

---

## info

Display storage information.

```bash
lancher info
```

**Output:**

- Storage directory
- Template list with paths
- Git URLs

---

## version

Display version.

```bash
lancher version
lancher -v
lancher --version
```

---

## help

Display help.

```bash
lancher help
lancher --help
lancher -h
```
