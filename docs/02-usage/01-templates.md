# Managing Templates

Lancher allows you to manage project templates from multiple sources. You can add templates from your local filesystem, clone them from git repositories using HTTPS or SSH protocols, and organize them in platform-specific storage directories. Once added, templates can be listed, updated with latest changes, or removed when no longer needed.

## Add Templates

Templates can be sourced from local directories or remote git repositories. Local templates are copied to lancher's storage, while git templates are cloned and can be kept up-to-date.

### From Local Directory

```bash
lancher template add <name> <path>
```

Example:

```bash
lancher template add nextjs ~/projects/nextjs-base
```

This command copies the entire directory structure from the specified path into lancher's template storage, preserving file permissions and directory hierarchy.

### From Git Repository

```bash
lancher template add <name> <git-url>
```

Examples:

```bash
# HTTPS
lancher template add react https://github.com/user/react-template

# SSH
lancher template add vue git@github.com:user/vue-template.git
```

Git-based templates maintain their repository history, allowing you to pull updates later. Authentication is handled by your git configuration (credentials for HTTPS, SSH keys for SSH).

### Interactive Mode

```bash
lancher template add
```

## List Templates

```bash
lancher template list
# or
lancher template ls
```

Output shows template name, path, and git URL (if applicable).

The list command provides a quick overview of all available templates. Git templates display their remote URL, while local templates show only their storage path.

## Update Templates

Keep your templates synchronized with their sources. Git templates can fetch latest changes, while any template can be completely replaced.

### Git Templates

```bash
lancher template update <name>
```

Performs `git pull` to fetch latest changes.

This operation only works for templates added via git. It pulls from the remote repository and merges changes into the local copy.

### Overwrite with New Files

```bash
lancher template update <name> -d <new-path>
```

Replaces entire template with content from `<new-path>`.

## Remove Templates

Delete templates from storage when they're no longer needed. This action permanently removes the template directory.

```bash
lancher template remove <name>
# or
lancher template rm <name>
```

Interactive mode (select from list):

```bash
lancher template remove
```

**Warning:** This action cannot be undone.

## Storage Information

```bash
lancher info
```

Shows:

- Storage directory path
- List of all templates with locations
- Git repository URLs
