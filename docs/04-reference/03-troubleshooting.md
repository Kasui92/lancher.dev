# Troubleshooting

Common errors and their solutions. Most issues stem from missing templates, git authentication problems, file permissions, or failed hook commands. This guide provides diagnostic steps and fixes for each scenario.

Diagnostics for template resolution errors, git clone failures (auth/network), permission issues (`chmod +x`), and hook execution failures.

## Template Not Found

This error occurs when the specified template name doesn't exist in storage.

**Error:**

```
Error: template 'myapp' not found
```

**Solution:**

```bash
lancher template list
```

Verify template name and add if missing.

---

## Git Clone Failed

Git repository cloning can fail due to authentication, network issues, or invalid URLs.

**Error:**

```
Error: failed to clone repository
```

**Solutions:**

- Check network connectivity
- Verify git credentials (SSH keys, tokens)
- Test repository URL manually: `git clone <url>`
- Try HTTPS instead of SSH (or vice versa)

---

## Hook Execution Failed

Hooks fail when commands return non-zero exit codes. This usually indicates missing dependencies or configuration issues.

**Error:**

```
Error: hook 'npm install' failed with exit code 1
```

**Solutions:**

- Verify required tools are installed (`npm`, `git`, etc.)
- Test command manually in project directory
- Check command syntax in `.lancher.yaml`
- Review command output for specific errors

---

## Permission Denied

**Error:**

```
Error: permission denied writing to storage directory
```

**Solutions:**

- Check directory permissions: `ls -la ~/.local/share/lancher`
- Ensure storage directory exists
- Check disk space: `df -h`
- Run with appropriate permissions (avoid `sudo` when possible)

---

## Destination Already Exists

**Error:**

```
Error: destination directory already exists
```

**Solution:**
Remove or rename existing directory, or choose different destination.

---

## Invalid YAML

**Error:**

```
Error: invalid .lancher.yaml syntax
```

**Solutions:**

- Validate YAML syntax: https://www.yamllint.com
- Check indentation (use spaces, not tabs)
- Quote strings with special characters
- Verify array/object structure

---

## Build Failed

**Error:**

```
Error: failed to build lancher
```

**Solutions:**

- Verify Go version: `go version` (requires 1.22+)
- Update Go if needed
- Check GOPATH and GOBIN
- Try: `go clean -cache && go build`

---

## Template Update Failed

**Error:**

```
Error: cannot update non-git template
```

**Solution:**
Use `-d` flag to specify new source:

```bash
lancher template update <name> -d <new-path>
```

Or remove and re-add template.

---

## Common Issues

### Templates Not Listed

```bash
lancher info  # Verify storage location
ls -la ~/.local/share/lancher/templates
```

### Hooks Don't Execute

- Check user confirmation prompt
- Verify hook syntax in `.lancher.yaml`
- Test hooks manually in project directory

### Git Updates Don't Work

- Verify template was added from git URL
- Check git repository access
- Try: `cd <template-dir> && git pull`

## Getting Help

If you can't find a solution to your problem, the best way to get help is through the lancher GitHub repository. Start by searching existing [issues](https://github.com/Kasui92/lancher/issues) and [discussions](https://github.com/Kasui92/lancher/discussions) to see if someone has encountered the same problem. Many common questions have already been answered in these threads.

If you don't find what you're looking for, feel free to [open a new issue](https://github.com/Kasui92/lancher/issues/new). When creating an issue, include:

- Lancher version (`lancher version`)
- Operating system and version
- Complete error messages
- Steps to reproduce the problem
- Template configuration (`.lancher.yaml`) if relevant

The community and maintainers will help diagnose and resolve your issue.
