# Storage

Lancher stores templates in platform-specific directories following OS conventions. Linux uses XDG Base Directory specification, falling back to `~/.local/share` if `$XDG_DATA_HOME` is unset. macOS uses the standard Application Support directory. Templates are stored as regular directories, with git templates maintaining their repository metadata.

Template storage paths: `$XDG_DATA_HOME/lancher/templates` (Linux), `~/.local/share/lancher/templates` (fallback), `~/Library/Application Support/lancher/templates` (macOS).

## Locations

Storage paths are determined automatically based on your operating system.

### Linux

```
$XDG_DATA_HOME/lancher/templates
```

Fallback:

```
~/.local/share/lancher/templates
```

### macOS

```
~/Library/Application Support/lancher/templates
```

These paths ensure templates are stored in user-writable locations without requiring elevated privileges.

## Structure

```
templates/
├── template-name-1/
│   ├── .lancher.yaml
│   └── [template files]
├── template-name-2/
│   ├── .lancher.yaml
│   ├── .git/
│   └── [template files]
└── template-name-3/
    └── [template files]
```

## Git Templates

Git templates include `.git/` directory and track remote URL for updates.

```
template-name/
├── .git/              # Git metadata
├── .lancher.yaml      # Template config
└── [source files]
```

## Viewing Storage

```bash
lancher info
```

Output:

```
Storage Directory: /home/user/.local/share/lancher/templates

Templates:

  nextjs-starter
    /home/user/.local/share/lancher/templates/nextjs-starter

  react-app
    /home/user/.local/share/lancher/templates/react-app
    Git: https://github.com/user/react-template
```

## Manual Management

Templates can be manually edited in storage directory, but recommended to use `lancher template update` for consistency.

## Cleanup

Remove unused templates:

```bash
lancher template remove <name>
```

Remove all templates:

```bash
rm -rf ~/.local/share/lancher/templates/*  # Linux
rm -rf ~/Library/Application\ Support/lancher/templates/*  # macOS
```
