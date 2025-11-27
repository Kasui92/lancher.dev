# Installation

Install lancher via shell script or build manually from source. Requires Go 1.22+, git, and curl. Binary installs to `/usr/local/bin`.

## Prerequisites

- **Go 1.22+** - Build lancher binary
- **git** - Clone repos and manage git templates
- **curl** - Download installer

## Quick Installation

```bash
curl -sS https://lancher.dev/install.sh | sh
```

The installer will:

1. Verify prerequisites (Go 1.22+, git, curl)
2. Clone the repository
3. Build the binary
4. Install to `/usr/local/bin`

## Manual Installation

```bash
git clone https://github.com/Kasui92/lancher.git
cd lancher
make install
```

### Build from Source

```bash
# Clone and build
git clone https://github.com/Kasui92/lancher.git
cd lancher
go build -o lancher ./cmd/lancher

# Install manually
sudo mv lancher /usr/local/bin/
```

## Uninstall

```bash
curl -sS https://lancher.dev/uninstall.sh | sh
```

The uninstaller prompts to optionally remove stored templates.

## Verify Installation

```bash
lancher version
lancher info
```
